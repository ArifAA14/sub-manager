'use server';

import DbService from "../../../lib/DbService";
import { SubscriptionI } from "../../../lib/types";



export async function create(subscriptionObject: SubscriptionI): Promise<{ success: boolean; message?: string }> {
  try {
    const db = DbService.getInstance();
    return await db.addSubscription(subscriptionObject);
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to add subscription" };
  }
}