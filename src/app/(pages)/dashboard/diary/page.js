"use client"

import { useState } from "react"
import { Sidebar } from "@/components/Dashboard/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { 
  Plus, 
  Calendar, 
  Image as ImageIcon, 
  Save,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  PenSquare,
  Trash2,
  Eye
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Mock diary entries
const diaryEntries = [
  {
    id: 1,
    date: "June 10, 2023",
    content: "Started working on a new series of digital portraits today. I'm experimenting with a more vibrant color palette than I usually use. Found some great reference photos that I'm really excited about.",
    mood: "Inspired",
    tags: ["portrait", "digital", "vibrant"]
  },
  {
    id: 2,
    date: "June 9, 2023",
    content: "Received feedback on my latest commission - client was thrilled! They especially loved the attention to detail in the background elements. Need to remember this approach for future pieces.",
    mood: "Happy",
    tags: ["commission", "feedback", "success"]
  },
  {
    id: 3,
    date: "June 8, 2023",
    content: "Struggled with artist's block today. Spent most of the day sketching but nothing felt right. Going to take a break and look at some art books for inspiration tomorrow.",
    mood: "Frustrated",
    tags: ["block", "challenge", "sketch"]
  },
  {
    id: 4,
    date: "June 7, 2023",
    content: "Learned a new technique for creating realistic textures in digital painting. It's going to save me so much time in my workflow! Can't wait to implement it in my next piece.",
    mood: "Excited",
    tags: ["learning", "technique", "digital"]
  }
]

export default function DiaryPage() {
  const [selectedEntry, setSelectedEntry] = useState(null)
  const [currentMonth, setCurrentMonth] = useState("June 2023")
  const [newEntry, setNewEntry] = useState({
    content: "",
    mood: "Neutral",
    tags: []
  })
  
  // Handle creating a new entry
  const handleCreateEntry = () => {
    // In a real app, this would save to a database
    alert("Entry saved successfully!")
    setNewEntry({
      content: "",
      mood: "Neutral",
      tags: []
    })
  }
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Daily Diary</h1>
              <p className="text-gray-600 mt-1">Keep track of your creative journey and artistic progress</p>
            </div>
            
            <div className="mt-4 sm:mt-0">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <Plus className="mr-2 h-4 w-4" />
                New Entry
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar and Entry List */}
            <Card className="lg:col-span-1 border-none shadow-sm">
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-semibold">Entries</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium">{currentMonth}</span>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {diaryEntries.map((entry) => (
                    <div 
                      key={entry.id}
                      className={`p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors ${
                        selectedEntry === entry.id ? "bg-purple-50 border border-purple-200" : "border border-gray-100"
                      }`}
                      onClick={() => setSelectedEntry(entry.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-sm font-medium text-gray-700">{entry.date}</span>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800`}>
                          {entry.mood}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {entry.content}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {entry.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Entry Editor / Viewer */}
            <Card className="lg:col-span-2 border-none shadow-sm">
              <CardHeader className="pb-2 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-lg font-medium text-gray-900">
                      {selectedEntry 
                        ? diaryEntries.find(e => e.id === selectedEntry)?.date 
                        : new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                  
                  {selectedEntry && (
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="h-8 text-gray-500 gap-1.5">
                        <Eye className="h-4 w-4" />
                        View
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 text-blue-600 gap-1.5">
                        <PenSquare className="h-4 w-4" />
                        Edit
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="flex items-center cursor-pointer text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="pt-4">
                {selectedEntry ? (
                  // View/Edit existing entry
                  <div>
                    <p className="text-gray-800 whitespace-pre-line">
                      {diaryEntries.find(e => e.id === selectedEntry)?.content}
                    </p>
                    <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                      <div className="mr-6">
                        <span className="text-sm text-gray-500 mr-2">Mood:</span>
                        <span className="text-sm font-medium">
                          {diaryEntries.find(e => e.id === selectedEntry)?.mood}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 mr-2">Tags:</span>
                        <div className="inline-flex flex-wrap gap-1">
                          {diaryEntries.find(e => e.id === selectedEntry)?.tags.map((tag, idx) => (
                            <span 
                              key={idx} 
                              className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // New entry form
                  <div className="space-y-4">
                    <Textarea 
                      placeholder="Write your thoughts, ideas, and progress here..."
                      className="min-h-[200px] resize-none"
                      value={newEntry.content}
                      onChange={(e) => setNewEntry({...newEntry, content: e.target.value})}
                    />
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">Mood</label>
                        <Select 
                          value={newEntry.mood}
                          onValueChange={(value) => setNewEntry({...newEntry, mood: value})}
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select your mood" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Inspired">Inspired</SelectItem>
                            <SelectItem value="Happy">Happy</SelectItem>
                            <SelectItem value="Excited">Excited</SelectItem>
                            <SelectItem value="Neutral">Neutral</SelectItem>
                            <SelectItem value="Frustrated">Frustrated</SelectItem>
                            <SelectItem value="Tired">Tired</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-1.5 flex-1">
                        <label className="text-sm font-medium text-gray-700">Tags (comma separated)</label>
                        <input
                          type="text"
                          placeholder="sketch, digital, portrait"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1.5"
                      >
                        <ImageIcon className="h-4 w-4" />
                        Add Image
                      </Button>
                    </div>
                    
                    <div className="flex justify-end gap-2 pt-4">
                      <Button
                        variant="outline"
                        className="px-4"
                      >
                        Cancel
                      </Button>
                      <Button
                        className="bg-purple-600 hover:bg-purple-700 text-white gap-1.5"
                        onClick={handleCreateEntry}
                      >
                        <Save className="h-4 w-4" />
                        Save Entry
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
} 