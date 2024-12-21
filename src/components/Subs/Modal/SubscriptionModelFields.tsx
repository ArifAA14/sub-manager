import React from 'react';
import { SubscriptionI } from '../../../../lib/types';
import CategoryPicker from './CategoryPicker';
import SubscriptionTypePicker from './SubscriptionTypePicker';
import CurrencyPicker from './CurrencyPicker';
import { Input } from '@headlessui/react';
import { HeadlessDate } from '@/components/ui/Selects/Date';
import { LoaderCircle } from 'lucide-react';


interface SubscriptionModelFieldsProps {
  subscriptionObject: SubscriptionI;
  setSubscriptionObject: React.Dispatch<React.SetStateAction<SubscriptionI>>;
  close: () => void;
  handleSave: () => void;
  categories: string[];
  loading: boolean;
}

function SubscriptionModelFields({
  subscriptionObject,
  setSubscriptionObject,
  close,
  handleSave,
  categories,
  loading,
}: SubscriptionModelFieldsProps) {

  const handleChange = (key: keyof SubscriptionI) => (value: string | number) => {
    setSubscriptionObject((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex flex-col w-full h-full justify-between mt-4 py-2">
      <div className="flex flex-col lg:gap-6 gap-4">

        <div className='flex flex-col gap-2'>
          <label className='text-gray-400 text-sm font-sans font-medium tracking-tight'>
            Title
          </label>

          <Input className='w-full h-full bg-neutral-50 text-black placeholder:text-sm placeholder:text-gray-400 rounded-lg px-4 py-3 
          outline-none font-sans font-medium font-base tracking-tight'
            placeholder=''
            key={'subscription-amount'}
            id='subscription-amount'
            value={subscriptionObject.title}
            onChange={(e) => handleChange('title')(e.target.value)}
          />
        </div>


        <div className='flex flex-col gap-2'>
          <label className='text-gray-400 text-sm font-sans font-medium tracking-tight'>
            Subscription Amount
          </label>

          <Input className='w-full h-full bg-neutral-50 text-black placeholder:text-sm placeholder:text-gray-400 rounded-lg px-4 py-3 
          outline-none font-sans font-medium font-base tracking-tight'
            placeholder='Enter Amount..'
            key={'subscription-amount'}
            id='subscription-amount'
            value={subscriptionObject.amount}
            onChange={(e) => handleChange('amount')(Number(e.target.value))}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label className='text-gray-400 text-sm font-sans font-medium tracking-tight'>
            Currency
          </label>

          <CurrencyPicker setSubscriptionObject={setSubscriptionObject} value={subscriptionObject.currency}
          />
        </div>

        <div className=' grid lg:grid-cols-2 gap-4'>
          <div className='flex flex-col gap-2'>
            <label className='text-gray-400 text-sm font-sans font-medium tracking-tight'>
              Start Date
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
              End Date
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
            Category
          </label>

          <CategoryPicker
            value={subscriptionObject.category}
            setSubscriptionObject={setSubscriptionObject}
            categories={categories}

          />
        </div>

        <div className='flex flex-col gap-2'>
          <label className='text-gray-400 text-sm font-sans font-medium tracking-tight'>
            Subscription Type
          </label>

          <SubscriptionTypePicker
            setSubscriptionObject={setSubscriptionObject}
            value={subscriptionObject.subscription_type}
          />
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 mt-6">
        <button className="text-gray-600 font-medium font-sans " onClick={close}>
          Cancel
        </button>
        <button className="bg-black text-white h-[36px] font-normal px-5 py-1.5 hover:bg-black/90 transition-all ease-in-out duration-300 rounded-lg shadow-sm"
          onClick={handleSave}
        >
          {
            loading ?
              <LoaderCircle width={16} height={16} className='text-white animate-spin' /> :
              'Save'
          }
        </button>
      </div>
    </div>
  );
}

export default SubscriptionModelFields;
