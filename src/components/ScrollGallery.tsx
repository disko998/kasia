import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

import ImagePriroda from '../../public/images/featured/priroda.png'
import ImagePortret from '../../public/images/featured/portret.png'
import ImageHamburger from '../../public/images/featured/hamburger.png'
import ImageDrvoseca from '../../public/images/featured/drvoseca.png'
import ImageSat from '../../public/images/featured/sat.png'
import ImageJezero from '../../public/images/featured/jezero.png'
import ImageCizma from '../../public/images/featured/cizma.png'
import ImageArhitektura from '../../public/images/featured/arhitektura.png'
import ImageWoman from '../../public/images/featured/woman.png'
import ImageSat2 from '../../public/images/featured/sat-na-kamenu.png'
import ImageHotel from '../../public/images/featured/hotel.png'
import ImageAutomobil from '../../public/images/featured/automobil.png'
import ImageHouse from '../../public/images/featured/house.png'

const firstSlider = [
  ImagePriroda,
  ImagePortret,
  ImageHamburger,
  ImageDrvoseca,
  ImageSat,
  ImageJezero,
  ImageCizma
]

const secondSlider = [
  ImageArhitektura,
  ImageWoman,
  ImageSat2,
  ImageHotel,
  ImageAutomobil,
  ImageHouse
]

type Props = {
  scrollRef?: any
}

export default function ScrollGallery({ scrollRef }: Props) {
  const targetRef = useRef<any>()

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end -500px']
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])
  const xReverse = useTransform(scrollYProgress, [0, 1], ['-100%', '0%'])

  return (
    <div ref={targetRef} className="w-screen overflow-hidden">
      <motion.div style={{ x: xReverse }} className="flex">
        <div className="flex flex-nowrap items-stretch justify-start gap-x-4 gap-y-4">
          {Array.from({ length: 2 }).map(() =>
            firstSlider.map(image => (
              <div
                key={image.src}
                className="relative w-[42vw] max-w-[500px] overflow-hidden md:w-[35vw] xl:w-[25vw]"
              >
                <Image
                  className="overflow-hidden rounded-xl"
                  alt="featured-image"
                  sizes="50vw"
                  src={image}
                />
              </div>
            ))
          )}
        </div>
      </motion.div>

      <motion.div style={{ x: x }} className="max-w-screen mt-4 flex w-screen">
        <div className="flex flex-nowrap items-stretch justify-start gap-x-4 gap-y-4">
          {Array.from({ length: 2 }).map(() =>
            secondSlider.map(image => (
              <div
                key={image.src}
                className="relative w-[42vw] max-w-[500px] overflow-hidden md:w-[35vw] xl:w-[25vw]"
              >
                <Image
                  className="overflow-hidden rounded-xl"
                  alt="featured-image"
                  sizes="50vw"
                  src={image}
                />
              </div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  )
}
