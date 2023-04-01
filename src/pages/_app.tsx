import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { imbue, jeko } from '@/styles/fonts'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${imbue.variable} ${jeko.variable} font-sans`}>
      <Head>
        <title>{'Kasia - ZABELEŽI TRENUTAK SA KASIA STUDIOM'}</title>
        <meta
          name="description"
          content={
            'Naš tim je sastavljen od 3 profesionalca u svojoj oblasti: fotografija i video montaža. Svi zajedno kreiramo jedinstvene i kvalitetne usluge.'
          }
        />
      </Head>
      <ThemeProvider defaultTheme="dark" enableSystem={false} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default App
