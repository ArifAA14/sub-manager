'use client'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckIcon } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import { SubscriptionI } from '../../../../lib/types'



const types = [
  'Monthly',
  'Yearly',
]

function SubscriptionTypePicker({ setSubscriptionObject, value }: { setSubscriptionObject: Dispatch<SetStateAction<SubscriptionI>>, value?: string }) {
  const [selected, setSelected] = useState<string>(value ? value : '');

  const handleChange = (newValue: string) => {
    setSelected(newValue);
    setSubscriptionObject((prev) => ({
      ...prev,
      subscription_type: newValue,
    }));
  };

  return (
    <RadioGroup value={selected} onChange={handleChange} aria-label="Subscription Type" className="w-full grid grid-cols-2 gap-4">
      {types.map((type) => (
        <Radio
          key={type}
          value={type}
          className="group relative flex cursor-pointer rounded-lg bg-neutral-50  py-3 px-4  transition text-gray-400
              focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white  data-[checked]:text-black"
        >
          <div className="flex w-full items-center justify-between">
            <div className="text-sm/6">
              <p className="font-medium tracking-tight ">{type}</p>
            </div>
            <CheckIcon className=" opacity-0 transition ease-linear group-data-[checked]:opacity-100" size={16} />
          </div>
        </Radio>
      ))}
    </RadioGroup>
  )
}

export default SubscriptionTypePicker