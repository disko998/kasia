import Button from '@/components/buttons/Button'
import ThemeToggle from '@/components/buttons/ThemeToggle'
import Logo from '@/components/Logo'
import useTranslation from 'next-translate/useTranslation'

type Props = {
  onMenu: () => void
}

export const links = [
  {
    href: '/',
    label: 'home'
  },
  {
    href: '/about',
    label: 'aboutUs'
  },
  {
    href: '/photography',
    label: 'photography'
  }
]

export default function Navbar({ onMenu }: Props) {
  const { t } = useTranslation('common')

  return (
    <nav
      className={`container fixed top-0 z-40 flex h-[89px] flex-row items-center justify-between bg-soft-white/80
	   backdrop-blur-md transition-colors duration-500 dark:bg-soft-black/80`}
    >
      <Button onClick={onMenu} className="xl:hidden">
        {t('menu')}
      </Button>

      <div className="hidden flex-row gap-4 xl:flex">
        {links.map(({ href, label }) => (
          <Button key={href} as="a" href={href}>
            {t(label)}
          </Button>
        ))}
      </div>

      <span className="absolute left-[50%] right-0 w-fit translate-x-[-50%]">
        <Logo />
      </span>

      <div className="flex-row gap-4 xl:flex">
        <Button
          as="a"
          href="tel:+381 61/1160-549"
          className="group hidden transition-all xl:flex"
          textClassName="flex flex-col overflow-hidden h-[0.625rem]"
        >
          <span className="translate-y-0 transition-transform duration-500 group-hover:translate-y-[-100%]">
            {t('contactUs')}
          </span>
          <span className="translate-y-0 transition-transform duration-500 group-hover:translate-y-[-100%]">
            {'+381 61/1160-549'}
          </span>
        </Button>

        <Button
          as="a"
          href="mailto:milosmrdja80@gmail.com"
          className="hidden xl:flex"
        >
          {t('email')}
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  )
}
