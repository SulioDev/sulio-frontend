"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Palette,
  ScrollText,
  MessageSquare,
  CreditCard,
  Users2,
  CalendarDays,
  Settings,
  User
} from "lucide-react"

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    variant: "default"
  },
  {
    title: "Artwork Management",
    icon: Palette,
    href: "/dashboard/artwork",
    variant: "ghost"
  },
  {
    title: "Daily Diary",
    icon: ScrollText,
    href: "/dashboard/diary",
    variant: "ghost"
  },
  {
    title: "AI Chatbot",
    icon: MessageSquare,
    href: "/dashboard/chatbot",
    variant: "ghost"
  },
  {
    title: "Subscription",
    icon: CreditCard,
    href: "/dashboard/subscription",
    variant: "ghost"
  },
  {
    title: "Transaction",
    icon: CreditCard,
    href: "/dashboard/transactions",
    variant: "ghost"
  },
  {
    title: "Customer Management",
    icon: Users2,
    href: "/dashboard/customers",
    variant: "ghost"
  },
  {
    title: "Event Management",
    icon: CalendarDays,
    href: "/dashboard/events",
    variant: "ghost"
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
    variant: "ghost"
  },
  {
    title: "Profile",
    icon: User,
    href: "/dashboard/profile",
    variant: "ghost"
  }
]

export function Sidebar() {
  return (
    <div className="flex h-screen w-72 flex-col border-r bg-white">
      <div className="flex items-center gap-2 p-6">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Sulio Art Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-xl font-semibold text-purple-600">AI Artist</span>
        </div>
      </div>
      <nav className="flex-1 space-y-1 px-3">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:bg-gray-100/60 hover:text-gray-900",
              item.variant === "default" && "bg-gray-100/60 text-gray-900 font-medium"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-sm">{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
