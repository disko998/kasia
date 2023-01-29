import Icon from '@/components/Icon'
import React from 'react'

type Props = {}

const projects = [
  {
    title: 'Petar Stanković - Začarani grad',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: '02, steptembar 2021.',
    place: 'Novi Sad',
    pallet: ['#060A0B', '#136266', '#7A251E', '#934465', '#EBE4ED']
  },
  {
    title: 'Petar Stanković - Začarani grad',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: '02, steptembar 2021.',
    place: 'Novi Sad',
    pallet: ['#58412A', '#555532', '#A0AA72', '#E5B2A6', '#E2BFA2']
  },
  {
    title: 'Petar Stanković - Začarani grad',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: '02, steptembar 2021.',
    place: 'Novi Sad',
    pallet: ['#303941', '#647B83', '#9CB9C3', '#C6D8E2', '#FFFFFF']
  }
]

export default function ProjectsReveals({}: Props) {
  return (
    <section className="container relative flex max-w-2xl flex-col gap-y-36 py-16">
      {projects.map(({ title, description, date, place, pallet }) => (
        <div key={title} className="flex flex-col items-center">
          <h2>{title}</h2>
          <p className="mt-7">{description}</p>

          <div className="mt-9 flex w-[260px] items-center justify-between font-serif text-lg text-red-orange sm:text-2xl">
            <span>{date}</span>
            <span>
              <Icon name="arrow-right" />
            </span>
            <span>{place}</span>
          </div>

          <div className="mt-9 flex w-[319px] justify-between">
            {pallet.map(color => (
              <span
                key={color}
                style={{ background: color }}
                className={`h-[40px] w-[40px] rounded-lg`}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
