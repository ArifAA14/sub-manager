'use client'
import { create } from '@/app/actions/SubscriptionService'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ZodError } from 'zod'
import { SubscriptionI } from '../../../lib/types'
import { addSubscriptionSchema } from '../../../lib/zod/schema'
import NewFormFields from './NewFormFields'

function NewSubForm({ userId }: { userId: string }) {
  const router = useRouter()
  const [subscriptionObject, setSubscriptionObject] = useState<SubscriptionI>({
    id: '',
    title: '',
    subscription_type: '',
    category: '',
    start_date: '',
    end_date: '',
    amount: 0,
    user_id: userId,
    currency: '',
  })


  async function handleSave() {
    try {
      await addSubscriptionSchema.parseAsync(subscriptionObject)
      await create(subscriptionObject);
      router.push(`/`)
      router.refresh()
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        console.log(error.format())
      }
    }
  }

  return (
    <div className='flex flex-col w-full h-full px-1 gap-6 mt-10 '>
      <NewFormFields subscriptionObject={subscriptionObject}
        setSubscriptionObject={setSubscriptionObject}
      />

      <button className='w-full mt-4 bg-black flex font-medium tracking-tight items-center justify-center px-4 py-3 rounded-lg text-white'
        onClick={handleSave}
      >
        Continue
      </button>

    </div>
  )
}

export default NewSubForm