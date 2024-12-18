'use client';
import { CheckIcon } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';
import { SubscriptionI } from '../../../../lib/types';
import { Select, SelectIcon, SelectInput, SelectOption, SelectOptions } from '../../ui/Selects/Select';

interface TypeOptionsI {
  name: string;
}

const typeOptions = [
  { name: 'Monthly' },
  { name: 'Yearly' },
];

export default function TypePicker({
  value,
  setSubscriptionObject,
}: {
  value: string;
  setSubscriptionObject: Dispatch<SetStateAction<SubscriptionI>>;
}) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<TypeOptionsI>(
    typeOptions.find((opt) => opt.name === value) || {
      name: 'Subscription Type',
    }
  );

  const filtered =
    query === ''
      ? typeOptions
      : typeOptions.filter((option) =>
        option.name.toLowerCase().includes(query.toLowerCase())
      );

  const handleChange = (newValue: TypeOptionsI) => {
    setSelected(newValue);
    setSubscriptionObject((prev) => ({
      ...prev,
      subscription_type: newValue.name,
    }));
  };

  return (
    <Select value={selected} onChange={handleChange} onClose={() => setQuery('')} >
      <div className="relative h-full w-full">
        <SelectInput
          displayValue={(option: TypeOptionsI) => option?.name}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full placeholder:text-gray-400"
        />
        <SelectIcon />
      </div>

      <SelectOptions className="absolute mt-1 max-h-60 w-full overflow-auto border rounded bg-white shadow-lg">
        {filtered.map((f) => (
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
