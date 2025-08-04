import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Etienne METOEVI - Développeur Fullstack Web & Mobile | Portfolio",
    template: "%s | E.Dev",
  },
  description:
    "Développeur Fullstack basé au Bénin, spécialisé en Next.js, Laravel, Flutter et Firebase. Je transforme vos idées en solutions digitales innovantes.",
  keywords: [
    "développeur fullstack",
    "développeur web",
    "développeur mobile",
    "Next.js",
    "Laravel",
    "Flutter",
    "Firebase",
    "TypeScript",
    "React",
    "Bénin",
    "freelance",
    "portfolio",
  ],
  authors: [{ name: "Etienne METOEVI", url: "https://etienne.dev" }],
  creator: "Etienne METOEVI",
  publisher: "E.Dev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://etienne.dev"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/fr",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://etienne.dev",
    title: "EDev - Développeur Fullstack Web & Mobile",
    description:
      "Développeur Fullstack basé au Bénin, spécialisé en Next.js, Laravel, Flutter et Firebase. Je transforme vos idées en solutions digitales innovantes.",
    siteName: "E.Dev",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Etienne METOEVI - Développeur Fullstack Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etienne METOEVI - Développeur Fullstack Web & Mobile",
    description: "Développeur Fullstack basé au Bénin. Next.js, Laravel, Django, Flutter, Firebase.",
    images: ["/og-image.jpg"],
    creator: "@etienne_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
