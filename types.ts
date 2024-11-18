import type { ColumnType } from 'kysely';
export type Generated<T> =
  T extends ColumnType<infer S, infer I, infer U> ? ColumnType<S, I | undefined, U> : ColumnType<T, T | undefined, T>;
export type Int8 = ColumnType<number, bigint | number | string, bigint | number | string>;
export type Json = ColumnType<JsonValue, string, string>;
export type JsonArray = JsonValue[];
export type JsonObject = { [K in string]?: JsonValue };
export type JsonPrimitive = boolean | number | string | null;
export type JsonValue = JsonArray | JsonObject | JsonPrimitive;
export type Numeric = ColumnType<string, number | string, number | string>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;
export interface ClinifyDBAppointmentEncounter {
  appointment_id: Generated<Int8>;
  encounter_time: Timestamp | null;
  encounter_type: string | null;
  id: Generated<Int8>;
}
export interface ClinifyDBAppointmentmedication {
  appointmentid: Int8 | null;
  appointmentmedicationid: Generated<number>;
  enddate: Timestamp | null;
  medicationid: Int8 | null;
  startdate: Timestamp | null;
}
export interface ClinifyDBAppointments {
  appointmentdatetime: Timestamp | null;
  appointmentid: Generated<Int8>;
  encounter_type: string | null;
  insuranceid: Int8 | null;
  organizationid: Int8 | null;
  patientid: Int8 | null;
  physicianid: Int8 | null;
  screenningid: Int8 | null;
  tenantid: Int8 | null;
  vaccineid: Int8 | null;
}
export interface ClinifyDBAppointmentsclinicalcondition {
  appointmentclinicalconditionid: Generated<number>;
  appointmentid: Int8 | null;
  clinicalconditionid: Int8 | null;
}
export interface ClinifyDBCharts {
  chartid: string;
  event_names: Generated<Json | null>;
  id: Generated<number>;
  name: string;
}
export interface ClinifyDBChronicconditions {
  chronicconditionid: Generated<Int8>;
  chronicconditionidentifier: string | null;
  chronicconditionname: string | null;
}
export interface ClinifyDBCollabCarecoordinators {
  auth0_id: string;
  collab_id: Int8;
  created_on: Timestamp | null;
  id: Generated<Int8>;
  last_assigned_on: Timestamp | null;
}
export interface ClinifyDBCollabConfig {
  collab_id: Int8 | null;
  fallback_cc_org: Int8 | null;
  id: Generated<Int8>;
  max_capacity: Int8;
  max_high_count: Int8;
  max_low_count: Int8;
  max_medium_count: Int8;
  non_partner_cc_org: Int8 | null;
}
export interface ClinifyDBCollaborative {
  camunda_process_id: string;
  id: Generated<Int8>;
  name: string;
  organization_id: Int8;
  tenant_id: Int8;
}
export interface ClinifyDBCollaborativeFormResponses {
  collab_id: Int8;
  created_on: Timestamp;
  id: Generated<Int8>;
  last_modified_date: Timestamp;
  response: Json | null;
}
export interface ClinifyDBCollaborativeForms {
  collab_id: Int8;
  created_at: Timestamp | null;
  form_id: Generated<Int8>;
  is_default: Generated<boolean>;
  template_id: string;
}
export interface ClinifyDBCollaborativePatients {
  address: string | null;
  camunda_task_id: string | null;
  clinifyid: Int8 | null;
  collab_id: Int8;
  comment: string | null;
  created_at: Timestamp | null;
  dob: Timestamp;
  first_name: string;
  gender: string;
  guardian_address: string | null;
  guardian_name: string;
  guardian_phone: string;
  id: Generated<Int8>;
  is_accepted: Generated<boolean>;
  is_processed: Generated<boolean>;
  last_name: string;
  medicaid_id: Int8 | null;
  medical_history: string | null;
  phone: string;
  referral_org: string;
  referral_org_phone: string;
  referral_reason: string;
  status: string | null;
  submission_id: string;
  zipcode: string;
}
export interface ClinifyDBCollaborativeUsers {
  collab_id: Int8;
  id: Generated<number>;
  user_id: string;
}
export interface ClinifyDBCollabOrgMap {
  cc_org_id: Int8 | null;
  collab_id: Int8;
  id: Generated<Int8>;
  org_id: Int8;
}
export interface ClinifyDBContacts {
  contactaddress: string | null;
  contactemail: string | null;
  contactid: Generated<Int8>;
  contactphone: string | null;
  contactphone2: string | null;
  organizationid: Int8 | null;
  tenantid: Int8 | null;
}
export interface ClinifyDBDatabasechangelog {
  author: string;
  comments: string | null;
  contexts: string | null;
  dateexecuted: Timestamp;
  deployment_id: string | null;
  description: string | null;
  exectype: string;
  filename: string;
  id: string;
  labels: string | null;
  liquibase: string | null;
  md5sum: string | null;
  orderexecuted: number;
  tag: string | null;
}
export interface ClinifyDBDatabasechangeloglock {
  id: number;
  locked: boolean;
  lockedby: string | null;
  lockgranted: Timestamp | null;
}
export interface ClinifyDBDimAddress {
  addressid: Generated<Int8>;
  cityid: Int8 | null;
  mailingaddress: string | null;
  postalcode: string | null;
  street: string | null;
  zipcode: string | null;
}
export interface ClinifyDBDimCity {
  city: string | null;
  cityid: Generated<Int8>;
  countryid: Int8 | null;
}
export interface ClinifyDBDimClinicalconditions {
  clinicalconditiondate: Timestamp | null;
  clinicalconditionid: Int8;
  clinicalconditionname: string | null;
  conditionstatusid: Int8 | null;
  cs_cpt: string | null;
  cs_cvx: string | null;
  cs_hcpcs: string | null;
  cs_icd10: string | null;
  cs_loinc: string | null;
  cs_rxnorm: string | null;
  cs_snomed: string | null;
  hl7identifier: string | null;
  tenantid: Int8 | null;
}
export interface ClinifyDBDimContact {
  contacttypeid: Int8;
  id: Int8 | null;
  value: string | null;
}
export interface ClinifyDBDimContacttype {
  contacttype: string | null;
  contacttypeid: Int8;
}
export interface ClinifyDBDimCountry {
  country: string | null;
  countryid: Int8;
}
export interface ClinifyDBDimEncounter {
  encountertype: string | null;
  encountertypeid: Generated<number>;
}
export interface ClinifyDBDimEthnicity {
  ethnicity: string | null;
  ethnicityid: Generated<Numeric>;
}
export interface ClinifyDBDimMedication {
  cs_cpt: string | null;
  cs_hcpcs: string | null;
  cs_icd10: string | null;
  cs_loinc: string | null;
  cs_rxnorm: string | null;
  cs_snomed: string | null;
  drug_startdate: Timestamp | null;
  drug_stopdate: Timestamp | null;
  drugcode: string | null;
  drugname: string | null;
  drugstatus: string | null;
  drugtype: string | null;
  medicationid: Generated<number>;
  s_cvx: string | null;
  tenantid: Int8 | null;
}
export interface ClinifyDBDimProcedure {
  cs_cdt: string | null;
  cs_cpt: string | null;
  cs_icd10: string | null;
  cs_loinc: string | null;
  cs_snomed: string | null;
  id: Generated<Int8>;
  organizationid: Int8 | null;
  patientid: Int8 | null;
  procedure_date: Timestamp | null;
  procedure_name: string | null;
  procedure_type: string | null;
}
export interface ClinifyDBDimRace {
  race: string | null;
  raceid: Generated<Numeric>;
}
export interface ClinifyDBDimResult {
  cda_element: string | null;
  CS_CDT: string | null;
  cs_cpt: string | null;
  cs_cvx: string | null;
  cs_hcpcs: string | null;
  cs_icd10: string | null;
  CS_ICD10PCS: string | null;
  CS_ICD9: string | null;
  cs_loinc: string | null;
  cs_rxnorm: string | null;
  cs_snomed: string | null;
  hl7identifier: string | null;
  interpretation: string | null;
  name: string | null;
  NAT_DRUGCODES: string | null;
  observation_group_id: string | null;
  observation_group_name: string | null;
  patientid: Int8 | null;
  referencerange: string | null;
  resultdate: Timestamp | null;
  resultid: Generated<number>;
  resultstatusid: string | null;
  TIME_STAMP: string | null;
  unitofmeasure: string | null;
  value: Numeric | null;
}
export interface ClinifyDBEtlIncomingFiles {
  author_date: Timestamp | null;
  bucket: string;
  id: Generated<Int8>;
  identfier_data: Generated<Json | null>;
  is_matched: Generated<boolean | null>;
  is_published: Generated<boolean | null>;
  issuer: string;
  key: string;
  last_processed: Timestamp | null;
  organizationid: Int8;
  patientid: Int8;
  processed_count: Generated<number | null>;
  tenantid: Int8;
  time_of_addition: Generated<Timestamp | null>;
}
export interface ClinifyDBFileType {
  id: Generated<Int8>;
  type: string;
}
export interface ClinifyDBGlobalErrorLogs {
  description: string | null;
  error_level: string;
  error_log: string;
  id: Generated<Int8>;
  lambda_name: string;
  metadata: Generated<Json | null>;
  service_name: string | null;
  time_of_creation: Generated<string | null>;
}
export interface ClinifyDBGlobalSettings {
  id: Generated<Int8>;
  name: string;
  value: Generated<Json | null>;
}
export interface ClinifyDBHra {
  created_date: Timestamp | null;
  description: string | null;
  form_data: Json | null;
  form_template_id: string | null;
  form_title: string | null;
  id: Generated<number>;
  is_public: boolean | null;
  is_template: Generated<boolean | null>;
  label: Generated<string | null>;
  last_updated_by: string | null;
  last_updated_on: Generated<Timestamp | null>;
  location_id: Numeric | null;
  numerical_risk_score_flag: Generated<number | null>;
  organizationid: Int8 | null;
  parent_template_id: Int8 | null;
  risk_band: Generated<Json | null>;
  risk_range_config: Json | null;
  status: string | null;
}
export interface ClinifyDBHraAnalytics {
  hra_id: number | null;
  id: Generated<number>;
  patient_id: Int8 | null;
  status: string | null;
}
export interface ClinifyDBHraCommunication {
  created_at: Timestamp;
  created_by: string;
  email_template_banner: string;
  email_template_body: string;
  email_template_logo: string;
  email_template_title: string;
  hra_id: string;
  id: Generated<Int8>;
  organization_id: Int8;
  sms_template_body: string | null;
  tenant_id: Int8;
  updated_at: Timestamp | null;
  updated_by: string | null;
  user_id: string;
}
export interface ClinifyDBHraFormResponses {
  answer: string | null;
  clinify_id: Int8;
  created_on: Timestamp | null;
  hra_form_id: Int8;
  id: Generated<Int8>;
  jot_form_template_id: string | null;
  jot_qn_id: string | null;
  jot_submission_id: string;
  last_modified_on: Timestamp | null;
  medicaid_id: Int8 | null;
  org_id: Int8 | null;
  tenant_id: Int8 | null;
}
export interface ClinifyDBHraOptions {
  hra_qn_id: string;
  id: Generated<Int8>;
  option_value: string;
  risk_score: Int8 | null;
}
export interface ClinifyDBHraQuestions {
  hra_form_id: Int8 | null;
  id: Generated<Int8>;
  jot_form_template_id: string | null;
  jot_qn_id: string | null;
  name: string;
  org_id: Int8 | null;
  qn_id: string;
  qn_label: string;
  qn_type: string;
  required: boolean | null;
  selected: string | null;
  tenant_id: Int8 | null;
}
export interface ClinifyDBHraSubmissionConfirmationTemplate {
  form_logo_url: string | null;
  form_template_id: string;
  html_template_url: string | null;
  long_description: string | null;
  long_title: string | null;
}
export interface ClinifyDBHraSubmissions {
  created_on: Timestamp | null;
  form_template_id: Numeric | null;
  hra_analytics_id: Int8 | null;
  hra_id: Int8 | null;
  id: Generated<number>;
  last_modified_by: string | null;
  last_modified_on: Timestamp | null;
  patient_id: Numeric | null;
  risk_score: string | null;
  submision_id: string | null;
}
export interface ClinifyDBInsurances {
  description: string | null;
  display_name: string | null;
  insurance_state: string | null;
  insuranceid: Generated<Int8>;
  insurancename: string | null;
  organizationid: Int8 | null;
  tenantid: Int8 | null;
}
export interface ClinifyDBLocations {
  contactid: number;
  description: string | null;
  locationid: number;
  name: string | null;
  organizationid: number;
}
export interface ClinifyDBMatchingEnginesTracker {
  engine_id: string;
  engine_name: string;
  id: Generated<Int8>;
  organizationid: Int8 | null;
  tenantid: Int8 | null;
  time_of_creation: Generated<Timestamp | null>;
  upload_id: Int8 | null;
}
export interface ClinifyDBMedicaididPatientidMapping {
  medicaid_id: Int8;
  organization_id: Int8 | null;
  patient_id: Int8;
  tenant_id: Int8 | null;
}
export interface ClinifyDBMedicationdelivery {
  cda_element: string | null;
  deliveryid: Generated<number>;
  dispensedate: Timestamp | null;
  dispenselocation: string | null;
  fills: Int8 | null;
  hl7identifier: string | null;
  medicationid: Int8 | null;
  orderdate: Timestamp | null;
  visitid: Int8 | null;
}
export interface ClinifyDBNewlyAddedPatientLogs {
  id: Generated<Int8>;
  medicaid_id: Int8;
  timestamp: Generated<Timestamp>;
  upload_id: Int8;
}
export interface ClinifyDBNotes {
  date: Timestamp | null;
  description: string | null;
  id: Generated<number>;
  patientid: Int8 | null;
  type: string | null;
  username: string | null;
}
export interface ClinifyDBNotifications {
  created_at: Timestamp;
  deleted_at: Timestamp | null;
  id: Generated<Int8>;
  message: string | null;
  organisationid: Int8 | null;
  read: boolean | null;
  updated_at: Timestamp | null;
  user_id: string;
}
export interface ClinifyDBNotificationsv2 {
  aggregate_description: string;
  aggregate_title: string;
  created_at: Timestamp;
  created_by_id: string;
  delivery_time: Timestamp;
  description: string;
  id: Generated<Int8>;
  id_json: string;
  importance: string;
  key: string;
  organization_id: Int8;
  source_id: string;
  source_name: string;
  status: string;
  target_user_id: string;
  tenant_id: Int8;
  title: string;
  type: string;
  updated_at: Timestamp;
}
export interface ClinifyDBOrganization {
  auth0_organizationid: string | null;
  auth0_organizationname: string | null;
  ehr: Generated<boolean | null>;
  one_id: string | null;
  org_resource_id: Int8 | null;
  organizationid: Int8;
  organizationname: string | null;
  tenantid: Int8 | null;
  tenantname: string | null;
  type: string | null;
}
export interface ClinifyDBOrganizationDefaultQms {
  id: Generated<Int8>;
  org_id: number | null;
  qm_id: number | null;
}
export interface ClinifyDBOrganizationResources {
  email_template_url: string | null;
  id: Generated<Int8>;
  logo_url: string | null;
}
export interface ClinifyDBOrgCollabortiveMap {
  collab_id: Int8;
  id: Generated<Int8>;
  provider_id: Int8;
}
export interface ClinifyDBPatient {
  addressid: Int8 | null;
  chronicconditionid: Int8 | null;
  clinify_patient_id: Int8 | null;
  contactid: Int8 | null;
  ethnicityid: Numeric | null;
  genderid: Int8 | null;
  medicaid_id: Int8 | null;
  organizationid: Int8 | null;
  patientdateofbirth: Timestamp | null;
  patientfirstname: string | null;
  patientgender: string | null;
  patientid: Generated<Int8>;
  patientidentifier: Int8 | null;
  patientlastname: string | null;
  payerid: Int8 | null;
  raceid: Numeric | null;
  tenantid: Int8 | null;
}
export interface ClinifyDBPatientclinicalcondition {
  clinicalconditionid: Int8 | null;
  patientclinicalcondition: Generated<number>;
  patientid: Int8 | null;
}
export interface ClinifyDBPatientcontact {
  contactid: Int8;
  patientcontactid: Int8;
  patientid: Int8;
}
export interface ClinifyDBPatientmedication {
  dosage: string | null;
  end_date: Timestamp | null;
  frequency: string | null;
  id: Generated<number>;
  medication_id: number | null;
  patient_id: number | null;
  start_date: Timestamp | null;
}
export interface ClinifyDBPatientorganization {
  organizationid: Int8;
  patientid: Int8;
  patientorganizationid: Int8;
}
export interface ClinifyDBPhysicians {
  chronicconditionid: Int8 | null;
  contactid: Int8 | null;
  organizationid: Int8 | null;
  physicianid: Generated<Int8>;
  physicianidentifier: Int8;
  physicianlastname: string | null;
  physicianname: string | null;
  tenantid: Int8 | null;
}
export interface ClinifyDBPhysiciansorganization {
  organizationid: Int8;
  physicianid: Int8;
  physiciansorganizationid: Int8;
}
export interface ClinifyDBPossiblepatient {
  clinifyid: number | null;
  contactid: number;
  dateofbirth: Timestamp | null;
  lastname: string | null;
  name: string | null;
  possiblepatientid: Generated<number>;
}
export interface ClinifyDBPossiblepatientOld {
  clinifyid: number | null;
  contactid: number;
  dateofbirth: Timestamp | null;
  lastname: string | null;
  name: string | null;
}
export interface ClinifyDBProviderAppointments {
  appointment_date_time: Timestamp | null;
  appointment_id: Generated<Int8>;
  appointment_type: string | null;
  clinify_id: Int8 | null;
  comment: string | null;
  medicaid_id: Int8 | null;
  npi_id: Int8 | null;
  organization_id: Int8 | null;
  tenant_id: Int8 | null;
}
export interface ClinifyDBProviderAvailability {
  end_date_time: Timestamp | null;
  id: Generated<Int8>;
  npi_id: Int8;
  start_date_time: Timestamp | null;
}
export interface ClinifyDBProvidercontact {
  contactid: Int8;
  providercontactid: Int8;
  providerid: Int8;
}
export interface ClinifyDBProviderDetails {
  id: Generated<Int8>;
  organization_id: Int8;
  specialty_id: Int8;
  sub_specialty_id: Int8 | null;
  user_id: string;
}
export interface ClinifyDBProviders {
  npi_id: Int8;
  organization_id: Int8;
  tenant_id: Int8;
}
export interface ClinifyDBQualityMeasureDashboard {
  additional_text: string | null;
  dashboard_name: string | null;
  date: Timestamp | null;
  id: Generated<Int8>;
  measure: number;
  name: string;
  period: string;
  progress: number;
  target: number;
  value: number;
}
export interface ClinifyDBQualityMeasures {
  categoryId: number | null;
  description: string | null;
  eligibility_criteria: Generated<Json | null>;
  id: Generated<Int8>;
  quality_measure: string | null;
  show_on_dashboard: Generated<boolean | null>;
}
export interface ClinifyDBQualityMeasuresCategories {
  category_name: string;
  categoryid: Generated<number>;
}
export interface ClinifyDBQualityMeasuresOld {
  id: Generated<number>;
  is_chronic_condition: number | null;
  quality_measure_name: string;
}
export interface ClinifyDBQualityMeasuresPatient {
  denominator: Generated<Json | null>;
  denominator_exclusion: Generated<Json | null>;
  denominator_optional_exclusion: Generated<Json | null>;
  id: Generated<Int8>;
  initial_population: Generated<Json | null>;
  last_updated: Generated<Timestamp | null>;
  numarator: Generated<Json | null>;
  org_id: number | null;
  patient_id: number | null;
  qm_id: number | null;
  supplimental_criteria: Generated<Json | null>;
  tenant_id: number | null;
}
export interface ClinifyDBQualityMeasuresPatientOld {
  id: Generated<number>;
  patient_id: number | null;
  patient_name: string | null;
  physician_id: number | null;
  quality_measure_id: number | null;
}
export interface ClinifyDBQualityMeasuresPatientV2 {
  denominator: Json | null;
  denominator_exclusion: Json | null;
  denominator_optional_exclusion: Json | null;
  id: Generated<Int8>;
  initial_population: Json | null;
  is_active: Generated<boolean | null>;
  last_updated: Generated<Timestamp | null>;
  numarator: Json | null;
  org_id: number | null;
  patient_id: number | null;
  payerid: Int8 | null;
  qm_id: number | null;
  supplimental_criteria: Json | null;
  tenant_id: number | null;
}
export interface ClinifyDBQuestionslibrary {
  form_library_id: Generated<number>;
  is_public: boolean | null;
  last_updated_by: string | null;
  last_updated_on: Timestamp | null;
  status: string | null;
  title: string | null;
}
export interface ClinifyDBReferralshub {
  address: string;
  age: Int8;
  created_at: Timestamp;
  gender: string;
  gurdian_name: string;
  gurdian_phone: string;
  id: Int8;
  npi_id: Generated<Int8>;
  patient_firstname: string;
  patient_lastname: string;
  phone_no: string;
  referred_by: string;
  service_provider: string | null;
  taxonomy_code: Int8;
  zipcode: Int8;
}
export interface ClinifyDBRemovedPatientLogs {
  id: Generated<Int8>;
  medicaid_id: Int8;
  timestamp: Generated<Timestamp>;
  upload_id: Int8;
}
export interface ClinifyDBRosterMatchingRequests {
  engine_population_end_time: Timestamp | null;
  engine_population_start_time: Timestamp | null;
  id: Generated<Int8>;
  matching_end_time: Timestamp | null;
  matching_start_time: Timestamp | null;
  num_files_matched: Generated<number | null>;
  num_files_pop: number | null;
  request_creation_time: Generated<Timestamp | null>;
  retry_count: Generated<number | null>;
  total_files_pop: number | null;
  total_files_to_match: Generated<number | null>;
  upload_id: Int8 | null;
}
export interface ClinifyDBSchCalendarevents {
  appointmentid: Generated<number>;
  comment: string | null;
  dateday: Timestamp | null;
  dateduration: string | null;
  datehour: string | null;
  locationid: number | null;
  patientid: number | null;
  patientsource: string | null;
  providerid: number;
  realduration: string | null;
  typeofappoinment: string | null;
}
export interface ClinifyDBScreennings {
  organizationid: Int8 | null;
  screenningid: Generated<Int8>;
  screenningname: string | null;
  tenantid: Int8 | null;
}
export interface ClinifyDBSisensePreference {
  auth0_org_id: string | null;
  auth0_user_id: string | null;
  order: Json | null;
  preference: Generated<Json | null>;
  preferrence_id: Generated<Int8>;
}
export interface ClinifyDBSpecialty {
  specialtyid: Generated<number>;
  specialtyname: string | null;
}
export interface ClinifyDBSubspeciality {
  specialtyid: number | null;
  subspecialityid: Generated<number>;
  subspecialityname: string | null;
}
export interface ClinifyDBSuperAdminTenant {
  organization_id: Int8 | null;
  tenant_id: Int8 | null;
  user_id: string;
}
export interface ClinifyDBTenantCreationLogs {
  error: Json;
  id: Generated<Int8>;
  tenant: Json;
}
export interface ClinifyDBUploadJobs {
  excel_url: string | null;
  file_type_id: Int8 | null;
  file_url: string | null;
  id: Generated<Int8>;
  is_processed: Generated<boolean | null>;
  job_type: string;
  num_rows_processed: Generated<number | null>;
  organizationid: Int8 | null;
  processing_end_time: Timestamp | null;
  processing_start_time: Timestamp | null;
  queued: Generated<boolean | null>;
  tenantid: Int8 | null;
  time_of_upload: Generated<Timestamp | null>;
  total_rows: Generated<number | null>;
  upload_metadata: Generated<Json | null>;
  upload_status: Generated<string | null>;
}
export interface ClinifyDBUploadJobsProcessingLogs {
  id: Generated<Int8>;
  log: string | null;
  log_type: string | null;
  row_number: number;
  timestamp: Generated<Timestamp | null>;
  upload_id: Int8 | null;
}
export interface ClinifyDBUserFeedbacks {
  comment: string | null;
  created_at: Generated<Timestamp | null>;
  form_data: Json | null;
  id: Generated<Int8>;
  organization_id: Int8;
  tenant_id: Int8;
  updated_at: Generated<Timestamp | null>;
  user_id: string;
}
export interface ClinifyDBUserPreferencesOld {
  id: Generated<number>;
  quality_measure_name: string | null;
  user_email: string | null;
}
export interface ClinifyDBVaccines {
  organizationid: Int8 | null;
  tenantid: Int8 | null;
  vaccineid: Generated<Int8>;
  vaccinename: string | null;
}
export interface PatientDBActionOrgSpecificData {
  action_template: Json | null;
  action_type: string | null;
  caregap_id: Int8 | null;
  display_name: string | null;
  id: Generated<Int8>;
  org_id: Int8 | null;
  sub_caregap_id: Int8 | null;
  tenant_id: Int8 | null;
}
export interface PatientDBAnswersCareview {
  answer_id: string;
  answered_date: Timestamp | null;
  mcaid_id: Int8;
  question_id: string;
  response: string | null;
  subscriber_id: Int8 | null;
}
export interface PatientDBBulkEmailStatusTracker {
  clinify_id: Int8;
  description: string | null;
  email: string;
  hra_id: Int8;
  id: Generated<Int8>;
  medicaid_id: Int8 | null;
  organization_id: Int8;
  reason: string | null;
  sent_by: string;
  status: string;
  status_tracker_id: string;
  tenant_id: Int8;
  timestamp: Int8;
}
export interface PatientDBBulkSmsStatusTracker {
  clinify_id: Int8;
  description: string | null;
  hra_id: Int8;
  id: Generated<Int8>;
  medicaid_id: Int8 | null;
  organization_id: Int8;
  phone: string;
  sent_by: string;
  status: string;
  status_tracker_id: string;
  tenant_id: Int8;
  timestamp: Int8;
}
export interface PatientDBCareCoordinator {
  cc_id: Generated<Int8>;
  email: string;
  firstname: string | null;
  lastname: string | null;
  organizationid: Int8 | null;
  tenantid: Int8 | null;
  user_id: string | null;
}
export interface PatientDBCaregap {
  id: Generated<Int8>;
  title: string;
}
export interface PatientDBCaregapCareplan {
  caregap_id: Int8 | null;
  careplan_template_id: Int8 | null;
  id: Generated<Int8>;
  org_id: Int8 | null;
}
export interface PatientDBCaregapChildren {
  id: Generated<Int8>;
  parent_id: Int8 | null;
  title: string | null;
}
export interface PatientDBCaregapFilters {
  caregap_id: Int8;
  group_id: Int8;
}
export interface PatientDBCaregapPatientData {
  barriers: boolean | null;
  caregap_id: Int8 | null;
  clinify_id: Int8 | null;
  compliance: boolean | null;
  id: Generated<Int8>;
  org_id: Int8 | null;
  reverse_nature: boolean | null;
  status: string | null;
  sub_caregap_id: Int8 | null;
  tenant_id: Int8 | null;
}
export interface PatientDBCareplanLinkRequest {
  caregap_id: Int8;
  careplan_template_id: Int8;
  created_at: Generated<Timestamp | null>;
  id: Generated<Int8>;
  sub_caregap_id: Int8 | null;
}
export interface PatientDBCareplanPatients {
  careplan_data: Json | null;
  careplan_template_id: Int8 | null;
  clinify_id: Int8;
  id: Generated<Int8>;
  is_commited: Generated<boolean | null>;
  is_signed_off_by_patient: Generated<boolean | null>;
  label: string | null;
  link_id: Int8 | null;
  org_id: Int8;
  tenant_id: Int8;
}
export interface PatientDBCareplans {
  clinify_id: Int8;
  created_at: Generated<Timestamp | null>;
  description: string;
  goal: string;
  id: Generated<Int8>;
  is_active: Generated<boolean>;
  is_commited: Generated<boolean | null>;
  is_signed_off_by_patient: Generated<boolean | null>;
  label: string;
  name: string;
  organization_id: Int8;
  outreach_id: Int8 | null;
  signed_off_date: Timestamp | null;
  template_id: Int8 | null;
  tenant_id: Int8 | null;
  updated_at: Generated<Timestamp | null>;
}
export interface PatientDBCarePlans {
  care_team: Json | null;
  clinify_id: Int8 | null;
  created_at: Timestamp | null;
  created_by: Json | null;
  id: Generated<Int8>;
  is_signed_off_by_patient: Generated<boolean>;
  medicaid_id: Int8 | null;
  name: string;
  organization_id: Int8;
  signed_off_date: Timestamp | null;
  tenant_id: Int8;
}
export interface PatientDBCareplanScheduledServices {
  careplan_id: Int8;
  created_at: Generated<Timestamp>;
  cron_expression: string | null;
  custom_data: Json | null;
  end_date: Timestamp;
  end_time: string;
  frequency: string | null;
  id: Generated<Int8>;
  last_processed: Timestamp | null;
  next_process_on: Timestamp | null;
  service_id: string;
  service_type: Int8;
  start_date: Timestamp;
  start_time: string;
}
export interface PatientDBCarePlansComments {
  care_plan_id: Int8;
  comment: string | null;
  commented_by: Json | null;
  created_at: Timestamp | null;
  field_name: string;
  id: Generated<Int8>;
}
export interface PatientDBCareplanServiceLogs {
  careplan_id: Generated<Int8>;
  created_at: Generated<Timestamp>;
  end_time: Timestamp | null;
  id: Generated<Int8>;
  service_id: string;
  service_type: Int8;
  start_time: Timestamp;
  status: string;
  updated_at: Generated<Timestamp>;
}
export interface PatientDBCareplanServiceTypes {
  created_at: Generated<Timestamp>;
  id: Generated<Int8>;
  title: string;
}
export interface PatientDBCareplanServiceTypesMap {
  age_range: Json | null;
  cbo_id: Int8;
  created_at: Generated<Timestamp>;
  id: Generated<Int8>;
  organization_id: Int8;
  service_type: Int8;
}
export interface PatientDBCareplansServices {
  appointment_id: Int8 | null;
  assigned_on: Timestamp | null;
  assigned_to: Int8 | null;
  caregap_id: Int8 | null;
  careplan_id: Int8;
  completed_by: string | null;
  completed_on: Timestamp | null;
  description: string;
  id: Generated<Int8>;
  is_template: Generated<boolean>;
  name: string;
  service_type: Int8 | null;
  status: string;
  sub_caregap_id: Int8 | null;
  target_age: number | null;
}
export interface PatientDBCareplansServicesActivities {
  completed: Generated<boolean | null>;
  completed_at: Timestamp | null;
  completed_by: string | null;
  id: Generated<Int8>;
  service_id: Int8;
  title: string;
}
export interface PatientDBCareplansServicesComments {
  attachment: Json | null;
  cbo_tags: Json | null;
  comment: string;
  created_at: Generated<Timestamp | null>;
  id: Generated<Int8>;
  org_id: Int8;
  service_id: Int8;
  type: string | null;
  updated_at: Generated<Timestamp | null>;
  user_id: string;
}
export interface PatientDBCareplansTemplates {
  created_at: Generated<Timestamp | null>;
  description: string;
  goal: string;
  id: Generated<Int8>;
  is_active: Generated<boolean | null>;
  label: string;
  name: string;
  organization_id: Int8;
  tag: string | null;
  tenant_id: Int8;
  updated_at: Generated<Timestamp | null>;
}
export interface PatientDBCareplanTemplateOutreachTemplate {
  careplan_template_id: Int8 | null;
  id: Generated<Int8>;
  org_id: Int8 | null;
  outreach_template_id: Int8 | null;
}
export interface PatientDBCareplanTemplates {
  contents: Json | null;
  created_at: Timestamp | null;
  description: string | null;
  goal: string | null;
  id: Generated<Int8>;
  is_active: boolean | null;
  is_template: Generated<boolean | null>;
  label: Generated<string | null>;
  name: string | null;
  org_id: Int8 | null;
  tenant_id: Int8 | null;
  updated_at: Timestamp | null;
}
export interface PatientDBCcOrgMap {
  non_partner_cc_org_id: Int8 | null;
}
export interface PatientDBCcPatientsMap {
  cc_auth0_user_id: string;
  cc_email: string | null;
  cc_name: string | null;
  collab_id: Int8;
  created_on: Timestamp | null;
  id: Generated<Int8>;
  recommended_patient_id: Int8 | null;
  risk: string | null;
}
export interface PatientDBClaimsCareview {
  claim_category: string | null;
  clm_id: string;
  clm_type_pre: string | null;
  clm_type_pregnant: string | null;
  clm_type1: string | null;
  clm_type2: string | null;
  disp_cd_clm: string | null;
  disp_cd_clmli: string | null;
  enrollment_dt: Timestamp | null;
  grp_name: string | null;
  hcpcs_cpt_cd: string | null;
  li_num: string;
  mcaid_id: Int8;
  pd_amt: string | null;
  plc_of_trmnt_cd: string | null;
  plc_of_trmnt_cd_desc: string | null;
  primy_dschrg_diag_cd: string | null;
  primy_dschrg_diag_desc: string | null;
  subscriber_id: Int8 | null;
  svc_from_dt: Timestamp | null;
  svcg_prov_npi: string | null;
}
export interface PatientDBClaimsStagingCareview {
  claim_category: string | null;
  clm_id: string | null;
  clm_type_pre: number | null;
  clm_type_pregnant: number | null;
  clm_type1: number | null;
  clm_type2: number | null;
  disp_cd_clm: string | null;
  disp_cd_clmli: string | null;
  enrollment_dt: Timestamp | null;
  grp_name: string | null;
  hcpcs_cpt_cd: string | null;
  li_num: number | null;
  mcaid_id: Int8 | null;
  pd_amt: number | null;
  plc_of_trmnt_cd: string | null;
  plc_of_trmnt_cd_desc: string | null;
  primy_dschrg_diag_cd: string | null;
  primy_dschrg_diag_desc: string | null;
  subscriber_id: Int8 | null;
  svc_from_dt: Timestamp | null;
  svcg_prov_id: string | null;
  svcg_prov_nm: string | null;
  svcg_prov_npi: string | null;
  type_pre: number | null;
  type_pregnant: number | null;
  type1: number | null;
  type2: number | null;
}
export interface PatientDBCollaborativePatientRisk {
  id: Generated<Int8>;
  risk: string | null;
  zip: string | null;
}
export interface PatientDBCollaborativePatientsData {
  care_coordinator_id: string | null;
  clinify_id: Int8;
  collab_id: Int8;
  id: Generated<Int8>;
  medical_home_id: Int8 | null;
  medical_home_name: string | null;
}
export interface PatientDBDiabetesRecordsCareview {
  fqhc: string | null;
  mcaid_id: Int8 | null;
  subscriber_id: Int8;
  type_1: string | null;
  type_2: string | null;
  type_pre: string | null;
  type_pregnant: string | null;
}
export interface PatientDBDppAlgorithmFilters {
  dpp_algorithm_id: Int8;
  group_id: Int8;
}
export interface PatientDBDppAlgorithmMasterCareview {
  algorithm: string | null;
  id: Generated<number>;
  org_id: Int8 | null;
  tenant_id: Int8 | null;
}
export interface PatientDBDppAlgorithmOutputCareview {
  algorithm_id: number | null;
  mcaid_id: Int8;
  organizationid: Int8 | null;
  tenantid: Int8 | null;
}
export interface PatientDBEtlProcessingData {
  appointment: boolean | null;
  bucketname: string;
  demographics: boolean | null;
  filename: string;
  id: Generated<Int8>;
  lab_result: boolean | null;
  medication: boolean | null;
  organizationid: Int8 | null;
  patientid: Int8 | null;
  physician: boolean | null;
  procedures: boolean | null;
  processing_end_time: Timestamp | null;
  processing_start_time: Timestamp | null;
  qm: boolean | null;
  status: string | null;
  tenantid: Int8 | null;
}
export interface PatientDBFilterGroups {
  age_filter: Generated<Json | null>;
  city_filter: Generated<Json | null>;
  created_at: Generated<Timestamp | null>;
  created_by: string;
  end_date_filter: Timestamp | null;
  gender_filter: Generated<Json | null>;
  group_id: Generated<Int8>;
  group_name: string;
  hra_form_name: string | null;
  is_active: Generated<boolean | null>;
  last_modified: Generated<Timestamp | null>;
  member_start_date_filter: Generated<Json | null>;
  oganizationid: Int8 | null;
  start_date_filter: Timestamp | null;
  tenantid: Int8 | null;
}
export interface PatientDBFollowupanswersCareview {
  fa_id: string;
  fquestion_id: string;
  mcaid_id: Int8;
  response: string | null;
  response_date: Timestamp | null;
}
export interface PatientDBFollowupquestionsCareview {
  body: string | null;
  fq_id: string;
  question_id: string;
}
export interface PatientDBGenealogicalData {
  clinify_id: Int8;
  email: string | null;
  first_name: string;
  id: Generated<Int8>;
  is_legal_guardian: Generated<boolean | null>;
  last_name: string | null;
  phone: string | null;
  relationship: string;
}
export interface PatientDBGunViolenceStaging {
  active_status: string | null;
  address_line_1: string | null;
  address_line_2: string | null;
  annual_care_visit_date: Timestamp | null;
  benifiits: string | null;
  case_management_notes_1: string | null;
  case_management_notes_2: string | null;
  cc_id: Int8 | null;
  city: string;
  clinifyid: Generated<Int8>;
  do_not_call: Generated<boolean | null>;
  dob: Timestamp;
  effective_date: Timestamp | null;
  email: string | null;
  employment_status: string | null;
  external_contact_email: string | null;
  external_contact_name: string | null;
  external_contact_phone: string | null;
  external_contact_relationship: string | null;
  firstname: string;
  from_date: Timestamp | null;
  gender: string;
  housing_status: string | null;
  insurance_card_id: Int8 | null;
  insurance_provider_jac: string | null;
  is_deleted: Generated<boolean | null>;
  is_matched: Generated<boolean | null>;
  jac_services: string | null;
  last_service: Timestamp | null;
  lastname: string;
  marital_status: string | null;
  medicaid_id: Int8 | null;
  member_start_date: Timestamp | null;
  organizationid: Int8;
  patientid: Int8 | null;
  payerid: Int8 | null;
  phone: string | null;
  physician_npi_id: Int8 | null;
  redetermination_date: Timestamp | null;
  risk: string | null;
  state: string;
  status_jac: string | null;
  tenantid: Int8;
  to_date: Timestamp | null;
  upload_id: Int8 | null;
  yearly_household_income: string | null;
  zipcode: Int8;
}
export interface PatientDBHealthCareGapsCareview {
  care_gaps: string | null;
  mcaid_id: Int8;
  organizationid: Int8 | null;
  tenantid: Int8 | null;
}
export interface PatientDBHedisCareview {
  address_line_1: string | null;
  address_line_2: string | null;
  age: number | null;
  chem_ambulatory_flag: string | null;
  chem_day_night_flag: string | null;
  chem_inpatient_flag: string | null;
  city: string | null;
  compliancedeadline: Timestamp | null;
  complianceservicedate: Timestamp | null;
  county: string | null;
  coverage_begin_date: Timestamp | null;
  coverage_end_date: Timestamp | null;
  denomcnt: number | null;
  dental_flag: string | null;
  dm_eligible_flag: string | null;
  dm_severity_factor: number | null;
  dob: Timestamp | null;
  eligibilitystatus: string | null;
  gender_code: string | null;
  hospice_flag: string | null;
  mcaid_id: Int8;
  member_enrollment_id: string | null;
  member_enrollment_key: Int8 | null;
  member_id: Int8 | null;
  memberkey: string | null;
  membername: string | null;
  mental_ambulatory_flag: string | null;
  mental_day_night_flag: string | null;
  mental_inpatient_flag: string | null;
  numercnt: number | null;
  phone_number: string | null;
  plan_code: string | null;
  plan_employee_flag: string | null;
  provider_addressline1: string | null;
  provider_addressline2: string | null;
  provider_city: string | null;
  provider_faxnumber1: string | null;
  provider_key: Int8;
  provider_name: string | null;
  provider_npi: Int8 | null;
  provider_phonenumber1: string | null;
  provider_statecode: string | null;
  provider_zip: number | null;
  rx_flag: string | null;
  state_code: string | null;
  submeasure_key: string;
  subscriber_key: Int8;
  vision_flag: string | null;
  zip: number | null;
}
export interface PatientDBHedisStagingCareview {
  address_line_1: string | null;
  address_line_2: string | null;
  age: number | null;
  chem_ambulatory_flag: string | null;
  chem_day_night_flag: string | null;
  chem_inpatient_flag: string | null;
  city: string | null;
  compliancedeadline: Timestamp | null;
  complianceservicedate: Timestamp | null;
  county: string | null;
  coverage_begin_date: Timestamp | null;
  coverage_end_date: Timestamp | null;
  denomcnt: number | null;
  dental_flag: string | null;
  dm_eligible_flag: string | null;
  dm_severity_factor: number | null;
  dob: Timestamp | null;
  eligibilitystatus: string | null;
  gender_code: string | null;
  hospice_flag: string | null;
  mcaid_id: Int8;
  member_enrollment_id: string | null;
  member_enrollment_key: Int8 | null;
  member_id: Int8 | null;
  memberkey: string | null;
  membername: string | null;
  mental_ambulatory_flag: string | null;
  mental_day_night_flag: string | null;
  mental_inpatient_flag: string | null;
  numercnt: number | null;
  phone_number: string | null;
  plan_code: string | null;
  plan_employee_flag: string | null;
  provider_addressline1: string | null;
  provider_addressline2: string | null;
  provider_city: string | null;
  provider_faxnumber1: string | null;
  provider_key: Int8;
  provider_name: string | null;
  provider_npi: Int8 | null;
  provider_phonenumber1: string | null;
  provider_statecode: string | null;
  provider_zip: number | null;
  rx_flag: string | null;
  state_code: string | null;
  submeasure_key: string | null;
  subscriber_key: Int8 | null;
  vision_flag: string | null;
  zip: number | null;
}
export interface PatientDBHraRiskFilters {
  group_id: Int8;
  severity: string;
}
export interface PatientDBHraStagingCareview {
  bus_line: string | null;
  bus_line_type: string | null;
  care_notes: string | null;
  dob: string | null;
  ethnicity: string | null;
  existing_answer: number | null;
  existing_fuanswer: number | null;
  existing_fuquestion: number | null;
  existing_question: number | null;
  follow_up_a: string | null;
  follow_up_q: string | null;
  grp_name: string | null;
  has_hra: string | null;
  hra_date: Timestamp | null;
  mcaid_id: Int8 | null;
  option_value: string | null;
  perm_city: string | null;
  perm_ph_num: string | null;
  perm_state: string | null;
  perm_street_ad1: string | null;
  perm_street_ad2: string | null;
  perm_zip: string | null;
  question: string | null;
  question_ans_sw_id: string | null;
  question_fup_ans_sw_id: string | null;
  question_fup_qstn_sw_id: string | null;
  question_header_section: string | null;
  question_no: number | null;
  question_sw_id: string | null;
  script_id: number | null;
  script_name: string | null;
  script_run_log_id: Int8 | null;
  sub_first_name: string | null;
  sub_gender: string | null;
  sub_last_name: string | null;
  sub_option_value: string | null;
  sub_text1: string | null;
  sub_text2: string | null;
  subscriber_id: Int8 | null;
  tax_id: Int8 | null;
  type_pre: number | null;
  type_pregnant: number | null;
  type1: number | null;
  type2: number | null;
}
export interface PatientDBMasterPatient {
  clinifypatientid: Generated<number>;
  organizationid: string | null;
  patientid: string | null;
  tenantid: string | null;
}
export interface PatientDBMcoRiskStratification {
  country: string | null;
  dob: Timestamp | null;
  ethnicity: string | null;
  fullname: string | null;
  gender: string | null;
  is_in_srv_zip: string | null;
  medicaid_id: Int8;
  member_count: number | null;
  organisation: string | null;
  pcpnpi: Int8 | null;
  pcptin: Int8 | null;
  phone: Int8 | null;
  region: number | null;
  risk_level: string | null;
  state: string | null;
  zipcode: number | null;
}
export interface PatientDBNoHraDiabetesStagingCareview {
  fqhc: string | null;
  mcaid_id: Int8 | null;
  subscriber_id: Int8;
  type_1: string | null;
  type_2: string | null;
  type_pre: string | null;
  type_pregnant: string | null;
}
export interface PatientDBNoHraPatientsCareview {
  mcaid_id: Int8 | null;
}
export interface PatientDBNotes {
  attachment_link: string | null;
  clinify_id: Int8 | null;
  date: Timestamp | null;
  description: string | null;
  id: Generated<number>;
  isnotesenabled: boolean | null;
  medicaid_id: Int8 | null;
  organization_id: Int8 | null;
  reminderdate: Timestamp | null;
  reminderdescription: string | null;
  remindertype: string | null;
  status: string | null;
  tenant_id: Int8 | null;
  time: string | null;
  type: string | null;
  username: string | null;
}
export interface PatientDBNotificationsV2 {
  aggregate_description: string;
  aggregate_title: string;
  created_at: Timestamp;
  created_by_id: string;
  delivery_time: Timestamp;
  description: string;
  id: Generated<Int8>;
  id_json: string;
  importance: string;
  key: string;
  organization_id: Int8;
  source_id: string;
  source_name: string;
  status: string;
  target_user_id: string;
  tenant_id: Int8;
  title: string;
  type: string;
  updated_at: Timestamp;
}
export interface PatientDBOutreach {
  attempt_2_duration: number | null;
  attempt_3_duration: number | null;
  attempt_count: number | null;
  clinify_id: Int8 | null;
  comments: Json | null;
  delivery_timestamp: Timestamp | null;
  description: string | null;
  email_body: string | null;
  email_subject: string | null;
  id: Generated<Int8>;
  name: string | null;
  org_id: Int8 | null;
  response_status: Generated<string | null>;
  sms: string | null;
}
export interface PatientDBOutreachFilters {
  group_id: Int8;
  status: string;
}
export interface PatientDBOutreachTemplate {
  attempt_2_duration: number | null;
  attempt_3_duration: number | null;
  description: string | null;
  email_body: string | null;
  email_body_plain: string | null;
  email_subject: string | null;
  id: Generated<Int8>;
  name: string | null;
  outreach_link_id: string | null;
  sms: string | null;
}
export interface PatientDBPatientCall {
  call_status: string | null;
  call_timestamp: Timestamp | null;
  clinify_id: Int8 | null;
  comments: Json | null;
  id: Generated<Int8>;
  org_id: Int8 | null;
  title: string | null;
}
export interface PatientDBPatientProfileSteps {
  clinify_id: Int8;
  id: Generated<Int8>;
  medicaid_id: Int8 | null;
  organization_id: Int8 | null;
  profile_steps_data: Json | null;
  tenant_id: Int8 | null;
}
export interface PatientDBPayerFilters {
  group_id: Int8;
  insuranceid: Int8;
}
export interface PatientDBPayerRoster {
  address_line_1: string | null;
  address_line_2: string | null;
  annual_care_visit_date: Timestamp | null;
  benifiits: string | null;
  cc_id: Int8 | null;
  city: string;
  clinifyid: Generated<Int8>;
  do_not_call: Generated<boolean | null>;
  dob: Timestamp;
  effective_date: Timestamp | null;
  email: string | null;
  external_contact_email: string | null;
  external_contact_name: string | null;
  external_contact_phone: string | null;
  external_contact_relationship: string | null;
  firstname: string;
  from_date: Timestamp | null;
  gender: string;
  insurance_card_id: Int8 | null;
  insurance_provider_jac: string | null;
  is_deleted: Generated<boolean | null>;
  is_matched: Generated<boolean | null>;
  landmark: string | null;
  last_service: Timestamp | null;
  lastname: string;
  marital_status: string | null;
  medicaid_id: Int8 | null;
  member_start_date: Timestamp | null;
  organizationid: Int8;
  patientid: Int8 | null;
  payerid: Int8 | null;
  phone: string | null;
  physician_npi_id: Int8 | null;
  race: string | null;
  redetermination_date: Timestamp | null;
  risk: string | null;
  state: string;
  status_jac: string | null;
  tenantid: Int8;
  to_date: Timestamp | null;
  upload_id: Int8 | null;
  zipcode: Int8;
}
export interface PatientDBPayerRosterHistory {
  address_line_1_edit: boolean | null;
  address_line_2_edit: boolean | null;
  benifits_edit: Generated<boolean | null>;
  clinifyid: Int8 | null;
  edited_by: string | null;
  email_edit: Generated<boolean | null>;
  gender_edit: Generated<boolean | null>;
  history_id: Generated<Int8>;
  phone_num_edit: Generated<boolean | null>;
  state: Generated<Json | null>;
  status_jac_edit: Generated<boolean>;
  time_of_edit: string | null;
}
export interface PatientDBPayerRosterHraAnalytics {
  clinify_id: Int8 | null;
  hra_id: number | null;
  id: Generated<Int8>;
  medicaid_id: Int8 | null;
  organization_id: Int8 | null;
  status: string | null;
  tenant_id: Int8 | null;
}
export interface PatientDBPayerRosterHraSubmissions {
  clinify_id: Int8 | null;
  created_on: Timestamp | null;
  form_template_id: Int8 | null;
  hra_analytics_id: Int8 | null;
  hra_id: Int8 | null;
  id: Generated<Int8>;
  last_modified_by: Timestamp | null;
  medicaid_id: Int8 | null;
  organizationid: Int8 | null;
  risk_score: number | null;
  submission_id: string | null;
}
export interface PatientDBPayerRosterMapping {
  id: Generated<Int8>;
  mapping: Json | null;
  organization_id: Int8;
  tenant_id: Int8;
}
export interface PatientDBPhysicianFilters {
  group_id: Int8;
  physicianid: Int8;
}
export interface PatientDBQuestionsCareview {
  body: string | null;
  id: string;
  script_id: Int8 | null;
  script_name: string | null;
  section: string | null;
}
export interface PatientDBRecommendedPatients {
  address: string | null;
  camunda_task_id: string | null;
  city: string | null;
  clinify_id: Int8 | null;
  collab_id: Int8;
  comment: string | null;
  communication_preference: string | null;
  confidential_services: Generated<boolean | null>;
  confidential_services_comment: string | null;
  consent_given: Generated<boolean | null>;
  consent_given_on: Timestamp | null;
  consent_taken_by: string | null;
  dob: string | null;
  email: string | null;
  firstname: string;
  gender: string | null;
  guardian_email: string | null;
  guardian_firstname: string | null;
  guardian_is_legal: Generated<boolean | null>;
  guardian_lastname: string | null;
  guardian_phone: string | null;
  guardian_relationship: string | null;
  id: Generated<Int8>;
  insurance: string | null;
  insurance_id: Int8 | null;
  is_accepted: Generated<boolean | null>;
  is_demographics_verified: Generated<boolean | null>;
  is_pcp_verified: Generated<boolean | null>;
  is_processed: Generated<boolean | null>;
  lastname: string | null;
  medicaid_id: Int8 | null;
  medical_history: string | null;
  medical_home_id: Int8 | null;
  medical_home_name: string | null;
  outreach_availability: string | null;
  pcp_comment: string | null;
  pcp_name: string | null;
  pcp_referral: boolean | null;
  phone: string | null;
  preferred_contact_language: string | null;
  preferred_language: string | null;
  preferred_therapist_sex: string | null;
  received_date: Timestamp;
  referer: string | null;
  referer_email: string | null;
  referer_id: Int8 | null;
  referer_phone: string | null;
  referer_zipcode: string | null;
  referral_reason: string | null;
  relevant_information: string | null;
  state: string | null;
  status: string | null;
  verification_timestamp: Timestamp | null;
  verified_by: string | null;
  zipcode: string | null;
}
export interface PatientDBReminders {
  date: Timestamp | null;
  datetime: Timestamp | null;
  description: string | null;
  id: Generated<Int8>;
  organizationid: number;
  patientfullname: string | null;
  patientid: Int8;
  status: string | null;
  tenantid: number;
  time: string | null;
  type: string | null;
  userid: string | null;
}
export interface PatientDBSdohGunViolence {
  active_status: string | null;
  created_at: Generated<Timestamp>;
  employment_status: string | null;
  housing_status: string | null;
  id: Generated<number>;
  jac_services: string | null;
  medicaid_id: Int8;
  updated_at: Generated<Timestamp>;
  yearly_household_income: string | null;
}
export interface PatientDBServicingProviderCareview {
  svcg_prov_nm: string | null;
  svcg_prov_npi: string;
}
export interface DB {
  'ClinifyDB.appointment_encounter': ClinifyDBAppointmentEncounter;
  'ClinifyDB.appointmentmedication': ClinifyDBAppointmentmedication;
  'ClinifyDB.appointments': ClinifyDBAppointments;
  'ClinifyDB.appointmentsclinicalcondition': ClinifyDBAppointmentsclinicalcondition;
  'ClinifyDB.charts': ClinifyDBCharts;
  'ClinifyDB.chronicconditions': ClinifyDBChronicconditions;
  'ClinifyDB.collab_carecoordinators': ClinifyDBCollabCarecoordinators;
  'ClinifyDB.collab_config': ClinifyDBCollabConfig;
  'ClinifyDB.collab_org_map': ClinifyDBCollabOrgMap;
  'ClinifyDB.collaborative': ClinifyDBCollaborative;
  'ClinifyDB.collaborative_form_responses': ClinifyDBCollaborativeFormResponses;
  'ClinifyDB.collaborative_forms': ClinifyDBCollaborativeForms;
  'ClinifyDB.collaborative_patients': ClinifyDBCollaborativePatients;
  'ClinifyDB.collaborative_users': ClinifyDBCollaborativeUsers;
  'ClinifyDB.contacts': ClinifyDBContacts;
  'ClinifyDB.databasechangelog': ClinifyDBDatabasechangelog;
  'ClinifyDB.databasechangeloglock': ClinifyDBDatabasechangeloglock;
  'ClinifyDB.dim_address': ClinifyDBDimAddress;
  'ClinifyDB.dim_city': ClinifyDBDimCity;
  'ClinifyDB.dim_clinicalconditions': ClinifyDBDimClinicalconditions;
  'ClinifyDB.dim_contact': ClinifyDBDimContact;
  'ClinifyDB.dim_contacttype': ClinifyDBDimContacttype;
  'ClinifyDB.dim_country': ClinifyDBDimCountry;
  'ClinifyDB.dim_encounter': ClinifyDBDimEncounter;
  'ClinifyDB.dim_ethnicity': ClinifyDBDimEthnicity;
  'ClinifyDB.dim_medication': ClinifyDBDimMedication;
  'ClinifyDB.dim_procedure': ClinifyDBDimProcedure;
  'ClinifyDB.dim_race': ClinifyDBDimRace;
  'ClinifyDB.dim_result': ClinifyDBDimResult;
  'ClinifyDB.etl_incoming_files': ClinifyDBEtlIncomingFiles;
  'ClinifyDB.file_type': ClinifyDBFileType;
  'ClinifyDB.global_error_logs': ClinifyDBGlobalErrorLogs;
  'ClinifyDB.global_settings': ClinifyDBGlobalSettings;
  'ClinifyDB.hra': ClinifyDBHra;
  'ClinifyDB.hra_analytics': ClinifyDBHraAnalytics;
  'ClinifyDB.hra_communication': ClinifyDBHraCommunication;
  'ClinifyDB.hra_form_responses': ClinifyDBHraFormResponses;
  'ClinifyDB.hra_options': ClinifyDBHraOptions;
  'ClinifyDB.hra_questions': ClinifyDBHraQuestions;
  'ClinifyDB.hra_submission_confirmation_template': ClinifyDBHraSubmissionConfirmationTemplate;
  'ClinifyDB.hra_submissions': ClinifyDBHraSubmissions;
  'ClinifyDB.insurances': ClinifyDBInsurances;
  'ClinifyDB.locations': ClinifyDBLocations;
  'ClinifyDB.matching_engines_tracker': ClinifyDBMatchingEnginesTracker;
  'ClinifyDB.medicaidid_patientid_mapping': ClinifyDBMedicaididPatientidMapping;
  'ClinifyDB.medicationdelivery': ClinifyDBMedicationdelivery;
  'ClinifyDB.newly_added_patient_logs': ClinifyDBNewlyAddedPatientLogs;
  'ClinifyDB.notes': ClinifyDBNotes;
  'ClinifyDB.notifications': ClinifyDBNotifications;
  'ClinifyDB.notificationsv2': ClinifyDBNotificationsv2;
  'ClinifyDB.org_collabortive_map': ClinifyDBOrgCollabortiveMap;
  'ClinifyDB.organization': ClinifyDBOrganization;
  'ClinifyDB.organization_default_qms': ClinifyDBOrganizationDefaultQms;
  'ClinifyDB.organization_resources': ClinifyDBOrganizationResources;
  'ClinifyDB.patient': ClinifyDBPatient;
  'ClinifyDB.patientclinicalcondition': ClinifyDBPatientclinicalcondition;
  'ClinifyDB.patientcontact': ClinifyDBPatientcontact;
  'ClinifyDB.patientmedication': ClinifyDBPatientmedication;
  'ClinifyDB.patientorganization': ClinifyDBPatientorganization;
  'ClinifyDB.physicians': ClinifyDBPhysicians;
  'ClinifyDB.physiciansorganization': ClinifyDBPhysiciansorganization;
  'ClinifyDB.possiblepatient': ClinifyDBPossiblepatient;
  'ClinifyDB.possiblepatient_old': ClinifyDBPossiblepatientOld;
  'ClinifyDB.provider_appointments': ClinifyDBProviderAppointments;
  'ClinifyDB.provider_availability': ClinifyDBProviderAvailability;
  'ClinifyDB.provider_details': ClinifyDBProviderDetails;
  'ClinifyDB.providercontact': ClinifyDBProvidercontact;
  'ClinifyDB.providers': ClinifyDBProviders;
  'ClinifyDB.quality_measure_dashboard': ClinifyDBQualityMeasureDashboard;
  'ClinifyDB.quality_measures': ClinifyDBQualityMeasures;
  'ClinifyDB.quality_measures_categories': ClinifyDBQualityMeasuresCategories;
  'ClinifyDB.quality_measures_old': ClinifyDBQualityMeasuresOld;
  'ClinifyDB.quality_measures_patient': ClinifyDBQualityMeasuresPatient;
  'ClinifyDB.quality_measures_patient_old': ClinifyDBQualityMeasuresPatientOld;
  'ClinifyDB.quality_measures_patient_v2': ClinifyDBQualityMeasuresPatientV2;
  'ClinifyDB.questionslibrary': ClinifyDBQuestionslibrary;
  'ClinifyDB.referralshub': ClinifyDBReferralshub;
  'ClinifyDB.removed_patient_logs': ClinifyDBRemovedPatientLogs;
  'ClinifyDB.roster_matching_requests': ClinifyDBRosterMatchingRequests;
  'ClinifyDB.sch_calendarevents': ClinifyDBSchCalendarevents;
  'ClinifyDB.screennings': ClinifyDBScreennings;
  'ClinifyDB.sisense_preference': ClinifyDBSisensePreference;
  'ClinifyDB.specialty': ClinifyDBSpecialty;
  'ClinifyDB.subspeciality': ClinifyDBSubspeciality;
  'ClinifyDB.super_admin_tenant': ClinifyDBSuperAdminTenant;
  'ClinifyDB.tenant_creation_logs': ClinifyDBTenantCreationLogs;
  'ClinifyDB.upload_jobs': ClinifyDBUploadJobs;
  'ClinifyDB.upload_jobs_processing_logs': ClinifyDBUploadJobsProcessingLogs;
  'ClinifyDB.user_feedbacks': ClinifyDBUserFeedbacks;
  'ClinifyDB.user_preferences_old': ClinifyDBUserPreferencesOld;
  'ClinifyDB.vaccines': ClinifyDBVaccines;
  'patientDB.action_org_specific_data': PatientDBActionOrgSpecificData;
  'patientDB.answers_careview': PatientDBAnswersCareview;
  'patientDB.bulk_email_status_tracker': PatientDBBulkEmailStatusTracker;
  'patientDB.bulk_sms_status_tracker': PatientDBBulkSmsStatusTracker;
  'patientDB.care_coordinator': PatientDBCareCoordinator;
  'patientDB.care_plans': PatientDBCarePlans;
  'patientDB.care_plans_comments': PatientDBCarePlansComments;
  'patientDB.caregap': PatientDBCaregap;
  'patientDB.caregap_careplan': PatientDBCaregapCareplan;
  'patientDB.caregap_children': PatientDBCaregapChildren;
  'patientDB.caregap_filters': PatientDBCaregapFilters;
  'patientDB.caregap_patient_data': PatientDBCaregapPatientData;
  'patientDB.careplan_link_request': PatientDBCareplanLinkRequest;
  'patientDB.careplan_patients': PatientDBCareplanPatients;
  'patientDB.careplan_scheduled_services': PatientDBCareplanScheduledServices;
  'patientDB.careplan_service_logs': PatientDBCareplanServiceLogs;
  'patientDB.careplan_service_types': PatientDBCareplanServiceTypes;
  'patientDB.careplan_service_types_map': PatientDBCareplanServiceTypesMap;
  'patientDB.careplan_template_outreach_template': PatientDBCareplanTemplateOutreachTemplate;
  'patientDB.careplan_templates': PatientDBCareplanTemplates;
  'patientDB.careplans': PatientDBCareplans;
  'patientDB.careplans_services': PatientDBCareplansServices;
  'patientDB.careplans_services_activities': PatientDBCareplansServicesActivities;
  'patientDB.careplans_services_comments': PatientDBCareplansServicesComments;
  'patientDB.careplans_templates': PatientDBCareplansTemplates;
  'patientDB.cc_org_map': PatientDBCcOrgMap;
  'patientDB.cc_patients_map': PatientDBCcPatientsMap;
  'patientDB.claims_careview': PatientDBClaimsCareview;
  'patientDB.claims_staging_careview': PatientDBClaimsStagingCareview;
  'patientDB.collaborative_patient_risk': PatientDBCollaborativePatientRisk;
  'patientDB.collaborative_patients_data': PatientDBCollaborativePatientsData;
  'patientDB.diabetes_records_careview': PatientDBDiabetesRecordsCareview;
  'patientDB.dpp_algorithm_filters': PatientDBDppAlgorithmFilters;
  'patientDB.dpp_algorithm_master_careview': PatientDBDppAlgorithmMasterCareview;
  'patientDB.dpp_algorithm_output_careview': PatientDBDppAlgorithmOutputCareview;
  'patientDB.etl_processing_data': PatientDBEtlProcessingData;
  'patientDB.filter_groups': PatientDBFilterGroups;
  'patientDB.followupanswers_careview': PatientDBFollowupanswersCareview;
  'patientDB.followupquestions_careview': PatientDBFollowupquestionsCareview;
  'patientDB.genealogical_data': PatientDBGenealogicalData;
  'patientDB.gun_violence_staging': PatientDBGunViolenceStaging;
  'patientDB.health_care_gaps_careview': PatientDBHealthCareGapsCareview;
  'patientDB.hedis_careview': PatientDBHedisCareview;
  'patientDB.hedis_staging_careview': PatientDBHedisStagingCareview;
  'patientDB.hra_risk_filters': PatientDBHraRiskFilters;
  'patientDB.hra_staging_careview': PatientDBHraStagingCareview;
  'patientDB.master_patient': PatientDBMasterPatient;
  'patientDB.mco_risk_stratification': PatientDBMcoRiskStratification;
  'patientDB.no_hra_diabetes_staging_careview': PatientDBNoHraDiabetesStagingCareview;
  'patientDB.no_hra_patients_careview': PatientDBNoHraPatientsCareview;
  'patientDB.notes': PatientDBNotes;
  'patientDB.notificationsV2': PatientDBNotificationsV2;
  'patientDB.outreach': PatientDBOutreach;
  'patientDB.outreach_filters': PatientDBOutreachFilters;
  'patientDB.outreach_template': PatientDBOutreachTemplate;
  'patientDB.patient_call': PatientDBPatientCall;
  'patientDB.patient_profile_steps': PatientDBPatientProfileSteps;
  'patientDB.payer_filters': PatientDBPayerFilters;
  'patientDB.payer_roster': PatientDBPayerRoster;
  'patientDB.payer_roster_history': PatientDBPayerRosterHistory;
  'patientDB.payer_roster_hra_analytics': PatientDBPayerRosterHraAnalytics;
  'patientDB.payer_roster_hra_submissions': PatientDBPayerRosterHraSubmissions;
  'patientDB.payer_roster_mapping': PatientDBPayerRosterMapping;
  'patientDB.physician_filters': PatientDBPhysicianFilters;
  'patientDB.questions_careview': PatientDBQuestionsCareview;
  'patientDB.recommended_patients': PatientDBRecommendedPatients;
  'patientDB.reminders': PatientDBReminders;
  'patientDB.sdoh_gun_violence': PatientDBSdohGunViolence;
  'patientDB.servicing_provider_careview': PatientDBServicingProviderCareview;
}

