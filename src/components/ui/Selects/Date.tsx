'use client'
import { format, isValid, parse } from "date-fns";
import { useId, useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";

export function HeadlessDate({ value, onChange, min }: { value: string, onChange: (value: string) => void, min?: string }) {
  const inputId = useId();
  const defaultClassNames = getDefaultClassNames();
  const [month, setMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [hidden, setHidden] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const handleDayPickerSelect = (date: Date | undefined) => {
    if (!date) {
      setInputValue("");
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
      setMonth(date);
      setInputValue(format(date, "dd/MM/yyyy"));
      onChange(format(date, "dd/MM/yyyy"));
      setHidden(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    const parsedDate = parse(e.target.value, "dd/MM/yyyy", new Date());
    if (isValid(parsedDate)) {
      setSelectedDate(parsedDate);
      setMonth(parsedDate);
    } else {
      setSelectedDate(undefined);
    }
  };

  function calculateMin() {
    if (!min) return;
    const minDate = parse(min, "dd/MM/yyyy", new Date());
    return minDate;
  }

  return (
    <>
      <label htmlFor={inputId}>
      </label>
      <input className='w-full bg-neutral-50 text-black placeholder:text-sm placeholder:text-gray-400 rounded-lg px-4 py-3 
          outline-none font-sans font-medium font-base tracking-tight'
        style={{ fontSize: "inherit" }}
        id={inputId}
        type="text"
        value={value || inputValue}
        placeholder="dd/MM/YYYY"
        onChange={handleInputChange}
        onClick={() => setHidden(false)}
      />
      <DayPicker
        classNames={{
          root: `${defaultClassNames.root} ${hidden ? 'hidden' : ''} border p-2 w-fit
           absolute  left-10 mt-4 bg-neutral-50 rounded-lg`,
          chevron: `${defaultClassNames.chevron} `,
          caption_label: `font-medium`,
          month_caption: `font-medium px-2 py-2`,
        }}
        month={month}
        onMonthChange={setMonth}
        mode="single"
        selected={selectedDate}
        onSelect={handleDayPickerSelect}
        hidden={hidden}
        hideNavigation={hidden}
        hideWeekdays={hidden}
        // @ts-expect-error -- type issue.. to be fixed.
        disabled={min ? { before: calculateMin() } : undefined}
        excludeDisabled

      />
    </>
  );
}