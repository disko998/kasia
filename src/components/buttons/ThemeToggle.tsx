import Button from '@/components/buttons/Button'
import Icon from '@/components/Icon'
import useSSRTheme from '@/hooks/useSSRTheme'

const ThemeToggle = () => {
  const { theme, setTheme } = useSSRTheme()

  return (
    <Button
      textClassName={`min-w-[1.5rem] overflow-visible`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      iconRight={<Icon name="shutter" size="clamp(17px, 1rem, 30px)" />}
    >
      {theme === 'dark' ? 'F/23' : 'F/1.4'}
    </Button>
  )
}

export default ThemeToggle
