import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

// Mock data - would come from API in real app
const upcomingBookings = [
  {
    id: 1,
    tourName: "Bali Paradise Escape",
    location: "Bali, Indonesia",
    startDate: "June 15, 2025",
    endDate: "June 22, 2025",
    status: "confirmed",
    travelers: 2,
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    id: 2,
    tourName: "Swiss Alps Adventure",
    location: "Switzerland",
    startDate: "July 10, 2025",
    endDate: "July 15, 2025",
    status: "pending",
    travelers: 1,
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    id: 3,
    tourName: "Tokyo Cultural Tour",
    location: "Tokyo, Japan",
    startDate: "August 5, 2025",
    endDate: "August 11, 2025",
    status: "confirmed",
    travelers: 3,
    image: "/placeholder.svg?height=100&width=150",
  },
]

export function UpcomingBookings() {
  return (
    <div className="space-y-4">
      {upcomingBookings.map((booking) => (
        <Card key={booking.id}>
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/4">
              <img
                src={booking.image || "/placeholder.svg"}
                alt={booking.tourName}
                className="h-full w-full object-cover sm:rounded-l-lg"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{booking.tourName}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <MapPin className="mr-1 h-3 w-3" />
                      {booking.location}
                    </CardDescription>
                  </div>
                  <Badge variant={booking.status === "confirmed" ? "default" : "outline"}>{booking.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {booking.startDate} - {booking.endDate}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {booking.travelers} {booking.travelers === 1 ? "traveler" : "travelers"}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href={`/bookings/${booking.id}`}>View Details</Link>
                </Button>
                {booking.status === "confirmed" && (
                  <Button variant="outline" asChild>
                    <Link href={`/bookings/${booking.id}/invoice`}>Download Invoice</Link>
                  </Button>
                )}
              </CardFooter>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
