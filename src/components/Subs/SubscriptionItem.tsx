'use client'
import { useState } from 'react'
import { SubscriptionI } from '../../../lib/types'
import getCurrencySymbol from '../../../utils/currencySymbol'
import ItemControls from './ItemControls'
import SubscriptionItemEditModal from './Modal/SubscriptionItemModal'
import SubscriptionRenewalIndicator from './SubscriptionRenewalIndicator'
import { parse, format } from 'date-fns';




function SubscriptionItem({ subscription, categories }: { subscription: SubscriptionI, categories: string[] }) {
  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }



  return (
    <div className="w-full h-full rounded-lg  flex  bg-white border border-dashed  px-6  group cursor-pointer py-6 justify-between"
      key={subscription.id}
    >
      <div className="flex flex-col w-full items-baseline gap-1"
        onClick={() => open()}>

        <h2 className="text-lg font-medium  font-serif tracking-tight text-black group-hover:underline transition-all ease-linear duration-300">
          {subscription.title}
        </h2>

        <h1 className="text-sm lg:text-base font-normal mt-1.5 font-sans tracking-tight text-gray-500 group-hover:text-gray-600 transition-all ease-linear duration-300">
          {getCurrencySymbol(subscription.currency)}{subscription.amount} / {subscription.subscription_type}
        </h1>

        <h1 className="text-sm lg:text-base font-normal font-sans tracking-tight text-gray-500 group-hover:text-gray-600 transition-all ease-linear duration-300">
          From {format(parse(subscription.start_date, 'dd/MM/yyyy', new Date()), 'do MMMM yyyy')}
        </h1>
        <SubscriptionRenewalIndicator start_date={subscription.start_date}
          renewaltype={subscription.subscription_type}
          end_date={subscription.end_date}
        />
      </div>

      <div className="flex flex-col items-end justify-between h-full gap-0   ">
        <ItemControls id={subscription.id} />
        <div className='w-fit  px-4 py-1 rounded-lg bg-neutral-50 border border-dashed text-gray-600 font-sans text-sm font-medium tracking-tight'>
          {subscription.category}
        </div>
      </div>


      <SubscriptionItemEditModal
        key={subscription.id + 'modal'}
        isOpen={isOpen}
        close={close}
        subscription={subscription}
        categories={categories}
      />
    </div>
  )
}

export default SubscriptionItem