import React from 'react'
import Logo from '@/assets/icons/logo.svg'
import Icon from '@/components/shared/Icon'
import Button from '@/components/shared/Button'
import { px2rem } from '@/utils/helpers'

type Props = {}

export default function Header({}: Props) {
  return (
    <nav
      className={`flex h-[89px] w-full flex-row items-center justify-between bg-red-500 px-4`}
    >
      <div>
        <Button>menu</Button>
      </div>
      <div>
        <Icon name="logo" viewBox="0 0 116 37" size={px2rem(116)} />
      </div>
      <div>socials & actions</div>
    </nav>
  )
}
