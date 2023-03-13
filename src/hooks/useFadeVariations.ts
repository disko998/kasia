import { Variants } from 'framer-motion'

const useFadeVariations = () => {
  const fade: Variants = {
    hide: { opacity: 0, y: 10, transition: { duration: 0.5 } },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return {
    variants: fade,
    initial: 'hide',
    whileInView: 'show',
    viewport: { margin: '-50px' }
  }
}

export default useFadeVariations
