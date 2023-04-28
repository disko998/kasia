import Button from '@/components/buttons/Button'
import Icon from '@/components/Icon'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import useFadeVariations from '@/hooks/useFadeVariations'
import Modal from './Modal'
import useTranslation from 'next-translate/useTranslation'

const videos = [
  {
    title: 'vid1Title',
    thumb: '/images/photography/dogadjaji/21.jpg',
    video: 'https://www.youtube.com/embed/CCkYlWPOFeU'
  },
  {
    title: 'vid2Title',
    thumb: '/images/photography/arhitektura/22.jpg',
    video: 'https://www.youtube.com/embed/kWgtX3z9rQ0'
  },
  {
    title: 'vid3Title',
    thumb: '/images/cipele.png',
    video: 'https://www.youtube.com/embed/VJQuMbiEQAk'
  }
]

export default function FeaturedVideosSection() {
  const targetRef = useRef<any>()
  const fade = useFadeVariations()
  const [activeVideo, setActiveVideo] = useState<string>()
  const { t } = useTranslation('common')

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  })

  const parallaxScroll = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  })

  const videoY = useTransform(scrollYProgress, [0.2, 0.5], [500, 0])

  const spring = useSpring(videoY, { mass: 1.25, stiffness: 400, damping: 50 })

  return (
    <motion.section
      style={{
        y: useTransform(parallaxScroll.scrollYProgress, [0, 1], ['0%', '20%'])
      }}
      ref={targetRef}
      className="container flex flex-col items-center justify-center py-36 text-center"
    >
      <motion.h2 {...fade} className="sm:text-h2 text-4xl">
        {t('featuredVideos.title')}
      </motion.h2>

      <motion.p {...fade} className="mt-7 mb-20 max-w-2xl leading-[120%]">
        {t('featuredVideos.description')}
      </motion.p>

      <div className="grid w-full grid-rows-1 gap-6 lg:grid-cols-3">
        {videos.map(({ title, thumb, video }) => (
          <motion.div
            style={{
              y: spring
            }}
            key={title}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative h-[250px] w-full max-w-[500px] overflow-hidden rounded-xl lg:h-[15vw] lg:max-w-full">
              <Image
                fill
                className="absolute inset-0 z-0 object-cover"
                src={thumb}
                alt="Grad"
                sizes="(max-width: 640px) 100vw, 33vw"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-soft-black/60">
                <h3 className="text-soft-white">{t(title)}</h3>
                <Button
                  onClick={() => setActiveVideo(video)}
                  className="mt-4 whitespace-nowrap border-soft-white text-soft-white backdrop-blur-[3.5px]"
                  iconRight={<Icon name="play" />}
                >
                  {t('playVideo')}
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal open={!!activeVideo} onClose={() => setActiveVideo(undefined)}>
        <div
          onClick={e => e.stopPropagation()}
          className="relative h-[50vh] max-h-[40rem] w-[90vw] max-w-[50rem] md:w-[70vw] xl:w-[40vw]"
        >
          <div
            onClick={() => setActiveVideo(undefined)}
            className="absolute -top-7 right-0 z-10 cursor-pointer"
          >
            <Icon name="close-btn" size="1.5rem" />
          </div>

          <iframe
            width="100%"
            className="h-[100%] overflow-hidden rounded-[20px]"
            src={activeVideo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </Modal>
    </motion.section>
  )
}
