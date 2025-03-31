"use client"

import { useState } from "react"
import { Sidebar } from "@/components/Dashboard/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Upload, Save, Plus, X } from "lucide-react"
import Link from "next/link"

export default function AddArtworkPage() {
  const [tags, setTags] = useState([])
  const [tagInput, setTagInput] = useState("")
  const [files, setFiles] = useState([])
  
  const handleAddTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput])
      setTagInput("")
    }
  }
  
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }
  
  const handleFileChange = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map(file => ({
        name: file.name,
        size: file.size,
        type: file.type,
        preview: URL.createObjectURL(file)
      }))
      setFiles([...files, ...fileArray])
    }
  }
  
  const handleRemoveFile = (fileToRemove) => {
    setFiles(files.filter(file => file.name !== fileToRemove.name))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would handle the form submission
    console.log("Form submitted")
  }
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Link href="/dashboard/artwork" className="mr-4">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Add New Artwork</h1>
              <p className="text-gray-600 mt-1">Create a new artwork listing for sale</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Artwork Images */}
              <Card className="col-span-1 md:col-span-3">
                <CardHeader>
                  <CardTitle>Artwork Images</CardTitle>
                  <CardDescription>Upload high-quality images of your artwork (max 5 images)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {files.map((file, index) => (
                        <div key={index} className="relative rounded-md overflow-hidden border border-gray-200 aspect-square">
                          <div 
                            className="w-full h-full bg-contain bg-center bg-no-repeat" 
                            style={{ backgroundImage: `url(${file.preview})` }}
                          />
                          <button 
                            type="button"
                            onClick={() => handleRemoveFile(file)}
                            className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-sm"
                          >
                            <X className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>
                      ))}
                      
                      {files.length < 5 && (
                        <label className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md aspect-square bg-gray-50 hover:bg-gray-100 transition-colors">
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                            multiple={files.length < 4}
                          />
                          <Upload className="h-8 w-8 text-gray-400 mb-2" />
                          <span className="text-sm text-gray-500">Upload</span>
                        </label>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">
                      Supported formats: JPG, PNG, GIF. Max size: 5MB per image.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Artwork Details */}
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle>Artwork Details</CardTitle>
                  <CardDescription>Basic information about your artwork</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Artwork Title</Label>
                      <Input id="title" placeholder="Enter artwork title" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Describe your artwork, including style, inspiration, and techniques used" 
                        className="min-h-[120px]" 
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select>
                          <SelectTrigger id="category">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="painting">Painting</SelectItem>
                            <SelectItem value="drawing">Drawing</SelectItem>
                            <SelectItem value="digital">Digital Art</SelectItem>
                            <SelectItem value="photography">Photography</SelectItem>
                            <SelectItem value="sculpture">Sculpture</SelectItem>
                            <SelectItem value="mixed-media">Mixed Media</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="style">Style</Label>
                        <Select>
                          <SelectTrigger id="style">
                            <SelectValue placeholder="Select style" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="abstract">Abstract</SelectItem>
                            <SelectItem value="realistic">Realistic</SelectItem>
                            <SelectItem value="impressionist">Impressionist</SelectItem>
                            <SelectItem value="surrealist">Surrealist</SelectItem>
                            <SelectItem value="minimalist">Minimalist</SelectItem>
                            <SelectItem value="pop-art">Pop Art</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Tags</Label>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {tags.map((tag, index) => (
                          <div 
                            key={index} 
                            className="flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                          >
                            <span>{tag}</span>
                            <button 
                              type="button" 
                              onClick={() => handleRemoveTag(tag)}
                              className="ml-2 text-gray-500 hover:text-gray-700"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="flex">
                        <Input 
                          placeholder="Add tags (e.g., nature, portrait, blue)" 
                          value={tagInput}
                          onChange={(e) => setTagInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault()
                              handleAddTag()
                            }
                          }}
                        />
                        <Button 
                          type="button" 
                          variant="outline" 
                          className="ml-2" 
                          onClick={handleAddTag}
                          disabled={!tagInput}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Pricing & Availability */}
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Pricing & Availability</CardTitle>
                  <CardDescription>Set your artwork price and availability</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Price ($)</Label>
                      <Input id="price" type="number" min="0" step="0.01" placeholder="0.00" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Available Quantity</Label>
                      <Input id="quantity" type="number" min="1" placeholder="1" required />
                      <p className="text-xs text-gray-500">
                        For unique physical artwork, set as 1. For prints or digital items, specify total copies available.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Availability Options</Label>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="for-sale" defaultChecked />
                        <label htmlFor="for-sale" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Available for sale
                        </label>
                      </div>
                      
                      <div className="flex items-center space-x-2 mt-2">
                        <Checkbox id="license" />
                        <label htmlFor="license" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Offer licensing options
                        </label>
                      </div>
                      
                      <div className="flex items-center space-x-2 mt-2">
                        <Checkbox id="featured" />
                        <label htmlFor="featured" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Mark as featured artwork
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Form Actions */}
              <div className="col-span-1 md:col-span-3 flex justify-end gap-4">
                <Button variant="outline" type="button" asChild>
                  <Link href="/dashboard/artwork">Cancel</Link>
                </Button>
                <Button variant="outline" type="button">
                  Save as Draft
                </Button>
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                  <Save className="h-4 w-4 mr-2" />
                  Publish Artwork
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
} 