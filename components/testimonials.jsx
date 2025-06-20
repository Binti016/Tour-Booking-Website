import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

// Mock data - would come from API in real app
const testimonials = [
  {
    id: 1,
    name: "Boshita Binti",
    avatar: "/binti.jpeg?height=40&width=40",
    rating: 5,
    text: "The Swiss Alps tour exceeded all my expectations. The guides were knowledgeable and the views were breathtaking. I'll definitely book with TravelQuest again!",
    tour: "Swiss Alps Adventure",
  },
  {
    id: 2,
    name: "Barun Roy",
    avatar: "/barun.jpeg?height=40&width=40",
    rating: 5,
    text: "Our Bali trip was perfectly organized from start to finish. The accommodations were luxurious and the activities were diverse and exciting.",
    tour: "Bali Paradise Escape",
  },
  {
    id: 3,
    name: "Shipra Das",
    avatar: "/shipra.jpeg?height=40&width=40",
    rating: 4,
    text: "The Tokyo Cultural Tour gave us an authentic experience of Japanese culture. The local guides provided insights we wouldn't have discovered on our own.",
    tour: "Tokyo Cultural Tour",
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted py-16">
      <div className="container p-3">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold">What Our Travelers Say</h2>
          <p className="text-muted-foreground">Authentic reviews from our satisfied customers</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                    />
                  ))}
                </div>
                <p className="mb-6 text-sm">{testimonial.text}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.tour}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
