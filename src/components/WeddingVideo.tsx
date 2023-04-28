import Button from '@/components/buttons/Button'
import Icon from '@/components/Icon'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { useScroll, useTransform, motion, useSpring } from 'framer-motion'

import Thumbnail from '../../public/images/photography/dogadjaji/40.jpg'
import MladenciVencanje from '../../public/images/photography/dogadjaji/56.jpg'
import ImageVencanje from '../../public/images/photography/dogadjaji/29.jpg'
import ImageBurma from '../../public/images/photography/dogadjaji/41.jpg'
import Modal from './Modal'
import useTranslation from 'next-translate/useTranslation'

const pallet = ['#060A0B', '#474749', '#C3C2C0', '#D3A38B', '#FFFFFF']

export default function WeddingVideo() {
  const sectionRef = useRef<any>()
  const [showVideo, setShowVideo] = useState(false)
  const { t } = useTranslation('common')

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['center end', 'end center']
  })

  const spring = useSpring(scrollYProgress, { stiffness: 500, damping: 50 })

  return (
    <section ref={sectionRef} className=" overflow-hidden">
      <div className="container flex max-w-4xl flex-col items-center justify-center gap-4 pb-[100px] text-center sm:pb-[200px]">
        <motion.h2>{t('wedding.title')}</motion.h2>
        <motion.p className="max-w-[600px]">
          {t('wedding.description')}
        </motion.p>

        <div className="relative mt-[50px]">
          <motion.div
            style={{
              rotateY: useTransform(spring, [0, 1], [-20, 0]),
              rotateX: useTransform(spring, [0, 1], [-10, 0])
            }}
          >
            <div className="relative overflow-hidden rounded-[20px] lg:rounded-[3rem]">
              <Image
                src={Thumbnail}
                alt="Janjezici"
                className="max-h-[30rem] w-[50rem]"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-soft-black/60">
                <Button
                  onClick={() => setShowVideo(true)}
                  className="mt-4 whitespace-nowrap border-soft-white text-soft-white backdrop-blur-[3.5px]"
                  iconRight={<Icon name="play" />}
                >
                  {t('playVideo')}
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-[-10%] left-[-20%] overflow-hidden rounded-[20px]"
            style={{
              x: useTransform(spring, [0, 1], [-100, 0])
              //   scale: useTransform(spring, [0, 1], [0.8, 1])
            }}
          >
            <Image
              width={400}
              src={MladenciVencanje}
              className="w-[40vw] max-w-[400px]"
              alt="Jezenic mladenci"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>

          <motion.div
            className="absolute top-[-10%] right-[-10%] overflow-hidden rounded-[20px]"
            style={{
              x: useTransform(spring, [0, 1], [50, 0])
            }}
          >
            <Image
              width={250}
              className="w-[40vw] max-w-[300px]"
              src={ImageVencanje}
              alt="Jezenic vencanje"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>

          <motion.div
            className="absolute top-[40%] right-[-15%] overflow-hidden rounded-[20px]"
            style={{
              x: useTransform(spring, [0, 1], [100, 0])
            }}
          >
            <Image
              className="w-[40vw] max-w-[300px]"
              width={300}
              src={ImageBurma}
              alt="Jezenic burma"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </div>

        <div className="mt-1 flex w-[15rem] justify-between">
          {pallet.map(color => (
            <span
              key={color}
              style={{ background: color }}
              className="h-[2rem] w-[2rem] rounded-lg"
            />
          ))}
        </div>
      </div>

      <Modal open={showVideo} onClose={() => setShowVideo(false)}>
        <div
          onClick={e => e.stopPropagation()}
          className="relative h-[50vh] max-h-[40rem] w-[90vw] max-w-[50rem] md:w-[70vw] xl:w-[40vw]"
        >
          <div
            onClick={() => setShowVideo(false)}
            className="absolute -top-7 right-0 z-10 cursor-pointer"
          >
            <Icon name="close-btn" size="1.5rem" />
          </div>

          <iframe
            width="100%"
            className="h-[100%] overflow-hidden rounded-[20px]"
            src={'https://www.youtube.com/embed/CCkYlWPOFeU'}
            title="Svadba - Janežić"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </Modal>
    </section>
  )
}
