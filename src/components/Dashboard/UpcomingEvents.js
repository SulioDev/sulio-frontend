"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarClock, Clock } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Virtual Art Exhibition",
    date: "June 15",
    time: "2:00 PM - 4:00 PM",
    type: "Exhibition",
    badge: "bg-purple-100 text-purple-600"
  },
  {
    id: 2,
    title: "Commission Discussion with Client",
    date: "June 16",
    time: "10:30 AM - 11:30 AM",
    type: "Meeting",
    badge: "bg-blue-100 text-blue-600"
  },
  {
    id: 3,
    title: "Digital Art Workshop",
    date: "June 18",
    time: "3:00 PM - 5:00 PM",
    type: "Workshop",
    badge: "bg-green-100 text-green-600"
  },
  {
    id: 4,
    title: "Art Gallery Opening",
    date: "June 20",
    time: "6:00 PM - 9:00 PM",
    type: "Event",
    badge: "bg-yellow-100 text-yellow-600"
  }
]

export function UpcomingEvents() {
  return (
    <Card className="border-none shadow-sm overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold">Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="flex flex-col space-y-2 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">{event.title}</h3>
                <Badge variant="outline" className={`${event.badge} border-none`}>
                  {event.type}
                </Badge>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <CalendarClock className="h-4 w-4 mr-1.5 text-gray-400" />
                  {event.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1.5 text-gray-400" />
                  {event.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 