"use client"

import { useState } from "react"
import { Sidebar } from "@/components/Dashboard/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Plus, 
  Search, 
  Filter,
  MoreHorizontal,
  Mail,
  Phone,
  Star,
  StarOff,
  MessageSquare,
  UserPlus
} from "lucide-react"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock customer data
const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    avatar: "/images/avatar1.jpg",
    status: "Active",
    totalSpent: 1450,
    purchases: 12,
    lastPurchase: "2023-06-10",
    favorite: true
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah.w@example.com",
    phone: "+1 (555) 987-6543",
    location: "Los Angeles, USA",
    avatar: "/images/avatar2.jpg",
    status: "Active",
    totalSpent: 980,
    purchases: 8,
    lastPurchase: "2023-06-05",
    favorite: true
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.b@example.com",
    phone: "+1 (555) 456-7890",
    location: "Chicago, USA",
    avatar: "/images/avatar3.jpg",
    status: "Active",
    totalSpent: 750,
    purchases: 6,
    lastPurchase: "2023-05-28",
    favorite: false
  },
  {
    id: 4,
    name: "Emily Johnson",
    email: "emily.j@example.com",
    phone: "+1 (555) 321-0987",
    location: "Miami, USA",
    avatar: "/images/avatar4.jpg",
    status: "Inactive",
    totalSpent: 640,
    purchases: 5,
    lastPurchase: "2023-04-15",
    favorite: false
  },
  {
    id: 5,
    name: "Robert Garcia",
    email: "robert.g@example.com",
    phone: "+1 (555) 234-5678",
    location: "Seattle, USA",
    avatar: "/images/avatar5.jpg",
    status: "Active",
    totalSpent: 320,
    purchases: 3,
    lastPurchase: "2023-06-01",
    favorite: false
  },
  {
    id: 6,
    name: "Jennifer Lee",
    email: "jennifer.l@example.com",
    phone: "+1 (555) 876-5432",
    location: "Boston, USA",
    avatar: "/images/avatar6.jpg",
    status: "Active",
    totalSpent: 520,
    purchases: 4,
    lastPurchase: "2023-05-20",
    favorite: true
  }
]

export default function CustomersPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  
  // Filtered customers based on tab and search
  const filteredCustomers = customers.filter(customer => {
    // Filter based on tab
    if (activeTab === "favorites" && !customer.favorite) return false
    if (activeTab === "active" && customer.status !== "Active") return false
    if (activeTab === "inactive" && customer.status !== "Inactive") return false
    
    // Filter based on search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        customer.name.toLowerCase().includes(query) ||
        customer.email.toLowerCase().includes(query) ||
        customer.location.toLowerCase().includes(query)
      )
    }
    
    return true
  })
  
  // Toggle favorite status
  const toggleFavorite = (id) => {
    // In a real app, this would update in a database
    console.log(`Toggling favorite status for customer ${id}`)
  }
  
  // Calculate customer stats
  const totalCustomers = customers.length
  const activeCustomers = customers.filter(c => c.status === "Active").length
  const totalRevenue = customers.reduce((sum, c) => sum + c.totalSpent, 0).toFixed(2)
  const avgSpend = (totalRevenue / totalCustomers).toFixed(2)
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Customer Management</h1>
              <p className="text-gray-600 mt-1">Manage your art collectors and buyers</p>
            </div>
            
            <div className="mt-4 sm:mt-0">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <UserPlus className="mr-2 h-4 w-4" />
                Add Customer
              </Button>
            </div>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Total Customers</p>
                  <h3 className="text-2xl font-semibold text-gray-900">{totalCustomers}</h3>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Active Customers</p>
                  <h3 className="text-2xl font-semibold text-green-600">{activeCustomers}</h3>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Total Revenue</p>
                  <h3 className="text-2xl font-semibold text-blue-600">${totalRevenue}</h3>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Avg. Spend</p>
                  <h3 className="text-2xl font-semibold text-purple-600">${avgSpend}</h3>
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
                    placeholder="Search customers..." 
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Tabs and Customer List */}
          <Card className="border-none shadow-sm overflow-hidden">
            <CardHeader className="pb-0 border-b">
              <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="all">All Customers</TabsTrigger>
                  <TabsTrigger value="favorites">Favorites</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="inactive">Inactive</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCustomers.map((customer) => (
                  <Card key={customer.id} className="overflow-hidden border">
                    <CardContent className="p-0">
                      <div className="p-4 flex justify-between items-start">
                        <div className="flex items-center">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 mr-3">
                            <Image
                              src={customer.avatar}
                              alt={customer.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 48px) 100vw, 48px"
                              onError={(e) => {
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(customer.name)}&background=random`;
                              }}
                            />
                          </div>
                          
                          <div>
                            <h3 className="font-medium text-gray-900">{customer.name}</h3>
                            <p className="text-sm text-gray-600">{customer.location}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => toggleFavorite(customer.id)}
                          >
                            {customer.favorite ? (
                              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            ) : (
                              <StarOff className="h-4 w-4 text-gray-400" />
                            )}
                          </Button>
                          
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem className="flex items-center cursor-pointer">
                                <Mail className="mr-2 h-4 w-4" />
                                <span>Email</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="flex items-center cursor-pointer">
                                <MessageSquare className="mr-2 h-4 w-4" />
                                <span>Message</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="flex items-center cursor-pointer">
                                <Phone className="mr-2 h-4 w-4" />
                                <span>Call</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                      
                      <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div>
                            <p className="text-xs text-gray-500">Purchases</p>
                            <p className="text-sm font-medium">{customer.purchases}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Total Spent</p>
                            <p className="text-sm font-medium">${customer.totalSpent}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Status</p>
                            <p className={`text-xs px-2 py-0.5 rounded-full inline-block ${
                              customer.status === "Active" 
                                ? "bg-green-100 text-green-800" 
                                : "bg-red-100 text-red-800"
                            }`}>
                              {customer.status}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          Last purchase: {new Date(customer.lastPurchase).toLocaleDateString()}
                        </div>
                        
                        <Button variant="outline" size="sm" className="h-8 text-xs">
                          View Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {filteredCustomers.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No customers found. Try adjusting your filters.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
} 