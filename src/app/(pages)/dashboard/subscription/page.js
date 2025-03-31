"use client"

import { Sidebar } from "@/components/Dashboard/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CreditCard,
  Calendar,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ArrowRight
} from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Mock subscription data
const subscription = {
  plan: "Pro",
  status: "Active",
  nextBillingDate: "July 15, 2023",
  amount: "$19.99",
  billingCycle: "Monthly",
  startDate: "January 15, 2023",
  paymentMethod: "Visa ending in 4242"
}

// Mock invoices
const invoices = [
  {
    id: "INV-001",
    date: "June 15, 2023",
    amount: "$19.99",
    status: "Paid"
  },
  {
    id: "INV-002",
    date: "May 15, 2023",
    amount: "$19.99",
    status: "Paid"
  },
  {
    id: "INV-003",
    date: "April 15, 2023",
    amount: "$19.99",
    status: "Paid"
  },
  {
    id: "INV-004",
    date: "March 15, 2023",
    amount: "$19.99",
    status: "Paid"
  },
  {
    id: "INV-005",
    date: "February 15, 2023",
    amount: "$19.99",
    status: "Paid"
  }
]

// Subscription plans
const plans = [
  {
    name: "Basic",
    price: "$9.99",
    description: "For hobbyist artists",
    features: [
      { name: "Upload up to 50 artworks", included: true },
      { name: "Basic analytics", included: true },
      { name: "Standard support", included: true },
      { name: "AI-powered recommendations", included: false },
      { name: "Custom branding", included: false },
      { name: "Priority support", included: false }
    ],
    current: false
  },
  {
    name: "Pro",
    price: "$19.99",
    description: "For professional artists",
    features: [
      { name: "Upload up to 200 artworks", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Priority support", included: true },
      { name: "AI-powered recommendations", included: true },
      { name: "Custom branding", included: true },
      { name: "Commission management", included: false }
    ],
    current: true
  },
  {
    name: "Business",
    price: "$49.99",
    description: "For galleries and studios",
    features: [
      { name: "Unlimited artwork uploads", included: true },
      { name: "Comprehensive analytics", included: true },
      { name: "24/7 priority support", included: true },
      { name: "AI-powered recommendations", included: true },
      { name: "Custom branding and domain", included: true },
      { name: "Commission management", included: true }
    ],
    current: false
  }
]

export default function SubscriptionPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Subscription</h1>
              <p className="text-gray-600 mt-1">Manage your subscription plan and billing details</p>
            </div>
          </div>
          
          {/* Current Subscription */}
          <Card className="border-none shadow-sm mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-semibold">Current Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col lg:flex-row justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-semibold text-gray-900">{subscription.plan} Plan</span>
                    <span className="text-sm px-2 py-0.5 rounded-full bg-green-100 text-green-800">
                      {subscription.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Next billing date</p>
                      <div className="flex items-center mt-1">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="font-medium">{subscription.nextBillingDate}</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Billing amount</p>
                      <div className="flex items-center mt-1">
                        <CreditCard className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="font-medium">{subscription.amount} / {subscription.billingCycle.toLowerCase()}</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Start date</p>
                      <div className="flex items-center mt-1">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="font-medium">{subscription.startDate}</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Payment method</p>
                      <div className="flex items-center mt-1">
                        <CreditCard className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="font-medium">{subscription.paymentMethod}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 lg:mt-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Button variant="outline">Change Plan</Button>
                  <Button variant="outline" className="text-red-600 hover:text-red-700">Cancel Subscription</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Plan Comparison */}
          <Card className="border-none shadow-sm mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-semibold">Available Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan) => (
                  <Card 
                    key={plan.name} 
                    className={`border overflow-hidden ${
                      plan.current 
                        ? "border-purple-500 shadow-md" 
                        : "border-gray-200"
                    }`}
                  >
                    {plan.current && (
                      <div className="bg-purple-600 text-white text-xs font-medium py-1 text-center">
                        Current Plan
                      </div>
                    )}
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                      <div className="mt-2 flex items-baseline">
                        <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-500 ml-1">/ month</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
                      
                      <div className="mt-4 space-y-2">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            {feature.included ? (
                              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            ) : (
                              <XCircle className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                            )}
                            <span className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-500"}`}>
                              {feature.name}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6">
                        {plan.current ? (
                          <Button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700" disabled>
                            Current Plan
                          </Button>
                        ) : (
                          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                            Upgrade
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Billing History */}
          <Card className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-semibold">Billing History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>{invoice.date}</TableCell>
                      <TableCell>{invoice.amount}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                          {invoice.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 text-gray-500">
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
} 