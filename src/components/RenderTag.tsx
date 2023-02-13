import Link from 'next/link'
import React from 'react'

type Props = any & {
  as: 'a' | 'button'
  children: React.ReactNode
}

const RenderTag = ({ as, children, ...props }: Props) => {
  switch (as) {
    case 'a':
      return <Link {...props}>{children}</Link>
    case 'button':
      return <button {...props}>{children}</button>
    default:
      return <div {...props}>{children}</div>
  }
}

export default RenderTag
