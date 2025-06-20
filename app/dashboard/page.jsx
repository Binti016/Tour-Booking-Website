import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, CreditCard, MapPin, Users } from "lucide-react"
import { UpcomingBookings } from "@/components/upcoming-bookings"
import { RecentActivity } from "@/components/recent-activity"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your travel activities.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Trips</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Next trip in 15 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reward Points</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">+350 from last booking</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,231</div>
            <p className="text-xs text-muted-foreground">+$1,200 from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Bookings</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <UpcomingBookings />
        </TabsContent>
        <TabsContent value="activity" className="space-y-4">
          <RecentActivity />
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recommended Tours</CardTitle>
            <CardDescription>Based on your preferences and past bookings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <img src="/placeholder.svg?height=60&width=80" alt="Tour" className="h-15 w-20 rounded-md object-cover" />
              <div className="flex-1">
                <h4 className="font-semibold">Greek Islands Cruise</h4>
                <p className="text-sm text-muted-foreground">8 days • $1,899</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/tours/greek-islands">View</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <img src="/placeholder.svg?height=60&width=80" alt="Tour" className="h-15 w-20 rounded-md object-cover" />
              <div className="flex-1">
                <h4 className="font-semibold">Machu Picchu Trek</h4>
                <p className="text-sm text-muted-foreground">5 days • $1,299</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/tours/machu-picchu">View</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <img src="/placeholder.svg?height=60&width=80" alt="Tour" className="h-15 w-20 rounded-md object-cover" />
              <div className="flex-1">
                <h4 className="font-semibold">Safari Adventure</h4>
                <p className="text-sm text-muted-foreground">7 days • $2,499</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/tours/safari">View</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Travel Tips</CardTitle>
            <CardDescription>Latest travel advice and articles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Essential Packing Tips for Long Trips</h4>
              <p className="text-sm text-muted-foreground">
                Learn how to pack efficiently for extended travel adventures.
              </p>
              <Button variant="link" className="h-auto p-0" asChild>
                <Link href="/blog/packing-tips">Read more</Link>
              </Button>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Top 10 Travel Photography Tips</h4>
              <p className="text-sm text-muted-foreground">
                Capture stunning travel memories with these photography techniques.
              </p>
              <Button variant="link" className="h-auto p-0" asChild>
                <Link href="/blog/photography-tips">Read more</Link>
              </Button>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">How to Stay Safe While Traveling Solo</h4>
              <p className="text-sm text-muted-foreground">
                Important safety tips for solo travelers in any destination.
              </p>
              <Button variant="link" className="h-auto p-0" asChild>
                <Link href="/blog/solo-travel-safety">Read more</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
