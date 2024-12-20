'use server';

import { revalidatePath } from "next/cache";
import DbService from "../../../lib/DbService";
import { SubscriptionI } from "../../../lib/types";



export async function create(subscriptionObject: SubscriptionI): Promise<{ success: boolean; message?: string }> {
  try {
    const db = DbService.getInstance();
    revalidatePath("/"); 
    return await db.addSubscription(subscriptionObject);
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to add subscription" };
  }
}


export async function getAll(userId: string): Promise<SubscriptionI[] | null> {
  try {
    const db = DbService.getInstance();
    return await db.getSubscriptions(userId);
  } catch (error) {
    console.error(error);
    return null;
  }
}


export async function remove(subId: string): Promise<{ success: boolean; message?: string }> {
  try {
    const db = DbService.getInstance();
    revalidatePath("/");
    return await db.deleteTask(subId);
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to delete subscription" };
  }
}
