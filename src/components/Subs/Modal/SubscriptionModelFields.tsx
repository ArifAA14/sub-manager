import { Input } from '@/components/ui/Inputs/Input';
import DatePicker from '@/components/ui/Selects/Datepicker';
import React from 'react';
import { SubscriptionI } from '../../../../lib/types';
import CategoryPicker from './CategoryPicker';
import SubscriptionTypePicker from './SubscriptionTypePicker';

function SubscriptionModelFields({
  subscriptionObject,
  setSubscriptionObject,
  close,
}: {
  subscriptionObject: SubscriptionI;
  setSubscriptionObject: React.Dispatch<React.SetStateAction<SubscriptionI>>;
  close: () => void;
}) {
  const handleChange = (key: keyof SubscriptionI) => (value: string | number) => {
    setSubscriptionObject((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex flex-col w-full h-full justify-between mt-4 py-2">
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Title"
          type="text"
          required
          value={subscriptionObject.title}
          onChange={(e) => handleChange('title')(e.target.value)}
        />
        <Input
          placeholder="Description"
          type="text"
          required
          value={subscriptionObject.description}
          onChange={(e) => handleChange('description')(e.target.value)}
        />
        <Input
          placeholder="Amount"
          type="number"
          min={0}
          required
          value={subscriptionObject.amount}
          onChange={(e) => handleChange('amount')(Number(e.target.value))}
        />
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
        <SubscriptionTypePicker setSubscriptionObject={setSubscriptionObject} />
        <CategoryPicker value={subscriptionObject.category} setSubscriptionObject={setSubscriptionObject} />
      </div>
      <div className="flex items-center justify-end gap-2 mt-6">
        <button className="border text-gray-600 font-normal px-3.5 py-1.5 rounded-lg font-sans  " onClick={close}>
          Cancel
        </button>
        <button className="bg-black text-white font-normal px-3.5 py-1.5 hover:bg-black/90 transition-all ease-in-out duration-300 rounded-lg shadow-sm">
          Save
        </button>
      </div>
    </div>
  );
}

export default SubscriptionModelFields;
