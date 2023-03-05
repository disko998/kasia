import Button from '@/components/buttons/Button'
import Icon from '@/components/Icon'
import Image from 'next/image'
import JezenicImage from '../../public/images/jezenic-thumb.jpg'
import Jezenic1Image from '../../public/images/jazenic-1.jpg'
import Jezenic2Image from '../../public/images/jazenic-2.jpg'
import Jezenic3Image from '../../public/images/jazenic-3.jpg'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import useFadeVariations from '@/hooks/useFadeVariations'

type Props = {}

const pallet = ['#060A0B', '#474749', '#C3C2C0', '#D3A38B', '#FFFFFF']

export default function WeddingVideo({}: Props) {
  const sectionRef = useRef<any>()
  const fade = useFadeVariations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['center end', 'end center']
  })

  return (
    <section ref={sectionRef} className=" overflow-hidden">
      <div className="container flex max-w-4xl flex-col items-center justify-center gap-4 pb-[100px] text-center sm:pb-[200px]">
        <motion.h2>Svadba - Janežić</motion.h2>
        <motion.p className="max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </motion.p>

        <div className="relative mt-[50px]">
          <motion.div
            style={{
              rotateY: useTransform(scrollYProgress, [0, 1], [-10, 0]),
              rotateX: useTransform(scrollYProgress, [0, 1], [-20, 0])
            }}
          >
            <div>
              <Image
                className="overflow-hidden rounded-[20px] lg:rounded-[3rem]"
                src={JezenicImage}
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

          <div className="hidden sm:block">
            <motion.div
              className="absolute bottom-[-60px] left-[-150px] overflow-hidden rounded-[20px]"
              style={{
                x: useTransform(scrollYProgress, [0, 1], [100, 0]),
                scale: useTransform(scrollYProgress, [0, 1], [0.8, 1])
              }}
            >
              <Image width={400} src={Jezenic1Image} alt="Jezenic" />
            </motion.div>

            <motion.div
              className="absolute top-[-30px] right-[-37px] overflow-hidden rounded-[20px]"
              style={{
                x: useTransform(scrollYProgress, [0, 1], [-50, 0])
              }}
            >
              <Image width={250} src={Jezenic2Image} alt="Jezenic" />
            </motion.div>

            <motion.div
              className="absolute top-[200px] right-[-150px] overflow-hidden rounded-[20px]"
              style={{
                x: useTransform(scrollYProgress, [0, 1], [50, 0])
              }}
            >
              <Image width={300} src={Jezenic3Image} alt="Jezenic" />
            </motion.div>
          </div>
        </div>

        <div className="mt-1 flex w-[15rem] justify-between">
          {pallet.map(color => (
            <span
              key={color}
              style={{ background: color }}
              className={`h-[2rem] w-[2rem] rounded-lg`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
