export default function imageLoader({ src, width, quality }) {
  // Handle external URLs
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src
  }
  
  // Remove leading slash for consistency
  const normalizedSrc = src.startsWith('/') ? src.slice(1) : src
  
  // If this is already an optimized path, return it
  if (normalizedSrc.includes('nextImageExportOptimizer')) {
    return `/${normalizedSrc}`
  }
  
  // Extract the directory path and filename
  const pathParts = normalizedSrc.split('/')
  const fileName = pathParts.pop()
  const directory = pathParts.join('/')
  
  if (fileName) {
    // Remove file extension to get base name
    const baseName = fileName.replace(/\.[^/.]+$/, '')
    
    // Construct the optimized image path
    // The optimized images are stored in nextImageExportOptimizer subfolder within the same directory
    const optimizedFileName = `${baseName}-opt-${width}.WEBP`
    const optimizedPath = directory 
      ? `${directory}/nextImageExportOptimizer/${optimizedFileName}`
      : `nextImageExportOptimizer/${optimizedFileName}`
    
    return `/${optimizedPath}`
  }
  
  // Fallback to original src if we can't parse it
  return `/${normalizedSrc}`
}
