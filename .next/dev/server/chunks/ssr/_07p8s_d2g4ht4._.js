module.exports = [
"[project]/app/layout.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/site'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
const metadata = {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    keywords: siteConfig.seo.keywords,
    authors: [
        {
            name: siteConfig.business.name
        }
    ],
    metadataBase: new URL(siteConfig.seo.siteUrl),
    alternates: {
        canonical: "/"
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
                alt: siteConfig.hero.image.alt
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.seo.title,
        description: siteConfig.seo.description,
        images: [
            siteConfig.hero.image.src
        ]
    }
};
function RootLayout({ children }) {
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
            addressCountry: "FR"
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: siteConfig.business.geo.latitude,
            longitude: siteConfig.business.geo.longitude
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                opens: "08:00",
                closes: "19:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "08:30",
                closes: "13:00"
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "fr",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@600;700;800;900&display=swap",
                        rel: "stylesheet"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(schemaOrgData)
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/layout.js",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                children: children
            }, void 0, false, {
                fileName: "[project]/app/layout.js",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/layout.js",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_07p8s_d2g4ht4._.js.map