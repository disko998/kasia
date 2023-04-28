import localFont from '@next/font/local'
// import { Imbue } from '@next/font/google'

// export const imbue = Imbue({
//   subsets: ['latin'],
//   weight: ['400', '500', '600'],
//   display: 'swap',
//   fallback: ['serif'],
//   variable: '--font-imbue'
// })

export const jeko = localFont({
  src: [
    {
      path: '../../public/fonts/Jeko Thin.ttf',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Jeko Extra Light.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Jeko Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Jeko Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Jeko Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Jeko Semi Bold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Jeko Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Jeko Black.ttf',
      weight: '900',
      style: 'normal'
    }
  ],
  fallback: ['sans-serif'],
  display: 'swap',
  variable: '--font-jeko'
})
