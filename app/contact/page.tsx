"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MessageCircle, MapPin, Clock, Instagram, Mail, Calendar } from "lucide-react"
import Navbar from "@/components/navbar"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import BookingModal from "@/components/booking-modal"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value ?? ''
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create email content
    const subject = `Contact Form Submission from ${formData.firstName} ${formData.lastName}`
    const body = `
Hello,

You have received a new contact form submission from your website:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Service Interested In: ${formData.service}

Message:
${formData.message}

Best regards,
Website Contact Form
    `.trim()

    // Open default email client with pre-filled content
    const mailtoLink = `mailto:saiinclusive@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink

    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50 py-20">
        <div className="container mx-auto px-4 pt-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for appointments, consultations, or any questions about our services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input 
                        name="firstName"
                        value={formData.firstName || ''}
                        onChange={handleInputChange}
                        placeholder="Your first name" 
                        className="border-gray-300" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input 
                        name="lastName"
                        value={formData.lastName || ''}
                        onChange={handleInputChange}
                        placeholder="Your last name" 
                        className="border-gray-300" 
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email || ''}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com" 
                      className="border-gray-300" 
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input 
                      type="tel" 
                      name="phone"
                      value={formData.phone || ''}
                      onChange={handleInputChange}
                      placeholder="+91 96007 45796" 
                      className="border-gray-300" 
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                    <select 
                      name="service"
                      value={formData.service || ''}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Bridal Makeup">Bridal Makeup</option>
                      <option value="Bridal Aari Work">Bridal Aari Work</option>
                      <option value="Customize Garment">Customize Garment</option>
                      <option value="Kids Wear">Kids Wear</option>
                      <option value="Skin Care">Skin Care</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message || ''}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements..."
                      className="border-gray-300 min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Send Message
                  </Button>

                  {/* Contact Action Buttons */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-center text-gray-600 mb-4 text-sm">Or contact us directly:</p>
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        onClick={() => {
                          const subject = "Inquiry from SAI INCLUSIVE Website"
                          const body = "Hi,\n\nI would like to inquire about your services.\n\nBest regards,"
                          window.location.href = `mailto:saiinclusive@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                        }}
                        variant="outline"
                        className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold py-3 rounded-lg transition-all duration-300"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Send Mail
                      </Button>

                      <Button
                        onClick={() => {
                          const phoneNumber = "919600745796"
                          const message =
                            "Hi! I'm interested in your beauty and fashion services. I'd like to know more about your offerings."
                          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                          window.open(whatsappUrl, "_blank")
                        }}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Send WhatsApp Message
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Quick Booking Section */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Need to Book Quickly?</h3>
              <div className="flex justify-center">
                <BookingModal>
                  <Button
                    size="lg"
                    className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Quick Book Appointment
                  </Button>
                </BookingModal>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                <p className="text-gray-600 text-lg mb-8">
                  We'd love to hear from you. Contact us through any of the following methods:
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
                    <p className="text-gray-600">+91 96007 45796</p>
                    <p className="text-gray-600">+91 77084 37334</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp</h3>
                    <p className="text-gray-600">+91 96007 45796</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-600">saiinclusive@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Instagram</h3>
                    <p className="text-gray-600">@sai_inclusive</p>
                    <p className="text-sm text-gray-500">Follow us for latest updates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gradient-to-r from-gray-50 to-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About SAI INCLUSIVE</h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  SAI INCLUSIVE has been serving the community with exceptional beauty and fashion services since 2015. Our team of skilled professionals is passionate about helping you look and feel your best.
                </p>
                <p className="leading-relaxed">
                  We believe that everyone deserves to feel beautiful and confident. That's why we offer a comprehensive
                  range of services, from traditional bridal makeup and aari work to modern skincare treatments and
                  custom garments.
                </p>
                <p className="leading-relaxed">
                  Our commitment to quality, attention to detail, and personalized service has made us a trusted name in
                  the beauty and fashion industry.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/assets/Sai-logo.png"
                  alt="About SAI Inclusive Team"
                  width={350}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Visit Our Store</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Our Location</h3>
                  <p className="text-gray-600">
                    186, Main Rd, NGL road, Valliyur
                    <br />
                    Vadakkuvalliyur, Tamil Nadu - 627117
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Opening Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>
                      <span className="font-medium">Monday - Saturday:</span> 10:00 AM - 8:00 PM
                    </p>
                  </div>
                  <p className="text-sm text-black mt-2">*Appointments recommended</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg h-80 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.2066021852256!2d77.6091713!3d8.3813288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0467f37c160ab1%3A0x4d0637f095e83b9f!2sSAI%20Beauty%20Parlour%20and%20Designer!5e0!3m2!1sen!2sin!4v1754031819442!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SAI INCLUSIVE Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
