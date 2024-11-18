import { db } from './kysely';
import { sql } from 'kysely'
import { CareGapMapType, PayerRosterFieldMappingType } from './types';
import sheet from 'xlsx';
import { appendFileSync, writeFileSync } from 'fs';

/**
 * SIHF: 6
 * CCHC: 2
 * NNH: 8
 */
const ORG_ID = 2
const TENANT_ID = 2
const START_IDX = 0
function checkNotNullOrUndefined(val: unknown): boolean {
    return val !== null && val !== undefined;
}

type HedisTypeSIHF = {
    'Measure Name': string,
    'Medicaid Id': number;
    'First Name': string;
    'Last Name': string;
    'Compliance': boolean
}

type HedisTypeCCHC = {
    'Measure Name': string,
    'Medicaid ID': number;
    'First Name': string;
    'Last Name': string;
    'Compliance': boolean
}

type HedisTypeNNH = {
    'Measure Name': string,
    'Medicaid Id': number;
    'First Name': string;
    'Last Name': string;
    'Compliance': boolean
}

type PatientCareGapData = {
    org_id: number;
    tenant_id: number;
    clinify_id: number;
    barriers: boolean | null;
    caregap_id: number | null;
    sub_caregap_id: number | null;
    compliance: boolean;
    reverse_nature: boolean;
    status: string | null;
}

