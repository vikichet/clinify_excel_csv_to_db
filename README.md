# Clinify Utils for Payer Roster CSV converter and CareGaps Upload

## FORMAT PAYER ROSTER

Use `format_payer_roster.js` file for formatting xlsx file to csv for payer roster

Note: all the date fields should be converted to text from either general or date type of xlsx before formatting it to csv to avoid invalid date format. Use Excel `Data > Split Text To Column` feature for it. Make sure to remove all delimiter option and at the end select text type when using this excel feature.

## Care Gaps Upload

1. Make sure to set the org and tenant id before executing the file

   ```javascript
   /**
    * SIHF: 6
    * CCHC: 2
    * NNH: 8
    */
   const ORG_ID = 2;
   const TENANT_ID = 2;
   const START_IDX = 0;
   ```

   Be extra cautious here!

2. Also update the types baseed on the org
   ```typescript
   // here the HedisTypeCCHC is set for cchc org
   // HedisTypeSIHF | HedisTypeCCHC | HedisTypeNNH
   const hedisJson = sheet.utils.sheet_to_json<HedisTypeCCHC>(ws);
   // switch the type respectively for the organization
   ```
3. Finally make sure to run this file only after the respective payer roster file of this org is uploaded and processed (step before matching engine)

Care Gap upload file generates the following file:

1. error.json

   It will keep the errors that can be used to debug the sql errors or any data related error related to the caregaps file

2. skipped.txt

   This will include the record of caregap data that was skipped during the process. Possible reasons can be: PatientID does not exists | Already Exist but no changes | or other non-critical reasons

Note:

```javascript
const START_IDX = 0;
```

Use the start start_idx to continue from the error out idx that will be printed in the console or will be present in the error.json/ skipped.txt file. This will help you to continue the process and will not require to re-run the entire process from the beginning.

    ALSO MAKE SURE TO RESET THE VALUE BACK TO >> 0 << FOR EVERY NEW FILE!!!
