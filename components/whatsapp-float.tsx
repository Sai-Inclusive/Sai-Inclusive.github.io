"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919600745796"
    const message = "Hi! I'm interested in your bridal and customized design services from SAI Inclusive."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">Contact us on WhatsApp</span>
      </Button>
    </div>
  )
}
