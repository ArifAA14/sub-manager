'use client'
import React from 'react'
import { SubscriptionI } from '../../../lib/types';
import { Input } from '@headlessui/react';
import CurrencyPicker from '../Subs/Modal/CurrencyPicker';
import { HeadlessDate } from '../ui/Selects/Date';
import CategoryPicker from '../Subs/Modal/CategoryPicker';
import SubscriptionTypePicker from '../Subs/Modal/SubscriptionTypePicker';

function NewFormFields({
  subscriptionObject,
  setSubscriptionObject,
  categories,
}: {
  subscriptionObject: SubscriptionI;
    setSubscriptionObject: React.Dispatch<React.SetStateAction<SubscriptionI>>;
    categories: string[] | null
}) {
  const handleChange = (key: keyof SubscriptionI) => (value: string | number) => {
    setSubscriptionObject((prev) => ({ ...prev, [key]: value }));
  };

  const handleNumberInput = (value: string, callback: (value: number) => void) => {
    const number = Number(value);
    if (isNaN(number)) return;
    callback(number);
  };


  return (
    <>
      <Input className='w-full h-full bg-white text-4xl tracking-tight font-sans outline-none font-medium placeholder:text-gray-400'
        placeholder='Subscription Name..'
        autoFocus
        key={'subscription-name'}
        id='subscription-name'
        value={subscriptionObject.title}
        onChange={(e) => handleChange('title')(e.target.value)}
        required
        name='subscription-name'
      />

      <div className='flex flex-col gap-2'>
        <label className='text-gray-400 text-sm font-sans font-medium tracking-tight'>
          Subscription Amount (required)
        </label>

        <Input className='w-full h-full bg-neutral-50 text-black placeholder:text-sm placeholder:text-gray-400 rounded-lg px-4 py-3 
          outline-none font-sans font-medium font-base tracking-tight'
          placeholder='Enter Amount..'
          key={'subscription-amount'}
          id='subscription-amount'
          value={subscriptionObject.amount}
          onChange={(e) => handleNumberInput(e.target.value, handleChange('amount'))}
          required
          name='subscription-amount'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label className='text-gray-400 text-sm font-sans font-medium tracking-tight'>
          Currency (required)
        </label>

        <CurrencyPicker setSubscriptionObject={setSubscriptionObject} value={subscriptionObject.currency}
        />
      </div>

      <div className=' grid lg:grid-cols-2 gap-4'>
        <div className='flex flex-col gap-2'>
          <label className='text-gray-400 text-sm font-sans font-medium tracking-tight'>
            Start Date (required)
          </label>

          <div className='w-full h-full relative'>
            <HeadlessDate
              key={'start-date'}
              value={subscriptionObject.start_date}
              onChange={handleChange('start_date')}
            />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <label className='text-gray-400 text-sm font-sans font-medium tracking-tight'>
            End Date (optional)
          </label>

          <div className='w-full h-full relative'>
            <HeadlessDate
              key={'end-date'}
              value={subscriptionObject.end_date}
              onChange={handleChange('end_date')}
              min={subscriptionObject.start_date ? subscriptionObject.start_date : ''}
            />
          </div>
        </div>
      </div>


      <div className='flex flex-col gap-2'>
        <label className='text-gray-400 text-sm font-sans font-medium tracking-tight'>
          Category (required)
        </label>

        <CategoryPicker
          value={subscriptionObject.category}
          setSubscriptionObject={setSubscriptionObject}
          categories={categories}

        />
      </div>

      <div className='flex flex-col gap-2'>
        <label className='text-gray-400 text-sm font-sans font-medium tracking-tight'>
          Subscription Type (required)
        </label>

        <SubscriptionTypePicker
          setSubscriptionObject={setSubscriptionObject}
        />
      </div>
    </>
  )
}
export default NewFormFields