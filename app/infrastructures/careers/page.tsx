export default function InfrastructuresCareersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Careers</h1>
        <p className="text-lg text-gray-700 mb-8">
          Join our team and help build the infrastructure that shapes the world at Xebecstar Infrastructures.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Iconic Projects</h3>
              <p className="text-gray-700">
                Work on landmark infrastructure projects that define skylines and transform communities worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Global Opportunities</h3>
              <p className="text-gray-700">
                Join projects across six continents and experience diverse cultures and construction challenges.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Career Development</h3>
              <p className="text-gray-700">
                Advance your career through mentorship, training programs, and exposure to complex projects.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Innovation Culture</h3>
              <p className="text-gray-700">
                Be part of a team that embraces new technologies and innovative construction methods.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>

        <div className="space-y-6 mb-12">
          {/* Project Manager */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Senior Project Manager - Urban Development</h3>
                <p className="text-gray-600 mb-4">Dubai, UAE (On-site)</p>
                <p className="text-gray-700 mb-4">
                  Lead large-scale urban development projects from conception to completion, managing multidisciplinary
                  teams and ensuring project success.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Project Management
                  </span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    10+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-orange-600 hover:bg-orange-700 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Structural Engineer */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Lead Structural Engineer</h3>
                <p className="text-gray-600 mb-4">London, UK (Hybrid)</p>
                <p className="text-gray-700 mb-4">
                  Design and analyze complex structural systems for high-rise buildings and major infrastructure
                  projects using advanced engineering software.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Engineering
                  </span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    8+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-orange-600 hover:bg-orange-700 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Sustainability Manager */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Sustainability Manager</h3>
                <p className="text-gray-600 mb-4">Singapore (On-site)</p>
                <p className="text-gray-700 mb-4">
                  Drive sustainable construction practices and green building certifications across our Asia-Pacific
                  infrastructure projects.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Sustainability
                  </span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    5+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-orange-600 hover:bg-orange-700 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded transition-colors"
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
