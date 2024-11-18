import { DB } from "./types";
import { Kysely, ParseJSONResultsPlugin } from "kysely";
import { RDSData } from "@aws-sdk/client-rds-data";
import { DataApiDialect } from "kysely-data-api";

const rdsCredentialsSecretArn = "";
const rdsDatabaseClusterArn = "";
const postgreSqlDatabaseName = "";

const dataApiDialect = new DataApiDialect({
  mode: "postgres",
  driver: {
    client: new RDSData(),
    database: postgreSqlDatabaseName,
    secretArn: rdsCredentialsSecretArn,
    resourceArn: rdsDatabaseClusterArn,
  },
});

export const db = new Kysely<DB>({
  dialect: dataApiDialect,
  plugins: [new ParseJSONResultsPlugin()],
});
