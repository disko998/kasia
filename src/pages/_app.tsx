import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { imbue, jeko } from '@/styles/fonts'

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${imbue.variable} ${jeko.variable} font-sans`}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default App
