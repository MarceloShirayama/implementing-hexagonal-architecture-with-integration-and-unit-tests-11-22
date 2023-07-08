import pgPromise from "pg-promise";

import { Connection } from "./connection";

const DB_HOST = process.env["DB_HOST"];
const DB_PORT = process.env["DB_PORT"];
const DB_USER = process.env["DB_USER"];
const DB_PASS = process.env["DB_PASS"];
const DB_DATABASE = process.env["DB_DATABASE"];

const DB_URL = `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

export class PostgresAdapter implements Connection {
  conn: any;

  constructor() {
    this.conn = pgPromise()(DB_URL);
  }

  async query(statement: string, params: any): Promise<any> {
    return this.conn.query(statement, params);
  }
  async close(): Promise<any> {
    await this.conn.$pool.end();
  }
}
