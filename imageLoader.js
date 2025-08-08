export default function imageLoader({ src, width, quality }) {
  // For static export, we'll just return the src as-is
  // The next-image-export-optimizer will handle the optimization during build
  return src
}
