import { useScroll, useTransform, motion, useSpring } from 'framer-motion'
import { useRef } from 'react'
import FeaturedVideosSection from '@/components/FeaturedVideos'
import PageLayout from '@/components/layout/PageLayout'
import Image from 'next/image'
import FeaturedImages from '@/components/FeaturedImages'

import NatureImage from '../../public/images/nature.png'
import LighthouseImage from '../../public/images/lighthouse.png'
import StricImage from '../../public/images/Stric.webp'
import StefanImage from '../../public/images/Stefan.webp'
import MilosImage from '../../public/images/Milos.webp'
import useFadeVariations from '@/hooks/useFadeVariations'
import useTranslation from 'next-translate/useTranslation'

export default function About() {
  const headerRef = useRef<any>()
  const fade = useFadeVariations()
  const { t } = useTranslation('common')

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end center']
  })

  const parallaxScroll = useScroll({
    target: headerRef,
    offset: ['end end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0])
  const spring = useSpring(y, { stiffness: 500, damping: 50 })

  return (
    <PageLayout>
      <header ref={headerRef} className="my-14 mt-[140px]">
        <div className="container relative flex max-w-2xl flex-col items-center justify-center gap-6 text-center">
          <motion.p
            {...fade}
            className="text-sm font-medium tracking-[0.245em]"
          >
            HAJDE BOLJE DA SE UPOZNAMO!
          </motion.p>
          <motion.h1 {...fade}>O NAMA - Kasia Studio</motion.h1>
          <motion.p {...fade} className="text-sm">
            {t('about.description')}
          </motion.p>

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

          <motion.div
            className="hidden lg:block"
            style={{
              y: spring
            }}
          >
            <div className="relative flex h-[375px] w-[250px] items-center justify-center overflow-hidden rounded-xl">
              <Image
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                fill
                src={StefanImage}
                alt="Stefan Gorenjak"
              />
            </div>
            <div className="mt-5 w-full rounded-lg bg-blue p-[0.625rem] text-center">
              <h3 className="text-white">STEFAN GORENJAK</h3>
              <span className="text-[0.75rem] uppercase text-light-yellow">
                {'Snimatelj i Video Montažer'}
              </span>
            </div>
          </motion.div>

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

        <motion.div
          style={{
            y: useTransform(
              parallaxScroll.scrollYProgress,
              [0, 1],
              ['0%', '20%']
            ),
            opacity: useTransform(
              parallaxScroll.scrollYProgress,
              [0.8, 1],
              [1, 0]
            )
          }}
          className="container mt-12 flex flex-col items-center justify-center gap-12 lg:mt-56 lg:hidden lg:flex-row lg:gap-4"
        >
          <motion.div {...fade}>
            <div className="relative h-[375px] w-[250px] overflow-hidden rounded-xl">
              <Image
                fill
                src={StricImage}
                alt="EDVARD NALBANTJAN"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
              />
            </div>
            <div className="mt-5 w-full rounded-lg bg-blue p-[0.625rem] text-center">
              <h3 className="text-white">{'Edvard Nalbantjan'}</h3>
              <span className="text-[0.75rem] text-light-yellow">
                {'DIPLOMIRANI FOTOGRAF'}
              </span>
            </div>
          </motion.div>

          <motion.div {...fade} className="block lg:hidden">
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
              <span className="text-[0.75rem] uppercase text-light-yellow">
                {'Snimatelj i Video Montažer'}
              </span>
            </div>
          </motion.div>

          <motion.div {...fade}>
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
          </motion.div>
        </motion.div>
      </header>

      <div className="py-[140px] lg:mt-0">
        <FeaturedVideosSection />
        <FeaturedImages />
      </div>
    </PageLayout>
  )
}
