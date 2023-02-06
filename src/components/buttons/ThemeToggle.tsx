import Button from '@/components/buttons/Button'
import Icon from '@/components/Icon'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Button
      textClassName={`min-w-[1.5rem] overflow-visible`}
      onClick={() => mounted && setTheme(theme === 'dark' ? 'light' : 'dark')}
      iconRight={<Icon name="shutter" size="clamp(17px, 1rem, 30px)" />}
    >
      {theme === 'dark' && mounted ? 'F/23' : 'F/1.4'}
    </Button>
  )
}

export default ThemeToggle
