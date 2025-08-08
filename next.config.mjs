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
    imageSizes: [128, 256, 384],
    deviceSizes: [1080, 1920, 3840],
    formats: ['image/webp'],
    unoptimized: false, // Enable optimization for static export
  },
  env: {
    nextImageExportOptimizer_imageFolderPath: "public",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
  output: 'export',
  trailingSlash: true,
  assetPrefix: '',
}

export default nextConfig
