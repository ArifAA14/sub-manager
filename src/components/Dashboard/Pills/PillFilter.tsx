'use client'
import { CheckIcon } from 'lucide-react'
import { useState } from 'react'
import { Select, SelectIcon, SelectInput, SelectOption, SelectOptions } from '../../ui/Selects/Select'

const people = [
    { id: 1, name: 'All Categories' },
    { id: 2, name: 'Cloud' },
    { id: 3, name: 'Marketing' },
    { id: 4, name: 'Analytics' },
    { id: 5, name: 'APIs' },
    { id: 6, name: 'ERP' },]

export default function PillFilter() {
    const [query, setQuery] = useState('')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selected, setSelected] = useState<any>(people[0])

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase())
            })



    return (
        <Select value={selected} onChange={(value) => setSelected(value)} onClose={() => setQuery('')}>
            <div className="relative h-full w-fit ">
                <SelectInput
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    displayValue={(person: any) => person?.name}
                    onChange={(event) => setQuery(event.target.value)}
                    className='w-full  font-sans bg-neutral-50  rounded-lg px-4  font-medium flex items-center   pr-6  lg:text-sm
      focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 text-base z-[10] py-3'
                />
                <SelectIcon />
            </div>

            <SelectOptions
            >
                {filteredPeople.map((person) => (
                    <SelectOption
                        key={person.id}
                        value={person}
                    >
                        <CheckIcon className="invisible size-4   group-data-[selected]:visible" />
                        <div className="text-sm/6 ">{person.name}</div>
                    </SelectOption>
                ))}
            </SelectOptions>
        </Select>
    )
}
