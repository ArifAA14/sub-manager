import Landing from "@/components/Guest/Landing";
import { Logout } from "@/components/Guest/Logout/Logout";
import { BotIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { auth } from "../../auth";
import FullSkeleton from "@/components/ui/Skeleton/FullSkeleton";
import Content from "./Content/Content";


export default async function Home() {
  const session = await auth();
  if (!session) {
    return <Landing />;
  }
  const userId = session?.user?.id;

  return (
    <div className="w-full h-full bg-white min-h-screen flex flex-col lg:max-w-[75%] mx-auto">
      <header className="w-full h-full flex items-center mt-4 rounded-xl px-4 lg:px-2 py-4 justify-between">
        <h2 className="lg:text-lg text-base font-medium font-sans tracking-tight text-black">
          Hello {session?.user?.name || "there"}!
        </h2>
        <div className="flex items-center gap-6">
          <Link href="/Chat" className="border rounded-lg p-2 border-dashed">
            <BotIcon className="text-orange-600" size={24} strokeWidth={1} />
          </Link>
          <Link href="/new">
            <h2 className="lg:text-lg text-base font-medium font-sans tracking-tight text-gray-400 hover:text-black transition duration-200 ease-in-out">
              Add
            </h2>
          </Link>
          <Logout />
        </div>
      </header>

      <Suspense fallback={<FullSkeleton />}>
        <Content userId={userId as string} />
      </Suspense>
    </div>
  );
}
