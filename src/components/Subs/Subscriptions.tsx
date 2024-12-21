'use client'
import { Input } from '@headlessui/react';
import { SearchIcon } from 'lucide-react';
import { SubscriptionI } from '../../../lib/types';
import PillFilter from '../Dashboard/Pills/PillFilter';
import SubscriptionEmpty from './SubscriptionEmpty';
import SubscriptionItems from './SubscriptionItems';
import { useState } from 'react';
import Export from '../Filters/Export/Export';

function Subscriptions({ subscriptions }: { subscriptions: SubscriptionI[] | null }) {
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [searchInput, setSearchInput] = useState<string>(''); 
  if (!subscriptions) return <SubscriptionEmpty />
  const categories = subscriptions.map((sub) => sub.category);
  const uniqueCategories = [...new Set(categories)];


  const filteredSubscriptions = subscriptions.filter((sub) => {
    const matchesCategory =
      categoryFilter === 'All Categories' || sub.category === categoryFilter;
    const matchesSearch =
      searchInput === '' || sub.title.toLowerCase().includes(searchInput.toLowerCase());
    return matchesCategory && matchesSearch;
  });


  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex lg:items-center lg:flex-row flex-col justify-between w-full h-full py-0 mt-10 border-t-0 gap-4  px-0">
        <PillFilter
          categories={uniqueCategories}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />
        <div className="w-full gap-4 flex items-center justify-end  px-0 relative">
          <Export subscriptions={subscriptions} />
          <div className='w-full relative lg:max-w-[200px] flex items-center gap-2'>
          <SearchIcon className="absolute left-2 text-gray-400" size={14} />
            <Input type="text" placeholder="Search by title.." className="w-full lg:max-w-[200px] placeholder:text-sm
           !py-2 px-7 border border-dashed bg-white rounded-lg outline-none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </div>
      </div>
      <SubscriptionItems subscriptions={filteredSubscriptions} categories={uniqueCategories} />

    </div>
  )
}

export default Subscriptions