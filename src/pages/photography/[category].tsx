import Button from '@/components/buttons/Button'
import Categories from '@/components/Categories'
import Icon from '@/components/Icon'
import PageLayout from '@/components/layout/PageLayout'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import photoData, { PhotographyCategories } from '@/assets/photos'
import Modal from '@/components/Modal'
import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'
import Link from 'next/link'

const categories = [
  PhotographyCategories.PORTRETI,
  PhotographyCategories.PRODUCT,
  PhotographyCategories.DOGADJAJI,
  PhotographyCategories.ARHITEKTURA,
  PhotographyCategories.OSTALO
]

type Props = {
  images?: [StaticImageData[], StaticImageData[]]
}

export default function Photography({ images }: Props) {
  const { query } = useRouter()
  const category = query.category as PhotographyCategories

  const [showDropdown, setShowDropdown] = useState(false)
  const [activeImg, setActiveImg] = useState<StaticImageData>()

  return (
    <PageLayout hideFooter>
      <div className="flex min-h-screen flex-col lg:flex-row">
        <section className="relative mt-[140px] flex w-full lg:mt-0 lg:w-[50%]">
          <div className="container sticky top-0 flex w-full max-w-[40rem] flex-col items-center justify-center gap-[25px] lg:m-0 lg:h-screen lg:items-start lg:gap-[40px] lg:py-[89px]">
            <p>FOTOGRAFIJE</p>
            <h1>
              Naše fotografije <br /> na jednom mestu
            </h1>
            <p className="max-w-[80%] text-center lg:text-left">
              Sprecijalizovani fotografi u oblastima kao što su brend kontent,
              događaji, produkt fotografija, fotografija arhitekture. Vaše
              fotografije će te dobiti u kratkom roku.
            </p>

            <div className="mt-10 flex w-[146px] flex-col gap-4 sm:my-0 sm:mt-5 sm:w-full sm:flex-row">
              <Button
                as="a"
                target="_blank"
                href="https://www.youtube.com/channel/UCg_xzBtI5jkIA4eKVCBjNNw"
                className="min-h-[25px] flex-1"
              >
                YOUTUBE
              </Button>
              <Button
                as="a"
                target="_blank"
                href="https://www.instagram.com/gorky_01/?hl=sr"
                className="min-h-[25px] flex-1"
              >
                INSTAGRAM
              </Button>
              <Button className="min-h-[25px] flex-1">TIKTOK</Button>
            </div>

            <div className="mt-5 hidden w-full sm:block">
              <Categories
                type="photography"
                selected={category}
                categories={categories}
              />
            </div>

            <div className="fixed bottom-12 z-10 sm:hidden">
              <motion.div
                variants={{
                  hidden: { opacity: 0, display: 'none' },
                  show: {
                    opacity: 1,
                    display: 'flex',
                    transition: {
                      delayChildren: 0.5
                    }
                  }
                }}
                initial="hidden"
                animate={showDropdown ? 'show' : 'hidden'}
                className="text:bg-soft-white mb-5 flex w-full flex-col rounded-lg border-2 border-red-orange bg-soft-white dark:bg-soft-black"
              >
                {categories.map((category, i) => (
                  <Link
                    href={`/photography/${category}`}
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
                className="text-red-orang z-10 min-h-[35px] w-[182px] border-2 border-red-orange bg-soft-white 
				px-[18px] font-medium hover:bg-soft-white active:bg-soft-white dark:border-red-orange dark:bg-soft-black
				 dark:text-red-orange hover:dark:bg-soft-black active:dark:bg-soft-black"
              >
                {category}
              </Button>
            </div>
          </div>
        </section>

        <section className="mt-10 grid w-full grid-cols-1 gap-4 overflow-hidden p-4 sm:grid-cols-2 lg:mt-0 lg:w-[50%] lg:pt-[200px]">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-4">
              {images?.[i].map(image => (
                <Image
                  className="cursor-pointer overflow-hidden rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
                  placeholder="blur"
                  onClick={() => setActiveImg(image)}
                  key={image.src}
                  src={image}
                  alt={category}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              ))}
            </div>
          ))}
        </section>

        <Modal open={!!activeImg} onClose={() => setActiveImg(undefined)}>
          <div className="relative px-4">
            <div
              onClick={() => setActiveImg(undefined)}
              className="absolute -top-7 right-5 z-10 cursor-pointer"
            >
              <Icon
                name="close-btn"
                size="1.5rem"
                className="dark:soft-white text-soft-black transition-colors"
              />
            </div>

            {activeImg && (
              <Image
                className="max-h-[80vh] w-[100vw] object-contain lg:max-h-[90vh]"
                priority
                sizes="80vw"
                alt={category}
                src={activeImg}
              />
            )}
          </div>
        </Modal>
      </div>
    </PageLayout>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const category = context.params?.category as PhotographyCategories
  const col1: StaticImageData[] = []
  const col2: StaticImageData[] = []

  photoData[category]?.forEach((data, i) => {
    i % 2 === 0 ? col1.push(data) : col2.push(data)
  })
  const images = [col1, col2]

  return {
    props: {
      images
    }
  }
}

export async function getStaticPaths() {
  const paths = categories.map(category => ({ params: { category } }))
  return { paths, fallback: true }
}
