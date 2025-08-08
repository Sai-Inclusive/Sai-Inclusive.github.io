import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import { Phone, MessageCircle, MapPin, Instagram, Mail, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 relative">
                <ExportedImage
                  src="/assets/apple-icon-180x180.png"
                  alt="SAI INCLUSIVE Logo"
                  width={40}
                  height={40}
                  className="rounded-full shadow-md"
                />
              </div>
              <div>
                <div className="font-bold text-lg">SAI INCLUSIVE</div>
                <div className="text-xs text-gray-400">Beauty & Fashion</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Specializing in bridal and customized design works with commitment to quality, skills, and passion.
              We started out services since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-black transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-black transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-black" />
                <span className="text-gray-400">+91 96007 45796</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-black" />
                <span className="text-gray-400">WhatsApp Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-black" />
                <span className="text-gray-400">saiinclusive@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Address & Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Visit Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-black mt-0.5" />
                <span className="text-gray-400">
                  186, Main Rd, NGL road, Valliyur
                  <br />
                  Vadakkuvalliyur, Tamil Nadu - 627117
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-black mt-0.5" />
                <span className="text-gray-400">
                  Mon-Sat: 10AM-8PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Follow us:</span>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/sai_inclusive"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-black transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-400">© 2025 SAI INCLUSIVE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
