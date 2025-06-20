import { TourCard } from "@/components/tour-card"

// Mock data - would come from API in real app
const featuredTours = [
  {
    id: 1,
    title: "Bali Paradise Escape",
    location: "Bali, Indonesia",
    duration: "7 days",
    price: 1299,
    rating: 4.8,
    reviewCount: 124,
    image: "/bali.jpg?height=300&width=400",
    category: "Beach",
  },
  {
    id: 2,
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    duration: "5 days",
    price: 1599,
    rating: 4.9,
    reviewCount: 89,
    image: "/alps.jpg?height=300&width=400",
    category: "Mountain",
  },
  {
    id: 3,
    title: "Tokyo Cultural Tour",
    location: "Tokyo, Japan",
    duration: "6 days",
    price: 1899,
    rating: 4.7,
    reviewCount: 156,
    image: "/tokyo.jpg?height=300&width=400",
    category: "Cultural",
  },
]

export function FeaturedTours() {
  return (
    <section className="py-16">
      <div className="container p-3">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold">Featured Tours</h2>
          <p className="text-muted-foreground">Our most popular and highly rated tour packages</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  )
}
