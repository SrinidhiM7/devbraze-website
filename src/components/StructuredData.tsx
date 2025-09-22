import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevBraze",
    "alternateName": "DevBraze Technical Community",
    "description": "Premier technical community of School of ECE at REVA University empowering 250+ students through innovative workshops, hackathons, and cutting-edge projects.",
    "url": "https://devbraze.dev",
    "logo": "https://devbraze.dev/DevBraze%20Logo%20Blue%20Border.png",
    "image": "https://devbraze.dev/DevBraze%20Logo%20Blue%20Border.png",
    "email": "devbrazecommunity@gmail.com",
    "foundingDate": "2023",
    "memberOf": {
      "@type": "Organization",
      "name": "REVA University",
      "url": "https://reva.edu.in"
    },
    "location": {
      "@type": "Place",
      "name": "REVA University",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      }
    },
    "sameAs": [
      "https://instagram.com/devbraze_reva",
      "https://linkedin.com/company/devbraze",
      "https://github.com/devbraze"
    ],
    "knowsAbout": [
      "Electronics Engineering",
      "Technical Workshops",
      "Hackathons",
      "Innovation",
      "Student Community",
      "Technology Education",
      "ECE Department",
      "Technical Projects"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technical Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical Workshops",
            "description": "Hands-on workshops covering latest technologies and industry trends"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hackathons",
            "description": "Competitive programming and innovation events"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical Projects",
            "description": "Collaborative projects for skill development"
          }
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DevBraze - Technical Community",
    "description": "Official website of DevBraze, the premier technical community of School of ECE at REVA University",
    "url": "https://devbraze.dev",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://devbraze.dev/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DevBraze",
      "logo": {
        "@type": "ImageObject",
        "url": "https://devbraze.dev/DevBraze%20Logo%20Blue%20Border.png"
      }
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://devbraze.dev"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Events",
        "item": "https://devbraze.dev/events"
      }
    ]
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  )
}