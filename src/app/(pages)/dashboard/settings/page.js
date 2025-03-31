"use client"

import { useState } from "react"
import { Sidebar } from "@/components/Dashboard/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  User,
  Lock,
  Bell,
  CreditCard,
  Globe,
  Share2,
  Palette,
  Save
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account")
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Settings</h1>
            <p className="text-gray-600 mt-1">Manage your account settings and preferences</p>
          </div>
          
          <Card className="border-none shadow-sm overflow-hidden">
            <Tabs defaultValue="account" className="w-full" onValueChange={setActiveTab}>
              <div className="border-b">
                <div className="px-4">
                  <TabsList className="inline-flex h-10 items-center justify-center rounded-none p-0 w-auto">
                    <TabsTrigger 
                      value="account" 
                      className="inline-flex items-center justify-center rounded-none px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-700 outline-none data-[state=active]:shadow-none"
                    >
                      <User className="h-4 w-4 mr-2" />
                      Account
                    </TabsTrigger>
                    <TabsTrigger 
                      value="security" 
                      className="inline-flex items-center justify-center rounded-none px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-700 outline-none data-[state=active]:shadow-none"
                    >
                      <Lock className="h-4 w-4 mr-2" />
                      Security
                    </TabsTrigger>
                    <TabsTrigger 
                      value="notifications" 
                      className="inline-flex items-center justify-center rounded-none px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-700 outline-none data-[state=active]:shadow-none"
                    >
                      <Bell className="h-4 w-4 mr-2" />
                      Notifications
                    </TabsTrigger>
                    <TabsTrigger 
                      value="billing" 
                      className="inline-flex items-center justify-center rounded-none px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-700 outline-none data-[state=active]:shadow-none"
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Billing
                    </TabsTrigger>
                    <TabsTrigger 
                      value="appearance" 
                      className="inline-flex items-center justify-center rounded-none px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-700 outline-none data-[state=active]:shadow-none"
                    >
                      <Palette className="h-4 w-4 mr-2" />
                      Appearance
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>
              
              <TabsContent value="account" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">Profile Information</h3>
                    <p className="text-sm text-gray-500">Update your account profile information</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue="Sarah Johnson" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="sarah.j@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="sarahart" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" defaultValue="+1 (555) 987-6543" />
                    </div>
                    
                    <div className="col-span-1 md:col-span-2 space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea 
                        id="bio" 
                        placeholder="Write a short bio..." 
                        className="min-h-[100px]"
                        defaultValue="Digital artist specializing in abstract and portrait art using various digital techniques."
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Public Profile</h3>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Profile Visibility</Label>
                        <p className="text-sm text-gray-500">
                          Control whether your profile is public or private
                        </p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Show Email Address</Label>
                        <p className="text-sm text-gray-500">
                          Allow others to see your email address
                        </p>
                      </div>
                      <Switch defaultChecked={false} />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-purple-600 hover:bg-purple-700 gap-2">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="security" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">Security Settings</h3>
                    <p className="text-sm text-gray-500">Manage your account security preferences</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      
                      <div className="col-span-1 md:col-span-2 space-y-2">
                        <p className="text-sm text-gray-500">Leave the fields below empty if you don't want to change your password</p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                    
                    <div className="space-y-4 pt-4 border-t">
                      <h4 className="text-base font-medium">Two-Factor Authentication</h4>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Enable 2FA</Label>
                          <p className="text-sm text-gray-500">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Switch defaultChecked={false} />
                      </div>
                    </div>
                    
                    <div className="space-y-4 pt-4 border-t">
                      <h4 className="text-base font-medium">Account Sessions</h4>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Current Session</Label>
                          <p className="text-sm text-gray-500">
                            Chrome on Windows • Active now
                          </p>
                        </div>
                        <Button variant="outline" size="sm">Sign Out</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-purple-600 hover:bg-purple-700 gap-2">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="notifications" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">Notification Preferences</h3>
                    <p className="text-sm text-gray-500">Choose how and when you want to be notified</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-base font-medium">Email Notifications</h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">New Sales</Label>
                          <p className="text-sm text-gray-500">
                            Receive notifications when your artwork sells
                          </p>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">New Comments</Label>
                          <p className="text-sm text-gray-500">
                            Receive notifications when someone comments on your artwork
                          </p>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">New Followers</Label>
                          <p className="text-sm text-gray-500">
                            Receive notifications when someone follows you
                          </p>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Marketing Emails</Label>
                          <p className="text-sm text-gray-500">
                            Receive promotional emails and newsletters
                          </p>
                        </div>
                        <Switch defaultChecked={false} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t">
                    <h4 className="text-base font-medium">Push Notifications</h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Enable Push Notifications</Label>
                          <p className="text-sm text-gray-500">
                            Receive notifications on your device
                          </p>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-purple-600 hover:bg-purple-700 gap-2">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="billing" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">Billing Settings</h3>
                    <p className="text-sm text-gray-500">Manage your payment methods and billing preferences</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-base font-medium">Payment Methods</h4>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-8 w-8 text-gray-400" />
                            <div>
                              <p className="font-medium">Visa ending in 4242</p>
                              <p className="text-sm text-gray-500">Expires 04/25</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm" className="text-red-600">Remove</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Button variant="outline" className="gap-2">
                      <CreditCard className="h-4 w-4" />
                      Add Payment Method
                    </Button>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t">
                    <h4 className="text-base font-medium">Billing Information</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="billing-name">Name</Label>
                        <Input id="billing-name" defaultValue="Sarah Johnson" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="billing-email">Email</Label>
                        <Input id="billing-email" type="email" defaultValue="sarah.j@example.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="billing-address">Address</Label>
                        <Input id="billing-address" defaultValue="123 Art St" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="billing-city">City</Label>
                        <Input id="billing-city" defaultValue="New York" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="billing-state">State/Province</Label>
                        <Input id="billing-state" defaultValue="NY" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="billing-zipcode">ZIP/Postal Code</Label>
                        <Input id="billing-zipcode" defaultValue="10001" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="billing-country">Country</Label>
                        <Select defaultValue="us">
                          <SelectTrigger id="billing-country">
                            <SelectValue placeholder="Select a country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-purple-600 hover:bg-purple-700 gap-2">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="appearance" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">Appearance Settings</h3>
                    <p className="text-sm text-gray-500">Customize your dashboard experience</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-base font-medium">Theme Preferences</h4>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="theme-light" name="theme" className="h-4 w-4 text-purple-600" defaultChecked />
                        <Label htmlFor="theme-light">Light Theme</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="theme-dark" name="theme" className="h-4 w-4 text-purple-600" />
                        <Label htmlFor="theme-dark">Dark Theme</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="theme-system" name="theme" className="h-4 w-4 text-purple-600" />
                        <Label htmlFor="theme-system">System Preference</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t">
                    <h4 className="text-base font-medium">Dashboard Layout</h4>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="layout-default" name="layout" className="h-4 w-4 text-purple-600" defaultChecked />
                        <Label htmlFor="layout-default">Default Layout</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="layout-compact" name="layout" className="h-4 w-4 text-purple-600" />
                        <Label htmlFor="layout-compact">Compact Layout</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="layout-expanded" name="layout" className="h-4 w-4 text-purple-600" />
                        <Label htmlFor="layout-expanded">Expanded Layout</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-purple-600 hover:bg-purple-700 gap-2">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>
    </div>
  )
} 