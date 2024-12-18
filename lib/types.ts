export interface SubscriptionI {
  id: string;
  title: string;
  description: string;
  subscription_type: string;
  category: string;
  start_date: string;
  end_date: string;
  amount: number;
  user_id: string;
}