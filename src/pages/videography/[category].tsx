import Button from '@/components/buttons/Button'
import Categories from '@/components/Categories'
import Icon from '@/components/Icon'
import PageLayout from '@/components/layout/PageLayout'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from '@/components/Modal'
import videoData, { VideoCategories } from '@/assets/videos'
import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import classNames from 'classnames'

const categories = [
  VideoCategories.DOGADJAJI,
  VideoCategories.SPORT,
  VideoCategories.SPOTOVI,
  VideoCategories.PRODUCT,
  VideoCategories.OSTALO
]

type Props = {
  videos: [string[], string[]]
}

export default function Photography({ videos }: Props) {
  const { query } = useRouter()
  const category = query.category as VideoCategories

  const [showDropdown, setShowDropdown] = useState(false)
  const [activeVideo, setActiveVideo] = useState<string>()

  return (
    <PageLayout hideFooter>
      <div className="flex min-h-screen flex-col lg:flex-row">
        <section className="relative mt-[140px] flex w-full lg:mt-0 lg:w-[50%]">
          <div className="container sticky top-0 flex w-full max-w-[40rem] flex-col items-center justify-center gap-[25px] lg:m-0 lg:h-screen lg:items-start lg:gap-[40px] lg:py-[89px]">
            <p>VIDEOGRAGIJA</p>
            <h1>
              Naši video snimci
              <br /> na jednom mestu
            </h1>
            <p className="max-w-[80%] text-center lg:text-left">
              Sprecijalizovani fotografi u oblastima kao što su brend kontent,
              događaji, produkt fotografija, fotografija arhitekture. Vaše
              fotografije će te dobiti u kratkom roku.
            </p>

            <div className="mt-10 flex w-[146px] flex-col gap-4 sm:my-0 sm:mt-5 sm:w-full sm:flex-row">
              <Button className="min-h-[25px] flex-1">KONTAKT</Button>
              <Button className="min-h-[25px] flex-1">INSTAGRAM</Button>
              <Button className="min-h-[25px] flex-1">TIKTOK</Button>
            </div>

            <div className="mt-5 hidden w-full sm:block">
              <Categories
                type="videography"
                selected={category}
                categories={categories}
              />
            </div>

            <div className="fixed bottom-12 sm:hidden">
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      delayChildren: 0.5
                    }
                  }
                }}
                initial="hidden"
                animate={showDropdown ? 'show' : 'hidden'}
                className="mb-5 flex w-full flex-col rounded-lg border-2 border-red-orange bg-soft-white dark:text-soft-black"
              >
                {categories.map((category, i) => (
                  <Link
                    href={`/videography/${category}`}
                    onClick={() => {
                      setShowDropdown(false)
                    }}
                    className={classNames(
                      'border-silver-brown p-[12px] capitalize dark:border-red-orange',
                      {
                        'border-b-1': i !== category.length
                      }
                    )}
                    key={category}
                  >
                    {category}
                  </Link>
                ))}
              </motion.div>

              <Button
                onClick={() => setShowDropdown(state => !state)}
                iconRight={
                  <motion.div
                    animate={showDropdown ? { rotate: 180 } : { rotate: 0 }}
                    transition={{ duration: 0.3, ease: 'linear' }}
                  >
                    <Icon name="arrow-down" />
                  </motion.div>
                }
                textClassName="text-left"
                className="min-h-[35px] w-[182px] border-2 border-red-orange bg-soft-white px-[18px] font-medium text-red-orange
			   hover:bg-soft-white active:bg-soft-white dark:border-red-orange dark:text-red-orange hover:dark:bg-soft-white"
              >
                {category}
              </Button>
            </div>
          </div>
        </section>

        <section className="mt-10 grid w-full grid-cols-1 gap-4 overflow-hidden p-4 sm:grid-cols-2 lg:mt-0 lg:w-[50%] lg:pt-[200px]">
          <div className="flex flex-col gap-4">
            {Array.from({ length: 2 }).map((_, index) =>
              videos?.[index].map(video => (
                <div
                  key={video}
                  className="relative overflow-hidden rounded-[20px]"
                >
                  <video
                    src={`/videos/${video}`}
                    className="h-full w-full  object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>

                  <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-soft-black/60">
                    <Button
                      onClick={() => setActiveVideo(video)}
                      className="mt-4 whitespace-nowrap border-soft-white text-soft-white backdrop-blur-[3.5px]"
                      iconRight={<Icon name="play" />}
                    >
                      Pogledaj
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

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

            <video
              className="h-full w-full overflow-hidden rounded-[20px] object-cover"
              autoPlay
              controls
            >
              <source src={`/videos/${activeVideo}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Modal>
      </div>
    </PageLayout>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const category =
    categories.find(category => category === context.params?.category) ||
    VideoCategories.DOGADJAJI

  const half = Math.round(videoData[category]?.length / 2)
  const col1 = videoData[category].slice(0, half)
  const col2 = videoData[category].slice(half, videoData[category].length)

  const videos = [col1, col2]

  return {
    props: {
      videos
    }
  }
}

export async function getStaticPaths() {
  const paths = categories.map(category => ({ params: { category } }))
  return { paths, fallback: true }
}
