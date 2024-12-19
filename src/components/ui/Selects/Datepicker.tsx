import React, { useRef } from 'react'
import { Input } from '../Inputs/Input'

function Datepicker({ label, value, onChange, min }: { label: string, value: string, onChange: (value: string) => void, min?: string | number }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const showPicker = () => inputRef.current?.showPicker();


  return (
    <div className="relative flex items-center w-full" onClick={showPicker}
      key={label}
    >
      <Input
        type="date"
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        ref={inputRef as React.Ref<HTMLInputElement>}
        className="w-full placeholder:text-gray-400 text-base"
        min={min}
      />
      <p className="absolute right-0 px-5 text-sm text-gray-400">{label}</p>
    </div>
  )
}

export default Datepicker