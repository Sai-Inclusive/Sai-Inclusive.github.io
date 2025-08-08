"use client"

import { useState, useEffect, useRef } from "react"
import ExportedImage from "next-image-export-optimizer"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, Share2, Play, Pause } from "lucide-react"

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
  title: string
}
  
// Configuration
const IMAGES_PER_PAGE = 8 // 8 images per page for better mobile experience
const AUTO_SCROLL_INTERVAL = 8000 // 8 seconds
const MIN_SWIPE_DISTANCE = 50 // Minimum distance for a swipe to be registered

// Gallery images with actual photos
const galleryImages: GalleryImage[] = [
  // Bridal Makeup Images
  {
    id: 1,
    src: "/assets/BridalMakeUp/1.png",
    alt: "Professional Bridal Makeup Look 1",
    category: "makeup",
    title: "Traditional Bridal Makeup",
  },
  {
    id: 2,
    src: "/assets/BridalMakeUp/2.png",
    alt: "Professional Bridal Makeup Look 2",
    category: "makeup",
    title: "Modern Bridal Look",
  },
  {
    id: 3,
    src: "/assets/BridalMakeUp/3.png",
    alt: "Professional Bridal Makeup Look 3",
    category: "makeup",
    title: "South Indian Bridal Style",
  },
  {
    id: 4,
    src: "/assets/BridalMakeUp/4.jpg",
    alt: "Professional Bridal Makeup Look 4",
    category: "makeup",
    title: "Elegant Bridal Makeup",
  },
  {
    id: 5,
    src: "/assets/BridalMakeUp/5.jpg",
    alt: "Professional Bridal Makeup Look 5",
    category: "makeup",
    title: "Glamorous Bridal Look",
  },
  {
    id: 6,
    src: "/assets/BridalMakeUp/6.jpg",
    alt: "Professional Bridal Makeup Look 6",
    category: "makeup",
    title: "Classic Bridal Style",
  },
  
  // Bridal Aari Work Images
  {
    id: 7,
    src: "/assets/BridalArriWorks/1.png",
    alt: "Intricate Aari Work Design 1",
    category: "aari",
    title: "Intricate Aari Embroidery",
  },
  {
    id: 8,
    src: "/assets/BridalArriWorks/2.png",
    alt: "Intricate Aari Work Design 2",
    category: "aari",
    title: "Golden Thread Aari Work",
  },
  {
    id: 9,
    src: "/assets/BridalArriWorks/3.png",
    alt: "Intricate Aari Work Design 3",
    category: "aari",
    title: "Floral Aari Pattern",
  },
  {
    id: 10,
    src: "/assets/BridalArriWorks/4.png",
    alt: "Intricate Aari Work Design 4",
    category: "aari",
    title: "Traditional Aari Design",
  },
  {
    id: 11,
    src: "/assets/BridalArriWorks/5.png",
    alt: "Intricate Aari Work Design 5",
    category: "aari",
    title: "Detailed Aari Embroidery",
  },
  {
    id: 12,
    src: "/assets/BridalArriWorks/6.png",
    alt: "Intricate Aari Work Design 6",
    category: "aari",
    title: "Artistic Aari Work",
  },
  
  // Custom Garments Images
  {
    id: 13,
    src: "/assets/CustomizeGarments/1.png",
    alt: "Custom Garment Design 1",
    category: "garment",
    title: "Custom Designer Blouse",
  },
  {
    id: 14,
    src: "/assets/CustomizeGarments/2.jpg",
    alt: "Custom Garment Design 2",
    category: "garment",
    title: "Elegant Evening Wear",
  },
  {
    id: 15,
    src: "/assets/CustomizeGarments/3.jpg",
    alt: "Custom Garment Design 3",
    category: "garment",
    title: "Wedding Guest Outfit",
  },
  {
    id: 16,
    src: "/assets/CustomizeGarments/4.jpg",
    alt: "Custom Garment Design 4",
    category: "garment",
    title: "Designer Saree Blouse",
  },
  {
    id: 17,
    src: "/assets/CustomizeGarments/5.jpg",
    alt: "Custom Garment Design 5",
    category: "garment",
    title: "Custom Tailored Dress",
  },
  {
    id: 18,
    src: "/assets/CustomizeGarments/6.jpg",
    alt: "Custom Garment Design 6",
    category: "garment",
    title: "Bespoke Fashion Design",
  },
  
  // Kids Wear Images
  {
    id: 19,
    src: "/assets/KidsWear/1.jpg",
    alt: "Kids Wear Design 1",
    category: "kids",
    title: "Adorable Kids Outfit",
  },
  {
    id: 20,
    src: "/assets/KidsWear/2.jpg",
    alt: "Kids Wear Design 2",
    category: "kids",
    title: "Festive Kids Collection",
  },
  {
    id: 21,
    src: "/assets/KidsWear/3.jpg",
    alt: "Kids Wear Design 3",
    category: "kids",
    title: "Traditional Kids Wear",
  },
  {
    id: 22,
    src: "/assets/KidsWear/4.jpg",
    alt: "Kids Wear Design 4",
    category: "kids",
    title: "Party Wear for Kids",
  },
  {
    id: 23,
    src: "/assets/KidsWear/5.png",
    alt: "Kids Wear Design 5",
    category: "kids",
    title: "Cute Kids Fashion",
  },
  {
    id: 24,
    src: "/assets/KidsWear/6.png",
    alt: "Kids Wear Design 6",
    category: "kids",
    title: "Designer Kids Outfit",
  },
  {
    id: 25,
    src: "/assets/KidsWear/7.jpg",
    alt: "Kids Wear Design 7",
    category: "kids",
    title: "Children's Special Wear",
  },
  
  // Skincare Images
  {
    id: 26,
    src: "/assets/SkinCare/hairdresser-colored-hair-her-client-hair-salon.jpg",
    alt: "Professional Hair Coloring Service",
    category: "skincare",
    title: "Hair Coloring Treatment",
  },
  {
    id: 27,
    src: "/assets/SkinCare/high-angle-woman-getting-massaged.jpg",
    alt: "Professional Massage Therapy",
    category: "skincare",
    title: "Relaxing Massage Therapy",
  },
  {
    id: 28,
    src: "/assets/SkinCare/spa-treatment-product-female-feet-hand-spa.jpg",
    alt: "Spa Treatment for Hands and Feet",
    category: "skincare",
    title: "Hand & Foot Spa Treatment",
  },
  {
    id: 29,
    src: "/assets/SkinCare/woman-getting-treatment-hairdresser-shop.jpg",
    alt: "Professional Hair Treatment",
    category: "skincare",
    title: "Hair Care Treatment",
  },
  {
    id: 30,
    src: "/assets/SkinCare/woman-washing-head.png",
    alt: "Professional Hair Washing Service",
    category: "skincare",
    title: "Hair Washing & Care",
  },
]

