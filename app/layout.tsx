import type React from "react"
import { SiteLayout } from "@/components/site-layout"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
