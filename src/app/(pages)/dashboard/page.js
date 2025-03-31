"use client"
import { Sidebar } from "@/components/Dashboard/Sidebar"
import { GetStartedDialog } from "@/components/Dashboard/GetStartedDialog"
import { DashboardWelcome } from "@/components/Dashboard/DashboardWelcome"
import { DashboardStats } from "@/components/Dashboard/DashboardStats"
import { RecentActivities } from "@/components/Dashboard/RecentActivities"
import { UpcomingEvents } from "@/components/Dashboard/UpcomingEvents"
import { ArtworkStats } from "@/components/Dashboard/ArtworkStats"
import { TopArtworks } from "@/components/Dashboard/TopArtworks"
import { MonthlySales } from "@/components/Dashboard/MonthlySales"
import { TopCustomers } from "@/components/Dashboard/TopCustomers"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <DashboardWelcome />
          <GetStartedDialog />
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            <DashboardStats />
          </div>
          
          {/* Main Dashboard Content - 2 column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Left Column - 2/3 width */}
            <div className="lg:col-span-2 space-y-6">
              <RecentActivities />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ArtworkStats />
                <MonthlySales />
              </div>
              <TopArtworks />
            </div>
            
            {/* Right Column - 1/3 width */}
            <div className="space-y-6">
              <UpcomingEvents />
              <TopCustomers />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
