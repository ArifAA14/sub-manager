'use client';
import { CheckIcon } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';
import { SubscriptionI } from '../../../../lib/types';
import { Select, SelectIcon, SelectInput, SelectOption, SelectOptions } from '../../ui/Selects/Select';





export default function CategoryPicker({
  value,
  setSubscriptionObject,
  categories,
}: {
  value: string;
    setSubscriptionObject: Dispatch<SetStateAction<SubscriptionI>>;
    categories: string[];
}) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string>(
    categories.find((category) => category === value) ? value : ''
  );
  const [placeholder, setPlaceholder] = useState('Select a category or create new..');
  const handleChange = (newValue: string) => {
    setSelected(newValue);
    setQuery('');
    setSubscriptionObject((prev) => ({
      ...prev,
      category: newValue && newValue
    }));
  };

  const handleInputFocus = () => {
    setPlaceholder('');
  };

  const handleInputBlur = () => {
    if (!selected && query === '') {
      setPlaceholder('Select a category or create new..');
    }
  }

  console.log(selected)

  return (
    <Select immediate value={selected} onChange={handleChange} onClose={() => setQuery('')}>
      <div className="relative h-full w-full">
        <SelectInput
          displayValue={(value: string | null) =>
            value || (query ? query : '')
          }
          onFocus={handleInputFocus}
          onChange={(e) => setQuery(e.target.value)}
          onBlur={handleInputBlur}
          className='w-full  font-sans bg-neutral-50  rounded-lg px-4  font-medium pr-6  lg:text-sm
      focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 text-base z-[10] py-3'
        />
        <p className='group absolute select-none z-[0] pointer-events-none inset-y-0 left-0 text-sm/6 text-gray-500 font-sans py-2.5 px-4'>
          {
            value ? '' : placeholder
          }
        </p>
        <SelectIcon />
      </div>

      <SelectOptions className="absolute mt-2 max-h-60 w-full overflow-auto border rounded bg-white shadow-lg">
        {query.length > 1 && (
          <SelectOption
            value={query}
            className="group flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100"
          >
            <CheckIcon className="invisible size-4 group-data-[selected]:visible" />
            <span className="text-sm/6">{query}</span>
          </SelectOption>
        )}

        {categories.map((category) => (
          <SelectOption
            key={category}
            value={category}
            className="group flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100"
          >
            <CheckIcon className="invisible size-4 group-data-[selected]:visible" />
            <div className="text-sm">{category}</div>
          </SelectOption>
        ))}
      </SelectOptions>
    </Select>
  );
}
