import FeaturedVideosSection from '@/components/FeaturedVideosSection'
import Hero from '@/components/Hero'
import PageLayout from '@/components/layout/PageLayout'
import OurClients from '@/components/OurClients'
import ProjectsReveals from '@/components/ProjectsReveals'
import ScrollGallerySection from '@/components/ScrollGallerySection'
import WeddingVideo from '@/components/WeddingVideo'
import Image from 'next/image'
import React from 'react'

export default function index() {
  return (
    <PageLayout>
      <Hero />

      <main>
        <section className="relative min-h-[1000px] pb-12">
          <div className="container flex max-w-2xl flex-col items-center text-center">
            <h2>Naša Lokacija</h2>
            <h3 className="mt-7 text-soft-black dark:text-soft-white">
              Beograd, Srbija
            </h3>
            <p className="mt-7 max-w-[35rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>

            <Image
              className="mt-7"
              src="/images/belgrade.png"
              alt="Beograd"
              width={753}
              height={212}
            />
          </div>
        </section>

        <section className="min-h-[1000px] py-12">
          <div className="container relative flex max-w-[100%] flex-col items-center justify-center">
            <h2>Kasia Studio</h2>
            <p className="mt-7 max-w-[35rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>

            <Image
              className="mt-7 md:absolute md:left-[10px]"
              src="/images/lighthouse.png"
              alt="Svetionik"
              width={625}
              height={392}
            />

            {/* <Image
              className="mt-7 hidden md:absolute md:right-[10px] md:block"
              src="/images/nature.png"
              alt="Priroda"
              width={324}
              height={549}
            /> */}
          </div>
        </section>

        <FeaturedVideosSection />
        {/* <ScrollGallerySection /> */}
        <OurClients />
        <ProjectsReveals />
        <WeddingVideo />
      </main>
    </PageLayout>
  )
}
