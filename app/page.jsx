import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { FeaturedTours } from "@/components/featured-tours"
import { Testimonials } from "@/components/testimonials"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="">
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <HeroSection />
        <FeaturedTours />
        <Testimonials />
        <section className="bg-muted py-16">
          <div className="container mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold">Ready for your next adventure?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Discover amazing destinations and create unforgettable memories with our curated tour packages.
            </p>
            <Button asChild size="lg">
              <Link href="/tours">Explore Tours</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </div>
  )
}
