import Button from '@/components/buttons/Button'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { isMobile } from 'react-device-detect'
import useTranslation from 'next-translate/useTranslation'

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<NodeJS.Timeout>()
  const { t } = useTranslation('common')

  const onCopy = (text: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    navigator.clipboard?.writeText(text)
    setCopied(true)
    timerRef.current = setTimeout(() => setCopied(false), 3000)
  }

  return (
    <footer className="container flex flex-col items-center justify-center py-10 text-center">
      <div className="flex h-[1.25rem] flex-col overflow-hidden text-lg font-light sm:text-lg">
        <motion.span
          transition={{ duration: 0.5, type: 'spring' }}
          animate={copied ? { y: '-100%' } : { y: 0 }}
        >
          {t('feelFreeToContactUs')}
        </motion.span>
        <motion.span
          className="my-1"
          transition={{ duration: 0.5, type: 'spring' }}
          animate={copied ? { y: '-100%' } : { y: 0 }}
        >
          {t('copy') + ' ✨'}
        </motion.span>
      </div>

      <div className="flex flex-col">
        {isMobile ? (
          <a
            className="group mt-12 cursor-pointer rounded-2xl bg-white p-5 text-center font-serif text-[2.5rem] text-red-orange transition-colors duration-500 dark:bg-[#181b1e] sm:text-5xl"
            href={'mailto:office@kasiastudio.rs'}
          >
            <div className="transition-transform duration-300 group-hover:scale-[0.98] group-active:scale-95">
              OFFICE@KASIASTUDIO.RS
            </div>
          </a>
        ) : (
          <button
            onClick={() => onCopy('office@kasiastudio.rs')}
            className="group mt-12 cursor-pointer rounded-2xl bg-white p-5 text-center font-serif text-[2.5rem] text-red-orange transition-colors duration-500 dark:bg-[#181b1e] sm:text-5xl"
          >
            <div className="transition-transform duration-300 group-hover:scale-[0.98] group-active:scale-95">
              OFFICE@KASIASTUDIO.RS
            </div>
            <div className="hidden">Copy</div>
          </button>
        )}

        {isMobile ? (
          <a
            className="group mt-12 cursor-pointer rounded-2xl bg-white p-5 text-center font-serif text-[2.5rem] text-red-orange transition-colors duration-500 dark:bg-[#181b1e] sm:text-5xl"
            href={'tel:+381611160549'}
          >
            <div className="transition-transform duration-300 group-hover:scale-[0.98] group-active:scale-95">
              +381 61/1160-549
            </div>
          </a>
        ) : (
          <button
            onClick={() => onCopy('office@kasiastudio.rs')}
            className="group mt-12 cursor-pointer rounded-2xl bg-white p-5 text-center font-serif text-[2.5rem] text-red-orange transition-colors duration-500 dark:bg-[#181b1e] sm:text-5xl"
          >
            <div className="transition-transform duration-300 group-hover:scale-[0.98] group-active:scale-95">
              +381 61/1160-549
            </div>
            <div className="hidden">Copy</div>
          </button>
        )}
      </div>

      <div className="relative mt-12 flex w-full flex-col items-center justify-between gap-6 lg:flex-row">
        <span className="order-2 text-[0.75rem] lg:-order-none">
          {t('copyRights')}
        </span>
        <div className="order-1 mb-6 flex gap-4 lg:-order-none lg:mb-0">
          <Button
            as="a"
            target="_blank"
            href="https://www.youtube.com/channel/UCg_xzBtI5jkIA4eKVCBjNNw"
          >
            YOUTUBE
          </Button>
          <Button
            as="a"
            target="_blank"
            href="https://www.instagram.com/gorky_01/?hl=sr"
          >
            INSTAGRAM
          </Button>
          <Button as="a" href="">
            TIKTOK
          </Button>
        </div>
        <span className="order-3 text-[0.75rem] lg:-order-none">
          Design & Development - Bluestudio.rs
        </span>
      </div>
    </footer>
  )
}
