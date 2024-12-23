import React from "react";
import { formatDistance, parse, addMonths, addYears, differenceInDays } from "date-fns";

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

  const calculateRenewalDate = () => {
    if (end_date) {
      const parsedEndDate = parse(end_date, "dd/MM/yyyy", new Date());
      if (parsedEndDate > new Date()) {
        return parsedEndDate;
      } else {
        return null;
      }
    }

    if (renewaltype === "Monthly") {
      let renewalDate = parsedStartDate;
      while (renewalDate < new Date()) {
        renewalDate = addMonths(renewalDate, 1);
      }
      return renewalDate;
    } else if (renewaltype === "Yearly") {
      let renewalDate = parsedStartDate;
      while (renewalDate < new Date()) {
        renewalDate = addYears(renewalDate, 1);
      }
      return renewalDate;
    }

    return null;
  };


  const renewalDate = calculateRenewalDate();

  if (!renewalDate || isNaN(renewalDate.getTime())) {
    return (
      <h1 className="text-xs lg:text-base font-normal font-sans tracking-tight
       text-gray-500 group-hover:text-gray-600 transition-all ease-linear duration-300">
        Invalid renewal information
      </h1>
    );
  }

  const renewalIn = formatDistance(renewalDate, new Date());
  const renewalInDays = differenceInDays(renewalDate, new Date());

  function renewalInDaysColor() {
    if (renewalInDays <= 10 && renewalInDays > 0) {
      return "text-red-600";
    } else {
      return "text-gray-500";
    }
  }

  return (
    <h1 className={`text-sm lg:text-md font-normal font-sans tracking-tight whitespace-nowrap
     ${renewalInDaysColor()} group-hover:text-gray-600 transition-all ease-linear duration-300`}>
      {end_date ? 'Expires' : 'Renews'} In {renewalIn}
    </h1>
  );
}

export default SubscriptionRenewalIndicator;
