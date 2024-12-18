'use client'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import clsx from 'clsx'
import { CheckIcon, ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'

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
        <Combobox value={selected} onChange={(value) => setSelected(value)} onClose={() => setQuery('')}>
            <div className="relative h-full w-fit ">
                <ComboboxInput
                    className={clsx(
                        'w-full border font-sans bg-white  px-8 text-black font-medium border-r py-4 pr-6 text-sm/6',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                    )}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    displayValue={(person: any) => person?.name}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                    <ChevronDownIcon className="size-4 text-gray-300 group-data-[hover]:text-black" />
                </ComboboxButton>
            </div>

            <ComboboxOptions
                anchor="bottom"
                transition
                className={clsx(
                    'w-[var(--input-width)] border bg-white/60 mt-2  ml-4 backdrop-blur  [--anchor-gap:var(--spacing-1)] empty:invisible',
                    'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                )}
            >
                {filteredPeople.map((person) => (
                    <ComboboxOption
                        key={person.id}
                        value={person}
                        className="group flex cursor-default items-center gap-2  py-1.5 px-3 select-none
                         data-[focus]:bg-black data-[focus]:cursor-pointer data-[focus]:text-white text-black "
                    >
                        <CheckIcon className="invisible size-4   group-data-[selected]:visible" />
                        <div className="text-sm/6 ">{person.name}</div>
                    </ComboboxOption>
                ))}
            </ComboboxOptions>
        </Combobox>
    )
}
