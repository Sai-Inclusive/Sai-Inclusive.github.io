/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ["next-image-export-optimizer"],
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.js',
    imageSizes: [128, 256, 384],
    deviceSizes: [1080, 1920, 3840],
    formats: ['image/webp'],
  },
  env: {
    nextImageExportOptimizer_imageFolderPath: "public",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
    // Custom setting for modal image quality
    MODAL_IMAGE_QUALITY: "95",
  },
  output: 'export',
  trailingSlash: true,
}

export default nextConfig
