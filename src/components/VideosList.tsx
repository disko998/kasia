import Image from 'next/image'
import React, { useState } from 'react'
import Button from './buttons/Button'
import Icon from './Icon'
import useTranslation from 'next-translate/useTranslation'
import Modal from './Modal'

type Props = {}

const videos = [
  {
    thumb: '/images/portfolio/pekara-white.jpg',
    video: 'https://www.youtube.com/embed/iUIhlN7Pbc0'
  },
  {
    thumb: '/images/portfolio/MINISTARSTVO.jpg',
    video: 'https://www.youtube.com/embed/s4teckmG2w8'
  },

  {
    thumb: '/images/portfolio/LAZAR-LUX.jpg',
    video: 'https://www.youtube.com/embed/kWgtX3z9rQ0'
  },
  {
    thumb: '/images/portfolio/BKT.png',
    video: 'https://www.youtube.com/embed/uVtwNHGQ57E'
  },
  {
    thumb: '/images/portfolio/12.jpg',
    video: 'https://www.youtube.com/embed/Ree8L1VGeCw'
  },
  {
    thumb: '/images/photography/dogadjaji/21.jpg',
    video: 'https://www.youtube.com/embed/CCkYlWPOFeU'
  },
  {
    thumb: '/images/portfolio/kicks.jpg',
    video: 'https://youtube.com/embed/jTEb3N3anGQ'
  },
  {
    thumb: '/images/portfolio/deve.jpg',
    video: 'https://www.youtube.com/embed/BpGao1NErYg'
  },

  {
    thumb: '/images/cipele.png',
    video: 'https://www.youtube.com/embed/VJQuMbiEQAk'
  }
]
const VideosList = (props: Props) => {
  const { t } = useTranslation('common')
  const [activeVideo, setActiveVideo] = useState<string>()

  return (
    <section className="container flex flex-col items-center justify-center py-10 text-center">
      <div className="grid w-full grid-rows-1 gap-6 lg:grid-cols-3">
        {videos.map(({ thumb, video }) => (
          <div
            key={video}
            className="group flex flex-col items-center justify-center"
          >
            <div className="relative h-[250px] w-full max-w-[500px] overflow-hidden rounded-xl lg:h-[15vw] lg:max-w-full">
              <Image
                fill
                className="absolute inset-0 z-0 object-cover"
                src={thumb}
                alt="Grad"
                sizes="(max-width: 640px) 100vw, 33vw"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-soft-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Button
                  onClick={() => setActiveVideo(video)}
                  className="mt-4 whitespace-nowrap border-soft-white text-soft-white backdrop-blur-[3.5px]"
                  iconRight={<Icon name="play" />}
                >
                  {t('playVideo')}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal open={!!activeVideo} onClose={() => setActiveVideo(undefined)}>
        <div
          onClick={e => e.stopPropagation()}
          className="relative h-[50vh] max-h-[40rem] w-[90vw] max-w-[50rem] md:w-[70vw] xl:w-[40vw]"
        >
          <div
            onClick={() => setActiveVideo(undefined)}
            className="absolute -top-7 right-0 z-10 cursor-pointer"
          >
            <Icon name="close-btn" size="1.5rem" />
          </div>

          <iframe
            width="100%"
            className="h-[100%] overflow-hidden rounded-[20px]"
            src={activeVideo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </Modal>
    </section>
  )
}

export default VideosList
