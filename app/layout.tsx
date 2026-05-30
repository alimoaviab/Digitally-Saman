import type { Metadata } from 'next';
import { Poppins, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Digitally Saman | Digital Marketing Strategist & Growth Partner',
  description: 'I transform digital presence into measurable business growth through psychology-driven marketing strategies and data-backed execution.',
  keywords: [
    'Digital Marketing Strategist',
    'Psychology Driven Marketing',
    'Meta Ads Specialist',
    'Google Ads Campaign Manager',
    'Shopify Store Optimizer',
    'B2B Lead Generation',
    'Digitally Saman',
    'Saman Marketing',
    'Rawalpindi Digital Strategist',
  ],
  authors: [{ name: 'Digitally Saman' }],
  creator: 'Digitally Saman',
  metadataBase: new URL('https://digitallysaman.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://digitallysaman.com',
    title: 'Digitally Saman | Digital Marketing Strategist',
    description: 'Transforming digital presence into measurable business growth through psychology-driven marketing strategies and data-backed execution.',
    siteName: 'Digitally Saman Portfolio',
    images: [
      {
        url: '/branding_artwork.png',
        width: 1200,
        height: 630,
        alt: 'Digitally Saman | Psychology-Driven Digital Marketing Strategist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digitally Saman | Digital Marketing Strategist',
    description: 'Data-backed performance marketing and customer behavior funnel optimization.',
    images: ['/branding_artwork.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="min-h-screen text-white bg-[#03001e] antialiased">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
