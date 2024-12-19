import { Input } from '@/components/ui/Inputs/Input';
import DatePicker from '@/components/ui/Selects/Datepicker';
import React from 'react';
import { SubscriptionI } from '../../../../lib/types';
import CategoryPicker from './CategoryPicker';
import SubscriptionTypePicker from './SubscriptionTypePicker';
import CurrencyPicker from './CurrencyPicker';

function SubscriptionModelFields({
  subscriptionObject,
  setSubscriptionObject,
  close,
  handleSave
}: {
  subscriptionObject: SubscriptionI;
  setSubscriptionObject: React.Dispatch<React.SetStateAction<SubscriptionI>>;
    close: () => void;
    handleSave: () => void;
}) {
  const handleChange = (key: keyof SubscriptionI) => (value: string | number) => {
    setSubscriptionObject((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex flex-col w-full h-full justify-between mt-4 py-2">
      <div className="flex flex-col gap-4">
        <div className='flex flex-col gap-1.5'>
          <label className='text-sm font-sans font-medium text-gray-400 px-1'>Title</label>
        <Input
          placeholder="Title"
          type="text"
          required
          value={subscriptionObject.title}
          onChange={(e) => handleChange('title')(e.target.value)}
          />
        </div>

        <div className='w-full  flex flex-col gap-1.5'>
          <label className='text-sm font-sans font-medium text-gray-400 px-1'>Subscription Amount</label>
            <Input
              placeholder="Amount"
              type="number"
              required
              min={0}
            className='w-full'
              value={subscriptionObject.amount}
              onChange={(e) => handleChange('amount')(Number(e.target.value))}
            />
        </div>

        <div className='flex flex-col gap-1.5'>
          <label className='text-sm font-sans font-medium text-gray-400 px-1'>Currency</label>
          <CurrencyPicker value={subscriptionObject.currency} setSubscriptionObject={setSubscriptionObject} />
        </div>

        <div className='w-full h-full flex flex-col gap-1.5'>
          <label className='text-sm font-sans font-medium text-gray-400 px-1'>Dates</label>
          <div className='grid lg:grid-cols-2 gap-4'>
        <DatePicker
          label="Start Date"
          value={subscriptionObject.start_date}
          onChange={handleChange('start_date')}
        />
        <DatePicker
          label="End Date"
          value={subscriptionObject.end_date}
          onChange={handleChange('end_date')}
          min={subscriptionObject.start_date ? subscriptionObject.start_date : ''}
            />
          </div>
        </div>
        <div className='flex flex-col gap-1.5'>
          <label className='text-sm font-sans font-medium text-gray-400 px-1'>Subscription Type</label>

          <SubscriptionTypePicker setSubscriptionObject={setSubscriptionObject} />
        </div>
        <div className='flex flex-col gap-1.5'>
          <label className='text-sm font-sans font-medium text-gray-400 px-1'>Subscription Category</label>
          <CategoryPicker value={subscriptionObject.category} setSubscriptionObject={setSubscriptionObject} />
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 mt-6">
        <button className="border text-gray-600 font-normal px-3.5 py-1.5 rounded-lg font-sans  " onClick={close}>
          Cancel
        </button>
        <button className="bg-black text-white font-normal px-3.5 py-1.5 hover:bg-black/90 transition-all ease-in-out duration-300 rounded-lg shadow-sm"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default SubscriptionModelFields;
