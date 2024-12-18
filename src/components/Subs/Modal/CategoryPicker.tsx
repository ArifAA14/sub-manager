'use client'
import { CheckIcon } from 'lucide-react'
import { useState } from 'react'
import { Select, SelectIcon, SelectInput, SelectOption, SelectOptions } from '../../ui/Selects/Select'


interface TypeOptionsI {
  id: number | null
  name: string
}

const categories = [
  { id: 1, name: 'Cloud' },
  { id: 2, name: 'APIs' },
];

export default function CategoryPicker() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<TypeOptionsI>({
    id: null,
    name: 'Category'
  })

  const filtered =
    query === ''
      ? categories
      : categories.filter((category) => {
        return category.name.toLowerCase().includes(query.toLowerCase())
      })

  return (
    <Select value={selected} onChange={(value: TypeOptionsI) => setSelected(value)} onClose={() => setQuery('')}>
      <div className="relative h-full w-full ">
        <SelectInput
          displayValue={(category: TypeOptionsI) => category?.name}
          onChange={(event) => setQuery(event.target.value)}
        />
        <SelectIcon />
      </div>

      <SelectOptions
      >

        {query.length > 0 && (
          <SelectOption value={{ id: null, name: query }} className="data-[focus]:bg-blue-100">
            <span className="text-sm/6">{query}</span>
          </SelectOption>
        )}

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
