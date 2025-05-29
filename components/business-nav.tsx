"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface BusinessNavProps {
  businessName: string
  businessId: string
}

export function BusinessNav({ businessName, businessId }: BusinessNavProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === `/${businessId}${path}`
  }

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-14">
          {/* Left side - Logo and Business Name */}
          <div className="flex items-center space-x-4 mr-8">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs">
              {businessName.charAt(0)}
            </div>
            <span className="font-bold uppercase tracking-wide">{businessName}</span>
          </div>

          {/* Center - Navigation */}
          <nav className="flex items-center space-x-6">
            <Link
              href={`/${businessId}`}
              className={`text-sm transition-colors ${
                isActive("") ? "text-white font-medium" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              Overview
            </Link>
            <Link
              href={`/${businessId}/leadership`}
              className={`text-sm transition-colors ${
                isActive("/leadership") ? "text-white font-medium" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              Leadership
            </Link>
            <Link
              href={`/${businessId}/careers`}
              className={`text-sm transition-colors ${
                isActive("/careers") ? "text-white font-medium" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              Careers
            </Link>
            <Link
              href={`/${businessId}/newsroom`}
              className={`text-sm transition-colors ${
                isActive("/newsroom") ? "text-white font-medium" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              Newsroom
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
