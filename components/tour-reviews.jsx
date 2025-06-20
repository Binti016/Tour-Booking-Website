import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Star } from "lucide-react"

// Mock data - would come from API in real app
const reviews = [
  {
    id: 1,
    name: "Boshita Binti",
    avatar: "/binti.jpeg?height=40&width=40",
    rating: 5,
    date: "May 2, 2025",
    comment:
      "This tour exceeded all my expectations! The guide was knowledgeable and friendly, and the itinerary was perfectly balanced between activities and relaxation. The accommodations were luxurious and the food was amazing. I would highly recommend this tour to anyone visiting Bali.",
  },
  {
    id: 2,
    name: "Barun Roy",
    avatar: "/barun.jpeg?height=40&width=40",
    rating: 4,
    date: "April 15, 2025",
    comment:
      "Great experience overall. The tour was well-organized and our guide was excellent. The only reason I'm not giving 5 stars is because one of the hotels wasn't as nice as the others. The activities were fantastic though, especially the snorkeling adventure!",
  },
  {
    id: 3,
    name: "Shipra Das",
    avatar: "/shipra.jpeg?height=40&width=40",
    rating: 5,
    date: "March 28, 2025",
    comment:
      "One of the best tours I've ever taken! Every day was filled with amazing experiences and the guide really went above and beyond to make sure everyone was having a great time. The temples were breathtaking and the beaches were paradise. Can't wait to visit again!",
  },
]

// Rating distribution for visualization
const ratingDistribution = {
  5: 78,
  4: 15,
  3: 5,
  2: 1,
  1: 1,
}

export function TourReviews({ rating, reviewCount }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Customer Reviews</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-5xl font-bold">{rating}</div>
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                />
              ))}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Based on {reviewCount} reviews</p>
          </div>

          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-2">
                <div className="flex w-20 items-center justify-end">
                  <span className="text-sm">{star} stars</span>
                </div>
                <Progress value={ratingDistribution[star]} className="h-2 w-full" />
                <div className="w-10 text-right text-sm text-muted-foreground">{ratingDistribution[star]}%</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Button className="w-full">Write a Review</Button>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-2 rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                  <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{review.name}</div>
                  <div className="text-xs text-muted-foreground">{review.date}</div>
                </div>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{review.comment}</p>
          </div>
        ))}

        <Button variant="outline" className="w-full">
          Load More Reviews
        </Button>
      </div>
    </div>
  )
}
