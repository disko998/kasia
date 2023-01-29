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
      className={`w-[75px]`}
      textClassName={`w-[20px] overflow-visible`}
      onClick={() => mounted && setTheme(theme === 'dark' ? 'light' : 'dark')}
      iconRight={<Icon name="shutter" />}
    >
      {theme === 'dark' && mounted ? 'F/23' : 'F/1.4'}
    </Button>
  )
}

export default ThemeToggle
