'use client'
import { useState } from 'react';
import { SubscriptionI } from '../../../lib/types';
import CategoryFilter from '../Filters/Category/CategoryFilter';
import Export from '../Filters/Export/Export';
import SubscriptionEmpty from './SubscriptionEmpty';
import SubscriptionItems from './SubscriptionItems';
import SearchFilter from '../Filters/Search/SearchFilter';
import TypeFilter from '../Filters/Type/TypeFilter';

function Subscriptions({ subscriptions }: { subscriptions: SubscriptionI[] | null }) {
  const [categoryFilter, setCategoryFilter] = useState<string>('Categories');
  const [searchInput, setSearchInput] = useState<string>(''); 
  const [typeFilter, setTypeFilter] = useState<string>('All');
  if (!subscriptions) return <SubscriptionEmpty />
  const categories = subscriptions.map((sub) => sub.category);
  const uniqueCategories = [...new Set(categories)];


  const filteredSubscriptions = subscriptions.filter((sub) => {
    const matchesCategory =
      categoryFilter === 'Categories' || sub.category === categoryFilter;

    const matchesType =
      typeFilter === 'All' || sub.subscription_type === typeFilter;
    const matchesSearch =
      searchInput === '' || sub.title.toLowerCase().includes(searchInput.toLowerCase());
    return matchesCategory && matchesSearch && matchesType;
  });


  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex lg:items-center lg:flex-row flex-col justify-between w-full h-full py-0 mt-10 border-t-0 gap-4  px-0">

        <div className='w-full gap-4 flex items-center'>
          <CategoryFilter
          categories={uniqueCategories}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          />
          <TypeFilter
            types={['Monthly', 'Yearly']}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
          />
        </div>
        <div className="w-full gap-4 flex items-center justify-end  px-0 relative">
          <Export subscriptions={subscriptions} />
          <SearchFilter searchInput={searchInput} setSearchInput={setSearchInput} />
        </div>
      </div>
      <SubscriptionItems subscriptions={filteredSubscriptions} categories={uniqueCategories} />

    </div>
  )
}

export default Subscriptions