'use client';
import { CheckIcon } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';
import { SubscriptionI } from '../../../../lib/types';
import { Select, SelectIcon, SelectInput, SelectOption, SelectOptions } from '../../ui/Selects/Select';

interface TypeOptionsI {
  name: string;
}

const typeOptions = [
  { name: 'USD' },
  { name: 'GBP' },
  { name: 'SAR' },
  { name: 'INR' },
];

export default function CurrencyPicker({
  value,
  setSubscriptionObject,
}: {
  value: string | undefined;
  setSubscriptionObject: Dispatch<SetStateAction<SubscriptionI>>;
}) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<TypeOptionsI | null>(
    typeOptions.find((opt) => opt.name === value) || null
  );
  const [placeholder, setPlaceholder] = useState('GBP');

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
      currency: newValue && newValue.name,
    }));
  };

  const handleInputFocus = () => {
    setPlaceholder('');
  };

  const handleInputBlur = () => {
    if (!selected && query === '') {
      setPlaceholder('GBP');
    }
  }

  return (
    <Select immediate value={selected} onChange={handleChange} onClose={() => setQuery('')}>
      <div className="relative h-full w-full flex-1">
        <SelectInput
          displayValue={(option: TypeOptionsI | null) =>
            option?.name || (query ? query : '')
          }
          onFocus={handleInputFocus}
          onChange={(e) => setQuery(e.target.value)}
          onBlur={handleInputBlur}
          className='w-full  font-sans bg-neutral-50  rounded-lg px-4  font-medium flex items-center   pr-6  lg:text-sm
      focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 text-base z-[10] py-3'
        />
        <p className='group absolute select-none z-[0] pointer-events-none inset-y-0 left-0 text-xs lg:text-sm/6 text-gray-500 font-sans py-4 lg:py-3 px-4'>
          {
            value ? '' : placeholder
          }
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
