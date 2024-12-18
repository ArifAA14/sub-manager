'use client'
import React, { useState } from 'react'
import { CalendarClock } from 'lucide-react'
import ItemControls from './ItemControls'
import SubscriptionItemModal from './SubscriptionItemModal'

function SubscriptionItem({ title, amount, type, category }: { title: string, amount: string, type: string, category: string }) {
  let [isOpen, setIsOpen] = useState(true)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <div className="w-full h-full  flex items-center border-b  px-2 group cursor-pointer pb-4 pt-4 justify-between"
      key={title}
      onClick={()=> open()}
      >
      <div className="flex flex-col  items-baseline gap-0.5">

        <h2 className="text-lg font-medium font-serif tracking-tight text-black group-hover:underline transition-all ease-linear duration-300">
          {title}
        </h2>
        <h1 className="text-base mt-1 font-normal font-sans tracking-tight text-gray-400 group-hover:text-gray-600 transition-all ease-linear duration-300">
          {category}
        </h1>
        <h1 className="text-base font-normal font-sans tracking-tight text-gray-400 group-hover:text-gray-600 transition-all ease-linear duration-300">
          {amount} / {type}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="inline-flex items-center text-xs
        font-normal gap-2 focus:outline-none text-green-600 border p-2 rounded-lg">
          <CalendarClock className='text-green-600 ' size={16} /> 22 Days
        </div>
        <ItemControls />
      </div>


<SubscriptionItemModal isOpen={isOpen} close={close}/>
    </div>
  )
}

export default SubscriptionItem