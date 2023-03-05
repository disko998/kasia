import RenderTag from '@/components/RenderTag'
import Link, { LinkProps } from 'next/link'
import React, { HTMLAttributeAnchorTarget } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = (
  | React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>
  | LinkProps
) & {
  children: React.ReactNode
  iconRight?: React.ReactNode
  iconLeft?: React.ReactNode
  className?: string
  textClassName?: string
  as?: 'a' | 'button'
  target?: HTMLAttributeAnchorTarget
}

export default function Button({
  children,
  iconRight,
  iconLeft,
  className,
  textClassName,
  ...buttonProps
}: Props) {
  const classnames = twMerge(
    'transition-color hover:bg-dark-blue/10 hover:dark:bg-soft-white/10 duration-300 text-center ease-[cubic-bezier(.215, .61, .355, 1)] bg-transparent flex h-[1.6rem] min-w-[4.3rem] flex-row items-center justify-center rounded-full border-1 border-dark-blue p-1 font-medium uppercase leading-normal text-dark-blue text-xs dark:border-soft-white dark:text-soft-white',
    className
  )

  const textClasses = twMerge('mx-[10px] w-full leading-[100%]', textClassName)

  return (
    <RenderTag
      as={buttonProps.as || 'button'}
      className={classnames}
      {...buttonProps}
    >
      {iconLeft && <span>{iconLeft}</span>}
      <span className={textClasses}>{children}</span>
      <span>{iconRight}</span>
    </RenderTag>
  )
}
