import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.title,
    template: "%s",
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.business.name }],
  applicationName: siteConfig.business.name,
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.business.name,
    locale: siteConfig.seo.locale,
    type: "website",
    images: [
      {
        url: siteConfig.business.poster.src,
        width: siteConfig.business.poster.width,
        height: siteConfig.business.poster.height,
        alt: siteConfig.business.poster.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.business.poster.src],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0d0f12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const { business, seo } = siteConfig;

  // Schema.org Structured Data pour le référencement local (Local SEO)
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${seo.siteUrl}/#garage`,
    name: business.name,
    legalName: business.legalName,
    slogan: business.slogan,
    image: `${seo.siteUrl}${business.poster.src}`,
    logo: `${seo.siteUrl}${business.logo.src}`,
    telephone: business.phoneRaw,
    email: business.email,
    url: seo.siteUrl,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      postalCode: business.address.postalCode,
      addressRegion: business.address.region,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: { "@type": "City", name: "Bergerac" },
    sameAs: [business.tiktok],
    openingHoursSpecification: business.openingHoursSchema.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
  };

  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
        />
        {children}
      </body>
    </html>
  );
}
