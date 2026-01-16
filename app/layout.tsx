import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://epik-100.com'),
  title: {
    default: "EPIK 100 | Honoring Africa’s Emerging Young Leaders",
    template: "%s | EPIK 100",
  },
 description:
    "EPIK 100 is a pan-African recognition program by EPIK Leaders, celebrating 100 young African leaders selected for their community engagement, leadership potential, and commitment to driving positive impact across the continent.",
  keywords: [
    "EPIK 100",
    "EPIK Leaders",
    "African Youth Leadership",
    "Young African Leaders",
    "Pan-African Program",
    "Youth Engagement Africa",
    "Community Leadership",
    "Social Impact Africa",
    "Emerging Leaders",
    "African Changemakers",
    "Youth Recognition Program",
    "Leadership Development Africa",
    "Civic Engagement",
    "Africa Youth Network",
    "EPIK Leaders Clubs",
  ],

  authors: [{ name: "EPIK Leaders" }],
  creator: "EPIK Leaders",
  publisher: "EPIK Leaders",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://epik-100.com",
    title: "EPIK 100 | Honoring Africa’s Emerging Young Leaders",
    description:
      "EPIK 100 is a pan-African recognition program by EPIK Leaders, celebrating 100 young African leaders selected for their engagement, leadership potential, and commitment to driving positive impact across the continent.",
    siteName: "EPIK 100",
    images: [
      {
        url: "/hero.jpg",
        width: 1800,
        height: 900,
        alt: "EPIK 100 – Pan-African Recognition Program by EPIK Leaders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EPIK 100 | Honoring Africa’s Emerging Young Leaders",
    description:
      "EPIK 100 is a pan-African recognition program by EPIK Leaders, celebrating 100 young African leaders for their engagement, leadership potential, and positive impact across Africa.",
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
    canonical: 'https://epik-100.com',
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
    "name": "EPIK 100 – Pan-African Recognition of Young Leaders",
    "description":
      "EPIK 100 is a pan-African recognition program by EPIK Leaders honoring 100 young African leaders selected for their community engagement, leadership potential, and commitment to positive impact across the continent.",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Morocco",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "MA"
      }
    },
    "image": [
      "https://epik-100.com/hero.jpg"
    ],
    "organizer": {
      "@type": "Organization",
      "name": "EPIK Leaders",
      "url": "https://epikleaders.org",
      "email": "info@epikleaders.org"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
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
