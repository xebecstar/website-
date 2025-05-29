"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronRight, MapPin } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

const divisions = [
  {
    id: "technologies",
    name: "Xebecstar Technologies",
    description: "Cutting-edge technology solutions and innovation",
    url: "/technologies",
  },
  {
    id: "entertainment",
    name: "Xebecstar Entertainment",
    description: "Media, gaming, and entertainment experiences",
    url: "/entertainment",
  },
  {
    id: "dynamics",
    name: "Xebecstar Dynamics",
    description: "Advanced engineering and dynamic systems",
    url: "/dynamics",
  },
  {
    id: "chemicals",
    name: "Xebecstar Chemicals",
    description: "Chemical research and manufacturing solutions",
    url: "/chemicals",
  },
  {
    id: "infrastructures",
    name: "Xebecstar Infrastructures",
    description: "Infrastructure development and construction",
    url: "/infrastructures",
  },
  {
    id: "security",
    name: "Xebecstar Security",
    description: "Comprehensive security and protection services",
    url: "/security",
  },
  {
    id: "enterprises",
    name: "Xebecstar Enterprises",
    description: "Business solutions and enterprise services",
    url: "/enterprises",
  },
  {
    id: "shipping",
    name: "Xebecstar Shipping",
    description: "Global logistics and shipping solutions",
    url: "/shipping",
  },
  {
    id: "health",
    name: "Xebecstar Health",
    description: "Healthcare and medical technology solutions",
    url: "/health",
  },
  {
    id: "laboratories",
    name: "Xebecstar Laboratories",
    description: "Research and development laboratories",
    url: "/laboratories",
  },
  {
    id: "industries",
    name: "Xebecstar Industries",
    description: "Industrial manufacturing and production",
    url: "/industries",
  },
  {
    id: "institutes",
    name: "Xebecstar Institutes",
    description: "Educational and training institutions",
    url: "/institutes",
  },
]

export function XebecstarHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDivision, setActiveDivision] = useState(divisions[0].id)
  const pathname = usePathname()

  // Determine current division based on URL path
  useEffect(() => {
    const currentDivision = divisions.find((div) => pathname.includes(div.id))
    if (currentDivision) {
      setActiveDivision(currentDivision.id)
    }
  }, [pathname])

  const handleDivisionClick = (divisionId: string) => {
    setActiveDivision(divisionId)
  }

  const currentDivision = divisions.find((div) => div.id === activeDivision) || divisions[0]

  // Check if we're currently on a division page
  const isOnDivisionPage = divisions.some((div) => pathname.includes(div.id))

  return (
    <div className="relative">
      {/* Header Bar */}
      <div className="bg-black text-white px-4 py-2">
        <div className="flex justify-start items-center">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              onMouseEnter={() => setIsOpen(true)}
              className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
            >
              <span>XEBECSTAR</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Full-width Mega Menu Dropdown */}
            {isOpen && (
              <div
                className="fixed left-0 right-0 top-[36px] bg-gray-100 shadow-2xl z-50"
                onMouseLeave={() => setIsOpen(false)}
              >
                <div className="container mx-auto">
                  <div className="flex">
                    {/* Left Sidebar - Division Categories */}
                    <div className="w-64 bg-gray-200 border-r border-gray-300">
                      <div className="p-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Our Businesses</h3>
                        <div className="space-y-1">
                          {divisions.map((division) => (
                            <div
                              key={division.id}
                              onClick={() => handleDivisionClick(division.id)}
                              className={`text-sm px-3 py-2 rounded cursor-pointer transition-colors duration-150 flex items-center justify-between ${
                                activeDivision === division.id
                                  ? "bg-white text-gray-900 font-medium"
                                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                              }`}
                            >
                              <div className="flex items-center">
                                {pathname.includes(division.id) && <MapPin className="w-3 h-3 text-green-600 mr-1" />}
                                <span>{division.name.replace("Xebecstar ", "")}</span>
                              </div>
                              {activeDivision === division.id && <ChevronRight className="w-3 h-3" />}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Content Area - Division Details */}
                    <div className="flex-1 p-6">
                      <div className="animate-fadeIn transition-all duration-300">
                        {/* Division Title */}
                        <div className="mb-6">
                          <h3 className="text-xl font-bold text-gray-900">{currentDivision.name}</h3>
                        </div>

                        {/* Overview Card Only */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                          <Link href={currentDivision.url} className="block group" onClick={() => setIsOpen(false)}>
                            <div
                              className={`p-4 rounded-md transition-colors duration-200 ${
                                pathname === currentDivision.url
                                  ? "bg-blue-50 border border-blue-200"
                                  : "hover:bg-gray-50"
                              }`}
                            >
                              <div className="flex items-start">
                                <div>
                                  <h4 className="text-base font-medium text-gray-900 group-hover:text-blue-600 flex items-center">
                                    Overview <ChevronRight className="w-4 h-4 ml-1 text-green-600" />
                                  </h4>
                                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                                    {currentDivision.description}
                                  </p>
                                  {pathname === currentDivision.url && (
                                    <div className="mt-2 text-xs text-green-600 flex items-center">
                                      <MapPin className="w-3 h-3 mr-1" /> You are here
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
