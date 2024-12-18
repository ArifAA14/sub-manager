import Card from "@/components/Dashboard/Card";
import SubscriptionItem from "@/components/Subs/SubscriptionItem";
import { SearchIcon } from "@/components/ui/Icons/SearchIcon";
import PillFilter from "@/components/ui/Pills/PillFilter";

export default function Home() {
  return (
    <div className="w-full h-full bg-white min-h-screen p-8 lg:max-w-[80%] mx-auto flex flex-col  font-[family-name:var(--font-geist-sans)]">


      <div className="w-full h-full flex items-center justify-between">
        <h2 className="lg:text-lg text-base font-medium font-sans tracking-tight text-black">
          Lubab
        </h2>

        <div className="flex items-center gap-6">
          <h2 className="lg:text-lg text-base font-medium font-sans tracking-tight text-black">
            Home
          </h2>
          <h2 className="lg:text-lg text-base font-medium font-sans tracking-tight text-black">
            Add
          </h2>
        </div>
      </div>

      <div className="w-full h-full grid lg:grid-cols-3 gap-6 mt-16">
        <Card color="border-violet-100" amount={'£100.22'} trend={1.2} text="Monthly" />
        <Card color="border-blue-100" amount={"£2400"} trend={-4.4} text="Yearly" />
        <Card color="border-pink-100" amount={16} trend={-1} text="Subscriptions" />
      </div>


      <div className="grid grid-cols-2 w-full h-full mt-10 gap-4 lg:px-2">
        <div className="w-full flex items-center gap-4">
          <PillFilter />
        </div>

        <div className="w-full flex items-end justify-end gap-6">
          <SearchIcon />
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-4 mt-10 lg:px-0">
        <h4 className="text-lg px-1 font-medium mb-4 font-sans tracking-tight text-gray-400">
          Your Subscriptions
        </h4>

        <SubscriptionItem title="Azure" amount="£5000" type="Yearly" category="Cloud" />
        <SubscriptionItem title="Google Analytics" amount="£3650" type="Yearly" category="Analytics" />
        <SubscriptionItem title="Google Ads" amount="£3650" type="Yearly" category="Marketing" />
        <SubscriptionItem title="Dynamics 365" amount="£1400.99" type="Yearly" category="ERP" />
        <SubscriptionItem title="Open AI" amount="£28.99" type="Monthly" category="APIs" />
      </div>
    </div>
  );
}
