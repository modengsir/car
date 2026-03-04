import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/home/hero-section"
import { BrandSection } from "@/components/home/brand-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { ServiceCards } from "@/components/home/service-cards"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <BrandSection />
        <FeaturedProducts />
        <ServiceCards />
      </main>
      <SiteFooter />
    </div>
  )
}