export type PayerRosterMapType = {
  'First Name': string | null;
  'Last Name': string | null;
  DOB: string | null;
  Gender: string | null;
  'Address Line 1': string | null;
  City: string | null;
  State: string | null;
  Zipcode: string | null;
  Phone: string | null;
  'Medicaid ID': string | null;
  'Address Line 2': string | null;
  'Physician Name': string | null;
  'Physician NPI': string | null;
  Email: string | null;
  'Member Start Date': string | null;
  'Effective Date': string | null;
  'Redetermination Date': string | null;
  Benefits: string | null;
  'Annual Care Visit Date': string | null;
  'Do Not Call': string | null;
  'Last Service': string | null;
  'Patient Insurance Card ID': string | null;
  'Care Opportunity': string | null;
  'Patient Barriers': string | null;
  'Care Opportunity Status': string | null;
};

export type CareGapMapType = {
  'Haemoglobin A1c (HbA1c) testing': string | null;
  'HbA1c poor control (>9.0%)': string | null;
  'HbA1c control (<8.0%)': string | null;
  'Eye exam (retinal) performed': string | null;
  'BP control (<140/90 mm Hg)': string | null;
  'Foot Examination': string | null;
  'Breast Cancer Screening (BCS)': string | null;
  'Controlling High Blood Pressure (CBP)': string | null;
};

export type CareGapPatientMapType = {
  barriers: string | null;
  status: string | null;
  compliance: string | null;
  reverse_nature: string[] | null;
  complianceValueMap: {
    true: string[];
    false: string[];
  };
};

export type FieldSequenceType = {
  payerRoster: Array<keyof PayerRosterFieldMappingType>;
  careGap: Array<keyof CareGapMapType>;
  careGapPatient: Array<keyof CareGapPatientMapType>;
};

export type PayerRosterFieldMappingType = {
  payerRoster: PayerRosterMapType;
  careGap: CareGapMapType;
  careGapPatient: CareGapPatientMapType;
  sequence: FieldSequenceType;
};
