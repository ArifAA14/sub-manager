import React from 'react'
import { CogIcon } from '../ui/Icons/CogIcon'

function SubscriptionItem({title, amount, type}: {title: string, amount: string, type: string}) {
  return (
    <div className="w-full h-full px-1 flex items-center border-b pb-4 pt-4 justify-between  ">
    <div className="flex flex-col gap-1">
      <h2 className="text-lg font-medium font-sans tracking-tight text-black">
        {title}
      </h2>
      <h1 className="text-base font-normal font-sans tracking-tight text-gray-400">
       {amount} / {type}
      </h1>
    </div>

    <div className="flex items-center gap-2">
      <div className="text-gray-400 hover:text-black cursor-pointer transition-all ease-linear duration-300">
        <CogIcon />
      </div>
    </div>
  </div>
  )
}

export default SubscriptionItem