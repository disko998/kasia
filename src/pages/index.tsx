import FeaturedVideos from '@/components/FeaturedVideos'
import PageLayout from '@/components/layout/PageLayout'
import ProjectsReveals from '@/components/ProjectsReveals'
import WeddingVideo from '@/components/WeddingVideo'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Button from '@/components/buttons/Button'

import Icon from '@/components/Icon'
import BelgradeImage from '../../public/images/belgrade.png'
import LighthouseImage from '../../public/images/lighthouse.png'
import NatureImage from '../../public/images/nature.png'
import useFadeVariations from '@/hooks/useFadeVariations'
import FeaturedImages from '@/components/FeaturedImages'

export default function Index() {
  const heroRef = useRef<any>()
  const section1Ref = useRef<any>()
  const section2Ref = useRef<any>()

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  const section1Scroll = useScroll({
    target: section1Ref,
    offset: ['start center', 'end end']
  })

  const section2Scroll = useScroll({
    target: section2Ref,
    offset: ['start center', 'end end']
  })

  const section1Parallax = useScroll({
    target: section2Ref,
    offset: ['start end', 'start start']
  })

  const section2Parallax = useScroll({
    target: section2Ref,
    offset: ['end end', 'end start']
  })

  return (
    <PageLayout>
      <header className="container h-screen pb-[70px] pt-[89px]">
        <motion.div
          ref={heroRef}
          style={{
            y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']),
            opacity: useTransform(scrollYProgress, [0.5, 1], [1, 0])
          }}
          className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-xl"
        >
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
            }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center"
          >
            <h1 className="max-w-[30rem] text-center text-white">
              ZABELEŽI TRENUTAK SA KASIA STUDIOM
            </h1>
            <Button className="mt-7 border-white text-white">O NAMA</Button>
          </motion.div>

          <video className="h-full w-full object-cover" autoPlay loop muted>
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 z-10 bg-soft-black/60" />
        </motion.div>
      </header>

      <section ref={section1Ref} className="h-[300vh]">
        <motion.div
          style={{
            y: useTransform(
              section1Parallax.scrollYProgress,
              [0, 1],
              ['0%', '30%']
            ),
            opacity: useTransform(
              section1Parallax.scrollYProgress,
              [0, 1],
              [1, 0]
            )
          }}
          className="sticky top-0 flex h-screen items-center text-center"
        >
          <div className="container flex max-w-2xl flex-col items-center text-center">
            <motion.h2
              style={{
                opacity: useTransform(
                  section1Scroll.scrollYProgress,
                  [0, 0.2],
                  [0, 1]
                )
              }}
            >
              Naša Lokacija
            </motion.h2>

            <motion.h3
              style={{
                opacity: useTransform(
                  section1Scroll.scrollYProgress,
                  [0.2, 0.3],
                  [0, 1]
                ),
                y: useTransform(
                  section1Scroll.scrollYProgress,
                  [0.2, 0.3],
                  [10, 0]
                )
              }}
              className="mt-7 text-soft-black dark:text-soft-white"
            >
              Beograd, Srbija
            </motion.h3>

            <motion.p
              style={{
                opacity: useTransform(
                  section1Scroll.scrollYProgress,
                  [0.3, 0.4],
                  [0, 1]
                ),
                y: useTransform(
                  section1Scroll.scrollYProgress,
                  [0.3, 0.4],
                  [10, 0]
                )
              }}
              className="mt-7"
            >
              Naš studio se nalazi u Zemunu - ulica Prvomajska 6k.
            </motion.p>

            <motion.div
              className="absolute bottom-0 left-0 right-0 flex items-center justify-center"
              style={{
                y: useTransform(
                  section1Scroll.scrollYProgress,
                  [0.4, 0.9],
                  ['100%', '0%']
                )
              }}
            >
              <Image src={BelgradeImage} alt="Beograd" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section ref={section2Ref} className="mb-40 h-[300vh]">
        <motion.div
          className="sticky top-0 flex h-screen items-center text-center"
          style={{
            y: useTransform(
              section2Parallax.scrollYProgress,
              [0, 1],
              ['0%', '10%']
            ),
            opacity: useTransform(
              section2Parallax.scrollYProgress,
              [0, 1],
              [1, 0]
            )
          }}
        >
          <div className="container flex max-w-2xl flex-col items-center text-center">
            <motion.h2
              style={{
                opacity: useTransform(
                  section2Scroll.scrollYProgress,
                  [0, 0.2],
                  [0, 1]
                )
              }}
            >
              Kasia Studio
            </motion.h2>

            <motion.p
              style={{
                opacity: useTransform(
                  section2Scroll.scrollYProgress,
                  [0.2, 0.3],
                  [0, 1]
                ),
                y: useTransform(
                  section2Scroll.scrollYProgress,
                  [0.2, 0.3],
                  [10, 0]
                )
              }}
              className="mt-7 max-w-[35rem]"
            >
              Naš tim je sastavljen od 3 profesionalca, svako u svojoj oblasti.
              Edvard je profesionalni fotograf koji je radio sa preko hiljadu
              poznatih ličnosti i imena u regionu i svojim iskustvom i
              kvalitetom stoji iza svake svoje fotografije...
            </motion.p>

            <motion.div
              style={{
                opacity: useTransform(
                  section2Scroll.scrollYProgress,
                  [0.3, 0.4],
                  [0, 1]
                ),
                y: useTransform(
                  section2Scroll.scrollYProgress,
                  [0.3, 0.4],
                  [10, 0]
                )
              }}
            >
              <Button
                as="a"
                href="/about"
                className="mt-7 border-red-orange text-red-orange"
              >
                O nama
              </Button>
            </motion.div>

            <motion.div
              className="absolute left-0 bottom-0 flex items-center justify-center"
              style={{
                y: useTransform(
                  section2Scroll.scrollYProgress,
                  [0.4, 0.8],
                  ['100%', '0%']
                )
              }}
            >
              <Image
                width={625}
                height={392}
                src={LighthouseImage}
                alt="Svetionik"
              />
            </motion.div>

            <motion.div
              className="absolute right-0 bottom-0 hidden items-center justify-center lg:flex"
              style={{
                y: useTransform(
                  section2Scroll.scrollYProgress,
                  [0.6, 1],
                  ['100%', '0%']
                )
              }}
            >
              <Image width={549} height={324} src={NatureImage} alt="Priroda" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <FeaturedVideos />
      <FeaturedImages />

      <section className="container mt-40 flex flex-col items-center justify-center text-center">
        <motion.h2>Naši Klijenti</motion.h2>

        <div className="mx-auto mt-12 grid max-w-[309px] grid-cols-2 grid-rows-3 place-items-center gap-x-16 gap-y-14">
          <Icon name="father-dev" />
          <Icon name="father-dev" />
          <Icon name="father-dev" />
          <Icon name="father-dev" />
          <Icon name="father-dev" />
          <Icon name="father-dev" />
        </div>
      </section>

      <ProjectsReveals />
      <WeddingVideo />
    </PageLayout>
  )
}
