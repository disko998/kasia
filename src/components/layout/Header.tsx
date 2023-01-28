import React from 'react'
import Icon from '@/components/shared/Icon'
import Button from '@/components/shared/buttons/Button'
import ThemeToggle from '@/components/shared/buttons/ThemeToggle'

type Props = {}

export default function Header({}: Props) {
  return (
    <nav
      className={`container flex h-[89px] flex-row items-center justify-between
	   bg-soft-white/80 dark:bg-soft-black/80`}
    >
      <Button>menu</Button>

      <Icon name="logo" size={86} />

      <ThemeToggle />
    </nav>
  )
}
