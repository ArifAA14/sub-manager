import Card from "@/components/Dashboard/Card";
import Landing from "@/components/Guest/Landing";
import { Logout } from "@/components/Guest/Logout/Logout";
import SubscriptionItems from "@/components/Subs/SubscriptionItems";
import PillFilter from "@/components/Dashboard/Pills/PillFilter";
import { auth } from "../../auth";
import { SearchIcon } from "lucide-react";
import { Input } from "@headlessui/react";


export default async function Home() {
  const session = await auth()
  if (!session) {
    return <Landing />
  }

  return (
    <div className="w-full h-full bg-white min-h-screen   flex flex-col lg:max-w-[75%] mx-auto">

      <div className="w-full h-full ">

        <div className="w-full h-full flex items-center  mt-4 rounded-xl   px-4 lg:px-2 py-4  justify-between">
          <h2 className="lg:text-lg text-base font-medium font-serif tracking-tight text-black">
            Hello {session?.user?.id}!
        </h2>

          <div className="flex items-center gap-6 ">
            <h2 className="lg:text-lg text-base font-medium font-sans tracking-tight text-black">
              Add
            </h2>
            <Logout />
          </div>
        </div>

      </div>

      <div className="w-full h-full  border-l-0 border-r-0 lg:px-0 px-4">

        <div className="w-full h-full grid lg:grid-cols-3 lg:border-b-0 gap-6  mt-10">
        <Card amount={'£100.22'} trend={1.2} text="This Month" />
        <Card amount={"£2422"} trend={-4.4} text="This Year" />
        <Card amount={16} trend={-1} text="# Subscriptions" />
      </div>


        <div className="flex items-center justify-between w-full h-full py-0 mt-10 border-t-0 gap-4  px-0">
          <PillFilter />
          <div className="w-full max-w-[200px] flex items-center justify-end gap-0 px-0 relative">
            <SearchIcon className="absolute left-2 text-gray-400" size={14} />
            <Input type="text" placeholder="Search" className="w-full max-w-[200px] !py-2 px-7 bg-neutral-50 rounded-lg" />
        </div>
      </div>

        <SubscriptionItems />
      </div>


    </div>
  );
}
