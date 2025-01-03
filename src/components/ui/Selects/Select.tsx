import React from 'react';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import clsx from 'clsx'
import { ChevronDownIcon, XIcon } from 'lucide-react';


// Select Wrapper
const Select = Combobox;

// SelectInput Wrapper
const SelectInput = React.forwardRef<HTMLInputElement, React.ComponentProps<typeof ComboboxInput>>(
  ({ ...props }, ref) => {
    return <ComboboxInput ref={ref} {...props}
    />;
  }
);
SelectInput.displayName = 'SelectInput';


const SelectIcon = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof ComboboxButton>>(
  (props, ref) => {
    return (
      <ComboboxButton
        ref={ref}
        className="group absolute inset-y-0 right-0 px-2.5"
        {...props} // Pass through all props
        id="drop-down" aria-label="Dropdown Button"
      >
        <ChevronDownIcon className="size-4 text-gray-600 group-hover:text-black" />
      </ComboboxButton>
    );
  }
);
SelectIcon.displayName = 'SelectIcon';




const SelectCloseIcon = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof ComboboxButton>>(
  (props, ref) => {
    return (
      <ComboboxButton
        ref={ref}
        className="group absolute inset-y-0 right-6 px-1.5"
        {...props}
        key={'close'}
        id="clear-but" aria-label="Clear Filter"

      >
        <XIcon className="size-4 text-red-600 group-hover:text-red-700" />
      </ComboboxButton>
    );
  }
);
SelectCloseIcon.displayName = 'SelectCloseIcon';





// SelectOptions Wrapper
const SelectOptions = React.forwardRef<HTMLUListElement, React.ComponentProps<typeof ComboboxOptions>>(
  ({ children, ...props }, ref) => {
    return (
      <ComboboxOptions ref={ref} {...props}
        anchor="bottom"
        transition
        className={clsx(
          'w-[var(--input-width)] border rounded-lg bg-white/60 mt-2  ml-0 backdrop-blur  [--anchor-gap:var(--spacing-1)] empty:invisible',
          'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
        )}
      >
        {children}
      </ComboboxOptions>
    );
  }
);
SelectOptions.displayName = 'SelectOptions';

// SelectOption Wrapper
const SelectOption = React.forwardRef<HTMLLIElement, React.ComponentProps<typeof ComboboxOption>>(
  ({ children, ...props }, ref) => {
    return (
      <ComboboxOption ref={ref} {...props}
        className="group flex cursor-default items-center gap-2  py-1.5 px-3 select-none
                   data-[focus]:bg-neutral-300 data-[focus]:cursor-pointer data-[focus]:text-black text-black "
      >
        {children}
      </ComboboxOption>
    );
  }
);
SelectOption.displayName = 'SelectOption';

export { Select, SelectInput, SelectOptions, SelectOption, SelectIcon, SelectCloseIcon };
