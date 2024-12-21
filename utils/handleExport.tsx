import { SubscriptionI } from "../lib/types";
import { utils, writeFile } from "xlsx";


export default function exportFile(subscriptions: SubscriptionI[]) {
  const headers = [
    "Title",
    "Subscription Type",
    "Category",
    "Start Date",
    "End Date",
    "Amount",
    "Currency",
  ];

  const data = subscriptions.map((sub) => ({
    Title: sub.title,
    "Subscription Type": sub.subscription_type,
    Category: sub.category,
    "Start Date": sub.start_date,
    "End Date": sub.end_date,
    Amount: sub.amount,
    Currency: sub.currency,
  }));

  const worksheet = utils.json_to_sheet(data);

  utils.sheet_add_aoa(worksheet, [headers], { origin: "A1" });

  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, "Subscriptions");

  writeFile(workbook, "subscriptions_data.xlsx");
};
