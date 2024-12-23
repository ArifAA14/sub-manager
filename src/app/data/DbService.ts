import 'server-only'
import { User } from "next-auth";
import { turso } from "../../../lib/client";
import { SubscriptionI } from "../../../lib/types";
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
        subscription.end_date || '',
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

  public async getSubscriptions(user_id: string): Promise<SubscriptionI[] | null> {
    const result = await turso.execute({
      sql: `SELECT * FROM subscriptions WHERE user_id = ?;`,
      args: [user_id],
    });

    if (result.rows.length === 0) {
      return null;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const subs = result.rows.map((row: any) => {
      return {
        id: row.id,
        title: row.title,
        subscription_type: row.subscription_type,
        category: row.category,
        start_date: row.start_date,
        end_date: row.end_date,
        amount: row.amount,
        user_id: row.user_id,
        currency: row.currency,
      };
    });

    return subs;
  }

  public async deleteTask(subId: string): Promise<{ success: boolean; message?: string }> {
    const result = await turso.execute({
      sql: `DELETE FROM subscriptions WHERE id = ?;`,
      args: [subId],
    });

    if (result.rowsAffected === 0) {
      return { success: false, message: "Failed to subscription." };
    }
    return { success: true, message: "Subscription deleted." };
  }

  public async updateSubscription(subscription: SubscriptionI): Promise<{ success: boolean; message?: string }> {
    const result = await turso.execute({
      sql: `UPDATE subscriptions SET title = ?, subscription_type = ?, category = ?, start_date = ?, end_date = ?, amount = ?, currency = ? WHERE id = ?;`,
      args: [
        subscription.title,
        subscription.subscription_type,
        subscription.category,
        subscription.start_date,
        subscription.end_date || '',
        subscription.amount,
        subscription.currency,
        subscription.id,
      ],
    });

    if (result.rowsAffected === 0) {
      return { success: false, message: "Failed to update subscription." };
    }
    return { success: true, message: "Subscription updated" };
  }


  public async upload(subscriptionId: string, url: string) {
    const result = await turso.execute({
      sql: `UPDATE subscriptions SET invoice_url = ? WHERE id = ?;`,
      args: [url, subscriptionId],
    });

    if (result.rowsAffected === 0) {
      return { success: false, message: "Failed to upload invoice." };
    }
    return { success: true, message: "Invoice uploaded successfully." };
  }
}

export default DbService;
