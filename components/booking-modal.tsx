"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Phone, MessageCircle, Mail, Calendar, Clock, MapPin } from "lucide-react"

interface BookingModalProps {
  children: React.ReactNode
}

export default function BookingModal({ children }: BookingModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handlePhoneCall = () => {
    window.location.href = "tel:+919600745796"
  }

  const handleWhatsApp = () => {
    const phoneNumber = "919600745796"
    const message =
      "Hi! I would like to book an appointment for your bridal and customized design services. Please let me know your availability."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleEmail = () => {
    const subject = "Appointment Booking Request - SAI INCLUSIVE"
    const body = `Hi,

I would like to book an appointment for your services. Please find my details below:

Name: 
Phone: 
Service Required: 
Preferred Date: 
Preferred Time: 
Additional Notes: 

Please confirm the appointment and let me know if you need any additional information.

Thank you!`

    const mailtoUrl = `mailto:saiinclusive@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-800">Book Your Appointment</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-center text-gray-600 mb-6">Choose your preferred method to book an appointment with us</p>

          {/* Contact Options */}
          <div className="space-y-3">
            <Button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Book via WhatsApp
            </Button>

            <Button
              onClick={handlePhoneCall}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              size="lg"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call Now
            </Button>

            <Button
              onClick={handleEmail}
              className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              size="lg"
            >
              <Mail className="w-5 h-5 mr-3" />
              Email Us
            </Button>
          </div>

          {/* Quick Info */}
          <Card className="bg-gray-50 border-0 mt-6">
            <CardContent className="p-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4 text-black" />
                  <span>Mon-Sat: 10AM-8PM</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-black" />
                  <span>Valliyur, Vadakkuvalliyur, TN</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4 text-black" />
                  <span>Advance booking recommended</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-xs text-gray-500 text-center mt-4">
            We'll confirm your appointment within 2 hours during business hours
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
