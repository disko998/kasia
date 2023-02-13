import React from 'react'
import classNames from 'classnames'
import Button from '@/components/buttons/Button'
import Logo from '@/components/Logo'
import Icon from '@/components/Icon'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'VIDEOGRAPHY', href: '/videography' },
  { label: 'PHOTOGRAPHY', href: '/photography' },
  { label: 'ABOUT US', href: '/about' }
]

const socials = [
  { label: 'EMAIL', href: 'mailto:official@kasia.com' },
  { label: 'INSTAGRAM', href: 'https://www.instagram.com/' },
  { label: 'TIKTOK', href: 'https://www.tiktok.com/' }
]

export default function Menu({ isOpen, onClose }: Props) {
  return (
    <div
      className={classNames(
        'fixed inset-0 z-50 translate-x-[-100%] overflow-y-scroll overscroll-contain bg-red-orange transition-transform duration-500 ease-out sm:w-[400px] lg:hidden',
        {
          'translate-x-0': isOpen
        }
      )}
    >
      <div className="flex flex-row items-center justify-between p-[30px]">
        <Logo color="white" width="86" height="29" />

        <Icon onClick={onClose} name="close" />
      </div>

      <div className="flex flex-col gap-y-[20px] p-[30px] pt-0">
        {menuItems.map(({ label, href }) => (
          <Button
            className="mt-2 h-[35px] text-[15px]"
            as="a"
            key={label}
            href={href}
          >
            {label}
          </Button>
        ))}
      </div>

      <div className="h-[1px] w-full bg-soft-white" />

      <div className="flex flex-col gap-y-[20px] p-[30px]">
        {socials.map(({ label, href }) => (
          <Button
            className="mt-2 h-[35px] text-[15px]"
            as="a"
            key={label}
            href={href}
            target="_blank"
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  )
}
