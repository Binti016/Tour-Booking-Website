import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="">
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-10" />
      <div
        className="h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "url('/Travel1.jpg?height=600&width=1200')" }}
      >
        <div className="container relative z-20 flex h-full flex-col items-start justify-center p-8">
          <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Discover the world with unforgettable journeys!
          </h1>
          <p className="mb-8 max-w-lg text-lg text-muted-foreground text-slate-800">
            Explore breathtaking destinations with our expertly curated tour packages. Your adventure begins here.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button size="lg" asChild>
              <Link href="/tours">Explore Tours</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
