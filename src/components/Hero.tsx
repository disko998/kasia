import React, { useEffect, useRef } from 'react'
import Button from './buttons/Button'
import useTranslation from 'next-translate/useTranslation'

type Props = {}

export default function Hero({}: Props) {
  const videRef = useRef<HTMLVideoElement>(null)
  const { t } = useTranslation('common')

  useEffect(() => {
    videRef?.current?.play()
  }, [videRef])

  return (
    <header className="container h-screen pb-[70px] pt-[89px]">
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-xl">
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <h1 className="max-w-[30rem] text-center text-white">{t('title')}</h1>
          <Button as="a" href="/about" className="mt-7 border-white text-white">
            {t('aboutUs')}
          </Button>
        </div>

        <video
          ref={videRef}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero.mp4" type="video/mp4" />
          <source src="/hero.webm" type="video/webm" />
          {/* <source src="/hero.ogg" type="video/ogg" /> */}
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 z-10 bg-soft-black/60" />
      </div>
    </header>
  )
}
