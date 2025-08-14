import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import GoogleAnalytics from '@/components/google-analytics'
import './globals.css'

export const metadata: Metadata = {
  title: 'SAI INCLUSIVE - Beauty & Fashion',
  description: 'Professional beauty and fashion services with inclusive approach',
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/assets/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/assets/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/assets/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/assets/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/assets/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/assets/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/assets/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/assets/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/assets/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/assets/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  manifest: '/assets/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/assets/favicon.ico" />
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/assets/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={GeistSans.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
