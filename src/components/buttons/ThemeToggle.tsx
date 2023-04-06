import Button from '@/components/buttons/Button'
import useSSRTheme from '@/hooks/useSSRTheme'
import shutter from '@/assets/shutter.json'
import { useEffect } from 'react'
import { useLottie } from 'lottie-react'
import { motion } from 'framer-motion'

const options = {
  animationData: shutter,
  loop: false,
  autoplay: false
}

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useSSRTheme()
  const filterColor =
    theme === 'dark'
      ? 'invert(100%) sepia(0%) saturate(1%) hue-rotate(97deg) brightness(107%) contrast(101%)'
      : 'invert(5%) sepia(9%) saturate(861%) hue-rotate(169deg) brightness(95%) contrast(97%) blur(0.7px)'
  const { View, playSegments, setSpeed, goToAndStop } = useLottie(options, {
    width: '1.7rem',
    height: '1.7rem',
    filter: filterColor
  })

  useEffect(() => {
    setSpeed(0.7)
  }, [setSpeed])

  useEffect(() => {
    playSegments(theme === 'dark' ? [15, 5] : [5, 15], true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])

  return (
    <Button
      textClassName={`min-w-[1.5rem] mr-[5px] flex flex-col h-[0.625rem] overflow-hidden`}
      className="pr-0"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      iconRight={View}
    >
      <motion.span
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        animate={theme === 'dark' ? { y: '-100%' } : { y: 0 }}
      >
        {'F/1.4'}
      </motion.span>
      <motion.span
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        animate={theme === 'dark' ? { y: '-100%' } : { y: 0 }}
      >
        {'F/23'}
      </motion.span>
    </Button>
  )
}

export default ThemeToggle
