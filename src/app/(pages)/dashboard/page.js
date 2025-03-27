"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, MessageSquare } from "lucide-react"
import { Sidebar } from "@/components/Dashboard/Sidebar"
import { GetStartedDialog } from "@/components/Dashboard/GetStartedDialog"
import { DashboardWelcome } from "@/components/Dashboard/DashboardWelcome"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <DashboardWelcome />
        <GetStartedDialog />
      </main>
    </div>
  )
}
