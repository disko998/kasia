import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import FeaturedVideosSection from '@/components/FeaturedVideos'
import PageLayout from '@/components/layout/PageLayout'
import Image from 'next/image'
import FeaturedImages from '@/components/FeaturedImages'

import NatureImage from '../../public/images/nature.png'
import LighthouseImage from '../../public/images/lighthouse.png'
import StricImage from '../../public/images/Stric.jpg'
import StefanImage from '../../public/images/Stefan.jpg'
import MilosImage from '../../public/images/Milos.jpg'

export default function About() {
  const headerRef = useRef<any>()

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end center']
  })

  const parallaxScroll = useScroll({
    target: headerRef,
    offset: ['end end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-30%', '0%'])

  return (
    <PageLayout>
      <header ref={headerRef} className="my-14 mt-[140px]">
        <div className="container relative flex max-w-2xl flex-col items-center justify-center gap-6 text-center">
          <p className="text-sm font-medium tracking-[0.245em]">
            HAJDE BOLJE DA SE UPOZNAMO!
          </p>
          <h1>O NAMA - Kasia Studio</h1>
          <p className="text-sm">
            Naš tim je sastavljen od 3 profesionalca, svako u svojoj oblasti.
            Edvard je profesionalni fotograf koji je radio sa preko hiljadu
            poznatih ličnosti i imena u regionu i svojim iskustvom i kvalitetom
            stoji iza svake svoje fotografije. Stefan i Miloš će vam na
            inovativan i moderan način kreirati video koji će vas ostaviti bez
            daha. Sa najnovijom opremom i iskustvom, šta god zamislite - mi
            stvaramo!
          </p>

          <div className="absolute left-[-15rem] top-[5rem] hidden xl:block">
            <Image width={500} src={LighthouseImage} alt="Svetionik" />
          </div>
          <div className="absolute right-[-15rem] top-[5rem] hidden xl:block">
            <Image width={500} src={NatureImage} alt="Priroda" />
          </div>
        </div>

        <motion.div
          style={{
            y: useTransform(
              parallaxScroll.scrollYProgress,
              [0, 1],
              ['0%', '50%']
            )
          }}
          className="container mt-12 hidden flex-col items-center justify-center gap-12 lg:mt-56 lg:flex lg:flex-row lg:gap-4"
        >
          <div>
            <div className="relative h-[375px] w-[250px] overflow-hidden rounded-xl">
              <Image
                fill
                placeholder="blur"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                src={StricImage}
                alt="EDVARD NALBANTJAN"
              />
            </div>
            <div className="mt-5 w-full rounded-lg bg-blue p-[0.625rem] text-center">
              <h3 className="text-white">{'Edvard Nalbantjan'}</h3>
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
                <Image
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  fill
                  src={StefanImage}
                  alt="Stefan Gorenjak"
                />
              </div>
              <div className="mt-5 w-full rounded-lg bg-blue p-[0.625rem] text-center">
                <h3 className="text-white">STEFAN GORENJAK</h3>
                <span className="text-[0.75rem] text-light-yellow">
                  {'VIDEO MONTAŽER'}
                </span>
              </div>
            </motion.div>
          </motion.div>

          <div className="block lg:hidden">
            <div className="relative h-[375px] w-[250px] overflow-hidden rounded-xl">
              <Image
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                fill
                src={StefanImage}
                alt="Stefan Gorenjak"
              />
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
              <Image
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                fill
                src={MilosImage}
                alt="Miloš Mrđa"
              />
            </div>
            <div className="mt-5 w-full rounded-lg bg-blue p-[0.625rem] text-center">
              <h3 className="text-white">{'MILOŠ MRĐA'}</h3>
              <span className="text-[0.75rem] text-light-yellow">
                {'VIDEO MONTAŽER'}
              </span>
            </div>
          </div>
        </motion.div>

        <div className="container mt-12 flex flex-col items-center justify-center gap-12 lg:mt-56 lg:hidden lg:flex-row lg:gap-4">
          <div>
            <div className="relative h-[375px] w-[250px] overflow-hidden rounded-xl">
              <Image fill src={StricImage} alt="EDVARD NALBANTJAN" />
            </div>
            <div className="mt-5 w-full rounded-lg bg-blue p-[0.625rem] text-center">
              <h3 className="text-white">{'Edvard Nalbantjan'}</h3>
              <span className="text-[0.75rem] text-light-yellow">
                {'SNIMATELJ I VIDEO MONTAŽER'}
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
                <Image fill src={StefanImage} alt="Stefan Gorenjak" />
              </div>
              <div className="mt-5 w-full rounded-lg bg-blue p-[0.625rem] text-center">
                <h3 className="text-white">STEFAN GORENJAK</h3>
                <span className="text-[0.75rem] text-light-yellow">
                  {'SNIMATELJ I VIDEO MONTAŽER'}
                </span>
              </div>
            </motion.div>
          </motion.div>

          <div className="block lg:hidden">
            <div className="relative h-[375px] w-[250px] overflow-hidden rounded-xl">
              <Image fill src={StefanImage} alt="Stefan Gorenjak" />
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
              <Image fill src={MilosImage} alt="Miloš Mrđa" />
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

      <div className="py-[140px] lg:mt-0">
        <FeaturedVideosSection />
        <FeaturedImages />
      </div>
    </PageLayout>
  )
}
