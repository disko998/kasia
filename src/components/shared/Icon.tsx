import React from 'react'

import Logo from '@/assets/icons/logo.svg'
import Shutter from '@/assets/icons/shutter.svg'

const iconTypes = {
  logo: {
    component: Logo,
    viewBox: '0 0 116 37'
  },
  shutter: {
    component: Shutter,
    viewBox: '0 0 18 17'
  }
}

export type IconsTypes = keyof typeof iconTypes

export type IconProps = {
  name: IconsTypes
  color?: string
  size?: number | string
  viewBox?: string
}

const Icon = ({ name, size, viewBox, color, ...props }: IconProps) => {
  const IconComponent = iconTypes[name].component

  const sizeProps = size ? { width: size, height: size } : {}

  return (
    <IconComponent
      viewBox={iconTypes[name].viewBox}
      className="fill-soft-white dark:fill-dark-blue"
      color={color}
      {...sizeProps}
      {...props}
    />
  )
}

export default Icon
