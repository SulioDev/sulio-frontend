"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

const topCustomers = [
  {
    id: 1,
    name: "John Doe",
    avatar: "/images/avatar1.jpg",
    email: "john.doe@example.com",
    totalSpent: 1450,
    purchases: 12
  },
  {
    id: 2,
    name: "Sarah Williams",
    avatar: "/images/avatar2.jpg",
    email: "sarah.w@example.com",
    totalSpent: 980,
    purchases: 8
  },
  {
    id: 3,
    name: "Michael Brown",
    avatar: "/images/avatar3.jpg",
    email: "michael.b@example.com",
    totalSpent: 750,
    purchases: 6
  },
  {
    id: 4,
    name: "Emily Johnson",
    avatar: "/images/avatar4.jpg",
    email: "emily.j@example.com",
    totalSpent: 640,
    purchases: 5
  }
]

export function TopCustomers() {
  return (
    <Card className="border-none shadow-sm overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold">Top Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topCustomers.map((customer) => (
            <div 
              key={customer.id} 
              className="flex items-center space-x-3 border-b border-gray-100 pb-4 last:border-0 last:pb-0"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={customer.avatar}
                  alt={customer.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 40px) 100vw, 40px"
                  // If images don't exist, use a fallback
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(customer.name)}&background=random`;
                  }}
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 truncate">
                  {customer.name}
                </h3>
                <p className="text-xs text-gray-500 truncate">${customer.totalSpent} · {customer.purchases} purchases</p>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 rounded-full"
              >
                <MessageSquare className="h-4 w-4 text-gray-500" />
                <span className="sr-only">Message</span>
              </Button>
            </div>
          ))}
        </div>
        
        <Button 
          variant="outline" 
          className="w-full mt-4 text-sm text-gray-700"
        >
          View All Customers
        </Button>
      </CardContent>
    </Card>
  )
} 