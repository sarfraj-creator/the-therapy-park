import HeroSection from '@/components/sections/home/HeroSection'
import OurPromise from '@/components/sections/home/OurPromise'
import OurServices from '@/components/sections/home/OurServices'
import BenefitsSection from '@/components/sections/home/BenefitsSection'
import TestimonialsSection from '@/components/sections/home/TestimonialsSection'
import TeamSection from '@/components/sections/home/TeamSection'
import RecentPosts from '@/components/sections/home/RecentPosts'
import FAQSection from '@/components/sections/home/FAQSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurPromise />
      <OurServices />
      <BenefitsSection />
      <TestimonialsSection />
      <TeamSection />
      <RecentPosts />
      <FAQSection />
    </>
  )
}