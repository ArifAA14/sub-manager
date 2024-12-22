import Card from '@/components/Dashboard/Card'
import React from 'react'
import { SubscriptionI } from '../../../lib/types'



function Cards({ subscriptions }: { subscriptions: SubscriptionI[] | null }) {
  if (!subscriptions) return null;
  return (
    <div className="w-full h-full grid lg:grid-cols-3 lg:border-b-0 gap-6  mt-10">
      <Card
        text="Monthly"
        subscriptions={subscriptions}
      />
      <Card
        text="Yearly"
        subscriptions={subscriptions}
      />
      <Card
        text="Total Subscriptions"
        subscriptions={subscriptions}
      />
    </div>
  )
}

export default Cards