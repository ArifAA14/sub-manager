import { SubscriptionI } from "../lib/types";
import { parse, isSameMonth, subMonths } from "date-fns";

export function getMonthlyTrends(subscriptions: SubscriptionI[]): number {
  const now = new Date();

  // Filter subscriptions that started this month and are 'Monthly'
  const thisMonthData = subscriptions.filter((sub) => {
    const startDate = parse(sub.start_date, "dd/MM/yyyy", new Date());
    return isSameMonth(startDate, now) && sub.subscription_type === 'Monthly';
  });

  // Filter subscriptions that started last month and are 'Monthly'
  const lastMonthData = subscriptions.filter((sub) => {
    const startDate = parse(sub.start_date, "dd/MM/yyyy", new Date());
    return isSameMonth(startDate, subMonths(now, 1)) && sub.subscription_type === 'Monthly';
  });

  // Calculate totals for both months
  const thisMonthTotal = thisMonthData.reduce((acc, curr) => acc + curr.amount, 0);
  const lastMonthTotal = lastMonthData.reduce((acc, curr) => acc + curr.amount, 0);

  // Handle edge cases
  if (lastMonthTotal === 0 && thisMonthTotal === 0) {
    return 0; // No data for either month
  }
  if (lastMonthTotal === 0) {
    return 100; // Assume 100% increase if there was no last month data
  }
  if (thisMonthTotal === 0) {
    return -100; // Assume 100% decrease if there is no data this month
  }

  // Calculate percentage change
  const percentageChange = ((thisMonthTotal - lastMonthTotal) / lastMonthTotal) * 100;

  return parseFloat(percentageChange.toFixed(2)); // Return rounded to 2 decimal places
}

