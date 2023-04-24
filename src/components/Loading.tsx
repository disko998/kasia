import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: ReactNode
}

const Loading = ({ children }: Props) => {
  return (
    <>
      <motion.div
        key="page transition animation screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.9,
          delay: 0.6
        }}
      >
        {children}
      </motion.div>
    </>
  )
}

export default Loading
