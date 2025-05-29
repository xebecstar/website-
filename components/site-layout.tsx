"use client"

import type React from "react"
import { XebecstarHeader } from "./xebecstar-header"
import { BusinessNav } from "./business-nav"
import { usePathname } from "next/navigation"

interface SiteLayoutProps {
  children: React.ReactNode
}

const getBusinessInfo = (pathname: string) => {
  const segments = pathname.split("/").filter(Boolean)
  if (segments.length === 0) return null

  const businessId = segments[0]

  const businessMap: Record<string, string> = {
    technologies: "Xebecstar Technologies",
    entertainment: "Xebecstar Entertainment",
    dynamics: "Xebecstar Dynamics",
    chemicals: "Xebecstar Chemicals",
    infrastructures: "Xebecstar Infrastructures",
    security: "Xebecstar Security",
    enterprises: "Xebecstar Enterprises",
    shipping: "Xebecstar Shipping",
    health: "Xebecstar Health", // Updated from "medical" to "health"
    laboratories: "Xebecstar Laboratories",
    industries: "Xebecstar Industries",
    institutes: "Xebecstar Institutes",
    group: "Xebecstar Group",
  }

  const businessName = businessMap[businessId] || ""

  return businessName ? { businessId, businessName } : null
}

export function SiteLayout({ children }: SiteLayoutProps) {
  const pathname = usePathname() || ""
  const businessInfo = getBusinessInfo(pathname)

  return (
    <div className="min-h-screen flex flex-col">
      <XebecstarHeader />
      {businessInfo && <BusinessNav businessName={businessInfo.businessName} businessId={businessInfo.businessId} />}
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© 2023 Xebecstar Group. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
