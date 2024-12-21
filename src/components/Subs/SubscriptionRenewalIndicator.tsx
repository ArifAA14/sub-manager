import React from "react";
import { formatDistance, parse, addMonths, addYears } from "date-fns";

function SubscriptionRenewalIndicator({
  start_date,
  end_date,
  renewaltype,
}: {
  start_date: string;
  renewaltype: string;
  end_date?: string;
}) {
  const parsedStartDate = parse(start_date, "dd/MM/yyyy", new Date());

  const renewalDate = end_date
    ? parse(end_date, "dd/MM/yyyy", new Date())
    : renewaltype === "Monthly"
      ? addMonths(parsedStartDate, 1)
      : renewaltype === "Yearly"
        ? addYears(parsedStartDate, 1)
        : null;

  if (!renewalDate || isNaN(renewalDate.getTime())) {
    return (
      <h1 className="text-sm lg:text-base font-normal font-sans tracking-tight
       text-gray-500 group-hover:text-gray-600 transition-all ease-linear duration-300">
        Invalid renewal information
      </h1>
    );
  }

  const renewalIn = formatDistance(renewalDate, new Date());

  return (
    <h1 className="text-sm lg:text-md font-normal font-sans tracking-tight
     text-gray-500 group-hover:text-gray-600 transition-all ease-linear duration-300">
      Renews In {renewalIn}
    </h1>
  );
}

export default SubscriptionRenewalIndicator;
