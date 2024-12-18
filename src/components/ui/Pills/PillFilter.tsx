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
    const [selected, setSelected] = useState<any>(people[0])

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <Combobox value={selected} onChange={(value) => setSelected(value)} onClose={() => setQuery('')}>
            <div className="relative">
                <ComboboxInput
                    className={clsx(
                        'w-full rounded-xl font-sans  border text-black font-medium py-1.5 pr-8 px-4 text-sm/6 ',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                    )}
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
                    'w-[var(--input-width)] rounded-xl border bg-white/60 mt-2 backdrop-blur-sm  p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
                    'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                )}
            >
                {filteredPeople.map((person) => (
                    <ComboboxOption
                        key={person.id}
                        value={person}
                        className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-neutral-200"
                    >
                        <CheckIcon className="invisible size-4 text-black group-data-[selected]:visible" />
                        <div className="text-sm/6 text-black">{person.name}</div>
                    </ComboboxOption>
                ))}
            </ComboboxOptions>
        </Combobox>
    )
}
