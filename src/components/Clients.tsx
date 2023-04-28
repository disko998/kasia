import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import Telegraf from '../../public/images/clients/telegraf.png'
import Amazon from '../../public/images/clients/amazon.png'
import OnlineBusinessAcademy from '../../public/images/clients/oba.png'
import Autopect from '../../public/images/clients/autopect.png'
import useTranslation from 'next-translate/useTranslation'

type Props = {}

const Clients = (props: Props) => {
  const targetRef = useRef<any>()
  const { t } = useTranslation('common')

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  })

  const parallaxScroll = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  })

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <motion.div
        style={{
          y: useTransform(
            parallaxScroll.scrollYProgress,
            [0, 1],
            ['0%', '30%']
          ),
          opacity: useTransform(
            parallaxScroll.scrollYProgress,
            [0.9, 1],
            [1, 0]
          )
        }}
        className="container sticky top-0 flex min-h-screen flex-col items-center justify-center text-center"
      >
        <motion.h2
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.4], [0, 1])
          }}
        >
          {t('ourClients')}
        </motion.h2>

        <div className="mx-auto mt-20 grid grid-cols-1 grid-rows-4 place-items-center gap-x-16 gap-y-14 sm:grid-cols-2 sm:grid-rows-2">
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.3, 0.4], [0, 1])
            }}
          >
            <Image src={Telegraf} alt="telegraf" width={200} />
          </motion.div>

          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.4, 0.5], [0, 1])
            }}
          >
            <Image src={Autopect} alt="Autopect" width={200} />
          </motion.div>

          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.5, 0.6], [0, 1])
            }}
          >
            <Image src={Amazon} alt="Amazon" width={200} />
          </motion.div>

          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.6, 0.7], [0, 1])
            }}
          >
            <Image
              src={OnlineBusinessAcademy}
              alt="OnlineBusinessAcademy"
              width={200}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Clients
