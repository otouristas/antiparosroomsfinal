import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LodgingSchema from '@/lib/schema/lodging-schema'
import LocalBusinessSchema from '@/lib/schema/local-business-schema'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Antiparos Rooms | Sea View Apartments in Antiparos',
  description: 'Book Antiparos Rooms – Sea view apartments with modern amenities in Antiparos. Stay near top beaches, enjoy offers, rentals & transfers. Book now!',
  keywords: 'Antiparos Rooms, Sea view apartments Antiparos, Antiparos accommodation, Antiparos hotels, Antiparos apartments, Antiparos rentals, Paros hotels',
  alternates: {
    canonical: 'https://antiparosrooms.com',
  },
  openGraph: {
    title: 'Antiparos Rooms | Sea View Apartments in Antiparos',
    description: 'Book Antiparos Rooms – Sea view apartments with modern amenities in Antiparos. Stay near top beaches, enjoy offers, rentals & transfers. Book now!',
    url: 'https://antiparosrooms.com',
    siteName: 'Antiparos Rooms',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <LodgingSchema />
        <LocalBusinessSchema />
      </body>
    </html>
  )
}
