const sheet = require("xlsx");
const fs = require("fs");
const moment = require('moment');
const papaparse = require('papaparse');
const wb = sheet.readFile("./SIHF_September 2024.xlsx");
const ws = wb.Sheets.Sheet1;
const data = sheet.utils.sheet_to_json(ws)
const formatedData = data.map(
  (row) => ({
    'First Name': row['First Name'],
    'Last Name': row['Last Name'] === 'TRUE' ? 'True' : row['Last Name'],
    'DOB': moment(row['DOB'], 'DD-MM-YYYY').format('MM-DD-YYYY'),
    'Gender': row['Gender'],
    'Address Line 1': row['Address'],
    'Address Line 2': row['Address Line 2'],
    'City': row['City'],
    'State': row['State'],
    'Zip Code': parseInt(row['Zip Code']),
    'Primary Care Provider Name': row['Primary Care Provider Name'],
    'PCP NPI': row['PCP NPI'],
    'Phone': row['Phone'],
    'Email': row['Email'],
    'Member Start Date': moment(row['Member Start Date', 'DD-MM-YYYY']).format('MM-DD-YYYY'),
    'Medicaid Id': row['Medicaid Id'],
    'Effective Date': moment(row['Effective Date'], 'DD-MM-YYYY').format('MM-DD-YYYY'),
    'Redetermination Date': row['Redetermination Date'] ? moment(row['Redetermination Date'], 'DD-MM-YYYY').format('MM-DD-YYYY') : undefined,
    'Benefits': row['Benefits']
  })
);

const csvData = papaparse.unparse(formatedData)

console.log(formatedData.slice(0, 10))

fs.writeFileSync("SIHF_September 2024.csv", csvData, { encoding: "utf8" });

// let a = {
//   careGap: {
//     "Foot Examination": null,
//     "HbA1c control (<8.0%)":
//       "Hemoglobin A1c Control for Patients with Diabetes",
//     "BP control (<140/90 mm Hg)": null,
//     "HbA1c poor control (>9.0%)": null,
//     "Eye exam (retinal) performed": "Eye Exam for Patients with Diabetes",
//     "Breast Cancer Screening (BCS)": "Breast Cancer Screening",
//     "Haemoglobin A1c (HbA1c) testing": null,
//     "Controlling High Blood Pressure (CBP)": "Controlling Blood Pressure",
//   },
//   sequence: {
//     careGap: [],
//     payerRoster: [
//       "Patient Card ID",
//       "Patient First Name",
//       "Patient Last Name",
//       "Patient DOB",
//       "Gender",
//       "Patient Address",
//       "Patient City",
//       "Patient State",
//       "Patient Zip Code",
//       "Primary Phone",
//       "Insurance Carrier",
//       "Patient Insurance Card ID",
//       "Care Opportunity",
//       "Patient Barriers",
//       "Care Opportunity Status",
//       "Last Service",
//       "Primary Care Provider Name",
//       "PCP NPI",
//       "Annual Care Visit Date",
//       "Do Not Call",
//     ],
//     careGapPatient: [],
//   },
//   payerRoster: {
//     DOB: "Patient DOB",
//     City: "Patient City",
//     Email: null,
//     Phone: "Primary Phone",
//     State: "Patient State",
//     Gender: "Gender",
//     Zipcode: "Patient Zip Code",
//     Benefits: null,
//     "Last Name": "Patient Last Name",
//     "First Name": "Patient First Name",
//     "Do Not Call": null,
//     "Medicaid ID": "Patient Card ID",
//     "Last Service": null,
//     "Physician NPI": "PCP NPI",
//     "Address Line 1": "Patient Address",
//     "Address Line 2": null,
//     "Effective Date": null,
//     "Physician Name": "Primary Care Provider Name",
//     "Care Opportunity": null,
//     "Patient Barriers": null,
//     "Member Start Date": null,
//     "Redetermination Date": null,
//     "Annual Care Visit Date": null,
//     "Care Opportunity Status": null,
//     "Patient Insurance Card ID": null,
//   },
//   careGapPatient: {
//     status: "Care Opportunity Status",
//     barriers: "Patient Barriers",
//     compliance: null,
//     reverse_nature: null,
//     complianceValueMap: {
//       true: [
//         "Closure Confirmed - No action needed at this time",
//         "Closure Confirmed",
//         "Closed",
//       ],
//       false: [
//         "Open",
//         "Chart Submitted; Pending Response",
//         "Chart Submitted",
//         "Pending Response",
//         "Pending",
//       ],
//     },
//   },
// };
