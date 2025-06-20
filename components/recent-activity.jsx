import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data - would come from API in real app
const activities = [
  {
    id: 1,
    type: "booking",
    title: "Booked Swiss Alps Adventure",
    date: "May 8, 2025",
    time: "3:45 PM",
    description: "You booked a tour for 1 traveler",
  },
  {
    id: 2,
    type: "payment",
    title: "Payment Successful",
    date: "May 8, 2025",
    time: "3:47 PM",
    description: "Payment of $1,599 was processed successfully",
  },
  {
    id: 3,
    type: "review",
    title: "Left a Review",
    date: "May 5, 2025",
    time: "10:12 AM",
    description: "You rated Bali Paradise Escape 5 stars",
  },
  {
    id: 4,
    type: "booking",
    title: "Booked Tokyo Cultural Tour",
    date: "April 30, 2025",
    time: "2:30 PM",
    description: "You booked a tour for 3 travelers",
  },
  {
    id: 5,
    type: "payment",
    title: "Payment Successful",
    date: "April 30, 2025",
    time: "2:32 PM",
    description: "Payment of $5,697 was processed successfully",
  },
]

export function RecentActivity() {
  const getBadgeVariant = (type) => {
    switch (type) {
      case "booking":
        return "default"
      case "payment":
        return "outline"
      case "review":
        return "secondary"
      default:
        return "default"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{activity.title}</p>
                  <Badge variant={getBadgeVariant(activity.type)}>{activity.type}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {activity.date} at {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
