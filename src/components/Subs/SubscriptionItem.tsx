import React from 'react'
import { Ellipsis, EllipsisVertical } from 'lucide-react'
import ItemControls from './ItemControls'

function SubscriptionItem({ title, amount, type, category }: { title: string, amount: string, type: string, category: string }) {
  return (
    <div className="w-full h-full  flex items-center  px-2 group cursor-pointer pb-2 pt-2 justify-between"
      key={title}
    >
      <div className="flex flex-col  items-baseline gap-0.5">
        <h2 className="text-lg font-medium font-serif tracking-tight text-black group-hover:underline transition-all ease-linear duration-300">
          {title}
        </h2>
        <h1 className="text-base font-medium font-sans tracking-tight text-gray-500 transition-all ease-linear duration-300">
          {category}
        </h1>
        <h1 className="text-base font-normal font-sans tracking-tight text-gray-400 group-hover:text-gray-600 transition-all ease-linear duration-300">
          {amount} / {type}
        </h1>
      </div>

      <div className="flex items-center">

        <ItemControls />
      </div>
    </div>
  )
}

export default SubscriptionItem