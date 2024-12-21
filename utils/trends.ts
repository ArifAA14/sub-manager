import { SubscriptionI } from "../lib/types";
import { parse, isSameMonth, subMonths, isSameYear, subYears } from "date-fns";

export function getMonthlyTrends(subscriptions: SubscriptionI[]): number {
  const now = new Date();

  const thisMonthData = subscriptions.filter((sub) => {
    const startDate = parse(sub.start_date, "dd/MM/yyyy", new Date());
    return isSameMonth(startDate, now) && sub.subscription_type === 'Monthly';
  });

  const lastMonthData = subscriptions.filter((sub) => {
    const startDate = parse(sub.start_date, "dd/MM/yyyy", new Date());
    return isSameMonth(startDate, subMonths(now, 1)) && sub.subscription_type === 'Monthly';
  });

  const thisMonthTotal = thisMonthData.reduce((acc, curr) => acc + curr.amount, 0);
  const lastMonthTotal = lastMonthData.reduce((acc, curr) => acc + curr.amount, 0);

  if (lastMonthTotal === 0 && thisMonthTotal === 0) {
    return 0; 
  }
  if (lastMonthTotal === 0) {
    return 100; 
  }
  if (thisMonthTotal === 0) {
    return -100; 
  }

  const percentageChange = ((thisMonthTotal - lastMonthTotal) / lastMonthTotal) * 100;

  return parseFloat(percentageChange.toFixed(2));
}


export function getYearlyTrends(subscriptions: SubscriptionI[]): number {
  const now = new Date();

  const thisYearData = subscriptions.filter((sub) => {
    const startDate = parse(sub.start_date, "dd/MM/yyyy", new Date());
    return isSameYear(startDate, now) && sub.subscription_type === 'Yearly';
  });
  const lastYearData = subscriptions.filter((sub) => {
    const startDate = parse(sub.start_date, "dd/MM/yyyy", new Date());
    return isSameYear(startDate, subYears(now, 1)) && sub.subscription_type === 'Yearly';
  });
  const thisYearTotal = thisYearData.reduce((acc, curr) => acc + curr.amount, 0);
  const lastYearTotal = lastYearData.reduce((acc, curr) => acc + curr.amount, 0);
  if (lastYearTotal === 0 && thisYearTotal === 0) {
    return 0;
  }
  if (lastYearTotal === 0) {
    return 0;
  }
  if (thisYearTotal === 0) {
    return -100;
  }
  const percentageChange = ((thisYearTotal - lastYearTotal) / lastYearTotal) * 100;
  return parseFloat(percentageChange.toFixed(2));
}


