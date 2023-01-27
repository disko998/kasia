import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function Button({ children }: Props) {
  return (
    <button className="min-h-[25px] min-w-[69px] rounded-full border-1 border-dark-blue bg-transparent text-xxs leading-normal text-dark-blue">
      {children}
    </button>
  )
}
