'use client'
import React, { useState } from 'react'
import SubscriptionItem from './SubscriptionItem';
import { PlusIcon } from 'lucide-react';
import SubscriptionItemModal from './Modal/SubscriptionItemModal';

const subscriptions = [
  { title: 'Azure', amount: '£5000', type: 'Yearly', category: 'Cloud' },
  { title: 'Google Analytics', amount: '£3650', type: 'Yearly', category: 'Analytics' },
  { title: 'Google Ads', amount: '£3650', type: 'Yearly', category: 'Marketing' },
  { title: 'Dynamics 365', amount: '£1400.99', type: 'Yearly', category: 'ERP' },
  { title: 'Open AI', amount: '£28.99', type: 'Monthly', category: 'APIs' },
];




function SubscriptionItems() {

  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  return (
    <div className="grid lg:grid-cols-3 mt-6 grid-cols-1 gap-6 w-full">
      {
        subscriptions.map((subscription, index) => (
          <SubscriptionItem key={index} {...subscription} />
        ))
      }
      <div className="w-full h-full group col-span-fill cursor-pointer flex-col gap-2 p-6 border-b 
      border rounded-xl flex items-center justify-center"
        onClick={() => open()}>
        <PlusIcon className="text-gray-400  cursor-pointer group-hover:text-black 
        transition-all ease-linear duration-300" size={20} />
        <h1 className="text-lg font-medium font-sans tracking-tight text-gray-400 group-hover:text-black 
        transition-all ease-linear duration-300">
          New Subscription
        </h1>
      </div>

      <SubscriptionItemModal isOpen={isOpen} close={close} key={'new-item'} />
    </div>
  )
}

export default SubscriptionItems