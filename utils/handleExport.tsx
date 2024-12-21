import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import { toast } from "sonner";
import { utils, writeFile } from "xlsx";
import { SubscriptionI } from "../lib/types";


export default function exportFile(subscriptions: SubscriptionI[], type: string) {
  if (!type) return toast.error('Please select a file type')
  if (type === 'Excel (XLSX)') {
    return exportXLSX(subscriptions)
  } else if (type === 'CSV ') {
    return exportCSV(subscriptions)
  } else if (type === 'PDF') {
    return exportPDF(subscriptions)
  }
};



function exportCSV(subscriptions: SubscriptionI[]) {
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
  writeFile(workbook, "subscriptions.csv", { bookType: "csv" });
}



function exportXLSX(subscriptions: SubscriptionI[]) {
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
}


function exportPDF(subscriptions: SubscriptionI[]) {
  const doc = new jsPDF();
  doc.text("Subscriptions", 14, 10);
  const headers = [
    ["Title", "Subscription Type", "Category", "Start Date", "End Date", "Amount", "Currency"],
  ];

  const rows = subscriptions.map((sub) => [
    sub.title,
    sub.subscription_type,
    sub.category,
    sub.start_date,
    sub.end_date,
    sub.amount.toString(),
    sub.currency,
  ]);

  autoTable(doc, {
    head: headers,
    body: rows,
    startY: 20,
  });
  doc.save("subscriptions.pdf");
}

