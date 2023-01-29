import Icon from '@/components/Icon'
import React from 'react'

type Props = {}

export default function OurClients({}: Props) {
  return (
    <section className="container py-12 text-center">
      <h2>Naši Klijenti</h2>

      <div className="mx-auto mt-12 grid max-w-[309px] grid-cols-2 grid-rows-3 place-items-center gap-x-16 gap-y-14">
        <Icon name="father-dev" />
        <Icon name="father-dev" />
        <Icon name="father-dev" />
        <Icon name="father-dev" />
        <Icon name="father-dev" />
        <Icon name="father-dev" />
      </div>
    </section>
  )
}
