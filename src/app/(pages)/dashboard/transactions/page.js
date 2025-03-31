"use client"

import { useState } from "react"
import { Sidebar } from "@/components/Dashboard/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ArrowDownUp,
  ArrowUpDown,
  Download,
  Filter,
  Search,
  ChevronLeft,
  ChevronRight,
  Eye
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock transaction data
const transactions = [
  {
    id: "T-1234",
    date: "2023-06-10",
    artwork: "Abstract Dreams",
    customer: "John Doe",
    amount: 120.00,
    status: "Completed",
    method: "Credit Card"
  },
  {
    id: "T-1235",
    date: "2023-06-09",
    artwork: "Sunset Mountains",
    customer: "Sarah Williams",
    amount: 150.00,
    status: "Completed",
    method: "PayPal"
  },
  {
    id: "T-1236",
    date: "2023-06-08",
    artwork: "Digital Portrait",
    customer: "Michael Brown",
    amount: 200.00,
    status: "Pending",
    method: "Bank Transfer"
  },
  {
    id: "T-1237",
    date: "2023-06-07",
    artwork: "Neon City",
    customer: "Emily Johnson",
    amount: 95.00,
    status: "Completed",
    method: "Credit Card"
  },
  {
    id: "T-1238",
    date: "2023-06-06",
    artwork: "Watercolor Landscape",
    customer: "Robert Garcia",
    amount: 180.00,
    status: "Failed",
    method: "PayPal"
  },
  {
    id: "T-1239",
    date: "2023-06-05",
    artwork: "Abstract Patterns",
    customer: "Jennifer Lee",
    amount: 110.00,
    status: "Completed",
    method: "Credit Card"
  },
  {
    id: "T-1240",
    date: "2023-06-04",
    artwork: "City Skyline",
    customer: "David Wilson",
    amount: 135.00,
    status: "Pending",
    method: "Bank Transfer"
  },
  {
    id: "T-1241",
    date: "2023-06-03",
    artwork: "Nature's Beauty",
    customer: "Lisa Martinez",
    amount: 90.00,
    status: "Completed",
    method: "PayPal"
  }
]

export default function TransactionsPage() {
  const [sortColumn, setSortColumn] = useState(null)
  const [sortDirection, setSortDirection] = useState(null)
  const [statusFilter, setStatusFilter] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  
  // Filtered and sorted transactions
  const filteredTransactions = transactions.filter(transaction => 
    statusFilter === "All" || transaction.status === statusFilter
  )
  
  // Sorting
  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (!sortColumn) return 0
    
    if (sortColumn === "amount") {
      return sortDirection === "asc" ? a.amount - b.amount : b.amount - a.amount
    }
    
    const aValue = a[sortColumn]
    const bValue = b[sortColumn]
    
    if (sortDirection === "asc") {
      return aValue.localeCompare(bValue)
    } else {
      return bValue.localeCompare(aValue)
    }
  })
  
  // Pagination
  const totalPages = Math.ceil(sortedTransactions.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedTransactions = sortedTransactions.slice(startIndex, startIndex + itemsPerPage)
  
  // Handle sort
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }
  
  // Calculate total revenue
  const totalRevenue = transactions
    .filter(t => t.status === "Completed")
    .reduce((sum, t) => sum + t.amount, 0)
    .toFixed(2)
  
  // Calculate total pending
  const totalPending = transactions
    .filter(t => t.status === "Pending")
    .reduce((sum, t) => sum + t.amount, 0)
    .toFixed(2)
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Transactions</h1>
              <p className="text-gray-600 mt-1">Manage and track your art sales and payments</p>
            </div>
            
            <div className="mt-4 sm:mt-0">
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Total Transactions</p>
                  <h3 className="text-2xl font-semibold text-gray-900">{transactions.length}</h3>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Total Revenue</p>
                  <h3 className="text-2xl font-semibold text-green-600">${totalRevenue}</h3>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Pending Payments</p>
                  <h3 className="text-2xl font-semibold text-yellow-600">${totalPending}</h3>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Avg. Transaction</p>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    ${(transactions.reduce((sum, t) => sum + t.amount, 0) / transactions.length).toFixed(2)}
                  </h3>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Filters and Search */}
          <Card className="border-none shadow-sm mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search transactions..." className="pl-9" />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Select 
                    value={statusFilter} 
                    onValueChange={setStatusFilter}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Status</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    More Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Transactions Table */}
          <Card className="border-none shadow-sm overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-semibold">Transaction History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">
                      <Button 
                        variant="ghost" 
                        className="gap-1 p-0 h-auto font-medium"
                        onClick={() => handleSort("id")}
                      >
                        ID
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button 
                        variant="ghost" 
                        className="gap-1 p-0 h-auto font-medium"
                        onClick={() => handleSort("date")}
                      >
                        Date
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button 
                        variant="ghost" 
                        className="gap-1 p-0 h-auto font-medium"
                        onClick={() => handleSort("artwork")}
                      >
                        Artwork
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button 
                        variant="ghost" 
                        className="gap-1 p-0 h-auto font-medium"
                        onClick={() => handleSort("customer")}
                      >
                        Customer
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button 
                        variant="ghost" 
                        className="gap-1 p-0 h-auto font-medium"
                        onClick={() => handleSort("amount")}
                      >
                        Amount
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button 
                        variant="ghost" 
                        className="gap-1 p-0 h-auto font-medium"
                        onClick={() => handleSort("status")}
                      >
                        Status
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>
                        {new Date(transaction.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell>{transaction.artwork}</TableCell>
                      <TableCell>{transaction.customer}</TableCell>
                      <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          transaction.status === "Completed" 
                            ? "bg-green-100 text-green-800" 
                            : transaction.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}>
                          {transaction.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              {/* Pagination */}
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-500">
                  Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, sortedTransactions.length)} of {sortedTransactions.length} entries
                </div>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <Button
                      key={i + 1}
                      variant={currentPage === i + 1 ? "default" : "outline"}
                      size="sm"
                      className={`h-8 w-8 ${currentPage === i + 1 ? "bg-purple-600 hover:bg-purple-700" : ""}`}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </Button>
                  ))}
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
} 