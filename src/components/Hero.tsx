import Button from '@/components/buttons/Button'
import React from 'react'

type Props = {}

export default function Hero({}: Props) {
  return (
    <header className="container h-screen py-[89px]">
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-xl">
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <h1 className="max-w-[30rem] text-center text-white">
            ZABELEŽI TRENUTAK SA KASIA STUDIOM
          </h1>
          <Button className="mt-7 border-white text-white">O NAMA</Button>
        </div>

        <video className="h-full w-full object-cover" autoPlay loop muted>
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 z-10 bg-soft-black/60" />
      </div>
    </header>
  )
}
