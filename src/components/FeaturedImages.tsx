import ScrollGallery from '@/components/ScrollGallery'
import useFadeVariations from '@/hooks/useFadeVariations'
import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function FeaturedImages() {
  const targetRef = useRef<any>()
  const fade = useFadeVariations()

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  })

  return (
    <motion.section
      ref={targetRef}
      className="mt-20 flex min-h-screen flex-col items-center justify-center text-center lg:mt-0"
      style={{
        y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']),
        opacity: useTransform(scrollYProgress, [0, 1], [1, 0])
      }}
    >
      <div className="container flex max-w-3xl flex-col items-center justify-center text-center">
        <motion.h2 {...fade} className="sm:text-h2 text-4xl">
          Fotografija nam je u rukama
        </motion.h2>
        <motion.p {...fade} className="mt-7">
          Iza nas stoji široki spektar fotografskog sadržaja. Smatramo da smo
          jedni od najboljih na tržištu, kao što možete i sami da se uverite po
          slikama koje su ispod vas. Radeći sa nekim od najvećih firmi i imena u
          Srbiji i šire, postavili smo lestvicu koju retko ko može da nadmaši.
          Real Estate Photography, Porteri, Food Photography, Product
          Photography, Landscape Photography su samo neke od stvari koje vam
          nudimo. Nadamo se da ćete i vi, takođe, prepoznati naš kvalitet i sami
          se uveriti u ove reči.
        </motion.p>
      </div>

      <div className="mt-20 -rotate-[5deg]">
        <ScrollGallery />
      </div>
    </motion.section>
  )
}
