import Link from "next/link"
import { ChevronRight } from "lucide-react"

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
    id: "medical",
    name: "Xebecstar Medical",
    description: "Healthcare and medical technology solutions",
    url: "/medical",
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
  {
    id: "group",
    name: "Xebecstar Group",
    description: "Corporate headquarters and group services",
    url: "/group",
  },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Xebecstar</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our diverse portfolio of businesses spanning multiple industries and sectors
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {divisions.map((division) => (
          <Link key={division.id} href={division.url} className="group">
            <div className="bg-white border border-gray-200 rounded-lg p-6 h-full hover:shadow-lg transition-shadow duration-200">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {division.name}
              </h2>
              <p className="text-gray-600">{division.description}</p>
              <div className="mt-4 text-blue-600 font-medium text-sm flex items-center">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
