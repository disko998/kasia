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
  {
    label: '+381 61/1160-549',
    href: 'tel:+381 61/1160-549',
    target: '_self'
  },
  {
    label: 'office@kasia.com',
    href: 'mailto:office@kasia.com',
    target: '_self'
  },

  {
    label: 'YOUTUBE',
    href: 'https://www.youtube.com/channel/UCg_xzBtI5jkIA4eKVCBjNNw',
    target: '_blank'
  },
  {
    label: 'INSTAGRAM',
    href: 'https://www.instagram.com/gorky_01/?hl=sr',
    target: '_blank'
  }
]

export default function Menu({ isOpen, onClose }: Props) {
  return (
    <nav
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
            className="mt-2 h-[35px] border-soft-white text-[15px] text-soft-white"
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
        {socials.map(({ label, href, target }) => (
          <Button
            className="mt-2 h-[35px] border-soft-white text-[15px] text-soft-white"
            as="a"
            key={label}
            target={target}
            href={href}
          >
            {label}
          </Button>
        ))}
      </div>
    </nav>
  )
}
