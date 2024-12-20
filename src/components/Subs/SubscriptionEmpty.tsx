import { CalendarPlus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function SubscriptionEmpty() {
  return (
    <Link href='/new'>
      <div className='w-full h-full flex items-center flex-col gap-0 justify-center  mt-16 min-h-[400px] rounded-lg'>
        <CalendarPlus className='text-gray-400 animate-pulse' size={60} strokeWidth={1} />
        <h2 className='text-lg font-normal font-sans tracking-tight mt-3 text-gray-500'>
          No subscriptions found
        </h2>
        <h2 className='text-sm font-normal font-sans tracking-tight text-gray-400'>
          Get started by adding a new subscription
        </h2>
      </div>
    </Link>
  )
}

export default SubscriptionEmpty