import React from 'react'
import Button from '@/components/buttons/Button'
import ThemeToggle from '@/components/buttons/ThemeToggle'
import Logo from '@/components/Logo'

type Props = {
  onMenu: () => void
}

export default function Navbar({ onMenu }: Props) {
  return (
    <nav
      className={`container fixed top-0 z-40 flex h-[89px] flex-row items-center justify-between bg-soft-white/80
	   backdrop-blur-md transition-colors duration-500 dark:bg-soft-black/80`}
    >
      <Button onClick={onMenu} className="lg:hidden">
        menu
      </Button>

      <div className="hidden flex-row gap-4 lg:flex">
        {/* <Button as="a" href={'/'}>
          HOME
        </Button> */}
        <Button as="a" href={'/videography'}>
          VIDEOGRAPHY
        </Button>
        <Button as="a" href={'/photography'}>
          PHOTOGRAPHY
        </Button>
        <Button as="a" href={'/about'}>
          ABOUT US
        </Button>
      </div>

      <Logo />

      <div className="flex-row gap-4 lg:flex">
        <Button className="hidden lg:block">INSTAGRAM</Button>
        <Button className="hidden lg:block">TIKTOK</Button>
        <Button className="hidden lg:block">EMAIL</Button>
        <ThemeToggle />
      </div>
    </nav>
  )
}
