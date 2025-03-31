"use client"

import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export function DashboardWelcome() {
  return (
    <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Welcome back, Artist!</h1>
        <p className="text-gray-600 mt-1 md:mt-2">
          Here's what's happening with your art business today
        </p>
      </div>
      
      <div className="mt-4 sm:mt-0 flex space-x-3">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Artwork
        </Button>
      </div>
    </div>
  )
}
