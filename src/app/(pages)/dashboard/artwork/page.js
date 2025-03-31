"use client"

import { useState } from "react"
import { Sidebar } from "@/components/Dashboard/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { 
  Plus, 
  Filter, 
  Search, 
  Upload, 
  Edit, 
  Trash2, 
  MoreVertical, 
  Eye
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link"

const artworks = [
  {
    id: 1,
    title: "Abstract Dreams",
    category: "Digital Art",
    status: "Published",
    price: 120,
    image: "/images/artwork1.jpg",
    date: "Jun 10, 2023"
  },
  {
    id: 2,
    title: "Sunset Mountains",
    category: "Illustrations",
    status: "Published",
    price: 150,
    image: "/images/artwork2.jpg",
    date: "May 28, 2023"
  },
  {
    id: 3,
    title: "Digital Portrait",
    category: "Portraits",
    status: "Draft",
    price: 200,
    image: "/images/artwork3.jpg",
    date: "Jun 5, 2023"
  },
  {
    id: 4,
    title: "Neon City",
    category: "Digital Art",
    status: "Published",
    price: 95,
    image: "/images/artwork4.jpg",
    date: "Jun 2, 2023"
  },
  {
    id: 5,
    title: "Watercolor Landscape",
    category: "Illustrations",
    status: "Draft",
    price: 180,
    image: "/images/artwork5.jpg",
    date: "May 20, 2023"
  },
  {
    id: 6,
    title: "Abstract Patterns",
    category: "Abstract",
    status: "Published",
    price: 110,
    image: "/images/artwork6.jpg",
    date: "Jun 8, 2023"
  }
]

export default function ArtworkPage() {
  const [selectedTab, setSelectedTab] = useState("all");
  
  // Filter artworks based on selected tab
  const filteredArtworks = selectedTab === "all" 
    ? artworks 
    : selectedTab === "published"
      ? artworks.filter(art => art.status === "Published")
      : artworks.filter(art => art.status === "Draft");
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Artwork Management</h1>
              <p className="text-gray-600 mt-1">Manage your artworks, upload new pieces, and track sales</p>
            </div>
            
            <div className="mt-4 sm:mt-0">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                <Link href="/dashboard/artwork/add">
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Artwork
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input placeholder="Search artworks..." className="pl-9" />
            </div>
            
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            
            <Button variant="outline" className="gap-2">
              <Upload className="h-4 w-4" />
              Import
            </Button>
          </div>
          
          {/* Tabs */}
          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger 
                value="all" 
                onClick={() => setSelectedTab("all")}
              >
                All Artworks
              </TabsTrigger>
              <TabsTrigger 
                value="published" 
                onClick={() => setSelectedTab("published")}
              >
                Published
              </TabsTrigger>
              <TabsTrigger 
                value="draft" 
                onClick={() => setSelectedTab("draft")}
              >
                Drafts
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          {/* Artwork Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtworks.map((artwork) => (
              <Card key={artwork.id} className="overflow-hidden border-none shadow-sm">
                <div className="relative aspect-square">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/400x400?text=Artwork";
                    }}
                  />
                  <div className="absolute top-2 right-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/80 rounded-full">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex items-center cursor-pointer">
                          <Eye className="mr-2 h-4 w-4" />
                          <span>View</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center cursor-pointer">
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center cursor-pointer text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-medium text-gray-900">{artwork.title}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-gray-500">{artwork.category}</span>
                    <span className="text-sm font-medium">${artwork.price}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500">{artwork.date}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      artwork.status === "Published" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {artwork.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
} 