import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ServicesSection } from '@/components/services-section'
import { WhyChooseUs } from '@/components/why-choose-us'
import { AboutSection } from '@/components/about-section'
import { ProcessSection } from '@/components/process-section'
import { QualitySection } from '@/components/quality-section'
import { GallerySection } from '@/components/gallery-section'
import { FaqSection } from '@/components/faq-section'
import { CtaSection } from '@/components/cta-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { CursorGlow } from '@/components/cursor-glow'

export default function Page() {
  return (
    <>
      <CursorGlow />
      <SiteHeader />
      <main>
        <Hero />
        <ServicesSection />
        <WhyChooseUs />
        <AboutSection />
        <ProcessSection />
        <QualitySection />
        <GallerySection />
        <FaqSection />
        <CtaSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
