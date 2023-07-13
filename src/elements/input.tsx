import { InputHTMLAttributes, Ref, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

const InputComponent = ({ placeholder, ...rest }: InputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <input
      ref={ref}
      autoComplete='off'
      placeholder={placeholder || 'Search something'}
      className="appearance-none border-0 text-sm md:text-base border-b-[1px] border-white bg-blue-500 w-full py-1 px-0 text-white placeholder:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
      {...rest}
    />
  )
}

export const Input = forwardRef(InputComponent);