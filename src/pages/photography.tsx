import Button from '@/components/buttons/Button'
import Categories from '@/components/Categories'
import Icon from '@/components/Icon'
import PageLayout from '@/components/layout/PageLayout'
import Image, { StaticImageData } from 'next/image'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import photoData, { PhotographyCategories } from '@/assets/photos'
import Modal from '@/components/Modal'

const categories = [
  PhotographyCategories.ALL,
  PhotographyCategories.PORTRETI,
  PhotographyCategories.DOGADJAJI,
  PhotographyCategories.ARHITEKTURA
]

export default function Photography() {
  const [category, setCategory] = useState<PhotographyCategories>(
    PhotographyCategories.ALL
  )
  const [showDropdown, setShowDropdown] = useState(false)
  const [activeImg, setActiveImg] = useState<StaticImageData>()

  const { col1, col2 } = useMemo(() => {
    const col1: StaticImageData[] = []
    const col2: StaticImageData[] = []

    photoData[category].forEach((data, i) => {
      i % 2 === 0 ? col1.push(data) : col2.push(data)
    })

    return { col1, col2 }
  }, [category])

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
              <Button className="min-h-[25px] flex-1">KONTAKT</Button>
              <Button className="min-h-[25px] flex-1">INSTAGRAM</Button>
              <Button className="min-h-[25px] flex-1">TIKTOK</Button>
            </div>

            <div className="mt-5 hidden w-full sm:block">
              <Categories
                onClick={category =>
                  setCategory(category as PhotographyCategories)
                }
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
                  <button
                    onClick={() => {
                      setCategory(category)
                      setShowDropdown(false)
                    }}
                    className={classNames(
                      'border-silver-brown p-[12px] dark:border-red-orange',
                      {
                        'border-b-1': i !== category.length
                      }
                    )}
                    key={category}
                  >
                    {category}
                  </button>
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
          <div className="flex flex-col gap-4">
            {col1.map(image => (
              <Image
                onClick={() => setActiveImg(image)}
                key={image.src}
                className="cursor-pointer overflow-hidden rounded-[30px] transition-transform duration-500 hover:scale-[1.02]"
                src={image}
                alt="slika"
                loading="lazy"
              />
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {col2.map(image => (
              <Image
                loading="lazy"
                onClick={() => setActiveImg(image)}
                className="cursor-pointer overflow-hidden rounded-[30px] transition-transform duration-500 hover:scale-[1.02]"
                src={image}
                alt="slika"
                key={image.src}
              />
            ))}
          </div>
        </section>

        <Modal open={!!activeImg} onClose={() => setActiveImg(undefined)}>
          <div className="relative w-[90%] max-w-[100%] rounded-[20px] md:max-w-[50vw] xl:max-w-[30vw]">
            <div
              onClick={() => setActiveImg(undefined)}
              className="absolute -top-7 right-0 z-10 cursor-pointer"
            >
              <Icon name="close-btn" size="1.5rem" />
            </div>

            {activeImg && (
              <Image
                loading="lazy"
                className="rounded-[20px] object-contain"
                alt="modal image"
                src={activeImg}
              />
            )}
          </div>
        </Modal>
      </div>
    </PageLayout>
  )
}
