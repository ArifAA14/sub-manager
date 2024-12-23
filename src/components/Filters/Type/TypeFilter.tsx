'use client'
import { CheckIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Select, SelectCloseIcon, SelectIcon, SelectInput, SelectOption, SelectOptions } from '../../ui/Selects/Select'

interface TypeFilters {
  types: string[]
  typeFilter: string
  setTypeFilter: (category: string) => void
}

export default function TypeFilter({ types, typeFilter, setTypeFilter }: TypeFilters) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(
    query === '' ? 'All' : types.find((type) => type.toLowerCase().includes(query.toLowerCase())) || 'All'
  )

  const filtered =
    query === ''
      ? types
      : types.filter((type) => {
        return type.toLowerCase().includes(query.toLowerCase())
      })

  useEffect(() => {
    setTypeFilter(selected)
  }, [selected])


  return (
    <Select value={selected} onChange={(value: string) => setSelected(value)} onClose={() => setQuery('')}>
      <div className="relative h-full w-full lg:w-fit ">
        <SelectInput
          displayValue={(category: string) => category}
          onChange={(event) => setQuery(event.target.value)}
          id={'Type input'}
          aria-label='Filter by Type'
          className='w-full  font-sans bg-neutral-50  rounded-lg px-4  font-medium flex items-center   pr-6  lg:text-sm
      focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black text-base z-[10] py-3'
        />
        <SelectIcon />
        {typeFilter !== 'All' && (
          <SelectCloseIcon onClick={() => setSelected('All')} />)
        }
      </div>

      <SelectOptions
      >
        {filtered.map((category) => (
          <SelectOption
            key={category}
            value={category}
          >
            <CheckIcon className="invisible size-4   group-data-[selected]:visible" />
            <div className="text-sm/6 ">{category}</div>
          </SelectOption>
        ))}
      </SelectOptions>
    </Select>
  )
}
