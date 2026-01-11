import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://arab-african-summit.com'),
  title: {
    default: "Arab-African Summit 2025 | Non-Profit Financing Conference Rabat",
    template: "%s | Arab-African Summit 2025"
  },
  description: "Join the Arab-African Summit on Non-Profit Financing in Rabat, Morocco on November 20, 2025. Explore innovative funding models, Islamic finance, social impact investment, and sustainable financing solutions for NGOs and charitable organizations across Arab and African regions.",
  keywords: [
    "Arab-African Summit",
    "Non-Profit Financing",
    "NGO Funding",
    "Islamic Finance",
    "Social Impact Investment",
    "Rabat Morocco",
    "Charitable Organizations",
    "Sustainable Financing",
    "Zakat",
    "Waqf",
    "Arab Countries",
    "African Development",
    "EPIK LEADERS",
    "Summit 2025",
    "Non-Profit Conference",
    "Crowdfunding NPO",
    "International Aid"
  ],
  authors: [{ name: "EPIK LEADERS" }],
  creator: "EPIK LEADERS",
  publisher: "EPIK LEADERS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arab-african-summit.com",
    title: "Arab-African Summit 2025 | Non-Profit Financing Conference",
    description: "Join us in Rabat on November 20, 2025 for the Arab-African Summit on Non-Profit Financing. Explore innovative funding models and build resilient solutions for sustainable financing.",
    siteName: "Arab-African Summit",
    images: [
      {
        url: "/hero.jpg",
        width: 1800,
        height: 900,
        alt: "Arab-African Summit on Non-Profit Financing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arab-African Summit 2025 | Non-Profit Financing Conference",
    description: "Join the Arab-African Summit on Non-Profit Financing in Rabat, Morocco - November 20, 2025",
    images: ["/hero.jpg"],
    creator: "@epikleaders",
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
  icons: {
    icon: [
      {
        url: '/favic.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicdark.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/logo.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://arab-african-summit.com',
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Arab-African Summit on Non-Profit Financing",
    "description": "A gathering designed to explore innovative funding models, foster collaboration, and build resilience for non-profits in Arab and African regions.",
    "startDate": "2025-11-20T09:00:00+01:00",
    "endDate": "2025-11-20T18:00:00+01:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Rabat, Morocco",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rabat",
        "addressCountry": "MA"
      }
    },
    "image": [
      "https://arab-african-summit.com/hero.jpg"
    ],
    "organizer": {
      "@type": "Organization",
      "name": "EPIK LEADERS",
      "email": "info@epikleaders.org",
      "telephone": "+212522171538",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Capital Tower, Bd Moulay Abdellah Cherif",
        "addressLocality": "Casablanca",
        "addressCountry": "MA"
      },
      "url": "https://arab-african-summit.com"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://docs.google.com/forms/d/e/1FAIpQLSfcVy1sk4YTa5kO6F3JxU07ID0lDm1AiMn62PNjF_6x3eRYkA/viewform",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    },
    "performer": {
      "@type": "Organization",
      "name": "EPIK LEADERS"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden">
        {children}
        <Footer />
      </body>
    </html>
  );
}
