import React from 'react'
import { getAll } from '../actions/SubscriptionService';
import Cards from '../Cards/Cards';
import Subscriptions from '@/components/Subs/Subscriptions';

async function Content({ userId }: { userId: string }) {
  const subscriptions = await getAll(userId as string);

  return (
    <div className="w-full h-full  border-l-0 border-r-0 lg:px-0 px-4">
      <Cards subscriptions={subscriptions} />
      <Subscriptions subscriptions={subscriptions} />
    </div>
  )
}

export default Content