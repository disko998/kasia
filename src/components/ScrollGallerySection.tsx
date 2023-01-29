import Image from 'next/image'
import React from 'react'

type Props = {}

export default function ScrollGallerySection({}: Props) {
  return (
    <section className="flex flex-col items-center py-12">
      <div className="container flex max-w-2xl flex-col items-center text-center">
        <h2 className="text-4xl sm:text-h2">Fotografija nam je u rukama</h2>
        <p className="mt-7 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="mt-24 w-full">
        <div className="flex -rotate-2 flex-nowrap items-stretch justify-start gap-x-4 gap-y-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="relative h-[10vw] w-[25vw] bg-red-500">
              {/* <Image
                src="/images/thumbs/city-1.png"
                alt="Novi Sad"
                width={153.66}
                height={92}
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
