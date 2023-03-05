import Button from '@/components/buttons/Button'
import Categories from '@/components/Categories'
import Icon from '@/components/Icon'
import PageLayout from '@/components/layout/PageLayout'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

import image1 from '../../public/images/photography/1.jpg'
import image2 from '../../public/images/photography/2.jpg'
import image3 from '../../public/images/photography/3.jpg'
import image4 from '../../public/images/photography/4.jpg'
import image5 from '../../public/images/photography/5.jpg'
import image6 from '../../public/images/photography/6.jpg'

enum PhotographyCategories {
  ALL = 'Svi albums',
  PORTRETI = 'Portreti',
  DOGADJAJI = 'Dogadjaji',
  ARHITEKTURA = 'Arhitektura'
}

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
                {categories.map(category => (
                  <button
                    onClick={() => {
                      setCategory(category)
                      setShowDropdown(false)
                    }}
                    className="border-b-1 border-silver-brown p-[12px]"
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
            {[image4, image3, image2, image4, image3, image2].map(
              (image, i) => (
                <Image
                  key={i}
                  className="cursor-zoom-in overflow-hidden rounded-[30px] transition-transform duration-500 hover:scale-[1.02]"
                  src={image}
                  alt="slika"
                />
              )
            )}
          </div>
          <div className="flex flex-col gap-4">
            {[image1, image6, image5, image1, image6, image5].map(
              (image, i) => (
                <Image
                  className="cursor-zoom-in overflow-hidden rounded-[30px] transition-transform duration-500 hover:scale-[1.02]"
                  src={image}
                  alt="slika"
                  key={i}
                />
              )
            )}
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
