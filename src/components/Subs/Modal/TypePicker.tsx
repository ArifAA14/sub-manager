'use client'
import { CheckIcon } from 'lucide-react'
import { useState } from 'react'
import { Select, SelectIcon, SelectInput, SelectOption, SelectOptions } from '../../ui/Selects/Select'


interface TypeOptionsI {
  id: number | null
  name: string
}

const typeOptions = [
  { id: 1, name: 'Monthly' },
  { id: 2, name: 'Yearly' },
];

export default function TypePicker() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<TypeOptionsI>({
    id: null,
    name: 'Subscription Type'
  })

  const filtered =
    query === ''
      ? typeOptions
      : typeOptions.filter((options) => {
        return options.name.toLowerCase().includes(query.toLowerCase())
      })

  console.log(selected)
  return (
    <Select value={selected} onChange={(value: TypeOptionsI) => setSelected(value)} onClose={() => setQuery('')}>
      <div className="relative h-full w-full ">
        <SelectInput
          displayValue={(option: TypeOptionsI) => option?.name}
        />
        <SelectIcon />
      </div>

      <SelectOptions
      >


        {filtered.map((f) => (
          <SelectOption
            key={f.id}
            value={f}
          >
            <CheckIcon className="invisible size-4   group-data-[selected]:visible" />
            <div className="text-sm/6 ">{f.name}</div>
          </SelectOption>
        ))}
      </SelectOptions>
    </Select>
  )
}
