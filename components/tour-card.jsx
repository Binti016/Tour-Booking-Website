import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Star } from "lucide-react"
import Link from "next/link"

export function TourCard({ tour }) {
  const { id, title, location, duration, price, rating, reviewCount, image, category } = tour

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
        <Badge className="absolute right-2 top-2">{category}</Badge>
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex items-center">
            <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">
              {rating} <span className="text-muted-foreground">({reviewCount})</span>
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-4 space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            {location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-4 w-4" />
            {duration}
          </div>
        </div>
        <div className="text-lg font-bold">
          ${price}
          <span className="text-sm font-normal text-muted-foreground"> / person</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/tours/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
