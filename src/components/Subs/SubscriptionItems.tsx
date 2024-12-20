'use client'
import { getAll } from '@/app/actions/SubscriptionService';
import { useQuery } from '@tanstack/react-query';
import { PlusIcon } from 'lucide-react';
import { Session } from 'next-auth';
import { useState } from 'react';
import SubscriptionItemModal from './Modal/SubscriptionItemModal';
import SubscriptionItem from './SubscriptionItem';
import { Loader } from '../ui/Icons/Loader';



function SubscriptionItems({ session }: { session: Session }) {
  const [isOpen, setIsOpen] = useState(false)
  const userId = session?.user?.id;
  const { data, isLoading, error } = useQuery({
    queryKey: ['subscriptions'],
    queryFn: () => getAll(userId as string),
    enabled: !!userId,
  });


  if (isLoading) return <Loader width={26} height={26} />;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <Loader width={26} height={26} />;



  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  return (
    <div className="grid lg:grid-cols-2 mb-6 mt-6 grid-cols-1 gap-6 w-full">
      {
        data.map((subscription) => (
          <SubscriptionItem key={subscription.id}
            subscription={subscription}
          />
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