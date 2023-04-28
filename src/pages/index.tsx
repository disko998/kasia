import { useEffect, useRef } from 'react'
import FeaturedVideos from '@/components/FeaturedVideos'
import PageLayout from '@/components/layout/PageLayout'
import ProjectsReveals from '@/components/ProjectsReveals'
import WeddingVideo from '@/components/WeddingVideo'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Button from '@/components/buttons/Button'
import FeaturedImages from '@/components/FeaturedImages'
import BelgradeImage from '../../public/images/belgrade.png'
import LighthouseImage from '../../public/images/lighthouse.png'
import NatureImage from '../../public/images/nature.png'
import Clients from '@/components/Clients'
import useTranslation from 'next-translate/useTranslation'

export default function Index() {
  const heroRef = useRef<any>()
  const locationRef = useRef<any>()
  const aboutRef = useRef<any>()
  const { t } = useTranslation('common')

  const videRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    videRef?.current?.play()
  }, [videRef])

  const headerScroll = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const locationScroll = useScroll({
    target: locationRef,
    offset: ['start center', 'end end']
  })

  const aboutScroll = useScroll({
    target: aboutRef,
    offset: ['start center', 'end end']
  })

  const addressParallax = useScroll({
    target: locationRef,
    offset: ['end end', 'end start']
  })

  const aboutParallax = useScroll({
    target: aboutRef,
    offset: ['end end', 'end start']
  })

  return (
    <PageLayout>
      <header className="container h-screen pb-[70px] pt-[89px]">
        <motion.div
          ref={heroRef}
          style={{
            y: useTransform(
              headerScroll.scrollYProgress,
              [0, 1],
              ['0%', '40%']
            ),
            opacity: useTransform(
              headerScroll.scrollYProgress,
              [0.5, 1],
              [1, 0]
            )
          }}
          className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-xl"
        >
          <motion.div
            style={{
              y: useTransform(
                headerScroll.scrollYProgress,
                [0, 1],
                ['0%', '20%']
              )
            }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center"
          >
            <h1 className="max-w-[30rem] text-center text-white">
              {t('title')}
            </h1>
            <Button
              as="a"
              href="/about"
              className="mt-7 border-white text-white"
            >
              {t('aboutUs')}
            </Button>
          </motion.div>

          <video
            ref={videRef}
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/hero.mp4" type="video/mp4" />
            <source src="/hero.webm" type="video/webm" />
            {/* <source src="/hero.ogg" type="video/ogg" /> */}
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 z-10 bg-soft-black/60" />
        </motion.div>
      </header>

      <section ref={locationRef} className="h-[400vh]">
        <motion.div
          className="sticky top-0 flex h-screen flex-col items-center justify-center"
          style={{
            y: useTransform(
              addressParallax.scrollYProgress,
              [0, 1],
              ['0%', '30%']
            ),
            opacity: useTransform(
              addressParallax.scrollYProgress,
              [0, 1],
              [1, 0]
            )
          }}
        >
          <div className="container flex max-w-2xl flex-col items-center justify-center text-center">
            <motion.h2
              style={{
                opacity: useTransform(
                  locationScroll.scrollYProgress,
                  [0, 0.2],
                  [0, 1]
                )
              }}
            >
              {t('ourLocation')}
            </motion.h2>

            <motion.h3
              style={{
                opacity: useTransform(
                  locationScroll.scrollYProgress,
                  [0.2, 0.4],
                  [0, 1]
                ),
                y: useTransform(
                  locationScroll.scrollYProgress,
                  [0.2, 0.4],
                  [10, 0]
                )
              }}
              className="mt-7 text-soft-black dark:text-soft-white"
            >
              {t('city')}
            </motion.h3>

            <motion.p
              style={{
                opacity: useTransform(
                  locationScroll.scrollYProgress,
                  [0.4, 0.6],
                  [0, 1]
                ),
                y: useTransform(
                  locationScroll.scrollYProgress,
                  [0.4, 0.6],
                  [10, 0]
                )
              }}
              className="mt-7"
            >
              {t('location')}
            </motion.p>

            <motion.div
              className="absolute bottom-[28vh] left-0 right-0 flex items-center justify-center lg:bottom-0"
              style={{
                y: useTransform(
                  locationScroll.scrollYProgress,
                  [0.6, 1],
                  ['100%', '0%']
                ),
                opacity: useTransform(
                  locationScroll.scrollYProgress,
                  [0.6, 1],
                  [0, 1]
                )
              }}
            >
              <Image src={BelgradeImage} priority sizes="100vw" alt="Beograd" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section ref={aboutRef} className="h-[400vh]">
        <motion.div
          className="sticky top-0 flex h-screen flex-col items-center justify-center"
          style={{
            y: useTransform(
              aboutParallax.scrollYProgress,
              [0, 1],
              ['0%', '30%']
            ),
            opacity: useTransform(aboutParallax.scrollYProgress, [0, 1], [1, 0])
          }}
        >
          <div className="container flex max-w-2xl flex-col items-center text-center">
            <motion.h2
              style={{
                opacity: useTransform(
                  aboutScroll.scrollYProgress,
                  [0, 0.4],
                  [0, 1]
                ),
                y: useTransform(aboutScroll.scrollYProgress, [0, 0.4], [20, 0])
              }}
            >
              {t('companyName')}
            </motion.h2>

            <motion.p
              style={{
                opacity: useTransform(
                  aboutScroll.scrollYProgress,
                  [0.4, 0.6],
                  [0, 1]
                ),
                y: useTransform(
                  aboutScroll.scrollYProgress,
                  [0.4, 0.6],
                  [20, 0]
                )
              }}
              className="mt-7 max-w-[35rem]"
            >
              {t('ourTeamShortDesc')}
            </motion.p>

            <motion.div
              style={{
                opacity: useTransform(
                  aboutScroll.scrollYProgress,
                  [0.6, 0.8],
                  [0, 1]
                ),
                y: useTransform(
                  aboutScroll.scrollYProgress,
                  [0.6, 0.8],
                  [10, 0]
                )
              }}
            >
              <Button
                as="a"
                href="/about"
                className="z-10 mt-7 border-red-orange text-red-orange"
              >
                {t('aboutUs')}
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="absolute left-0 top-[100%] flex items-center justify-center"
            style={{
              zIndex: -1,
              top: useTransform(
                aboutScroll.scrollYProgress,
                [0.4, 1],
                ['100%', '50%']
              ),
              y: useTransform(
                aboutScroll.scrollYProgress,
                [0.4, 1],
                ['0%', '-50%']
              )
            }}
          >
            <Image
              loading="eager"
              width={900}
              src={LighthouseImage}
              alt="Svetionik"
            />
          </motion.div>

          <motion.div
            className="absolute right-0 top-[100%] hidden items-center justify-center xl:flex"
            style={{
              zIndex: -1,
              top: useTransform(
                aboutScroll.scrollYProgress,
                [0.6, 1],
                ['100%', '50%']
              ),
              y: useTransform(
                aboutScroll.scrollYProgress,
                [0.6, 1],
                ['0%', '-50%']
              )
            }}
          >
            <Image
              loading="eager"
              width={900}
              src={NatureImage}
              alt="Priroda"
            />
          </motion.div>
        </motion.div>
      </section>

      <FeaturedVideos />
      <FeaturedImages />
      <Clients />
      <ProjectsReveals />
      <WeddingVideo />
    </PageLayout>
  )
}