(async () => {

    const wb = sheet.readFile("../Christian Community_HEDIS Data_August.xlsx");
    const ws = wb.Sheets.Sheet1;
    const hedisJson = sheet.utils.sheet_to_json<HedisTypeCCHC>(ws)
    // console.log(hedisJson.slice(0,3))
    // return
    async function getPayerRosterFieldMapping(org_id: number, tenant_id: number) {
        return await db
            .selectFrom('patientDB.payer_roster_mapping')
            .where('organization_id', '=', org_id)
            .where('tenant_id', '=', tenant_id)
            .select('id')
            .select('mapping')
            .executeTakeFirst()
    }

    async function getCareGapData() {
        return await db
            .selectFrom('patientDB.caregap as x')
            .leftJoin('patientDB.caregap_children as cc', (join) => join.onRef('cc.parent_id', '=', 'x.id'))
            .select('x.id as parentId')
            .select('cc.id as childrenId')
            .select('x.title as parentTitle')
            .select('cc.title as childrenTitle')
            .execute()
    }

    async function addNewCarGapRecord(title: string) {
        return await db
            .insertInto('patientDB.caregap')
            .columns(['title'])
            .values({ title })
            .onConflict((oc) => oc.column('title').doUpdateSet({ title }))
            .returning('id')
            .executeTakeFirst()
    }

    async function addToPatientCareGapData({
        barriers,
        caregap_id,
        clinify_id,
        compliance,
        org_id,
        reverse_nature,
        status,
        sub_caregap_id,
        tenant_id
    }: PatientCareGapData) {
        if (sub_caregap_id) {
            return await db
                .insertInto('patientDB.caregap_patient_data')
                .columns([
                    "org_id",
                    "tenant_id",
                    "clinify_id",
                    "caregap_id",
                    "sub_caregap_id",
                    "compliance",
                    "reverse_nature",
                    "barriers",
                    "status"
                ]).values({
                    org_id,
                    tenant_id,
                    clinify_id,
                    barriers,
                    caregap_id,
                    compliance,
                    reverse_nature,
                    status,
                    sub_caregap_id
                }).onConflict(oc => oc
                    .columns(['clinify_id', 'caregap_id', 'sub_caregap_id'])
                    .doUpdateSet({
                        org_id,
                        tenant_id,
                        barriers,
                        caregap_id,
                        clinify_id,
                        compliance,
                        reverse_nature,
                        status,
                        sub_caregap_id
                    })

                ).returning('clinify_id')
                .executeTakeFirst();
        } else {
            console.log("sub caregap null...")
            const res = await sql`
                INSERT INTO 
                    "patientDB".caregap_patient_data 
                (   
                    org_id, 
                    tenant_id, 
                    clinify_id,
                    caregap_id, 
                    sub_caregap_id, 
                    compliance, 
                    reverse_nature, 
                    barriers, 
                    status
                )
                VALUES (
                    ${org_id}, 
                    ${tenant_id}, 
                    ${clinify_id}, 
                    ${caregap_id}, 
                    ${sub_caregap_id}, 
                    ${compliance}, 
                    ${reverse_nature}, 
                    ${barriers}, 
                    ${status}
                )
                ON CONFLICT (caregap_id, clinify_id) where sub_caregap_id is null
                DO UPDATE SET compliance = ${compliance}, reverse_nature = ${reverse_nature}
                RETURNING clinify_id`.execute(db)
        }


    }

    async function getClinifyId(medicaidId: number) {
        return await db
            .selectFrom('patientDB.payer_roster')
            .select('clinifyid')
            .where('medicaid_id', '=', medicaidId)
            .where('organizationid', '=', ORG_ID)
            .where('tenantid', '=', TENANT_ID)
            .executeTakeFirst()
    }

    const mapping = await getPayerRosterFieldMapping(ORG_ID, TENANT_ID)
    const caregap = await getCareGapData();

    const careGapMappingData = mapping?.mapping as PayerRosterFieldMappingType
    const careGapMapping = careGapMappingData.careGap
    const reverseCareGapMap = new Map<string, keyof CareGapMapType>();
    const reverseCareGapObj: Record<string, keyof CareGapMapType> = {}


    Object.keys(careGapMapping).forEach((key) => {
        const value: string | string[] | null = careGapMapping[key as keyof CareGapMapType];
        if (value) {
            if (Array.isArray(value)) {
                value.forEach((v) => {
                    reverseCareGapMap.set(v, key as keyof CareGapMapType);
                    reverseCareGapObj[v] = key as keyof CareGapMapType
                });
            } else {
                reverseCareGapMap.set(value, key as keyof CareGapMapType);
                reverseCareGapObj[value] = key as keyof CareGapMapType
            }
        }
    });

    const getIdsFromCareGapTitle = (key: string): { pId: number; cId: number | null } | null => {
        const result = caregap.find(({ childrenTitle, parentTitle }) => {
            if (childrenTitle === reverseCareGapMap.get(key)) return true;
            else if (parentTitle === reverseCareGapMap.get(key)) return true;
            return false;
        });

        if (result) return { cId: result.childrenId ?? null, pId: result.parentId };

        return null;
    };

    const caregapTitleIdsData = hedisJson.map(hedis => getIdsFromCareGapTitle(hedis['Measure Name'] ?? ''))

    console.log({ caregapTitleIdsDataLength: caregapTitleIdsData.length, hedisJsonLen: hedisJson.length })

    for (let idx = START_IDX; idx < caregapTitleIdsData.length; idx++) {
        try {
            let careGapIds = caregapTitleIdsData[idx];
            const hedis = hedisJson[idx]
            if (!checkNotNullOrUndefined(careGapIds)) {
                console.log(hedis['Measure Name'])
                if (
                    !checkNotNullOrUndefined(hedis['Measure Name']) &&
                    hedis['Measure Name'] &&
                    hedis['Measure Name'].trim().length === 0
                )
                    return;

                console.log('updating caregap store..');
                const res = await addNewCarGapRecord(hedis['Measure Name']);

                careGapIds = { pId: res!.id, cId: null };

            }

            const isCompliance = hedis['Compliance'] ?? false;

            const getReverseNature = (key: string): boolean =>
                !!careGapMappingData.careGapPatient.reverse_nature?.find((val) => val === reverseCareGapMap.get(key));

            const isReverse = getReverseNature(hedis['Measure Name'] ?? '');

            const clinifyIdRes = await getClinifyId(hedis['Medicaid ID']);

            if (!checkNotNullOrUndefined(clinifyIdRes)) {
                console.log('NO CLINIFY ID FOUND! STOPPING PROCESS. DATA:' + JSON.stringify(hedis))
                appendFileSync('../skipped.txt', JSON.stringify({ hedis, careGapIds, idx }) + '\n')
                continue;
            }

            console.log('adding patient caregap data..')
            await addToPatientCareGapData({
                barriers: null,
                caregap_id: careGapIds?.pId ?? null,
                sub_caregap_id: careGapIds?.cId ?? null,
                clinify_id: clinifyIdRes?.clinifyid!,
                compliance: isCompliance,
                org_id: ORG_ID,
                tenant_id: TENANT_ID,
                reverse_nature: isReverse,
                status: null
            })

            console.table({
                currentIdx: idx,
                excelIdx: idx + 1,
                careGapIds,
                isCompliance,
                isReverse,
                clinifyIdRes,
                remaining: hedisJson.length - (idx + 1)
            })

        } catch (err) {
            const errMsg = (err as Error).message
            console.log(err)
            console.log('ERROR EXITING PROCESS....')
            writeFileSync('../error.json', JSON.stringify({ atIdx: idx, error: errMsg }))
            break;
        }
    }
})();