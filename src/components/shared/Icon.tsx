import React from 'react'

import Logo from '@/assets/icons/logo.svg'

const iconTypes = {
  logo: Logo
}

type Props = {
  name: keyof typeof iconTypes
  size: number | string
  viewBox: string
}

const Icon = ({ name, size, viewBox, ...props }: Props) => {
  const IconComponent = iconTypes[name]

  return (
    <IconComponent viewBox={viewBox} width={size} height={size} {...props} />
  )
}

export default Icon
