import { User } from "next-auth";
import { turso } from "./client";
import { SubscriptionI } from "./types";
import { v4 as uuidv4 } from 'uuid';

interface UserType extends User {
  password: string;
  emailVerified: boolean;
}

class DbService {
  private static instance: DbService;

  private constructor() { }

  public static getInstance(): DbService {
    if (!DbService.instance) {
      DbService.instance = new DbService();
    }
    return DbService.instance;
  }

  public async createUser(email: string, name: string, password: string, user_id: string) {
    const result = await turso.execute({
      sql: `INSERT INTO users (id, email, name, password) VALUES (?, ?, ?, ?);`,
      args: [user_id, email, name, password],
    });

    if (result.rowsAffected === 0) {
      throw new Error("Failed to create user.");
    }

    return result;
  }

  public async getUserByEmail(email: string | unknown): Promise<UserType | null> {
    if (typeof email !== "string") {
      throw new Error("Invalid email");
    }
    const result = await turso.execute({
      sql: `SELECT * FROM users WHERE email = ?;`,
      args: [email],
    });

    if (result.rows.length === 0) {
      return null;
    }
    const userData = result.rows[0] as unknown as UserType;
    return {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.image,
      emailVerified: userData.emailVerified,
    };
  }

  public async addSubscription(subscription: SubscriptionI) {
    const uniqueId = uuidv4();
    const result = await turso.execute({
      sql: `INSERT INTO subscriptions 
      (id,
      title,
      subscription_type,
      category,
      start_date,
      end_date,
      amount,
      user_id,
      currency)
      values (?, ?, ?, ?, ?, ?, ?, ?, ?);
      `,
      args: [
        uniqueId,
        subscription.title,
        subscription.subscription_type,
        subscription.category,
        subscription.start_date,
        subscription.end_date,
        subscription.amount,
        subscription.user_id,
        subscription.currency || "USD",
      ],
    });
    if (result.rowsAffected === 0) {
      return { success: false, message: "Failed to create task." };
    }
    return { success: true, message: "Subscription created successfully." };
  }
}

export default DbService;
