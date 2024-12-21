import Card from "@/components/Dashboard/Card";
import Landing from "@/components/Guest/Landing";
import { Logout } from "@/components/Guest/Logout/Logout";
import Subscriptions from "@/components/Subs/Subscriptions";
import Link from "next/link";
import { auth } from "../../auth";
import { getAll } from "./actions/SubscriptionService";
import SubscriptionEmpty from "@/components/Subs/SubscriptionEmpty";


export default async function Home() {
  const session = await auth()
  if (!session) {
    return <Landing />
  }
  const userId = session?.user?.id;
  const subscriptions = await getAll(userId as string);
  if (!subscriptions) return <SubscriptionEmpty />
  const monthlyData = subscriptions.filter((sub) => sub.subscription_type === "Monthly")
  const monthlyTotal = monthlyData.reduce((acc, curr) => acc + curr.amount, 0)
  const yearlyData = subscriptions.filter((sub) => sub.subscription_type === "Yearly")
  const yearlyTotal = yearlyData.reduce((acc, curr) => acc + curr.amount, 0)


  return (
    <div className="w-full h-full bg-white min-h-screen   flex flex-col lg:max-w-[75%] mx-auto">

      <div className="w-full h-full ">

        <div className="w-full h-full flex items-center  mt-4 rounded-xl   px-4 lg:px-2 py-4  justify-between">
          <h2 className="lg:text-lg text-base font-medium font-sans tracking-tight text-black">
            Hello {session?.user?.name}!
        </h2>

          <div className="flex items-center gap-6 ">
            <Link href={'/new'}>
              <h2 className="lg:text-lg text-base font-medium font-sans tracking-tight text-gray-400 hover:text-black
              transition duration-200 ease-in-out">
              Add
              </h2>
            </Link>
            <Logout />
          </div>
        </div>

      </div>

      <div className="w-full h-full  border-l-0 border-r-0 lg:px-0 px-4">

        <div className="w-full h-full grid lg:grid-cols-3 lg:border-b-0 gap-6  mt-10">
          <Card amount={monthlyTotal}
            text="Monthly"
            subscriptions={subscriptions}
          />
          <Card amount={yearlyTotal} text="Yearly"
            subscriptions={subscriptions}
          />
          <Card amount={subscriptions.length} text="Total Subscriptions"
            subscriptions={subscriptions}
          />
      </div>


        <Subscriptions subscriptions={subscriptions} />
      </div>
    </div>
  );
}
