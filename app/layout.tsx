import type React from "react"
import type { Metadata } from "next"
import { Rethink_Sans } from "next/font/google"
import "./globals.css"
import Response from "@/components/Home/Nav/Response"
import Footer from "@/components/Home/Footer/Footer"

const font = Rethink_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-rethink-sans", // Added variable for proper Tailwind integration
})

export const metadata: Metadata = {
  title: "FortronX - Advanced Technology Solutions",
  description: "FortronX provides cutting-edge technology solutions and innovative services for modern businesses.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={font.variable}>
      <body className={`${font.className} antialiased`}>
        <Response />
        {children}
        <Footer />
      </body>
    </html>
  )
}
