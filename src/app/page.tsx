import { CogIcon } from "@/components/ui/Icons/CogIcon";
import { SearchIcon } from "@/components/ui/Icons/SearchIcon";
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
            Add
          </h2>
        </div>
      </div>

      <div className="w-full h-full grid lg:grid-cols-3 gap-6 mt-16">
        <div className="w-full h-full bg-white shadow-sm px-7 border border-violet-100 py-7 rounded-2xl flex flex-col gap-4 relative justify-between">
          <h1 className="text-4xl font-medium font-serif tracking-tight text-black border-b border-violet-100 pb-6">
            £100.22
          </h1>
          <div className="flex items-center w-full justify-between">
            <h2 className="text-sm font-normal  font-sans tracking-tight text-gray-400">
              Monthly
            </h2>
            <div className="flex gap-2 items-center font-serif font-medium text-sm tracking-tighter text-green-600">
              <TrendingUpIcon />1.2
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-white shadow-sm px-7 py-7 border border-orange-100 rounded-2xl flex flex-col gap-4 relative justify-between">
          <h1 className="text-4xl font-medium font-serif tracking-tight text-black border-b border-orange-100 pb-6">
            £ 2400.02
          </h1>
          <div className="flex items-center w-full justify-between">
            <h2 className="text-sm font-normal  font-sans tracking-tight text-gray-400">
              Yearly
            </h2>
            <div className="flex gap-2 items-center font-serif font-medium text-sm tracking-tighter text-red-600">
              <TrendingDownIcon />7.9
            </div>
          </div>
        </div>

        <div className="w-full h-full bg-white shadow-sm px-7 py-7 rounded-2xl border border-pink-100 flex flex-col gap-4 relative justify-between">
          <h1 className="text-4xl font-medium font-serif tracking-tight text-black border-b border-pink-100 pb-6">
            18
          </h1>
          <div className="flex items-center w-full justify-between">
            <h2 className="text-sm font-normal  font-sans tracking-tight text-gray-400">
              Subscriptions
            </h2>
            <div className="flex gap-2 items-center font-mono text-sm tracking-tighter text-green-600">
              <TrendingUpIcon />1
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-2 w-full h-full mt-10 gap-4 lg:px-4">
        <div className="w-full flex items-center gap-4">
          <div className="w-fit whitespace-nowrap h-full lg:px-7 lg:py-3 text-center p-2 text-sm border font-sans font-medium tracking-tight rounded-2xl">
            All Subs
        </div>
          <div className="w-fit whitespace-nowrap h-full px-5 py-2 bg-blue-50 border border-blue-200 font-sans text-blue-600 font-medium tracking-tight rounded-2xl">
            Cloud 
        </div>

          <div className="w-fit whitespace-nowrap h-full px-5 py-2 bg-yellow-50 border border-yellow-300 font-sans text-yellow-600 font-medium tracking-tight rounded-2xl">
          Marketing
        </div>

          <div className="w-fit whitespace-nowrap h-full px-5 py-2 bg-fuchsia-50 border border-fuchsia-300 font-sans text-fuchsia-600 font-medium tracking-tight rounded-2xl">
          SEO
          </div>
        </div>

        <div className="w-full flex items-end justify-end gap-6">
          <SearchIcon />
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-0 mt-10 lg:px-4">
        <h4 className="text-lg px-1 font-medium mb-4 font-sans tracking-tight text-gray-400">
          Your Subscriptions
        </h4>

        <div className="w-full h-full px-1 flex items-center border-b pb-4 pt-4 justify-between  ">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-medium font-sans tracking-tight text-black">
              Dynamics 365
            </h2>
            <h1 className="text-base font-normal font-sans tracking-tight text-gray-400">
              £18.88 /  Monthly
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-gray-400 hover:text-black cursor-pointer transition-all ease-linear duration-300">
              <CogIcon />
            </div>
          </div>
        </div>

        <div className="w-full h-full px-1 flex items-center border-b pb-4 pt-4 justify-between  ">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-medium font-sans tracking-tight text-black">
              Dynamics 365
            </h2>
            <h1 className="text-base font-normal font-sans tracking-tight text-gray-400">
              £18.88 /  Monthly
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-gray-400 hover:text-black cursor-pointer transition-all ease-linear duration-300">
              <CogIcon />
            </div>
          </div>
        </div>

        <div className="w-full h-full px-1 flex items-center border-b pb-4 pt-4 justify-between  ">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-medium font-sans tracking-tight text-black">
              Dynamics 365
            </h2>
            <h1 className="text-base font-normal font-sans tracking-tight text-gray-400">
              £18.88 /  Monthly
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-gray-400 hover:text-black cursor-pointer transition-all ease-linear duration-300">
              <CogIcon />
            </div>
          </div>
        </div>

        <div className="w-full h-full px-1 flex items-center border-b pb-4 pt-4 justify-between  ">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-medium font-sans tracking-tight text-black">
              Dynamics 365
            </h2>
            <h1 className="text-base font-normal font-sans tracking-tight text-gray-400">
              £18.88 /  Monthly
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-gray-400 hover:text-black cursor-pointer transition-all ease-linear duration-300">
              <CogIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
