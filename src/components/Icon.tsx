import { twMerge } from 'tailwind-merge'

import Logo from '@/assets/icons/logo.svg'
import Shutter from '@/assets/icons/shutter.svg'
import Play from '@/assets/icons/play.svg'
import FatherDev from '@/assets/icons/father-dev.svg'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import Close from '@/assets/icons/close.svg'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import CloseBtn from '@/assets/icons/close-btn.svg'
import Share from '@/assets/icons/share.svg'

const iconTypes = {
  logo: {
    component: Logo,
    viewBox: '0 0 116 37'
  },
  shutter: {
    component: Shutter,
    viewBox: '0 0 18 17'
  },
  play: {
    component: Play,
    viewBox: '0 0 17 17'
  },
  'father-dev': {
    component: FatherDev,
    viewBox: '0 0 130 32'
  },
  'arrow-right': {
    component: ArrowRight,
    viewBox: '0 0 22 8'
  },
  close: {
    component: Close,
    viewBox: '0 0 25 25'
  },
  'arrow-down': {
    component: ArrowDown,
    viewBox: '0 0 14 9'
  },
  'close-btn': {
    component: CloseBtn,
    viewBox: '0 0 25 25'
  },
  share: {
    component: Share,
    viewBox: '0 0 24 24'
  }
}

export type IconsTypes = keyof typeof iconTypes

export type IconProps = {
  name: IconsTypes
  color?: string
  size?: number | string
  viewBox?: string
  className?: string
  onClick?: () => void
}

const Icon = ({
  name,
  size,
  viewBox,
  color,
  className,
  onClick,
  ...props
}: IconProps) => {
  const IconComponent = iconTypes[name].component

  const sizeProps = size ? { width: size, height: size } : {}

  return (
    <IconComponent
      onClick={onClick}
      viewBox={iconTypes[name].viewBox}
      className={twMerge(
        `text-soft-dark-blue transition-colors dark:text-soft-white`,
        className
      )}
      color={color}
      {...sizeProps}
      {...props}
    />
  )
}

export default Icon
