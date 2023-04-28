import ScrollGallery from '@/components/ScrollGallery'
import useFadeVariations from '@/hooks/useFadeVariations'
import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'
import useTranslation from 'next-translate/useTranslation'

export default function FeaturedImages() {
  const targetRef = useRef<any>()
  const fade = useFadeVariations()
  const { t } = useTranslation('common')

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  })

  return (
    <motion.section
      ref={targetRef}
      className="mt-20 flex flex-col items-center justify-center py-40 text-center lg:mt-0"
      style={{
        y: useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
      }}
    >
      <div className="container flex max-w-3xl flex-col items-center justify-center text-center">
        <motion.h2 {...fade} className="sm:text-h2 text-4xl">
          {t('featuredPhotos.title')}
        </motion.h2>
        <motion.p {...fade} className="mt-7">
          {t('featuredPhotos.description')}
        </motion.p>
      </div>

      <div className="mt-20 -rotate-[5deg]">
        <ScrollGallery />
      </div>
    </motion.section>
  )
}
