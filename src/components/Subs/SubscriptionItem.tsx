'use client'
import React, { useState } from 'react'
import { CalendarClock } from 'lucide-react'
import ItemControls from './ItemControls'
import SubscriptionItemModal from './Modal/SubscriptionItemModal'




function SubscriptionItem({ title, amount, type, category }: { title: string, amount: string, type: string, category: string }) {
  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <div className="w-full h-full  shadow-sm rounded-xl border flex px-6  group cursor-pointer py-5 justify-between"
      key={title}>
      <div className="flex flex-col w-full items-baseline gap-0.5"
        onClick={() => open()}>

        <h2 className="text-lg font-medium font-serif tracking-tight text-black group-hover:underline transition-all ease-linear duration-300">
          {title}
        </h2>
        <h1 className="text-sm mt-2 font-normal font-sans tracking-tight text-gray-500 group-hover:text-gray-600 transition-all ease-linear duration-300">
          {category}
        </h1>
        <h1 className="text-sm font-normal font-sans tracking-tight text-gray-500 group-hover:text-gray-600 transition-all ease-linear duration-300">
          {amount} / {type}
        </h1>

        <h1 className="text-sm font-normal font-sans tracking-tight text-gray-500 group-hover:text-gray-600 transition-all ease-linear duration-300">
          Subscribed since 22 days
        </h1>
      </div>

      <div className="flex items-start gap-4  ">
        <div className="inline-flex items-center text-xs
        font-normal gap-2 focus:outline-none text-green-600">
          <CalendarClock className='text-green-600 ' size={19} />
        </div>
        <ItemControls />
      </div>


      <SubscriptionItemModal isOpen={isOpen} close={close}  key={title}/>
    </div>
  )
}

export default SubscriptionItem