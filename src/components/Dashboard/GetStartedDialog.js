"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, MessageSquare } from "lucide-react"

export function GetStartedDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [stepsCompleted, setStepsCompleted] = useState({
    artwork: false,
    chatbot: false,
  })

  useEffect(() => {
    // Check if steps are completed from localStorage
    const savedSteps = localStorage.getItem('onboardingSteps')
    if (savedSteps) {
      setStepsCompleted(JSON.parse(savedSteps))
    }
    
    // Show dialog if any step is not completed
    const allStepsCompleted = Object.values(stepsCompleted).every(step => step)
    if (!allStepsCompleted) {
      setIsOpen(true)
    }
  }, [])

  const handleStepComplete = (step) => {
    const newSteps = { ...stepsCompleted, [step]: true }
    setStepsCompleted(newSteps)
    localStorage.setItem('onboardingSteps', JSON.stringify(newSteps))
    
    // Close dialog if all steps are completed
    if (Object.values(newSteps).every(step => step)) {
      setIsOpen(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-3xl p-0 gap-0">
        <div className="p-6 pb-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            To get started complete these steps
          </h2>
        </div>

        <div className="p-6 pt-2 grid gap-4">
          <Card className="border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-6">
                <div className="rounded-full bg-blue-100 p-3">
                  <Upload className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-gray-900">
                    Upload your first artwork
                  </h3>
                </div>
                <Button 
                  variant="outline" 
                  className="text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => handleStepComplete('artwork')}
                >
                  Start
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-6">
                <div className="rounded-full bg-purple-100 p-3">
                  <MessageSquare className="h-5 w-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-gray-900">
                    Setup your chatbot
                  </h3>
                </div>
                <Button 
                  variant="outline"
                  className="text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => handleStepComplete('chatbot')}
                >
                  Start
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
