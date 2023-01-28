import React from 'react'

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
      className={`flex min-h-[25px] min-w-[69px] flex-row items-center justify-center rounded-full border-1 border-dark-blue bg-transparent p-1 text-xs uppercase leading-normal text-dark-blue ${
        className || ''
      }`}
      {...buttonProps}
    >
      {iconLeft}
      <span className={`mx-[10px] ${textClassName || ''}`}>{children}</span>
      {iconRight}
    </button>
  )
}
