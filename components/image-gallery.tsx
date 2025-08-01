"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, Share2 } from "lucide-react"

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
  title: string
}

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  // Sample gallery images - replace with your actual images
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Bridal Makeup Look 1",
      category: "makeup",
      title: "Traditional Bridal Makeup",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Aari Work Design 1",
      category: "aari",
      title: "Intricate Aari Embroidery",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Custom Garment 1",
      category: "garment",
      title: "Custom Designer Blouse",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Kids Wear 1",
      category: "kids",
      title: "Adorable Kids Outfit",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Skincare Treatment",
      category: "skincare",
      title: "Glowing Skin Treatment",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Bridal Makeup Look 2",
      category: "makeup",
      title: "Modern Bridal Look",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Aari Work Design 2",
      category: "aari",
      title: "Golden Thread Aari Work",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Custom Garment 2",
      category: "garment",
      title: "Elegant Evening Wear",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Kids Wear 2",
      category: "kids",
      title: "Festive Kids Collection",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Bridal Makeup Look 3",
      category: "makeup",
      title: "South Indian Bridal Style",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Aari Work Design 3",
      category: "aari",
      title: "Floral Aari Pattern",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Custom Garment 3",
      category: "garment",
      title: "Wedding Guest Outfit",
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

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const handleImageClick = (imageId: number) => {
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => handleImageClick(image.id)}
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-3 bg-white">
              <h3 className="text-sm font-medium text-gray-800 truncate">{image.title}</h3>
              <p className="text-xs text-gray-500 capitalize">{image.category}</p>
            </div>
          </div>
        ))}
      </div>

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
                <Image
                  src={selectedImageData.src || "/placeholder.svg"}
                  alt={selectedImageData.alt}
                  width={800}
                  height={800}
                  className="max-w-full max-h-full object-contain"
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
