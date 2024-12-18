import Card from "@/components/Dashboard/Card";
import Landing from "@/components/Guest/Landing";
import { Logout } from "@/components/Guest/Logout/Logout";
import SubscriptionItem from "@/components/Subs/SubscriptionItem";
import { SearchIcon } from "@/components/ui/Icons/SearchIcon";
import PillFilter from "@/components/ui/Pills/PillFilter";
import { auth } from "../../auth";
import { PlusIcon } from "lucide-react";

const subscriptions = [
  { title: 'Azure', amount: '£5000', type: 'Yearly', category: 'Cloud' },
  { title: 'Google Analytics', amount: '£3650', type: 'Yearly', category: 'Analytics' },
  { title: 'Google Ads', amount: '£3650', type: 'Yearly', category: 'Marketing' },
  { title: 'Dynamics 365', amount: '£1400.99', type: 'Yearly', category: 'ERP' },
  // { title: 'Open AI', amount: '£28.99', type: 'Monthly', category: 'APIs' },
];


export default async function Home() {
  const session = await auth()
  if (!session) {
    return <Landing />
  }

  return (
    <div className="w-full h-full bg-white min-h-screen   flex flex-col">

      <div className="w-full h-full ">

        <div className="w-full h-full flex items-center  mt-4 rounded-xl  lg:max-w-[80%] mx-auto px-4 lg:px-2 py-4  justify-between">
          <h2 className="lg:text-lg text-base font-medium font-serif tracking-tight text-black">
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

      <div className="w-full h-full lg:max-w-[80%] mx-auto border-l-0 border-r-0 lg:px-0 px-4">

        <div className="w-full h-full grid lg:grid-cols-3 lg:border-b-0 gap-6  mt-10">
        <Card amount={'£100.22'} trend={1.2} text="This Month" />
        <Card amount={"£2422"} trend={-4.4} text="This Year" />
        <Card amount={16} trend={-1} text="# Subscriptions" />
      </div>


        <div className="grid grid-cols-2 w-full h-full py-0 mt-10 border-t-0 gap-4  px-0">
          <PillFilter />
          <div className="w-full flex items-center justify-end gap-6 px-0">
          <SearchIcon />
        </div>
      </div>

        <div className="grid lg:grid-cols-3 mt-6 grid-cols-1  gap-6  w-full">
          {
            subscriptions.map((subscription, index) => (
              <SubscriptionItem key={index} {...subscription} />
            ))
          }
          <div className="w-full h-full group col-span-fill cursor-pointer flex-col gap-2 p-6 border-b border rounded-xl flex items-center justify-center">
            <PlusIcon className="text-gray-400  cursor-pointer group-hover:text-black transition-all ease-linear duration-300" size={20} />
            <h1 className="text-lg font-medium font-sans tracking-tight text-gray-400 group-hover:text-black transition-all ease-linear duration-300">
              New Subscription
            </h1>
          </div>
        </div>
      </div>


    </div>
  );
}
