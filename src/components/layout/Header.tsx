import React from 'react'
import Icon from '@/components/shared/Icon'
import Button from '@/components/shared/buttons/Button'
import ThemeToggle from '@/components/shared/buttons/ThemeToggle'

type Props = {}

export default function Header({}: Props) {
  return (
    <nav
      className={`bg-[rgba(245, 244, 240, 0.8)] flex h-[89px] w-full flex-row items-center justify-between px-4`}
    >
      <Button>menu</Button>

      <Icon name="logo" size={86} />

      <ThemeToggle />
    </nav>
  )
}
