import Card from "@/components/Dashboard/Card";
import SubscriptionItem from "@/components/Subs/SubscriptionItem";
import { SearchIcon } from "@/components/ui/Icons/SearchIcon";
import PillFilter from "@/components/ui/Pills/PillFilter";
import { FilterIcon } from "lucide-react";
import { auth } from "../../auth";
import Landing from "@/components/Guest/Landing";
import { Logout } from "@/components/Guest/Logout/Logout";

export default async function Home() {
  const session = await auth()
  if (!session) {
    return <Landing />
  }

  return (
    <div className="w-full h-full bg-white min-h-screen   flex flex-col  font-[family-name:var(--font-geist-sans)]">

      <div className="w-full h-full border-b">

        <div className="w-full h-full flex items-center border-l border-r lg:max-w-[80%] mx-auto  px-8 py-4  justify-between">
          <h2 className="lg:text-lg text-base font-medium font-sans tracking-tight text-gray-400">
            Hello {session?.user?.name}!
        </h2>

          <div className="flex items-center gap-6 ">
            <h2 className="lg:text-lg text-base font-medium font-sans tracking-tight text-black">
              Add
            </h2>
            <Logout />
          </div>
        </div>

      </div>

      <div className="w-full h-full lg:max-w-[80%] mx-auto   border-l border-r">

        <div className="w-full h-full grid lg:grid-cols-3 gap-0 ">
        <Card amount={'£100.22'} trend={1.2} text="This Month" />
        <Card amount={"£2422"} trend={-4.4} text="This Year" />
        <Card amount={16} trend={-1} text="# Subscriptions" />
      </div>


        <div className="grid grid-cols-2 w-full h-full py-0 gap-4 border-b px-0">
          <PillFilter />

          <div className="w-full flex items-center justify-end gap-6 px-8">
          <SearchIcon />
        </div>
      </div>

        <div className="w-full h-full flex flex-col gap-0 ">
          <div className="flex w-full items-center justify-between border-b mb-0 px-7 py-4">
            <h4 className="text-lg font-medium  font-sans tracking-tight text-gray-600">
          Your Subscriptions
            </h4>

            <div className="flex items-center justify-end">
              <FilterIcon className="text-black transition-all ease-linear duration-300 cursor-pointer" size={20} />
            </div>
          </div>

        <SubscriptionItem title="Azure" amount="£5000" type="Yearly" category="Cloud" />
        <SubscriptionItem title="Google Analytics" amount="£3650" type="Yearly" category="Analytics" />
        <SubscriptionItem title="Google Ads" amount="£3650" type="Yearly" category="Marketing" />
        <SubscriptionItem title="Dynamics 365" amount="£1400.99" type="Yearly" category="ERP" />
        <SubscriptionItem title="Open AI" amount="£28.99" type="Monthly" category="APIs" />
      </div>

      </div>


    </div>
  );
}
