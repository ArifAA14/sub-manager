import Card from '@/components/Dashboard/Card'
import React from 'react'
import { SubscriptionI } from '../../../lib/types'


const cards = [
  'Monthly',
  'Yearly',
  'Total Subscriptions'
]

function Cards({ subscriptions }: { subscriptions: SubscriptionI[] | null }) {
  return (
    <div className="w-full h-full grid lg:grid-cols-3 lg:border-b-0 gap-6  mt-10">
      {cards.map((card, index) => (
        <Card key={index} text={card} subscriptions={subscriptions} />
      ))}
    </div>
  )
}

export default Cards