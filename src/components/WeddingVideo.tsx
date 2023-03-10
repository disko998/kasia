import Button from '@/components/buttons/Button'
import Icon from '@/components/Icon'
import Image from 'next/image'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

import Thumbnail from '../../public/images/projects/janezic/thumbnail.png'
import MladenciVencanje from '../../public/images/projects/janezic/mladenci.png'
import ImageVencanje from '../../public/images/projects/janezic/vencanje.png'
import ImageBurma from '../../public/images/projects/janezic/burma.png'

const pallet = ['#060A0B', '#474749', '#C3C2C0', '#D3A38B', '#FFFFFF']

export default function WeddingVideo() {
  const sectionRef = useRef<any>()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['center end', 'end center']
  })

  return (
    <section ref={sectionRef} className=" overflow-hidden">
      <div className="container flex max-w-4xl flex-col items-center justify-center gap-4 pb-[100px] text-center sm:pb-[200px]">
        <motion.h2>Svadba - Janežić</motion.h2>
        <motion.p className="max-w-[600px]">
          Matej i Vanesa su prelepi mladi bračni par koji je odlučio da
          najbitniji dan u njihovom životu zabeleži kroz brojne fotografije i
          video od kog se gubi dah. Uživajte!
        </motion.p>

        <div className="relative mt-[50px]">
          <motion.div
            style={{
              rotateY: useTransform(scrollYProgress, [0, 1], [-20, 0]),
              rotateX: useTransform(scrollYProgress, [0, 1], [-10, 0])
            }}
          >
            <div>
              <Image
                className="overflow-hidden rounded-[20px] lg:rounded-[3rem]"
                src={Thumbnail}
                alt="Jezenic"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-soft-black/60">
                <Button
                  className="mt-4 whitespace-nowrap border-soft-white text-soft-white backdrop-blur-[3.5px]"
                  iconRight={<Icon name="play" />}
                >
                  Pogledaj
                </Button>
              </div>
            </div>
          </motion.div>

          <div className="hidden md:block">
            <motion.div
              className="absolute bottom-[-60px] left-[-150px] overflow-hidden rounded-[20px]"
              style={{
                x: useTransform(scrollYProgress, [0, 1], [100, 0]),
                scale: useTransform(scrollYProgress, [0, 1], [0.8, 1])
              }}
            >
              <Image
                width={400}
                src={MladenciVencanje}
                alt="Jezenic mladenci"
              />
            </motion.div>

            <motion.div
              className="absolute top-[-30px] right-[-37px] overflow-hidden rounded-[20px]"
              style={{
                x: useTransform(scrollYProgress, [0, 1], [-50, 0])
              }}
            >
              <Image width={250} src={ImageVencanje} alt="Jezenic vencanje" />
            </motion.div>

            <motion.div
              className="absolute top-[200px] right-[-150px] overflow-hidden rounded-[20px]"
              style={{
                x: useTransform(scrollYProgress, [0, 1], [50, 0])
              }}
            >
              <Image width={300} src={ImageBurma} alt="Jezenic burma" />
            </motion.div>
          </div>
        </div>

        <div className="mt-1 flex w-[15rem] justify-between">
          {pallet.map(color => (
            <span
              key={color}
              style={{ background: color }}
              className="h-[2rem] w-[2rem] rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
