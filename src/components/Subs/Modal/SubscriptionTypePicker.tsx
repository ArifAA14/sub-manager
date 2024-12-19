'use client'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckIcon } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import { SubscriptionI } from '../../../../lib/types'

interface TypeOptionsI {
  name: string;
}


const types = [
  { name: 'Monthly', },
  { name: 'Yearly' },
]

function SubscriptionTypePicker({ setSubscriptionObject }: { setSubscriptionObject: Dispatch<SetStateAction<SubscriptionI>> }) {
  const [selected, setSelected] = useState<TypeOptionsI>(types[0])


  const handleChange = (newValue: TypeOptionsI) => {
    setSelected(newValue);
    setSubscriptionObject((prev) => ({
      ...prev,
      subscription_type: newValue.name,
    }));
  };

  return (
    <RadioGroup by="name" value={selected} onChange={handleChange} aria-label="Subscription Type" className="w-full grid grid-cols-2 gap-4">
      {types.map((type) => (
        <Radio
          key={type.name}
          value={type}
          className="group relative flex cursor-pointer rounded-lg bg-neutral-50  py-3 px-4  transition text-gray-400
              focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white  data-[checked]:text-gray-600"
        >
          <div className="flex w-full items-center justify-between">
            <div className="text-sm/6">
              <p className="font-medium tracking-tight ">{type.name}</p>
            </div>
            <CheckIcon className=" opacity-0 transition ease-linear group-data-[checked]:opacity-100" size={16} />
          </div>
        </Radio>
      ))}
    </RadioGroup>
  )
}

export default SubscriptionTypePicker