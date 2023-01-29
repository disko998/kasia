import React from 'react'

import Logo from '@/assets/icons/logo.svg'
import Shutter from '@/assets/icons/shutter.svg'
import Play from '@/assets/icons/play.svg'
import FatherDev from '@/assets/icons/father-dev.svg'
import ArrowRight from '@/assets/icons/arrow-right.svg'

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
  }
}

export type IconsTypes = keyof typeof iconTypes

export type IconProps = {
  name: IconsTypes
  color?: string
  size?: number | string
  viewBox?: string
  className?: string
}

const Icon = ({
  name,
  size,
  viewBox,
  color,
  className,
  ...props
}: IconProps) => {
  const IconComponent = iconTypes[name].component

  const sizeProps = size ? { width: size, height: size } : {}

  return (
    <IconComponent
      viewBox={iconTypes[name].viewBox}
      className={`text-soft-dark-blue dark:text-white`}
      color={color}
      {...sizeProps}
      {...props}
    />
  )
}

export default Icon
