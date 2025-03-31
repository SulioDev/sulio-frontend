"use client"

import { useState } from "react"
import { Sidebar } from "@/components/Dashboard/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Instagram,
  Twitter,
  Facebook,
  Link as LinkIcon,
  Image as ImageIcon,
  DollarSign,
  Users,
  Star,
  Edit,
  Share2,
  MessageCircle
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data for artist profile
const artistProfile = {
  name: "Sarah Johnson",
  username: "sarahart",
  email: "sarah.j@example.com",
  phone: "+1 (555) 987-6543",
  location: "New York, USA",
  joinedDate: "January 2022",
  bio: "Digital artist specializing in abstract and portrait art using various digital techniques. I blend traditional art concepts with modern technology to create unique pieces that evoke emotion and thought.",
  avatar: "/avatars/sarah.jpg", // Placeholder - replace with actual path
  coverImage: "/covers/artist-studio.jpg", // Placeholder - replace with actual path
  socialLinks: {
    instagram: "instagram.com/sarahart",
    twitter: "twitter.com/sarahart",
    facebook: "facebook.com/sarahart",
    website: "sarahjohnsonart.com"
  },
  stats: {
    artworks: 48,
    sales: 124,
    revenue: "$8,750",
    followers: 1250,
    avgRating: 4.8
  }
}

