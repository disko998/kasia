import Button from '@/components/buttons/Button'
import Icon from '@/components/Icon'
import Image from 'next/image'
import React from 'react'

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
    <section className="container flex max-w-[1330px] flex-col items-center py-12 text-center">
      <h2 className="text-4xl sm:text-h2">Videografija je naša specijalnost</h2>

      <p className="mt-7 mb-24 max-w-2xl text-justify leading-[120%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </p>

      <div className="grid w-full grid-rows-1 gap-8 lg:grid-cols-3">
        {videos.map(video => (
          <div
            key={video.title}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative h-[250px] w-full max-w-[416px] overflow-hidden rounded-xl">
              <Image
                className="absolute inset-0 z-0 object-cover"
                src={video.thumb}
                alt="Grad"
                width={416}
                height={250}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-soft-black/60">
                <h3 className="text-soft-white">{video.title}</h3>
                <Button
                  className="mt-4 whitespace-nowrap"
                  iconRight={<Icon name="play" />}
                >
                  Pogledaj video
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* <span className="mt-[15px] cursor-pointer text-sm font-semibold text-red-orange hover:underline">
        UČITAJ JOŠ...
      </span> */}
      </div>
    </section>
  )
}
