"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Heart, Eye, DollarSign } from "lucide-react"

const topArtworks = [
  {
    id: 1,
    title: "Abstract Dreams",
    image: "/images/artwork1.jpg",
    views: 1240,
    likes: 342,
    sales: 24,
    price: 120
  },
  {
    id: 2,
    title: "Sunset Mountains",
    image: "/images/artwork2.jpg",
    views: 980,
    likes: 256,
    sales: 18,
    price: 150
  },
  {
    id: 3,
    title: "Digital Portrait",
    image: "/images/artwork3.jpg",
    views: 1450,
    likes: 412,
    sales: 32,
    price: 200
  },
  {
    id: 4,
    title: "Neon City",
    image: "/images/artwork4.jpg",
    views: 890,
    likes: 198,
    sales: 15,
    price: 95
  }
]

export function TopArtworks() {
  return (
    <Card className="border-none shadow-sm overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold">Top Artworks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topArtworks.map((artwork) => (
            <div 
              key={artwork.id} 
              className="flex items-center space-x-4 border border-gray-100 rounded-lg p-3 hover:bg-gray-50 transition-colors"
            >
              <div className="relative w-16 h-16 flex-shrink-0">
                <div className="absolute inset-0 rounded-md overflow-hidden">
                  <Image 
                    src={artwork.image} 
                    alt={artwork.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 64px) 100vw, 64px"
                    // If images don't exist, use a fallback
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/64x64?text=Art";
                    }}
                  />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 truncate">
                  {artwork.title}
                </h3>
                
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center text-xs text-gray-500">
                    <Eye className="h-3 w-3 mr-1" />
                    {artwork.views}
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Heart className="h-3 w-3 mr-1" />
                    {artwork.likes}
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <DollarSign className="h-3 w-3 mr-1" />
                    ${artwork.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 