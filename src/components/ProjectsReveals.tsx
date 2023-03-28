import Icon from '@/components/Icon'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const projects = [
  {
    title: 'Produkt fotografija',
    description:
      'Sa zadovoljstvom vam predstavljamo jednu od najboljih product photography kampanja koju smo imali prilike da radimo i na koju smo najviše ponosni. U pitanju je kompanija Seiko.',
    date: '05, steptembar 2021.',
    place: 'Beograd, Srbija',
    pallet: ['#58412A', '#555532', '#A0AA72', '#E6B2A6', '#E2BFA2'],
    images: [
      '/images/projects/product-sat-1.png',
      '/images/projects/product-sat-2.png'
    ]
  },
  {
    title: 'Lazar Lux Apartments',
    description:
      'Predivan hotel na samoj obali grčkog ostrva Krit. Imali smo tu čast da sarađujemo sa njima i njihovim predivnim hotelom. Nadamo se da ćete uživati!',
    date: '05, steptembar 2022.',
    place: 'Krit, Grčka',
    pallet: ['#58412A', '#544A44', '#74A4C5', '#C6D8E2', '#FFFFFF'],
    images: ['/images/projects/hotel-1.png', '/images/projects/hotel-2.png']
  }
]

export default function ProjectsReveals() {
  return (
    <section className="relative flex flex-col gap-y-36">
      {projects.map((project, i) => (
        <motion.div key={project.title}>
          <Project {...project} index={i} />
        </motion.div>
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
  images,
  index
}: (typeof projects)[0] & { index: number }) => {
  const sectionRef = useRef<any>()
  const targetRef = useRef<any>()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end']
  })

  const parallaxScroll = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['10%', '0%'])

  const rightImageX = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ['100%', '80%', '-12%']
  )
  const leftImageX = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ['-100%', '-80%', '12%']
  )

  const rightRotate = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ['0deg', '-2deg', '-10deg']
  )

  const leftRotate = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ['0deg', '2deg', '10deg']
  )

  const parallaxY = useTransform(
    parallaxScroll.scrollYProgress,
    [0, 1],
    ['0%', '40%']
  )

  return (
    <motion.div
      style={{ y: y }}
      ref={sectionRef}
      key={title}
      className="relative h-[300vh]"
    >
      <motion.article
        ref={targetRef}
        style={{
          y: projects.length - 1 !== index ? parallaxY : undefined
        }}
        className="sticky top-0 flex h-screen items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ x: rightImageX, rotate: rightRotate }}
          className="relative z-10 h-[60%] min-w-[100vw] overflow-hidden rounded-xl sm:min-w-[80vw] md:h-[700px] md:min-w-[600px]"
        >
          <Image
            loading="eager"
            fill
            src={images[0]}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
            alt={title}
          />
        </motion.div>

        <div className="flex min-w-[100vw] flex-col items-center px-4 text-center sm:min-w-[80vw] md:min-w-[700px] md:max-w-[600px]">
          <h2>{title}</h2>
          <p className="mt-7">{description}</p>

          <div className="mt-9 flex items-center justify-between font-serif text-lg text-red-orange sm:text-2xl">
            <span>{date}</span>
            <span className="mx-8">
              <Icon name="arrow-right" />
            </span>
            <span>{place}</span>
          </div>

          <div className="mt-9 flex w-[15rem] justify-between">
            {pallet.map(color => (
              <span
                key={color}
                style={{ background: color }}
                className="h-[2rem] w-[2rem] rounded-lg"
              />
            ))}
          </div>
        </div>

        <motion.div
          style={{ x: leftImageX, rotate: leftRotate }}
          className="relative h-[60%] min-w-[100vw] max-w-[600px] origin-center overflow-hidden rounded-xl sm:min-w-[80vw] md:h-[700px] md:min-w-[600px]"
        >
          <Image
            loading="eager"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
            fill
            src={images[1]}
            alt={title}
          />
        </motion.div>
      </motion.article>
    </motion.div>
  )
}
