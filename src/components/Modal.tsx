import useMounted from '@/hooks/useMounted'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { createPortal } from 'react-dom'

type Props = {
  children?: React.ReactNode | string
  open: boolean
  onClose: () => void
}

export default function Modal({ children, open, onClose }: Props) {
  const isMounted = useMounted()

  if (!isMounted) return null

  return createPortal(
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          onClick={() => onClose()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-soft-white/80 dark:bg-soft-black/80"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
