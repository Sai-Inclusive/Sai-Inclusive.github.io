import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar, Star, MapPin, Truck } from "lucide-react"
import Navbar from "@/components/navbar"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import BookingModal from "@/components/booking-modal"

export default function ServicesPage() {
  const services = [
    {
      title: "Bridal Makeup",
      description:
        "Complete bridal makeup services including trial sessions, wedding day makeup, and touch-ups. We use premium products to ensure you look stunning on your special day with various treatments focused on client satisfaction.",
      features: [
        "Pre-wedding trial",
        "Wedding day makeup",
        "Touch-up services",
        "Premium products",
        "Client satisfaction focus",
      ],
      image: "/assets/BridalMakeUp/1.png",
      icon: "💄",
    },
    {
      title: "Bridal Aari Work",
      description:
        "Exquisite traditional Aari work emphasizing tradition, techniques, and unique designs. Hand-embroidered using high-quality materials that reflect your artistic vision and enhance your style and confidence.",
      features: [
        "Traditional techniques",
        "Unique custom designs",
        "High-quality materials",
        "Artistic vision focus",
        "Expert craftsmanship",
      ],
      image: "/assets/BridalArriWorks/1.png",
      icon: "🪡",
    },
    {
      title: "Customize Garment",
      description:
        "Custom tailoring and garment design services focusing on bridal and customized design works. From alterations to completely new designs, we create garments with commitment to quality, skills, and passion.",
      features: [
        "Bridal specialization",
        "Custom design focus",
        "Quality commitment",
        "Skill & passion",
        "Perfect fitting",
      ],
      image: "/assets/CustomizeGarments/1.png",
      icon: "👗",
    },
    {
      title: "Kids Wear",
      description:
        "Beautiful and comfortable clothing for children with customized designs. From party wear to casual outfits, we create adorable clothes using high-quality materials that kids love to wear.",
      features: [
        "Comfortable fabrics",
        "Customized designs",
        "High-quality materials",
        "Durable quality",
        "Age-appropriate styles",
      ],
      image: "/assets/KidsWear/1.jpg",
      icon: "👶",
    },
    {
      title: "Beautician & Makeover",
      description:
        "Professional beautician and makeover services showcasing various treatments with focus on client satisfaction and maintaining highest standards. Enhance your confidence with our expert care.",
      features: [
        "Various treatments",
        "Client satisfaction focus",
        "High standards",
        "Confidence enhancement",
        "Expert consultation",
      ],
      image: "/assets/SkinCare/spa-treatment-product-female-feet-hand-spa.jpg",
      icon: "✨",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50 py-20">
        <div className="container mx-auto px-4 pt-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specializing in bridal and customized design works with commitment to quality, skills, and passion
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Banner */}
      <section className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Based in Valliyur & Vadakkuvalliyur</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              <span className="font-medium">Online Booking & Delivery Available Everywhere</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{service.icon}</span>
                    <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-800">What's Included:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                          <Star className="w-4 h-4 text-black fill-current" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <BookingModal>
                      <Button
                        size="lg"
                        className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Calendar className="w-5 h-5 mr-2" />
                        Book Now
                      </Button>
                    </BookingModal>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-black text-black hover:bg-black hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-800 to-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your bridal and customized design requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-50 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </BookingModal>
            <BookingModal>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
            </BookingModal>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
