import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { jeko } from '@/styles/fonts'
import Head from 'next/head'
import Loading from '@/components/Loading'
import { AnimatePresence } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation('common')
  return (
    <div className={`${jeko.variable} font-sans`}>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta
          property="og:image"
          content="https://www.kasiastudio.rs/images/og.png"
        />
      </Head>
      <ThemeProvider defaultTheme="dark" enableSystem={false} attribute="class">
        <AnimatePresence mode="wait">
          <Loading>
            <Component {...pageProps} />
          </Loading>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  )
}

export default App
