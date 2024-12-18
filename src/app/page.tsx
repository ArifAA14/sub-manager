import Card from "@/components/Dashboard/Card";
import Landing from "@/components/Guest/Landing";
import { Logout } from "@/components/Guest/Logout/Logout";
import SubscriptionItems from "@/components/Subs/SubscriptionItems";
import { SearchIcon } from "@/components/ui/Icons/SearchIcon";
import PillFilter from "@/components/Dashboard/Pills/PillFilter";
import { auth } from "../../auth";


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

        <SubscriptionItems />
      </div>


    </div>
  );
}
