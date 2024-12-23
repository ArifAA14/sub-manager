'use client'
import { PlusIcon } from 'lucide-react';
import { SubscriptionI } from '../../../lib/types';
import SubscriptionItem from './SubscriptionItem';
import Link from 'next/link';



function SubscriptionItems({ subscriptions, categories }:
  { subscriptions: SubscriptionI[], categories: string[] }) {

  return (
    <div className="grid lg:grid-cols-2 mb-6 mt-6 grid-cols-1 gap-6 w-full">
      {
        subscriptions.map((subscription) => (
          <SubscriptionItem key={subscription.id}
            subscription={subscription}
            categories={categories}
          />
        ))
      }

      <Link href={'/new'} className='w-full h-full'>
        <div className="w-full h-full group col-span-fill border border-dashed cursor-pointer rounded-lg min-h-[160px] flex-col gap-2 p-6 flex items-center justify-center">
        <PlusIcon className="text-gray-400  cursor-pointer group-hover:text-black 
        transition-all ease-linear duration-300" size={26} />
        <h1 className="text-lg font-medium font-sans tracking-tight text-gray-400 group-hover:text-black 
        transition-all ease-linear duration-300">
          New Subscription
        </h1>
        </div>
      </Link>
    </div>
  )
}

export default SubscriptionItems