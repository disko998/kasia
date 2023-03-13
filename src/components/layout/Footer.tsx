import Button from '@/components/buttons/Button'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<NodeJS.Timeout>()

  const onCopy = (text: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    navigator.clipboard.writeText(text)
    setCopied(true)
    timerRef.current = setTimeout(() => setCopied(false), 3000)
  }

  return (
    <footer className="container flex flex-col items-center justify-center py-10 text-center">
      <div className="flex h-[1.25rem] flex-col overflow-hidden py-[1px] text-xl font-light sm:text-lg">
        <motion.span
          transition={{ duration: 0.5, type: 'spring' }}
          animate={copied ? { y: '-100%' } : { y: 0 }}
        >
          Budite slobodni da nas kontaktirate
        </motion.span>
        <motion.span
          transition={{ duration: 0.5, type: 'spring' }}
          animate={copied ? { y: '-100%' } : { y: 0 }}
        >
          Kopirano ✨
        </motion.span>
      </div>

      <div className="flex flex-col">
        <button
          onClick={() => onCopy('office@kasiastudio.rs')}
          className="group mt-12 cursor-pointer rounded-2xl bg-white p-5 text-center font-serif text-[2.5rem] text-red-orange transition-colors duration-500 dark:bg-[#181b1e] sm:text-5xl"
        >
          <div className="transition-transform duration-300 group-hover:scale-[0.98] group-active:scale-95">
            OFFICE@KASIASTUDIO.RS
          </div>
          <div className="hidden">Copy</div>
        </button>

        <button
          onClick={() => onCopy('+381 61/1160-549')}
          className="group mt-12 cursor-pointer rounded-2xl bg-white p-5 text-center font-serif text-[2.5rem] text-red-orange transition-colors duration-500 dark:bg-[#181b1e] sm:text-5xl"
        >
          <div className="transition-transform duration-300 group-hover:scale-[.98] group-active:scale-95">
            +381 61/1160-549
          </div>
        </button>
      </div>

      <div className="relative mt-12 flex w-full flex-col items-center justify-between gap-6 lg:flex-row">
        <span className="order-2 text-[0.75rem] lg:-order-none">
          Sva prava zadržana. Ⓒ 2023 Kasia Studio
        </span>
        <div className="order-1 mb-6 flex gap-4 lg:-order-none lg:mb-0">
          <Button>YOUTUBE</Button>
          <Button>INSTAGRAM</Button>
          <Button>TIKTOK</Button>
        </div>
        <span className="order-3 text-[0.75rem] lg:-order-none">
          Design & Development - Bluestudio.rs
        </span>
      </div>
    </footer>
  )
}
