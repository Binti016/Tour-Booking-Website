"use client"

import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, MapPin, Clock, Star, Heart, Share2 } from "lucide-react"
import { TourReviews } from "@/components/tour-reviews"
import { TourItinerary } from "@/components/tour-itinerary"
import { TourGallery } from "@/components/tour-gallery"
import { TourMap } from "@/components/tour-map"
import { useToast } from "@/components/ui/use-toast"

// Mock data - would come from API in real app
const tourDetails = {
  id: 1,
  title: "Bali Paradise Escape",
  location: "Bali, Indonesia",
  duration: "7 days",
  price: 1299,
  rating: 4.8,
  reviewCount: 124,
  category: "Beach",
  description:
    "Experience the beauty of Bali with our 7-day paradise escape. This tour includes visits to pristine beaches, ancient temples, lush rice terraces, and vibrant local markets. You'll stay in luxury accommodations, enjoy authentic Balinese cuisine, and have opportunities for both adventure and relaxation.",
  highlights: [
    "Visit the sacred Uluwatu Temple perched on a cliff",
    "Relax on the pristine beaches of Nusa Dua",
    "Explore the artistic center of Ubud",
    "Experience traditional Balinese dance performances",
    "Tour the iconic Tegallalang Rice Terraces",
    "Snorkel in crystal clear waters with vibrant marine life",
  ],
  included: [
    "6 nights accommodation in 4-star hotels",
    "Daily breakfast and 3 special dinners",
    "All transportation within Bali",
    "English-speaking tour guide",
    "Entrance fees to all attractions",
    "Airport pickup and drop-off",
  ],
  notIncluded: [
    "International flights",
    "Travel insurance",
    "Personal expenses",
    "Optional activities not in the itinerary",
    "Meals not specified in the itinerary",
  ],
  images: [
    "/bali1.jpg",
    "/bali2.jpg",
    "/bali3.jpg",
    "/bali4.jpg",
    "/bali5.jpg",
    "/bali6.jpg",
  ],
}

export default function TourDetailsPage({ params }) {
  const [date, setDate] = useState(null)
  const [travelers, setTravelers] = useState(2)
  const [isFavorite, setIsFavorite] = useState(false)
  const { toast } = useToast()

  const handleBookNow = () => {
    if (!date) {
      toast({
        variant: "destructive",
        title: "Date required",
        description: "Please select a travel date to continue.",
      })
      return
    }

    // In a real app, this would navigate to checkout or add to cart
    toast({
      title: "Tour added to booking",
      description: `${tourDetails.title} for ${travelers} travelers on ${format(date, "PPP")}`,
    })
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: isFavorite ? "Tour removed from your favorites" : "Tour added to your favorites",
    })
  }

  const handleShare = () => {
    // In a real app, this would open a share dialog
    navigator.clipboard.writeText(window.location.href)
    toast({
      title: "Link copied",
      description: "Tour link copied to clipboard",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <div className="relative h-[400px] w-full">
          <img
            src={tourDetails.images[0] || "/placeholder.svg"}
            alt={tourDetails.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="container">
              <Badge className="mb-2">{tourDetails.category}</Badge>
              <h1 className="mb-2 text-3xl font-bold sm:text-4xl">{tourDetails.title}</h1>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center">
                  <MapPin className="mr-1 h-4 w-4" />
                  <span>{tourDetails.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{tourDetails.duration}</span>
                </div>
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>
                    {tourDetails.rating} ({tourDetails.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-8 px-3">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="map">Map</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h2 className="mb-4 text-2xl font-bold">Tour Description</h2>
                    <p className="text-muted-foreground">{tourDetails.description}</p>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold">Highlights</h3>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {tourDetails.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <Star className="mr-2 h-4 w-4 text-primary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="mb-4 text-xl font-bold">What's Included</h3>
                      <ul className="space-y-2">
                        {tourDetails.included.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 text-primary">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-4 text-xl font-bold">Not Included</h3>
                      <ul className="space-y-2">
                        {tourDetails.notIncluded.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 text-destructive">✕</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="itinerary">
                  <TourItinerary />
                </TabsContent>

                <TabsContent value="gallery">
                  <TourGallery images={tourDetails.images} />
                </TabsContent>

                <TabsContent value="map">
                  <TourMap location={tourDetails.location} />
                </TabsContent>

                <TabsContent value="reviews">
                  <TourReviews rating={tourDetails.rating} reviewCount={tourDetails.reviewCount} />
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <div className="sticky top-20 rounded-lg border p-6 shadow-sm">
                <div className="mb-4 text-center">
                  <div className="text-3xl font-bold">${tourDetails.price}</div>
                  <p className="text-sm text-muted-foreground">per person</p>
                </div>

                <Separator className="my-4" />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Select Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="travelers">Number of Travelers</Label>
                    <div className="flex items-center">
                      <Button variant="outline" size="icon" onClick={() => setTravelers(Math.max(1, travelers - 1))}>
                        -
                      </Button>
                      <Input
                        id="travelers"
                        type="number"
                        className="mx-2 text-center"
                        value={travelers}
                        onChange={(e) => setTravelers(Number.parseInt(e.target.value) || 1)}
                        min={1}
                      />
                      <Button variant="outline" size="icon" onClick={() => setTravelers(travelers + 1)}>
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Base price × {travelers}</span>
                      <span>${tourDetails.price * travelers}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Taxes & fees</span>
                      <span>${Math.round(tourDetails.price * travelers * 0.1)}</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between font-bold">
                      <span>Total</span>
                      <span>${Math.round(tourDetails.price * travelers * 1.1)}</span>
                    </div>
                  </div>

                  <Button className="w-full" onClick={handleBookNow}>
                    Book Now
                  </Button>

                  <div className="flex justify-between">
                    <Button variant="ghost" size="sm" onClick={toggleFavorite}>
                      <Heart className={`mr-2 h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                      {isFavorite ? "Saved" : "Save"}
                    </Button>
                    <Button variant="ghost" size="sm" onClick={handleShare}>
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
