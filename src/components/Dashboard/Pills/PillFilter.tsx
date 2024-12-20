'use client'
import { CheckIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Select, SelectCloseIcon, SelectIcon, SelectInput, SelectOption, SelectOptions } from '../../ui/Selects/Select'

interface PillFilterProps {
    categories: string[]
    categoryFilter: string
    setCategoryFilter: (category: string) => void
}

export default function PillFilter({ categories, categoryFilter, setCategoryFilter }: PillFilterProps) {
    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState(
        query === '' ? 'All' : categories.find((category) => category.toLowerCase().includes(query.toLowerCase())) || 'All'
    )

    const filtered =
        query === ''
            ? categories
            : categories.filter((category) => {
                return category.toLowerCase().includes(query.toLowerCase())
            })

    useEffect(() => {
        setCategoryFilter(selected)
    }, [selected])


    return (
        <Select value={selected} onChange={(value: string) => setSelected(value)} onClose={() => setQuery('')}>
            <div className="relative h-full w-fit ">
                <SelectInput
                    displayValue={(category: string) => category}
                    onChange={(event) => setQuery(event.target.value)}
                    className='w-full  font-sans bg-neutral-50  rounded-lg px-4  font-medium flex items-center   pr-6  lg:text-sm
      focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black text-base z-[10] py-3'
                />
                <SelectIcon />
                {categoryFilter !== 'All' && (
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
