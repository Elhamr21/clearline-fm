import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const siteUrl = 'https://clearline-fm.de'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ClearLine F.M. — Professionelles Facility Management',
    template: '%s | ClearLine F.M.',
  },
  description:
    'ClearLine F.M. bietet professionelle Reinigung, Objektbetreuung und Facility Management für private und gewerbliche Immobilien – zuverlässig, gründlich und aus einer Hand.',
  keywords: [
    'Facility Management',
    'Gebäudereinigung',
    'Hausmeisterservice',
    'Objektbetreuung',
    'Fensterreinigung',
    'Gartenpflege',
    'Büroreinigung',
    'ClearLine',
  ],
  authors: [{ name: 'ClearLine F.M.' }],
  creator: 'ClearLine F.M.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: siteUrl,
    title: 'ClearLine F.M. — Professionelles Facility Management',
    description:
      'Professionelle Reinigung, Objektbetreuung und Facility Management für private und gewerbliche Immobilien – zuverlässig, gründlich und aus einer Hand.',
    siteName: 'ClearLine F.M.',
    images: [{ url: '/clearline-logo.jpg', width: 733, height: 733, alt: 'ClearLine F.M.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClearLine F.M. — Professionelles Facility Management',
    description:
      'Professionelle Reinigung, Objektbetreuung und Facility Management für private und gewerbliche Immobilien.',
    images: ['/clearline-logo.jpg'],
  },
  icons: {
    icon: '/clearline-logo.jpg',
    apple: '/clearline-logo.jpg',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0f2438',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': siteUrl,
  name: 'ClearLine F.M.',
  description:
    'Professionelle Reinigung, Objektbetreuung und Facility Management für private und gewerbliche Immobilien.',
  url: siteUrl,
  telephone: '048477782',
  email: 'Sofian.sahiti@clearline-cc.de',
  founder: { '@type': 'Person', name: 'Sofian Sahiti' },
  areaServed: 'DE',
  priceRange: '€€',
  image: `${siteUrl}/clearline-logo.jpg`,
  makesOffer: [
    'Haus- und Wohnungsreinigung',
    'Büro- und Gebäudereinigung',
    'Fensterreinigung',
    'Rasenmähen und Grundstückspflege',
    'Garten- und Grünflächenpflege',
    'Pflege und Reinigung von Außenanlagen',
    'Hausmeisterservice',
    'Allgemeine Objektbetreuung',
  ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${manrope.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
