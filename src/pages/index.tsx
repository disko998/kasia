import FeaturedVideosSection from '@/components/FeaturedVideosSection'
import Hero from '@/components/Hero'
import Navbar from '@/components/layout/Navbar'
import OurClients from '@/components/OurClients'
import ProjectsReveals from '@/components/ProjectsReveals'
import ScrollGallerySection from '@/components/ScrollGallerySection'
import WeddingVideo from '@/components/WeddingVideo'
import Image from 'next/image'
import React from 'react'

export default function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="min-h-[500px]">
        <section className="flex flex-col items-center pb-12">
          <div className="container flex max-w-2xl flex-col items-center text-center">
            <h2>Naša Lokacija</h2>
            <h3 className="mt-7 text-soft-black dark:text-soft-white">
              Beograd, Srbija
            </h3>
            <p className="mt-7 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <Image
            className="mt-7"
            src="/images/belgrade.png"
            alt="Beograd"
            width={521}
            height={147}
          />
        </section>

        <section className="flex flex-col items-center py-12">
          <div className="container flex max-w-2xl flex-col items-center text-center">
            <h2>Kasia Studio</h2>
            <p className="mt-7 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>

          <Image
            className="mt-7"
            src="/images/lighthouse.png"
            alt="Svetionik"
            width={352}
            height={221}
          />
        </section>

        <FeaturedVideosSection />
        {/* <ScrollGallerySection /> */}
        <OurClients />
        <ProjectsReveals />
        <WeddingVideo />
      </main>
    </>
  )
}
