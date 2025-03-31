"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ArtworkStats() {
  // In a real app, you would use a charting library like Chart.js or Recharts
  // For this example, we'll create a simple visual representation
  
  const artworkCategories = [
    { name: "Digital Art", percentage: 45, color: "bg-purple-500" },
    { name: "Illustrations", percentage: 25, color: "bg-blue-500" },
    { name: "Portraits", percentage: 15, color: "bg-green-500" },
    { name: "Abstract", percentage: 15, color: "bg-yellow-500" }
  ]
  
  // Calculate the stroke dash array for each segment
  // The circle perimeter is 2 * PI * r where r = 70
  // For the chart we use the circumference of 440 (2 * PI * 70)
  const circumference = 440
  let currentOffset = 0
  
  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold">Artwork Categories</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex justify-center my-2">
          <div className="relative w-36 h-36">
            <svg width="100%" height="100%" viewBox="0 0 160 160">
              {artworkCategories.map((category, index) => {
                const dashArray = circumference * (category.percentage / 100)
                const dash = `${dashArray} ${circumference - dashArray}`
                const offset = currentOffset
                currentOffset += dashArray
                
                return (
                  <circle
                    key={index}
                    cx="80"
                    cy="80"
                    r="70"
                    fill="transparent"
                    stroke={category.color.replace('bg-', 'var(--')}
                    strokeWidth="20"
                    strokeDasharray={dash}
                    strokeDashoffset={offset}
                    transform="rotate(-90 80 80)"
                    style={{ 
                      '--purple-500': '#a855f7', 
                      '--blue-500': '#3b82f6',
                      '--green-500': '#22c55e',
                      '--yellow-500': '#eab308'
                    }}
                  />
                )
              })}
              <text
                x="80"
                y="80"
                fontSize="24"
                textAnchor="middle"
                alignmentBaseline="middle"
                fontWeight="bold"
                fill="#111827"
              >
                {artworkCategories.reduce((sum, cat) => sum + cat.percentage, 0)}
              </text>
              <text
                x="80"
                y="100"
                fontSize="12"
                textAnchor="middle"
                alignmentBaseline="middle"
                fill="#6b7280"
              >
                Artworks
              </text>
            </svg>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mt-4">
          {artworkCategories.map((category, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
              <div className="flex-1 flex justify-between items-center">
                <span className="text-xs text-gray-600">{category.name}</span>
                <span className="text-xs font-medium">{category.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 