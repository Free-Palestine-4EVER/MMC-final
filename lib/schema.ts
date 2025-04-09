export interface LocalBusinessSchemaProps {
  name?: string
  description?: string
  url?: string
  telephone?: string
  address?: {
    streetAddress?: string
    addressLocality?: string
    addressRegion?: string
    postalCode?: string
    addressCountry?: string
  }
  geo?: {
    latitude?: number
    longitude?: number
  }
  image?: string
  priceRange?: string
  openingHours?: string[]
}

export function generateLocalBusinessSchema(props: LocalBusinessSchemaProps = {}) {
  const defaultProps = {
    name: "Wadi Rum Adventures",
    description: "Experience the magic of Wadi Rum desert with our authentic Bedouin tours and camps.",
    url: "https://wadirum-adventures.com",
    telephone: "+962 7 9642 8848",
    address: {
      streetAddress: "Wadi Rum Village",
      addressLocality: "Wadi Rum",
      addressRegion: "Aqaba",
      postalCode: "77110",
      addressCountry: "Jordan",
    },
    geo: {
      latitude: 29.5833,
      longitude: 35.4167,
    },
    image: "https://wadirum-adventures.com/images/wadi-rum-hero.jpg",
    priceRange: "$$",
    openingHours: ["Mo-Su 00:00-23:59"],
  }

  // Merge default props with provided props
  const mergedProps = {
    ...defaultProps,
    ...props,
    address: {
      ...defaultProps.address,
      ...props.address,
    },
    geo: {
      ...defaultProps.geo,
      ...props.geo,
    },
  }

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: mergedProps.name,
    description: mergedProps.description,
    url: mergedProps.url,
    telephone: mergedProps.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: mergedProps.address.streetAddress,
      addressLocality: mergedProps.address.addressLocality,
      addressRegion: mergedProps.address.addressRegion,
      postalCode: mergedProps.address.postalCode,
      addressCountry: mergedProps.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: mergedProps.geo.latitude,
      longitude: mergedProps.geo.longitude,
    },
    image: mergedProps.image,
    priceRange: mergedProps.priceRange,
    openingHours: mergedProps.openingHours,
  }
}

interface BlogPostingSchemaProps {
  title: string
  description: string
  url: string
  author: string
  datePublished: string
  dateModified?: string
  image: string
  keywords?: string[]
}

export function generateBlogPostSchema(props: {
  title: string
  description: string
  image: string
  datePublished: string
  author: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: props.title,
    description: props.description,
    url: props.url,
    author: {
      "@type": "Person",
      name: props.author,
    },
    datePublished: props.datePublished,
    dateModified: props.datePublished,
    image: props.image,
    publisher: {
      "@type": "Organization",
      name: "Wadi Rum Adventures",
      logo: {
        "@type": "ImageObject",
        url: "https://wadirum-adventures.com/images/logo.png",
      },
    },
  }
}

interface TourSchemaProps {
  name: string
  description: string
  url: string
  image: string
  price: number
  duration: string
}

export function generateTourSchema(props: TourSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: props.name,
    description: props.description,
    url: props.url,
    image: props.image,
    isAccessibleForFree: false,
    offers: {
      "@type": "Offer",
      price: props.price,
      priceCurrency: "JOD",
    },
    touristType: ["Adventure Travelers", "Nature Lovers", "Photographers"],
    availableLanguage: ["English", "Arabic"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wadi Rum",
      addressRegion: "Aqaba",
      addressCountry: "Jordan",
    },
  }
}

interface FAQSchemaProps {
  questions: {
    question: string
    answer: string
  }[]
}

export function generateFAQSchema(props: FAQSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: props.questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  }
}

interface BlogListingSchemaProps {
  title: string
  description: string
  url: string
  posts: {
    title: string
    excerpt: string
    url: string
    datePublished: string
    image: string
  }[]
}

export function generateBlogListingSchema(props: BlogListingSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    headline: props.title,
    description: props.description,
    url: props.url,
    blogPost: props.posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: post.url,
      datePublished: post.datePublished,
      image: post.image,
    })),
  }
}

export function generateTouristAttractionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Wadi Rum",
    description:
      "Explore the stunning desert landscape of Wadi Rum with our guided tours and authentic Bedouin experiences.",
    url: "https://wadirum-adventures.com",
    image: "https://wadirum-adventures.com/images/wadi-rum-hero.jpg",
    isAccessibleForFree: false,
    touristType: ["Desert", "Nature", "Adventure"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Wadi Rum Village",
      addressLocality: "Wadi Rum",
      addressRegion: "Aqaba",
      addressCountry: "Jordan",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.5833,
      longitude: 35.4167,
    },
    openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
    priceRange: "$$",
  }
}
