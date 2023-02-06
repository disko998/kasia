import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  iconRight?: React.ReactNode
  iconLeft?: React.ReactNode
  className?: string
  textClassName?: string
}

export default function Button({
  children,
  iconRight,
  iconLeft,
  className,
  textClassName,
  ...buttonProps
}: Props) {
  return (
    <button
      className={`ease-[cubic-bezier(.215, .61, .355, 1)] bg-transparent flex h-[1.6rem] min-w-[4.3rem] 
	  flex-row items-center justify-center rounded-full border-1 border-dark-blue p-1 text-xxs
	font-medium uppercase leading-normal text-dark-blue transition-colors dark:border-soft-white dark:text-soft-white ${
    className || ''
  }`}
      {...buttonProps}
    >
      {iconLeft && <span>{iconLeft}</span>}
      <span className={`mx-[10px] w-full ${textClassName || ''}`}>
        {children}
      </span>
      <span>{iconRight}</span>
    </button>
  )
}
