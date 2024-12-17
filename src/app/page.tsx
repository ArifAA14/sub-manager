import { TrendingDownIcon } from "@/components/ui/Icons/TrendingDownIcon";
import { TrendingUpIcon } from "@/components/ui/Icons/TrendingUpIcon";

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
            Subscriptions
          </h2>
        </div>
      </div>

      <div className="w-full h-full grid lg:grid-cols-3 gap-6 mt-16">
        <div className="w-full h-full bg-violet-50 shadow-sm px-7 border border-violet-100 py-7 rounded-2xl flex flex-col gap-4 relative justify-between">
          <h1 className="text-4xl font-medium font-serif tracking-tight text-black border-b border-violet-100 pb-6">
            £100.22
          </h1>
          <div className="flex items-center w-full justify-between">
            <h2 className="text-sm font-medium  font-sans tracking-tight text-gray-400">
              Monthly
            </h2>
            <div className="flex gap-2 items-center font-serif font-medium text-sm tracking-tighter text-green-600">
              <TrendingUpIcon />1.2
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-orange-50 shadow-sm px-7 py-7 border border-orange-100 rounded-2xl flex flex-col gap-4 relative justify-between">
          <h1 className="text-4xl font-medium font-serif tracking-tight text-black border-b border-orange-100 pb-6">
            £2400.02
          </h1>
          <div className="flex items-center w-full justify-between">
            <h2 className="text-sm font-medium  font-sans tracking-tight text-gray-400">
              Yearly
            </h2>
            <div className="flex gap-2 items-center font-serif font-medium text-sm tracking-tighter text-red-600">
              <TrendingDownIcon />1.2
            </div>
          </div>
        </div>

        <div className="w-full h-full bg-cyan-50 shadow-sm px-7 py-7 rounded-2xl border border-cyan-100 flex flex-col gap-4 relative justify-between">
          <h1 className="text-4xl font-medium font-serif tracking-tight text-black border-b border-cyan-100 pb-6">
            18
          </h1>
          <div className="flex items-center w-full justify-between">
            <h2 className="text-base font-medium  font-sans tracking-tight text-gray-400">
              Subscriptions
            </h2>
            <div className="flex gap-2 items-center font-mono text-sm tracking-tighter text-green-600">
              <TrendingUpIcon />1
            </div>
          </div>
        </div>
      </div>


      <div className="flex w-full h-full mt-10 gap-4">
        <div className="w-fit whitespace-nowrap h-full px-5 py-2 border rounded-full">
          All
        </div>
        <div className="w-fit whitespace-nowrap h-full px-5 py-2 border rounded-full">
          Cloud Storage
        </div>

        <div className="w-fit whitespace-nowrap h-full px-5 py-2 border rounded-full">
          Marketing
        </div>

        <div className="w-fit whitespace-nowrap h-full px-5 py-2 border rounded-full">
          SEO
        </div>
      </div>
    </div>
  );
}
