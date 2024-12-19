'use client';
import { CheckIcon } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';
import { SubscriptionI } from '../../../../lib/types';
import { Select, SelectIcon, SelectInput, SelectOption, SelectOptions } from '../../ui/Selects/Select';

interface TypeOptionsI {
  name: string;
}

const typeOptions = [
  { name: 'Cloud' },
  { name: 'Marketing' },
  { name: 'Sales Tools' },
  { name: 'Databases' },
  { name: 'Analytics' },
  { name: 'CRM' },
  { name: 'Emails' },
  { name: 'ORMs' },
];

export default function CategoryPicker({
  value,
  setSubscriptionObject,
}: {
  value: string;
  setSubscriptionObject: Dispatch<SetStateAction<SubscriptionI>>;
}) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<TypeOptionsI | null>(
    typeOptions.find((opt) => opt.name === value) || null
  );
  const [placeholder, setPlaceholder] = useState('Select a category or create new..');

  // const filtered =
  //   query === ''
  //     ? typeOptions
  //     : typeOptions.filter((option) =>
  //       option.name.toLowerCase().includes(query.toLowerCase())
  //     );

  const handleChange = (newValue: TypeOptionsI) => {
    setSelected(newValue);
    setQuery('');
    setSubscriptionObject((prev) => ({
      ...prev,
      category: newValue && newValue.name,
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

  return (
    <Select immediate value={selected} onChange={handleChange} onClose={() => setQuery('')}>
      <div className="relative h-full w-full">
        <SelectInput
          displayValue={(option: TypeOptionsI | null) =>
            option?.name || (query ? query : '')
          }
          onFocus={handleInputFocus}
          onChange={(e) => setQuery(e.target.value)}
          onBlur={handleInputBlur}
          className="w-full placeholder:text-gray-400 text-base z-[10]"
        />
        <p className='group absolute select-none z-[0] pointer-events-none inset-y-0 left-0 text-sm/6 text-gray-500 font-sans py-2.5 px-4'>
          {placeholder}
        </p>
        <SelectIcon />
      </div>

      <SelectOptions className="absolute mt-2 max-h-60 w-full overflow-auto border rounded bg-white shadow-lg">
        {query.length > 3 && (
          <SelectOption
            value={{ name: query }}
            className="group flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100"
          >
            <CheckIcon className="invisible size-4 group-data-[selected]:visible" />
            <span className="text-sm/6">{query}</span>
          </SelectOption>
        )}

        {typeOptions.map((f) => (
          <SelectOption
            key={f.name}
            value={f}
            className="group flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100"
          >
            <CheckIcon className="invisible size-4 group-data-[selected]:visible" />
            <div className="text-sm">{f.name}</div>
          </SelectOption>
        ))}
      </SelectOptions>
    </Select>
  );
}
