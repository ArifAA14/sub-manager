import * as React from 'react';


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={
          `flex h-10 w-full rounded-lg border  bg-white px-4 py-2 text-sm
           ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium
           placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2
           focus-visible:ring-black focus-visible:ring-offset-0 disabled:cursor-not-allowed
         ${className}`
        }
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };