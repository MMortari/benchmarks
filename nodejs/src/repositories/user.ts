import { randomUUID } from "crypto";
import database from "../database";
import { User } from "../models/user";

class UserRepository {
  async listUsers(): Promise<User[]> {
    const response = await database.db.query(
      'SELECT * FROM "user" ORDER BY created_at'
    );

    return response.rows;
  }
  async getUser(id: string): Promise<User | undefined> {
    const response = await database.db.query(
      'SELECT * FROM "user" WHERE id = $1 LIMIT 1',
      [id]
    );

    return response.rows[0];
  }
  async create(data: ICreate): Promise<string> {
    const id = randomUUID();

    const response = await database.db.query(
      'INSERT INTO "user" ("id", "name", "email") VALUES ($1, $2, $3)',
      [id, data.name, data.email]
    );

    if (!response.rowCount) {
      throw new Error("Error to create user");
    }

    return id;
  }
}

type ICreate = Omit<User, "id" | "created_at">;

export default new UserRepository();
