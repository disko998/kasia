import Icon from '@/components/Icon'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const projects = [
  {
    title: 'Petar Stanković - Začarani grad',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: '02, steptembar 2021.',
    place: 'Novi Sad',
    pallet: ['#060A0B', '#136266', '#7A251E', '#934465', '#EBE4ED'],
    images: ['/images/watch-1.webp', '/images/watch-1.webp']
  },
  {
    title: 'Petar Stanković - Začarani gradd',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: '02, steptembar 2021.',
    place: 'Novi Sad',
    pallet: ['#58412A', '#555532', '#A0AA72', '#E5B2A6', '#E2BFA2'],
    images: ['/images/watch-1.webp', '/images/watch-1.webp']
  },
  {
    title: 'Petar Stanković - Začarani graddd',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: '02, steptembar 2021.',
    place: 'Novi Sad',
    pallet: ['#303941', '#647B83', '#9CB9C3', '#C6D8E2', '#FFFFFF'],
    images: ['/images/watch-1.webp', '/images/watch-1.webp']
  }
]

export default function ProjectsReveals() {
  return (
    <section className="relative flex flex-col gap-y-36">
      {projects.map(project => (
        <Project key={project.title} {...project} />
      ))}
    </section>
  )
}

const Project = ({
  title,
  description,
  date,
  place,
  pallet,
  images
}: (typeof projects)[0]) => {
  const sectionRef = useRef<any>()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['10%', '0%'])

  const rightImageX = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ['100%', '80%', '-10%']
  )
  const leftImageX = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ['-100%', '-80%', '10%']
  )

  //   const rightRotate = useTransform(
  //     scrollYProgress,
  //     [0, 0.5, 1],
  //     ['0deg', '-2deg', '-2deg']
  //   )

  //   const leftRotate = useTransform(
  //     scrollYProgress,
  //     [0, 0.5, 1],
  //     ['0deg', '2deg', '2deg']
  //   )

  return (
    <motion.div
      style={{ y: y }}
      ref={sectionRef}
      key={title}
      className="relative h-[200vh]"
    >
      <article className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div
          style={{ x: rightImageX }}
          className="relative z-10 h-[80%] min-w-[100vw] overflow-hidden rounded-xl sm:min-w-[80vw] md:h-[700px] md:min-w-[600px]"
        >
          <Image fill src={images[0]} alt={title} />
        </motion.div>

        <div className="flex min-w-[100vw] flex-col items-center text-center sm:min-w-[80vw] md:min-w-[700px] md:max-w-[600px]">
          <h2>{title}</h2>
          <p className="mt-7">{description}</p>

          <div className="mt-9 flex items-center justify-between font-serif text-lg text-red-orange sm:text-2xl">
            <span>{date}</span>
            <span className="mx-8">
              <Icon name="arrow-right" />
            </span>
            <span>{place}</span>
          </div>

          <div className="mt-9 flex w-[319px] justify-between">
            {pallet.map(color => (
              <span
                key={color}
                style={{ background: color }}
                className={`h-[40px] w-[40px] rounded-lg`}
              />
            ))}
          </div>
        </div>

        <motion.div
          style={{ x: leftImageX }}
          className="relative h-[80%] min-w-[100vw] max-w-[600px] origin-center overflow-hidden rounded-xl sm:min-w-[80vw] md:h-[700px] md:min-w-[600px]"
        >
          <Image fill src={images[1]} alt={title} />
        </motion.div>
      </article>
    </motion.div>
  )
}
