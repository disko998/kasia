import React from 'react'
import Icon from '@/components/Icon'
import Button from '@/components/buttons/Button'
import ThemeToggle from '@/components/buttons/ThemeToggle'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div
      className={`container fixed z-50 flex h-[89px] flex-row items-center justify-between bg-soft-white/80
	   backdrop-blur-md dark:bg-soft-black/80`}
    >
      <Button>menu</Button>

      <Icon name="logo" size={86} />

      <ThemeToggle />
    </div>
  )
}
