"use client"

import { 
  Palette, 
  CreditCard, 
  Users, 
  DollarSign,
  TrendingUp,
  TrendingDown
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const statCards = [
  {
    title: "Total Artworks",
    value: "124",
    change: "+12%",
    changeType: "positive",
    icon: Palette,
    color: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    title: "Total Sales",
    value: "$12,543",
    change: "+18%",
    changeType: "positive", 
    icon: CreditCard,
    color: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "New Customers",
    value: "45",
    change: "+24%",
    changeType: "positive",
    icon: Users,
    color: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    title: "Commission",
    value: "$1,245",
    change: "-3%",
    changeType: "negative",
    icon: DollarSign,
    color: "bg-orange-100",
    iconColor: "text-orange-600"
  }
]

export function DashboardStats() {
  return (
    <>
      {statCards.map((stat, index) => (
        <Card key={index} className="border-none shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className={`${stat.color} p-3 rounded-full`}>
                <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
              </div>
              
              <div className="flex items-center gap-1.5">
                {stat.changeType === "positive" ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                )}
                <span className={`text-sm font-medium ${
                  stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
              <h3 className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</h3>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
} 