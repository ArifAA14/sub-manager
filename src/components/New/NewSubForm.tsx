'use client'
import React, { useState } from 'react'
import { SubscriptionI } from '../../../lib/types'
import { addSubscriptionSchema } from '../../../lib/zod/schema'
import NewFormFields from './NewFormFields'

function NewSubForm() {
  const [subscriptionObject, setSubscriptionObject] = useState<SubscriptionI>({
    id: '',
    title: '',
    description: '',
    subscription_type: '',
    category: '',
    start_date: '',
    end_date: '',
    amount: 0,
    user_id: '',
    currency: '',
  })

  async function handleSave() {
    try {
      await addSubscriptionSchema.parseAsync(subscriptionObject)
      console.log(subscriptionObject)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex flex-col w-full h-full px-1 gap-6 mt-10 ' >
      <NewFormFields subscriptionObject={subscriptionObject}
        setSubscriptionObject={setSubscriptionObject}
      />

      <button className='w-full mt-4 bg-black flex font-medium tracking-tight items-center justify-center px-4 py-3 rounded-lg text-white'
        onClick={handleSave}
      >
        Continue
      </button>

    </div >
  )
}

export default NewSubForm