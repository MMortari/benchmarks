import { Client } from "pg";
import { databaseConnection } from "../config";

class Database {
  private client?: Client;

  get db(): Client {
    if (!this.client) {
      throw new Error("Database not initialized");
    }
    return this.client;
  }

  async connect() {
    this.client = new Client(databaseConnection);

    await this.client.connect();

    console.log("Database connected");
  }

  async disconnect() {
    await this.client?.end();
    console.log("Database disconnected");
  }
}

export default new Database();
