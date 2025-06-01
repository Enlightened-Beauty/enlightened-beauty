
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Enlightened Beauty - Sacred Style for Soul-Led Women',
  description: 'Where inner light meets outer expression. Discover your soul archetype and align your style with your essence. Sacred beauty for transformational women.',
  keywords: 'soul styling, color analysis, spiritual beauty, transformational women, style coaching, soul archetype',
  authors: [{ name: 'Nathalie Chapron' }],
  openGraph: {
    title: 'Enlightened Beauty - Sacred Style for Soul-Led Women',
    description: 'Where inner light meets outer expression. Discover your soul archetype and align your style with your essence.',
    url: 'https://enlightenedbeauty.com',
    siteName: 'Enlightened Beauty',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Enlightened Beauty - Sacred Style for Soul-Led Women',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enlightened Beauty - Sacred Style for Soul-Led Women',
    description: 'Where inner light meets outer expression. Discover your soul archetype and align your style with your essence.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
