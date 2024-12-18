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

  // const filtered =
  //   query === ''
  //     ? typeOptions
  //     : typeOptions.filter((option) =>
  //       option.name.toLowerCase().includes(query.toLowerCase())
  //     );

  const handleChange = (newValue: TypeOptionsI) => {
    setSelected(newValue);
    setQuery(''); // Clear query after selection
    setSubscriptionObject((prev) => ({
      ...prev,
      category: newValue && newValue.name,
    }));
  };

  const handleInputFocus = () => {
    if (!selected) {
      setQuery(' '); // Clear input for typing if no valid selection exists
    }
  };

  return (
    <Select immediate value={selected} onChange={handleChange} onClose={() => setQuery('')}>
      <div className="relative h-full w-full">
        <SelectInput
          displayValue={(option: TypeOptionsI | null) =>
            option?.name || (query ? query : 'Begin typing or select...')
          }
          onFocus={handleInputFocus} // Clear the placeholder when focused
          onChange={(e) => setQuery(e.target.value)} // Allow typing
          className="w-full placeholder:text-gray-400"
        />
        <SelectIcon />
      </div>

      <SelectOptions className="absolute mt-1 max-h-60 w-full overflow-auto border rounded bg-white shadow-lg">
        {/* Show query as a selectable option */}
        {query.length > 3 && (
          <SelectOption
            value={{ name: query }}
            className="group flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100"
          >
            <CheckIcon className="invisible size-4 group-data-[selected]:visible" />
            <span className="text-sm/6">{query}</span>
          </SelectOption>
        )}

        {/* Render filtered existing options */}
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
