'use server';
import { revalidatePath } from "next/cache";
import DbService from "../data/DbService";
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

export async function update(subscriptionObject: SubscriptionI): Promise<{ success: boolean; message?: string }> {
  try {
    const db = DbService.getInstance();
    revalidatePath("/");
    return await db.updateSubscription(subscriptionObject);
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to update subscription" };
  }
}

export async function uploadURL(subscriptionId: string, url: string): Promise<{ success: boolean; message?: string }> {
  try {
    const db = DbService.getInstance();
    revalidatePath("/");
    return await db.upload(subscriptionId, url);
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to upload invoice" };
  }
}