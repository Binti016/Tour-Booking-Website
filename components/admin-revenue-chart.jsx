"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

// Mock data - would come from API in real app
const data = [
  { name: "Jan", revenue: 18000, bookings: 120 },
  { name: "Feb", revenue: 22000, bookings: 145 },
  { name: "Mar", revenue: 35000, bookings: 230 },
  { name: "Apr", revenue: 42000, bookings: 280 },
  { name: "May", revenue: 45000, bookings: 300 },
  { name: "Jun", revenue: 55000, bookings: 370 },
]

export function AdminRevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="revenue" name="Revenue ($)" fill="#8884d8" />
        <Bar yAxisId="right" dataKey="bookings" name="Bookings" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}
