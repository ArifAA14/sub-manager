import NewSubForm from '@/components/New/NewSubForm'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { auth } from '../../../auth'
import { getAll } from '../actions/SubscriptionService'

async function Page() {
  const user = await auth()
  if (!user) return
  const userId = user.user?.id
  if (!userId) return
  const subscriptions = await getAll(userId as string)
  if (!subscriptions) return
  const uniqueCategories = [...new Set(subscriptions.map((sub) => sub.category))]


  return (
    <div className="w-full h-full bg-white min-h-screen px-6 lg:px-2 py-4   flex flex-col lg:max-w-[75%] mx-auto">

      <div className="w-full h-full ">

        <div className="w-full h-full flex items-center  mt-4 rounded-xl    justify-between">
          <Link href={'/'}>
            <h2 className="lg:text-base text-base font-medium font-sans flex items-center gap-2 tracking-tight text-gray-400">
              <ArrowLeft size={20} className="text-gray-400" /> Back
            </h2>
          </Link>


        </div>

      </div>
      <NewSubForm userId={userId} categories={uniqueCategories} />
    </div>
  )
}

export default Page