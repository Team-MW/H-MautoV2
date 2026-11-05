import { siteConfig } from "@/lib/site";

export default function sitemap() {
  const base = siteConfig.seo.siteUrl;
  const pages = [
    { path: "", priority: 1 },
    { path: "/prestations", priority: 0.9 },
    { path: "/depannage-domicile", priority: 0.9 },
    { path: "/vente-achat-reprise", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/a-propos", priority: 0.6 },
    { path: "/mentions-legales", priority: 0.2 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
