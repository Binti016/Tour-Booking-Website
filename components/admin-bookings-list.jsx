import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Mock data - would come from API in real app
const recentBookings = [
  {
    id: "B-1234",
    customer: "Sarah Johnson",
    tour: "Bali Paradise Escape",
    date: "June 15, 2025",
    amount: "$2,598",
    status: "confirmed",
  },
  {
    id: "B-1235",
    customer: "Michael Chen",
    tour: "Swiss Alps Adventure",
    date: "July 10, 2025",
    amount: "$1,599",
    status: "pending",
  },
  {
    id: "B-1236",
    customer: "Emily Rodriguez",
    tour: "Tokyo Cultural Tour",
    date: "August 5, 2025",
    amount: "$5,697",
    status: "confirmed",
  },
  {
    id: "B-1237",
    customer: "David Wilson",
    tour: "Paris Romance Package",
    date: "June 20, 2025",
    amount: "$2,998",
    status: "cancelled",
  },
]

export function AdminBookingsList() {
  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500"
      case "pending":
        return "bg-yellow-500"
      case "cancelled":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {recentBookings.map((booking) => (
          <div key={booking.id} className="flex items-center justify-between rounded-md border p-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">{booking.customer}</span>
                <Badge variant="outline">{booking.id}</Badge>
              </div>
              <div className="text-sm text-muted-foreground">{booking.tour}</div>
              <div className="text-xs text-muted-foreground">{booking.date}</div>
            </div>
            <div className="text-right">
              <div className="font-medium">{booking.amount}</div>
              <div className="flex items-center justify-end gap-2">
                <div className={`h-2 w-2 rounded-full ${getStatusColor(booking.status)}`} />
                <span className="text-xs capitalize">{booking.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full" asChild>
        <Link href="/admin/bookings">View All Bookings</Link>
      </Button>
    </div>
  )
}
