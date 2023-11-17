import PageLayout from '@/components/layout/PageLayout'
import Hero from '@/components/Hero'
import VideosList from '@/components/VideosList'
import FeaturedImages from '@/components/FeaturedImages'

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <VideosList />
      <FeaturedImages noDescription />
    </PageLayout>
  )
}
