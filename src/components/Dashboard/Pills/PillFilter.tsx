'use client'
import { CheckIcon } from 'lucide-react'
import { useState } from 'react'
import { Select, SelectIcon, SelectInput, SelectOption, SelectOptions } from '../../ui/Selects/Select'



export default function PillFilter({ categories }: { categories: string[] }) {
    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState(
        query === '' ? 'All' : categories.find((category) => category.toLowerCase().includes(query.toLowerCase())) || 'All'
    )

    console.log(selected)

    const filtered =
        query === ''
            ? categories
            : categories.filter((category) => {
                return category.toLowerCase().includes(query.toLowerCase())
            })



    return (
        <Select value={selected} onChange={(value: string) => setSelected(value)} onClose={() => setQuery('')}>
            <div className="relative h-full w-fit ">
                <SelectInput
                    displayValue={(category: string) => category}
                    onChange={(event) => setQuery(event.target.value)}
                    className='w-full  font-sans bg-neutral-50  rounded-lg px-4  font-medium flex items-center   pr-6  lg:text-sm
      focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 text-base z-[10] py-3'
                />
                <SelectIcon />
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
