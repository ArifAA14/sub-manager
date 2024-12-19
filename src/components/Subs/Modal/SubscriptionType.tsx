'use client'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import { SubscriptionI } from '../../../../lib/types'

interface TypeOptionsI {
  name: string;
}


const types = [
  { name: 'Monthly', },
  { name: 'Yearly' },
]

function SubscriptionType({ setSubscriptionObject }: { setSubscriptionObject: Dispatch<SetStateAction<SubscriptionI>> }) {
  const [selected, setSelected] = useState<TypeOptionsI>(types[0])


  const handleChange = (newValue: TypeOptionsI) => {
    setSelected(newValue);
    setSubscriptionObject((prev) => ({
      ...prev,
      subscription_type: newValue.name,
    }));
  };

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup by="name" value={selected} onChange={handleChange} aria-label="Subscription Type" className="w-full grid grid-cols-2 gap-4">
          {types.map((type) => (
            <Radio
              key={type.name}
              value={type}
              className="group relative flex cursor-pointer rounded-lg bg-white border py-3 px-4  transition
              focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-black data-[checked]:text-white"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-sm/6">
                  <p className="font-normal ">{type.name}</p>
                </div>
                <CheckCircleIcon className=" opacity-0 transition ease-linear group-data-[checked]:opacity-100" size={16} />
              </div>
            </Radio>
          ))}
        </RadioGroup>
      </div>
    </div>
  )
}

export default SubscriptionType