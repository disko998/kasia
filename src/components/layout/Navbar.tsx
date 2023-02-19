import React from 'react'
import Button from '@/components/buttons/Button'
import ThemeToggle from '@/components/buttons/ThemeToggle'
import Logo from '@/components/Logo'

type Props = {
  onMenu: () => void
}

export default function Navbar({ onMenu }: Props) {
  return (
    <div
      className={`container fixed z-40 flex h-[89px] flex-row items-center justify-between bg-soft-white/80
	   backdrop-blur-md transition-colors duration-500 dark:bg-soft-black/80`}
    >
      <Button onClick={onMenu} className="lg:hidden">
        menu
      </Button>

      <nav className="hidden flex-row gap-2 lg:flex">
        <Button>VIDEOGRAPHY</Button>
        <Button>PHOTOGRAPHY</Button>
        <Button>ABOUT US</Button>
      </nav>

      <Logo />

      <div className="flex-row gap-3 lg:flex">
        <Button className="hidden lg:block">INSTAGRAM</Button>
        <Button className="hidden lg:block">TIKTOK</Button>
        <Button className="hidden lg:block">EMAIL</Button>
        <ThemeToggle />
      </div>
    </div>
  )
}
