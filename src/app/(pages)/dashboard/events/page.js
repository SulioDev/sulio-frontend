"use client"

import { useState } from "react"
import { Sidebar } from "@/components/Dashboard/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CalendarClock, 
  Plus, 
  Search, 
  Filter,
  MapPin,
  Users,
  Clock,
  Edit,
  Trash2,
  Share2,
  ExternalLink
} from "lucide-react"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { format } from 'date-fns'

// Mock events data
const events = [
  {
    id: 1,
    title: "Digital Art Exhibition",
    description: "Showcase of various digital art pieces from emerging artists.",
    date: "2023-06-15",
    time: "14:00 - 16:00",
    location: "Virtual",
    type: "Exhibition",
    attendees: 45,
    image: "/images/event1.jpg",
    status: "Upcoming"
  },
  {
    id: 2,
    title: "Watercolor Workshop",
    description: "Learn the basics of watercolor painting techniques with professional guidance.",
    date: "2023-06-20",
    time: "10:00 - 13:00",
    location: "Art Studio, New York",
    type: "Workshop",
    attendees: 12,
    image: "/images/event2.jpg",
    status: "Upcoming"
  },
  {
    id: 3,
    title: "Art Gallery Opening",
    description: "Grand opening of the new art gallery featuring works from local artists.",
    date: "2023-06-25",
    time: "18:00 - 21:00",
    location: "Downtown Gallery, Los Angeles",
    type: "Opening",
    attendees: 78,
    image: "/images/event3.jpg",
    status: "Upcoming"
  },
  {
    id: 4,
    title: "Portrait Drawing Meetup",
    description: "Weekly meetup for portrait drawing enthusiasts to practice together.",
    date: "2023-06-10",
    time: "15:00 - 17:00",
    location: "City Park, Chicago",
    type: "Meetup",
    attendees: 15,
    image: "/images/event4.jpg",
    status: "Completed"
  },
  {
    id: 5,
    title: "Digital Art Techniques Webinar",
    description: "Online webinar about advanced digital art techniques and tools.",
    date: "2023-06-05",
    time: "19:00 - 20:30",
    location: "Virtual",
    type: "Webinar",
    attendees: 120,
    image: "/images/event5.jpg",
    status: "Completed"
  },
  {
    id: 6,
    title: "Art Business Workshop",
    description: "Learn how to price your artwork and manage your art business.",
    date: "2023-07-05",
    time: "11:00 - 14:00",
    location: "Community Center, Seattle",
    type: "Workshop",
    attendees: 0,
    image: "/images/event6.jpg",
    status: "Draft"
  }
]

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  
  // Filtered events based on tab and search
  const filteredEvents = events.filter(event => {
    // Filter based on tab
    if (activeTab === "upcoming" && event.status !== "Upcoming") return false
    if (activeTab === "completed" && event.status !== "Completed") return false
    if (activeTab === "draft" && event.status !== "Draft") return false
    
    // Filter based on search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        event.type.toLowerCase().includes(query)
      )
    }
    
    return true
  })
  
  // Calculate event stats
  const totalEvents = events.length
  const upcomingEvents = events.filter(e => e.status === "Upcoming").length
  const completedEvents = events.filter(e => e.status === "Completed").length
  const totalAttendees = events.reduce((sum, e) => sum + e.attendees, 0)
  
  // Format date for display
  const formatEventDate = (dateString) => {
    try {
      return format(new Date(dateString), 'MMM d, yyyy')
    } catch (e) {
      return dateString
    }
  }
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Event Management</h1>
              <p className="text-gray-600 mt-1">Organize and manage your art exhibitions, workshops, and events</p>
            </div>
            
            <div className="mt-4 sm:mt-0">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <Plus className="mr-2 h-4 w-4" />
                Create Event
              </Button>
            </div>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Total Events</p>
                  <h3 className="text-2xl font-semibold text-gray-900">{totalEvents}</h3>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Upcoming Events</p>
                  <h3 className="text-2xl font-semibold text-purple-600">{upcomingEvents}</h3>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Completed Events</p>
                  <h3 className="text-2xl font-semibold text-green-600">{completedEvents}</h3>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Total Attendees</p>
                  <h3 className="text-2xl font-semibold text-blue-600">{totalAttendees}</h3>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Filters and Search */}
          <Card className="border-none shadow-sm mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Search events..." 
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Event Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="exhibition">Exhibition</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="webinar">Webinar</SelectItem>
                    <SelectItem value="meetup">Meetup</SelectItem>
                    <SelectItem value="opening">Gallery Opening</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  More Filters
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Tabs and Events List */}
          <Card className="border-none shadow-sm overflow-hidden">
            <CardHeader className="pb-0 border-b">
              <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="all">All Events</TabsTrigger>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="draft">Draft</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden border">
                    <div className="relative h-48">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/400x200?text=Event";
                        }}
                      />
                      <div className="absolute top-2 right-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/80 rounded-full">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="flex items-center cursor-pointer">
                              <Edit className="mr-2 h-4 w-4" />
                              <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center cursor-pointer">
                              <Share2 className="mr-2 h-4 w-4" />
                              <span>Share</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center cursor-pointer text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Delete</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="absolute top-2 left-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          event.status === "Upcoming" 
                            ? "bg-purple-100 text-purple-800" 
                            : event.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                        }`}>
                          {event.status}
                        </span>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                            {event.type}
                          </span>
                          <div className="flex items-center text-xs text-gray-500">
                            <Users className="h-3 w-3 mr-1" />
                            {event.attendees} {event.attendees === 1 ? "attendee" : "attendees"}
                          </div>
                        </div>
                        
                        <h3 className="font-medium text-gray-900">{event.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>
                        
                        <div className="pt-2 space-y-2">
                          <div className="flex items-center text-xs text-gray-500">
                            <CalendarClock className="h-3.5 w-3.5 mr-1.5 text-gray-400" />
                            {formatEventDate(event.date)} · {event.time}
                          </div>
                          <div className="flex items-center text-xs text-gray-500">
                            <MapPin className="h-3.5 w-3.5 mr-1.5 text-gray-400" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    
                    <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-end">
                      <Button variant="outline" size="sm" className="h-8 text-xs">
                        <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                        View Details
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
              
              {filteredEvents.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No events found. Try adjusting your filters.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
} 