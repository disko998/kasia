import Button from '@/components/buttons/Button'
import Icon from '@/components/Icon'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import useFadeVariations from '@/hooks/useFadeVariations'

const videos = [
  {
    title: 'Naziv videa: Svadba - Kovačević',
    thumb: '/images/thumbs/city-1.png',
    video: ''
  },
  {
    title: 'Naziv videa: Film - Kosmajska bitka',
    thumb: '/images/thumbs/city-2.png',
    video: ''
  },
  {
    title: 'Naziv videa: Spot za pesmu - Stara garda',
    thumb: '/images/thumbs/city-3.png',
    video: ''
  }
]

export default function FeaturedVideosSection() {
  return (
    <section className="container flex flex-col items-center justify-center text-center">
      <h2 className="sm:text-h2 text-4xl">Videografija je naša specijalnost</h2>

      <p className="mt-7 mb-20 max-w-2xl leading-[120%]">
        Višedecenijska karijera u oblasti Videografije nam je donela veliko
        iskustvo i profesionalnost koju možemo da prezentujemo i ponudimo našim
        klijentima. Od svabi, do real-estate videa, preko commercial spotova i
        videa do edukativnih programa… U prilogu možete videti neke od projekata
        koje smo radili.
      </p>

      <div className="grid w-full grid-rows-1 gap-6 lg:grid-cols-3">
        {videos.map(({ title, thumb }) => (
          <div
            key={title}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative h-[250px] w-full max-w-[500px] overflow-hidden rounded-xl lg:h-[15vw] lg:max-w-full">
              <Image
                fill
                className="absolute inset-0 z-0 object-cover"
                src={thumb}
                alt="Grad"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-soft-black/60">
                <h3 className="text-soft-white">{title}</h3>
                <Button
                  className="mt-4 whitespace-nowrap border-soft-white text-soft-white"
                  iconRight={<Icon name="play" />}
                >
                  Pogledaj
                </Button>
              </div>
            </div>
          </div>
        ))}

        {videos.length > 3 && (
          <span className="mt-[15px] cursor-pointer text-sm font-semibold text-red-orange hover:underline">
            UČITAJ JOŠ...
          </span>
        )}
      </div>
    </section>
  )
}
