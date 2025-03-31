"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MonthlySales() {
  // In a real app, you would use a charting library like Chart.js or Recharts
  // For this example, we'll create a simple visual representation
  
  const monthlySales = [
    { month: "Jan", amount: 1200 },
    { month: "Feb", amount: 1800 },
    { month: "Mar", amount: 2200 },
    { month: "Apr", amount: 1500 },
    { month: "May", amount: 2500 },
    { month: "Jun", amount: 3000 }
  ]
  
  // Find the maximum value for scaling the bars
  const maxAmount = Math.max(...monthlySales.map(sale => sale.amount))
  
  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold">Monthly Sales</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-end justify-between gap-1 h-36 mt-4">
          {monthlySales.map((sale, index) => {
            const height = (sale.amount / maxAmount) * 100
            return (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="w-8 rounded-t-md bg-purple-500 hover:bg-purple-600 transition-all"
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs font-medium text-gray-600 mt-1">
                  {sale.month}
                </span>
              </div>
            )
          })}
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="text-xs text-gray-500">Last 6 months</div>
          <div className="text-sm font-semibold text-gray-900">
            Total: ${monthlySales.reduce((sum, sale) => sum + sale.amount, 0).toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 