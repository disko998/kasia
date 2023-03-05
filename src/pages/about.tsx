import FeaturedVideosSection from '@/components/FeaturedVideosSection'
import PageLayout from '@/components/layout/PageLayout'
import Image from 'next/image'
import LighthouseImage from '../../public/images/lighthouse.png'
import NatureImage from '../../public/images/nature.png'
import StricImage from '../../public/images/stric.jpg'
import StefanImage from '../../public/images/stefan.jpg'
import MilosImage from '../../public/images/milos.jpg'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import useDimensions from '@/hooks/useDimmenstions'

const team = [
  {
    image: StricImage,
    name: 'EDVARD NALBANTJAN',
    title: 'DIPLOMIRANI FOTOGRAF'
  },
  {
    image: StefanImage,
    name: 'STEFAN GORENJAK',
    title: 'DIPLOMIRANI FOTOGRAF'
  },
  {
    image: MilosImage,
    name: 'MILOŠ MRĐA',
    title: 'DIPLOMIRANI FOTOGRAF'
  }
]

export default function About() {
  const headerRef = useRef<any>()
  const dimensions = useDimensions()

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end center']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-30%', '0%'])
  const rotate = useTransform(scrollYProgress, [0, 1], ['100deg', '0deg'])

  return (
    <PageLayout>
      <header ref={headerRef} className="my-14">
        <div className="container relative flex max-w-2xl flex-col items-center justify-center gap-6 text-center">
          <p className="text-sm font-medium tracking-[0.245em]">
            HAJDE BOLJE DA SE UPOZNAMO!
          </p>
          <h1>O NAMA -Kasia Studio</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laborin.
          </p>

          <div className="absolute left-[-15rem] top-[5rem] hidden xl:block">
            <Image width={500} src={LighthouseImage} alt="Svetionik" />
          </div>
          <div className="absolute right-[-15rem] top-[5rem] hidden xl:block">
            <Image width={500} src={NatureImage} alt="Priroda" />
          </div>
        </div>

        <div className="container mt-12 flex flex-col items-center justify-center gap-12 lg:mt-56 lg:flex-row lg:gap-4">
          <div>
            <div className="relative h-[375px] w-[250px] overflow-hidden rounded-xl">
              <Image fill src={StricImage} alt="EDVARD NALBANTJAN" />
            </div>
            <div className="mt-5 w-full rounded-lg bg-blue p-[0.625rem] text-center">
              <h3 className="text-white">{'EDVARD NALBANTJAN'}</h3>
              <span className="text-[0.75rem] text-light-yellow">
                {'DIPLOMIRANI FOTOGRAF'}
              </span>
            </div>
          </div>

          <motion.div className="hidden lg:block">
            <motion.div
              style={{
                y
              }}
            >
              <div className="relative h-[375px] w-[250px] overflow-hidden rounded-xl">
                <Image fill src={StefanImage} alt="STEFAN GORENJAK" />
              </div>
              <div className="mt-5 w-full rounded-lg bg-blue p-[0.625rem] text-center">
                <h3 className="text-white">STEFAN GORENJAK</h3>
                <span className="text-[0.75rem] text-light-yellow">
                  {'DIPLOMIRANI FOTOGRAF'}
                </span>
              </div>
            </motion.div>
          </motion.div>

          <div className="block lg:hidden">
            <div className="relative h-[375px] w-[250px] overflow-hidden rounded-xl">
              <Image fill src={StefanImage} alt="STEFAN GORENJAK" />
            </div>
            <div className="mt-5 w-full rounded-lg bg-blue p-[0.625rem] text-center">
              <h3 className="text-white">STEFAN GORENJAK</h3>
              <span className="text-[0.75rem] text-light-yellow">
                {'DIPLOMIRANI FOTOGRAF'}
              </span>
            </div>
          </div>

          <div>
            <div className="relative h-[375px] w-[250px] overflow-hidden rounded-xl">
              <Image fill src={MilosImage} alt="EDVARD NALBANTJAN" />
            </div>
            <div className="mt-5 w-full rounded-lg bg-blue p-[0.625rem] text-center">
              <h3 className="text-white">{'MILOŠ MRĐA'}</h3>
              <span className="text-[0.75rem] text-light-yellow">
                {'DIPLOMIRANI FOTOGRAF'}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* <FeaturedVideosSection /> */}
    </PageLayout>
  )
}