const categories = [
  { id: "all", name: "All Work", count: galleryImages.length },
  { id: "makeup", name: "Bridal Makeup", count: galleryImages.filter((img) => img.category === "makeup").length },
  { id: "aari", name: "Aari Work", count: galleryImages.filter((img) => img.category === "aari").length },
  { id: "garment", name: "Custom Garments", count: galleryImages.filter((img) => img.category === "garment").length },
  { id: "kids", name: "Kids Wear", count: galleryImages.filter((img) => img.category === "kids").length },
  { id: "skincare", name: "Skincare", count: galleryImages.filter((img) => img.category === "skincare").length },
]

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null)
  
  // Touch/Swipe state
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  // Pagination logic
  const totalPages = Math.ceil(filteredImages.length / IMAGES_PER_PAGE)
  const startIndex = currentPage * IMAGES_PER_PAGE
  const endIndex = startIndex + IMAGES_PER_PAGE
  const currentImages = filteredImages.slice(startIndex, endIndex)

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling && totalPages > 1) {
      autoScrollRef.current = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages)
      }, AUTO_SCROLL_INTERVAL)
    } else {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
        autoScrollRef.current = null
      }
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
      }
    }
  }, [isAutoScrolling, totalPages])

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(0)
  }, [selectedCategory])

  // Pause auto-scroll when user interacts
  const handleUserInteraction = () => {
    if (isAutoScrolling) {
      setIsAutoScrolling(false)
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
        autoScrollRef.current = null
      }
    }
  }

  const handlePageChange = (newPage: number) => {
    handleUserInteraction()
    setCurrentPage(newPage)
  }

  const handlePreviousPage = () => {
    const newPage = currentPage > 0 ? currentPage - 1 : totalPages - 1
    handlePageChange(newPage)
  }

  const handleNextPage = () => {
    const newPage = (currentPage + 1) % totalPages
    handlePageChange(newPage)
  }

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling)
  }

  const handleImageClick = (imageId: number) => {
    handleUserInteraction()
    setSelectedImage(imageId)
  }

  const handlePrevious = () => {
    if (selectedImage === null) return
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    setSelectedImage(filteredImages[prevIndex].id)
  }

  const handleNext = () => {
    if (selectedImage === null) return
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    setSelectedImage(filteredImages[nextIndex].id)
  }

  const selectedImageData = galleryImages.find((img) => img.id === selectedImage)

  // Touch/Swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null) // Otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > MIN_SWIPE_DISTANCE
    const isRightSwipe = distance < -MIN_SWIPE_DISTANCE

    if (totalPages > 1 && (isLeftSwipe || isRightSwipe)) {
      if (isLeftSwipe) {
        handleNextPage() // Swipe left = next page
      } else if (isRightSwipe) {
        handlePreviousPage() // Swipe right = previous page
      }
    }
  }

  const handleShare = async () => {
    if (selectedImageData && navigator.share) {
      try {
        await navigator.share({
          title: selectedImageData.title,
          text: `Check out this beautiful work by SAI INCLUSIVE: ${selectedImageData.title}`,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    }
  }

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            variant={selectedCategory === category.id ? "default" : "outline"}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? "bg-black text-white shadow-lg"
                : "border-gray-200 text-black hover:bg-gray-50"
            }`}
          >
            {category.name} ({category.count})
          </Button>
        ))}
      </div>



      {/* Image Grid */}
      <div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-[400px]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {currentImages.map((image, index) => (
          <div
            key={image.id}
            className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => handleImageClick(image.id)}
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <ExportedImage
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading={index < 4 ? "eager" : "lazy"} // Load first 4 images immediately, others lazily
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            <div className="p-3 bg-white">
              <h3 className="text-sm font-medium text-gray-800 truncate">{image.title}</h3>
              <p className="text-xs text-gray-500 capitalize">{image.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Page Indicators */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center mt-6 gap-3">
          <Button
            onClick={handlePreviousPage}
            variant="outline"
            size="sm"
            className="rounded-full w-8 h-8 p-0"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? "bg-black scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
          
          <Button
            onClick={toggleAutoScroll}
            variant="ghost"
            size="sm"
            className="rounded-full w-8 h-8 p-0"
            title={isAutoScrolling ? "Pause auto-scroll" : "Resume auto-scroll"}
          >
            {isAutoScrolling ? (
              <Pause className="w-3 h-3" />
            ) : (
              <Play className="w-3 h-3" />
            )}
          </Button>
          
          <Button
            onClick={handleNextPage}
            variant="outline"
            size="sm"
            className="rounded-full w-8 h-8 p-0"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full h-[90vh] p-0 bg-black/95">
          <DialogTitle className="sr-only">
            {selectedImageData ? selectedImageData.title : "Image Gallery"}
          </DialogTitle>
          {selectedImageData && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <Button
                onClick={() => setSelectedImage(null)}
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 rounded-full"
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                onClick={handlePrevious}
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 rounded-full"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              <Button
                onClick={handleNext}
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 rounded-full"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              {/* Main Image */}
              <div className="relative w-full h-full flex items-center justify-center p-8">
                <img
                  src={selectedImageData.src || "/placeholder.svg"}
                  alt={selectedImageData.alt}
                  className="max-w-full max-h-full object-contain"
                  loading="eager"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-1">{selectedImageData.title}</h3>
                    <p className="text-gray-300 capitalize">{selectedImageData.category}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleShare}
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20 rounded-full"
                    >
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {filteredImages.findIndex((img) => img.id === selectedImage) + 1} / {filteredImages.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
