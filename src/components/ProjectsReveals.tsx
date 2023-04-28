import Icon from '@/components/Icon'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

type Projects = {
  title: string
  description: string
  date: string
  place: string
  pallet: string[]
  images: string[]
}

export default function ProjectsReveals() {
  const { t } = useTranslation('common')

  const projects = t<Projects[]>('projects', {}, { returnObjects: true })

  return (
    <section className="relative flex flex-col gap-y-36">
      {projects?.map((project, i) => (
        <motion.div key={project.title}>
          <Project projects={projects} {...project} index={i} />
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
  index,
  projects
}: Projects & { index: number; projects: Projects[] }) => {
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
