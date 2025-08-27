import ExportedImage from "next-image-export-optimizer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, MapPin, Clock, Calendar, Instagram } from "lucide-react"
import Navbar from "@/components/navbar"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import BookingModal from "@/components/booking-modal"
import ImageGallery from "@/components/image-gallery"

export default function HomePage() {
  const services = [
    {
      title: "Bridal Makeup",
      description: "Professional bridal makeup services for your special day",
      image: "/assets/BridalMakeUp/5.jpg",
      icon: "💄",
    },
    {
      title: "Bridal Aari Work",
      description: "Exquisite traditional aari work for bridal blouses",
      image: "/assets/BridalArriWorks/2.png",
      icon: "🪡",
    },
    {
      title: "Customize Garment",
      description: "Custom tailoring and garment design services",
      image: "/assets/CustomizeGarments/1.png",
      icon: "👗",
    },
    {
      title: "Kids Wear",
      description: "Beautiful and comfortable clothing for children",
      image: "/assets/KidsWear/5.png",
      icon: "👶",
    },
    {
      title: "Skin Care",
      description: "Professional skincare treatments and consultations",
      image: "/assets/SkinCare/high-angle-woman-getting-massaged.jpg",
      icon: "✨",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - Title + Image */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50 overflow-hidden">
        <div className="container mx-auto px-4 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="text-gray-800 space-y-6">
              <div className="inline-block bg-gray-100 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-800">
                Your Beauty & Style Destination
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">SAI INCLUSIVE</h1>

              <p className="text-xl text-gray-700 font-medium">Complete Beauty, Fashion & Lifestyle Services</p>

              <p className="text-gray-700 leading-relaxed text-lg">
                SAI Inclusive specializes in bridal and customized design works with a commitment to quality, skills,
                and passion. Our Aari work emphasizes tradition, techniques, and unique designs using high-quality
                materials that reflect your artistic vision and enhance your style and confidence.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingModal>
                  <Button
                    size="lg"
                    className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </Button>
                </BookingModal>

                <Link href="https://www.instagram.com/sai_inclusive" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Follow us on Instagram
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <ExportedImage
                    src="/assets/Sai-logo.png"
                    alt="SAI Inclusive Beauty Services"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-300 rounded-full shadow-lg"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gray-200 rounded-full shadow-lg"></div>
                <div className="absolute top-1/2 -left-8 w-6 h-6 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Picture/Catalog/Photo Banner */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Work Gallery</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of beautiful transformations and custom creations
            </p>
          </div>

          <ImageGallery />
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
                  SAI Inclusive focuses on bridal and customized design works, where we emphasize our commitment to
                  quality, skills, and passion. Our Aari work celebrates tradition through time-honored techniques and
                  unique designs.
                </p>
                <p className="leading-relaxed">
                  We use only high-quality materials that reflect your artistic vision, enhance your style, and boost
                  your confidence. Our beautician and makeover services showcase various treatments with a focus on
                  client satisfaction and maintaining the highest standards.
                </p>
                <p className="leading-relaxed">
                  Based in Valliyur and Vadakkuvalliyur, we provide services to nearby areas and offer online booking
                  with delivery all over the region. Our vision is to preserve traditional craftsmanship while meeting
                  modern style needs.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <ExportedImage
                  src="/assets/Sai-logo.png"
                  alt="About SAI Inclusive"
                  width={350}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive beauty and fashion services tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-gray-50 to-slate-50 rounded-lg mb-4 overflow-hidden">
                    <ExportedImage
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Book Appointment Section */}
      <section className="bg-gradient-to-r from-gray-800 to-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Look?</h2>
          <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
            Book your appointment today and let our experts help you achieve the perfect look for any occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-50 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </BookingModal>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Visit Our Studio</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Our Address</h3>
                  <p className="text-gray-600">
                    186, Main Rd, NGL road, Valliyur
                    <br />
                    Vadakkuvalliyur, Tamil Nadu - 627117
                    <br />
                    <span className="text-sm text-black font-medium">
                      Serving nearby areas with online booking & delivery available
                    </span>
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
                    <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                  </div>
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
