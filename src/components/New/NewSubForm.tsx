'use client'
import { create } from '@/app/actions/SubscriptionService'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ZodError } from 'zod'
import { SubscriptionI } from '../../../lib/types'
import { addSubscriptionSchema } from '../../../lib/zod/schema'
import NewFormFields from './NewFormFields'
import { LoaderCircle } from 'lucide-react'
import { toast } from 'sonner'

function NewSubForm({ userId, categories }: { userId: string, categories: string[] | null }) {
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
  });
  const [loading, setLoading] = useState(false);


  async function handleSave() {
    setLoading(true);
    try {
      await addSubscriptionSchema.parseAsync(subscriptionObject)
      await create(subscriptionObject);
      toast.success('Subscription created successfully!')
      router.push(`/`)
      router.refresh()
      setLoading(false);
    } catch (error: unknown) {
      setLoading(false);
      toast.error('Invalid submission, please try again!')
      if (error instanceof ZodError) {
        console.log(error.format())
      }
    }
  }

  return (
    <div className='flex flex-col w-full h-full px-1 gap-6 mt-10 '>
      <NewFormFields subscriptionObject={subscriptionObject}
        setSubscriptionObject={setSubscriptionObject}
        categories={categories}
      />

      <button className='w-full mt-4 bg-neutral-50 flex font-medium tracking-tight items-center 
      justify-center px-4 py-3 rounded-lg text-gray-500 border border-dashed h-[46px]'
        onClick={handleSave}
      >
        {
          loading ?
            <LoaderCircle width={16} height={16} className='text-gray-500 animate-spin' /> :
            'Create'
        }
      </button>

    </div>
  )
}

export default NewSubForm