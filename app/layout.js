import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.business.name }],
  metadataBase: new URL(siteConfig.seo.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.business.name,
    locale: siteConfig.seo.locale,
    type: "website",
    images: [
      {
        url: siteConfig.hero.image.src,
        width: siteConfig.hero.image.width,
        height: siteConfig.hero.image.height,
        alt: siteConfig.hero.image.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.hero.image.src],
  },
};

export default function RootLayout({ children }) {
  // Schema.org Structured Data pour le référencement local (Local SEO)
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.business.name,
    legalName: siteConfig.business.legalName,
    image: `${siteConfig.seo.siteUrl}${siteConfig.hero.image.src}`,
    telephone: siteConfig.business.phoneRaw,
    email: siteConfig.business.email,
    url: siteConfig.seo.siteUrl,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address.street,
      addressLocality: siteConfig.business.address.city,
      postalCode: siteConfig.business.address.postalCode,
      addressRegion: siteConfig.business.address.region,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.business.geo.latitude,
      longitude: siteConfig.business.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:30",
        closes: "13:00",
      },
    ],
  };

  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
