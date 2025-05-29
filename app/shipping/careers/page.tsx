export default function ShippingCareersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Careers</h1>
        <p className="text-lg text-gray-700 mb-8">
          Join our global team and help connect the world through maritime excellence at Xebecstar Shipping.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Global Maritime Career</h3>
              <p className="text-gray-700">
                Work with one of the world's largest shipping fleets, gaining experience across international waters and
                ports.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Career Development</h3>
              <p className="text-gray-700">
                Access comprehensive training programs, maritime certifications, and clear paths for advancement at sea
                and on shore.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Cutting-Edge Technology</h3>
              <p className="text-gray-700">
                Work with advanced vessel technologies, digital logistics systems, and innovative shipping solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Sustainable Future</h3>
              <p className="text-gray-700">
                Be part of the transformation toward sustainable shipping and help shape the future of maritime
                transport.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>

        <div className="space-y-6 mb-12">
          {/* Ship Captain */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Container Ship Captain</h3>
                <p className="text-gray-600 mb-4">Global Routes (Sea-based)</p>
                <p className="text-gray-700 mb-4">
                  Command large container vessels on international routes, ensuring safe navigation, crew management,
                  and compliance with maritime regulations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Full-time</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Maritime Operations
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Master's License Required
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-blue-700 hover:bg-blue-800 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Port Operations Manager */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Port Operations Manager</h3>
                <p className="text-gray-600 mb-4">Rotterdam, Netherlands (On-site)</p>
                <p className="text-gray-700 mb-4">
                  Manage port operations at one of Europe's busiest terminals, coordinating vessel arrivals, cargo
                  handling, and logistics operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Full-time</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Port Management
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    7+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-blue-700 hover:bg-blue-800 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Marine Engineer */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Chief Marine Engineer</h3>
                <p className="text-gray-600 mb-4">Global Fleet (Sea-based)</p>
                <p className="text-gray-700 mb-4">
                  Oversee vessel engineering systems, maintenance operations, and technical crew management on our
                  modern fleet of cargo vessels.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Full-time</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Marine Engineering
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Chief Engineer License
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-blue-700 hover:bg-blue-800 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded transition-colors"
          >
            View All Open Positions
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