// Mock data for portfolio
const portfolioItems = [
  { 
    id: 1, 
    title: "Abstract Dreams", 
    image: "/artwork/abstract1.jpg", 
    price: "$350",
    likes: 89,
    comments: 23
  },
  { 
    id: 2, 
    title: "Urban Landscape", 
    image: "/artwork/landscape1.jpg", 
    price: "$425",
    likes: 64,
    comments: 18
  },
  { 
    id: 3, 
    title: "Portrait Study #4", 
    image: "/artwork/portrait1.jpg", 
    price: "$275",
    likes: 112,
    comments: 36
  },
  { 
    id: 4, 
    title: "Digital Flora", 
    image: "/artwork/flora1.jpg", 
    price: "$300",
    likes: 75,
    comments: 19
  },
  { 
    id: 5, 
    title: "Neon City", 
    image: "/artwork/city1.jpg", 
    price: "$400",
    likes: 94,
    comments: 27
  },
  { 
    id: 6, 
    title: "Ocean Depths", 
    image: "/artwork/ocean1.jpg", 
    price: "$375",
    likes: 68,
    comments: 21
  }
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-5xl mx-auto">
          {/* Profile Header with Cover Image */}
          <div className="relative w-full h-64 rounded-xl overflow-hidden mb-16">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <div className="absolute h-full w-full bg-gray-200">
              {/* Placeholder for cover image */}
              <div className="w-full h-full bg-gradient-to-r from-purple-400 to-pink-500" />
            </div>
            
            {/* Profile info overlaid on cover */}
            <div className="absolute -bottom-12 left-8 z-20 flex items-end">
              <Avatar className="h-24 w-24 border-4 border-white">
                <AvatarImage src={artistProfile.avatar} alt={artistProfile.name} />
                <AvatarFallback className="bg-purple-500 text-white text-xl">
                  {artistProfile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 mb-2">
                <h1 className="text-2xl font-bold text-white">{artistProfile.name}</h1>
                <p className="text-gray-200">@{artistProfile.username}</p>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="absolute top-4 right-4 z-20 flex space-x-2">
              <Button variant="outline" size="sm" className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
          
          {/* Profile Content */}
          <div className="mt-8">
            <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="stats">Statistics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Contact Info Card */}
                  <Card className="col-span-1">
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-gray-500 mr-3" />
                        <span>{artistProfile.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-500 mr-3" />
                        <span>{artistProfile.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-gray-500 mr-3" />
                        <span>{artistProfile.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                        <span>Joined {artistProfile.joinedDate}</span>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <h3 className="font-medium text-sm text-gray-500 uppercase mb-3">Social Links</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <a href={`https://${artistProfile.socialLinks.instagram}`} target="_blank" rel="noopener noreferrer" 
                           className="flex items-center text-sm hover:text-purple-600">
                          <Instagram className="h-4 w-4 mr-2" />
                          Instagram
                        </a>
                        <a href={`https://${artistProfile.socialLinks.twitter}`} target="_blank" rel="noopener noreferrer"
                           className="flex items-center text-sm hover:text-purple-600">
                          <Twitter className="h-4 w-4 mr-2" />
                          Twitter
                        </a>
                        <a href={`https://${artistProfile.socialLinks.facebook}`} target="_blank" rel="noopener noreferrer"
                           className="flex items-center text-sm hover:text-purple-600">
                          <Facebook className="h-4 w-4 mr-2" />
                          Facebook
                        </a>
                        <a href={`https://${artistProfile.socialLinks.website}`} target="_blank" rel="noopener noreferrer"
                           className="flex items-center text-sm hover:text-purple-600">
                          <LinkIcon className="h-4 w-4 mr-2" />
                          Website
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Bio Card */}
                  <Card className="col-span-1 md:col-span-2">
                    <CardHeader>
                      <CardTitle>About Me</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">
                        {artistProfile.bio}
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">{artistProfile.stats.artworks}</div>
                          <div className="text-sm text-gray-500">Artworks</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">{artistProfile.stats.sales}</div>
                          <div className="text-sm text-gray-500">Sales</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">{artistProfile.stats.revenue}</div>
                          <div className="text-sm text-gray-500">Revenue</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">{artistProfile.stats.followers}</div>
                          <div className="text-sm text-gray-500">Followers</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">{artistProfile.stats.avgRating}</div>
                          <div className="text-sm text-gray-500">Avg. Rating</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Featured Works */}
                  <Card className="col-span-1 md:col-span-3">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Featured Artworks</CardTitle>
                      <Button variant="link" className="text-purple-600">View All</Button>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {portfolioItems.slice(0, 3).map((item) => (
                          <div key={item.id} className="relative rounded-lg overflow-hidden group">
                            <div className="aspect-[4/3] bg-gray-200 relative">
                              {/* Placeholder for artwork image */}
                              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-100" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition-opacity">
                                <Button size="sm" variant="secondary" className="mr-2">
                                  <Star className="h-4 w-4 mr-1" />
                                  Like
                                </Button>
                                <Button size="sm" variant="secondary">
                                  <MessageCircle className="h-4 w-4 mr-1" />
                                  Comment
                                </Button>
                              </div>
                            </div>
                            <div className="p-3">
                              <h3 className="font-medium">{item.title}</h3>
                              <div className="flex justify-between items-center mt-1">
                                <span className="text-purple-600 font-medium">{item.price}</span>
                                <div className="flex items-center space-x-2 text-sm text-gray-500">
                                  <span className="flex items-center">
                                    <Star className="h-3 w-3 mr-1" />
                                    {item.likes}
                                  </span>
                                  <span className="flex items-center">
                                    <MessageCircle className="h-3 w-3 mr-1" />
                                    {item.comments}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="portfolio">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>My Portfolio</CardTitle>
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        <ImageIcon className="h-4 w-4 mr-2" />
                        Add New Artwork
                      </Button>
                    </div>
                    <CardDescription>Showcase of all your published artwork</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {portfolioItems.map((item) => (
                        <div key={item.id} className="relative rounded-lg overflow-hidden group">
                          <div className="aspect-[4/3] bg-gray-200 relative">
                            {/* Placeholder for artwork image */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-100" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition-opacity">
                              <Button size="sm" variant="secondary" className="mr-2">
                                <Edit className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                              <Button size="sm" variant="secondary" className="mr-2">
                                <Share2 className="h-4 w-4 mr-1" />
                                Share
                              </Button>
                            </div>
                          </div>
                          <div className="p-3">
                            <h3 className="font-medium">{item.title}</h3>
                            <div className="flex justify-between items-center mt-1">
                              <span className="text-purple-600 font-medium">{item.price}</span>
                              <div className="flex items-center space-x-2 text-sm text-gray-500">
                                <span className="flex items-center">
                                  <Star className="h-3 w-3 mr-1" />
                                  {item.likes}
                                </span>
                                <span className="flex items-center">
                                  <MessageCircle className="h-3 w-3 mr-1" />
                                  {item.comments}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="stats">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sales Overview</CardTitle>
                      <CardDescription>Your sales performance and metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col p-4 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-500">Total Sales</span>
                          <div className="flex items-center mt-1">
                            <DollarSign className="h-5 w-5 text-purple-600 mr-1" />
                            <span className="text-2xl font-bold">{artistProfile.stats.sales}</span>
                          </div>
                        </div>
                        <div className="flex flex-col p-4 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-500">Total Revenue</span>
                          <div className="flex items-center mt-1">
                            <DollarSign className="h-5 w-5 text-purple-600 mr-1" />
                            <span className="text-2xl font-bold">{artistProfile.stats.revenue}</span>
                          </div>
                        </div>
                        <div className="flex flex-col p-4 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-500">Avg. Sale Price</span>
                          <div className="flex items-center mt-1">
                            <DollarSign className="h-5 w-5 text-purple-600 mr-1" />
                            <span className="text-2xl font-bold">$70.56</span>
                          </div>
                        </div>
                        <div className="flex flex-col p-4 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-500">Conversion Rate</span>
                          <div className="flex items-center mt-1">
                            <span className="text-2xl font-bold">3.2%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 h-60 w-full bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <BarChart className="h-10 w-10 mx-auto mb-2" />
                          <p>Sales chart will appear here</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Audience Stats</CardTitle>
                      <CardDescription>Information about your followers and viewers</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col p-4 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-500">Total Followers</span>
                          <div className="flex items-center mt-1">
                            <Users className="h-5 w-5 text-purple-600 mr-1" />
                            <span className="text-2xl font-bold">{artistProfile.stats.followers}</span>
                          </div>
                        </div>
                        <div className="flex flex-col p-4 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-500">Avg. Rating</span>
                          <div className="flex items-center mt-1">
                            <Star className="h-5 w-5 text-purple-600 mr-1" />
                            <span className="text-2xl font-bold">{artistProfile.stats.avgRating}</span>
                          </div>
                        </div>
                        <div className="flex flex-col p-4 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-500">Profile Views</span>
                          <div className="flex items-center mt-1">
                            <User className="h-5 w-5 text-purple-600 mr-1" />
                            <span className="text-2xl font-bold">3,542</span>
                          </div>
                        </div>
                        <div className="flex flex-col p-4 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-500">Engagement Rate</span>
                          <div className="flex items-center mt-1">
                            <span className="text-2xl font-bold">8.7%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="font-medium text-sm text-gray-500 uppercase mb-3">Top Locations</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span>United States</span>
                            <span className="font-medium">42%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                          </div>
                          
                          <div className="flex items-center justify-between mt-3">
                            <span>United Kingdom</span>
                            <span className="font-medium">18%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: '18%' }}></div>
                          </div>
                          
                          <div className="flex items-center justify-between mt-3">
                            <span>Canada</span>
                            <span className="font-medium">15%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                          </div>
                          
                          <div className="flex items-center justify-between mt-3">
                            <span>Australia</span>
                            <span className="font-medium">12%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: '12%' }}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

// Missing component mock for BarChart
function BarChart(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  )
} 