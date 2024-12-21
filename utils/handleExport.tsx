import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import { toast } from "sonner";
import { utils, writeFile } from "xlsx";
import { SubscriptionI } from "../lib/types";
import { differenceInMonths, differenceInYears, parse } from "date-fns";


export function exportFiles(subscriptions: SubscriptionI[], type: string) {
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

export function exportFile(subscription: SubscriptionI) {
  const doc = new jsPDF();

  const parsedStartDate = parse(subscription.start_date, "dd/MM/yyyy", new Date());

  let periodsActive = 0;
  let totalAmount = 0;

  if (subscription.subscription_type === "Monthly") {
    periodsActive = differenceInMonths(new Date(), parsedStartDate) + 1;
    totalAmount = subscription.amount * periodsActive;
  } else if (subscription.subscription_type === "Yearly") {
    periodsActive = differenceInYears(new Date(), parsedStartDate) + 1;
    totalAmount = subscription.amount * periodsActive;
  } else {
    toast.error("An error occurred while exporting the file");
    return;
  }

  const headers = [["Title", "Subscription Type", "Category", "Start Date", "End Date", "Amount", "Currency"]];
  const data = [
    [
      subscription.title,
      subscription.subscription_type,
      subscription.category,
      subscription.start_date,
      subscription.end_date || "N/A",
      `${subscription.amount} ${subscription.currency}`,
      subscription.currency,
    ],
  ];

  const totalRow = [["Total", "", "", "", "", `${totalAmount} ${subscription.currency}`]];

  doc.setFontSize(16);
  doc.text(`Subscription - ${subscription.title}`, 14, 10);

  doc.setFontSize(12);
  autoTable(doc, {
    head: headers,
    body: data,
    startY: 20,
  });

  autoTable(doc, {
    body: totalRow,
    theme: "plain",
    styles: { fontStyle: "bold", fontSize: 12 },
  });

  doc.save(`${subscription.title}-details.pdf`);
}


