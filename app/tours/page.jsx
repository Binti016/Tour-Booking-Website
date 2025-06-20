"use client"

import { useState } from "react"
import { TourCard } from "@/components/tour-card"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Search, Filter, X } from "lucide-react"
import { format } from "date-fns"

// Mock data
const tours = [
  { id: 1, title: "Bali Paradise Escape", location: "Bali, Indonesia", duration: "7 days", price: 1299, rating: 4.8, reviewCount: 124, image: "/bali.jpg?height=300&width=400", category: "Beach" },
  { id: 2, title: "Swiss Alps Adventure", location: "Switzerland", duration: "5 days", price: 1599, rating: 4.9, reviewCount: 89, image: "/alps.jpg?height=300&width=400", category: "Mountain" },
  { id: 3, title: "Tokyo Cultural Tour", location: "Tokyo, Japan", duration: "6 days", price: 1899, rating: 4.7, reviewCount: 156, image: "/tokyo.jpg?height=300&width=400", category: "Cultural" },
  { id: 4, title: "Paris Package", location: "Paris, France", duration: "4 days", price: 1499, rating: 4.6, reviewCount: 112, image: "/paris2.jpg?height=300&width=400", category: "City" },
  { id: 5, title: "Egyptian Pyramids Explorer", location: "Cairo, Egypt", duration: "8 days", price: 2199, rating: 4.8, reviewCount: 95, image: "/Egypt.jpg?height=300&width=400", category: "Historical" },
  { id: 6, title: "Amazon Rainforest Expedition", location: "Brazil", duration: "10 days", price: 2499, rating: 4.7, reviewCount: 78, image: "/amazon.jpg?height=300&width=400", category: "Adventure" },
]

const categories = [
  { id: "beach", label: "Beach" },
  { id: "mountain", label: "Mountain" },
  { id: "cultural", label: "Cultural" },
  { id: "city", label: "City" },
  { id: "historical", label: "Historical" },
  { id: "adventure", label: "Adventure" },
]

export default function ToursPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([500, 3000])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [date, setDate] = useState(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [filteredTours, setFilteredTours] = useState(tours)

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  const handleSearch = (e) => {
    if (e) e.preventDefault()

    const filtered = tours.filter((tour) => {
      const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesPrice = tour.price >= priceRange[0] && tour.price <= priceRange[1]
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(tour.category.toLowerCase())

      return matchesSearch && matchesPrice && matchesCategory
    })

    setFilteredTours(filtered)
  }

  const resetFilters = () => {
    setSearchQuery("")
    setPriceRange([500, 3000])
    setSelectedCategories([])
    setDate(null)
    setFilteredTours(tours)
  }

  return (
    <div className="p-2">
      <div className="flex min-h-screen flex-col">
        <MainNav />
        <main className="flex-1">
          <div className="container py-8">
            <div className="mb-8">
              <h1 className="mb-2 text-3xl font-bold">Explore Tours</h1>
              <p className="text-muted-foreground">
                Discover amazing destinations and create unforgettable memories
              </p>
            </div>

            <div className="mb-8 flex flex-col gap-4 lg:flex-row">
              <div className="flex-1">
                <form onSubmit={handleSearch} className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search destinations, tours..."
                      className="w-full pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button type="submit">Search</Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="lg:hidden"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </form>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-4">
              <div className={`lg:block ${isFilterOpen ? 'block' : 'hidden'}`}>
                <div className="sticky top-20 space-y-6 rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Filters</h3>
                    <Button variant="ghost" size="sm" onClick={resetFilters}>
                      <X className="mr-2 h-4 w-4" />
                      Reset
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Price Range</h4>
                    <Slider
                      defaultValue={[500, 3000]}
                      min={0}
                      max={5000}
                      step={100}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex items-center justify-between text-sm">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Categories</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={category.id}
                            checked={selectedCategories.includes(category.id)}
                            onCheckedChange={() => toggleCategory(category.id)}
                          />
                          <Label htmlFor={category.id} className="text-sm font-normal">
                            {category.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Date</h4>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <Button className="w-full" onClick={handleSearch}>
                    Apply Filters
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredTours.length > 0 ? (
                    filteredTours.map((tour) => (
                      <TourCard key={tour.id} tour={tour} />
                    ))
                  ) : (
                    <p>No tours found.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
