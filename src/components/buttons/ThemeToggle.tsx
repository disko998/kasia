import Button from '@/components/buttons/Button'
import Icon from '@/components/Icon'
import useSSRTheme from '@/hooks/useSSRTheme'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const { theme, setTheme } = useSSRTheme()

  return (
    <Button
      textClassName={`min-w-[1.5rem] overflow-visible  `}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      iconRight={
        <motion.div
          variants={{
            dark: {
              rotateZ: 180
            },
            light: {
              rotateZ: 0
            }
          }}
          animate={theme === 'dark' ? 'dark' : 'light'}
          transition={{
            duration: 0.5
          }}
        >
          <Icon name="shutter" size="clamp(17px, 1rem, 30px)" />
        </motion.div>
      }
    >
      {theme === 'dark' ? 'F/23' : 'F/1.4'}
    </Button>
  )
}

export default ThemeToggle
