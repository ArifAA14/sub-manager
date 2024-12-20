'use client'
import { Input } from '@headlessui/react';
import { SearchIcon } from 'lucide-react';
import { SubscriptionI } from '../../../lib/types';
import PillFilter from '../Dashboard/Pills/PillFilter';
import SubscriptionEmpty from './SubscriptionEmpty';
import SubscriptionItems from './SubscriptionItems';

function Subscriptions({ subscriptions }: { subscriptions: SubscriptionI[] | null }) {
  if (!subscriptions) return <SubscriptionEmpty />
  const categories = subscriptions.map((sub) => sub.category);
  const uniqueCategories = [...new Set(categories)];



  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex items-center justify-between w-full h-full py-0 mt-10 border-t-0 gap-4  px-0">
        <PillFilter categories={uniqueCategories} />
        <div className="w-full max-w-[200px] flex items-center justify-end gap-0 px-0 relative">
          <SearchIcon className="absolute left-2 text-gray-400" size={14} />
          <Input type="text" placeholder="Search" className="w-full max-w-[200px] placeholder:text-sm !py-2 px-7 bg-neutral-50 rounded-lg outline-none" />
        </div>
      </div>
      <SubscriptionItems subscriptions={subscriptions} categories={uniqueCategories} />
    </div>
  )
}

export default Subscriptions