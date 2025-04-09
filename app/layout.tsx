import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohammed Mutlak Camp - Wadi Rum Desert Experiences",
  description:
    "Experience the breathtaking beauty of Wadi Rum with our guided tours, jeep rides, camel treks, and luxury camping. Book your unforgettable desert adventure today!",
  keywords: [
    "Wadi Rum",
    "desert tours",
    "Jordan tourism",
    "camel rides",
    "jeep tours",
    "desert camping",
    "Bedouin experience",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.wadirum.org",
    title: "Mohammed Mutlak Camp - Wadi Rum Desert Experiences",
    description:
      "Experience the breathtaking beauty of Wadi Rum with our guided tours, jeep rides, camel treks, and luxury camping.",
    siteName: "Mohammed Mutlak Camp",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppChat />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LEHNWW2X02" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LEHNWW2X02');
        `}
        </Script>
      </body>
    </html>
  )
}
