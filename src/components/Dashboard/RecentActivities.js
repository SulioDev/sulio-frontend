"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  ShoppingCart, 
  MessageSquare, 
  Heart, 
  CalendarClock, 
  DollarSign,
  User
} from "lucide-react"

const activities = [
  {
    id: 1,
    type: "sale",
    title: "New artwork sale",
    description: "John Doe purchased 'Abstract Dreams' for $120",
    time: "2 hours ago",
    icon: ShoppingCart,
    iconColor: "text-green-600",
    iconBg: "bg-green-100"
  },
  {
    id: 2,
    type: "message",
    title: "New message received",
    description: "Sarah Williams sent you a message about commission work",
    time: "5 hours ago",
    icon: MessageSquare,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100"
  },
  {
    id: 3,
    type: "like",
    title: "Artwork liked",
    description: "Your artwork 'Sunset Mountains' received 24 new likes",
    time: "Yesterday",
    icon: Heart,
    iconColor: "text-pink-600",
    iconBg: "bg-pink-100"
  },
  {
    id: 4,
    type: "event",
    title: "Event reminder",
    description: "Virtual art exhibition starting in 2 days",
    time: "Yesterday",
    icon: CalendarClock,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100"
  },
  {
    id: 5,
    type: "payment",
    title: "Payment received",
    description: "Commission payment for 'Portrait' received: $350",
    time: "2 days ago",
    icon: DollarSign,
    iconColor: "text-yellow-600",
    iconBg: "bg-yellow-100"
  }
]

export function RecentActivities() {
  return (
    <Card className="border-none shadow-sm overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold">Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <div className={`${activity.iconBg} p-2 rounded-full mt-0.5`}>
                <activity.icon className={`h-4 w-4 ${activity.iconColor}`} />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900">{activity.title}</p>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 