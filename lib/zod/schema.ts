import { number, object, string } from "zod"



export const addSubscriptionSchema = object({
  title: string().min(1),
  // description: string().min(1),
  amount: number().min(0),
  currency: string().min(1),
  start_date: string().min(1),
  end_date: string().min(1),
  category: string().min(1),
  subscription_type: string().min(1),
  user_id: string().min(1),
  // id: string().min(1),
})