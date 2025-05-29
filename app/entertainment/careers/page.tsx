export default function EntertainmentCareersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Careers</h1>
        <p className="text-lg text-gray-700 mb-8">
          Join our creative team and help shape the future of entertainment at Xebecstar Entertainment.
        </p>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Creative Freedom</h3>
              <p className="text-gray-700">
                Work in an environment that encourages creative expression and innovative thinking.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Cutting-Edge Technology</h3>
              <p className="text-gray-700">
                Access to the latest tools and technologies in film, gaming, and digital media production.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-700">Create content that reaches and impacts audiences around the world.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Collaborative Culture</h3>
              <p className="text-gray-700">Work alongside talented creatives, technologists, and industry veterans.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>

        <div className="space-y-6 mb-12">
          {/* Game Designer */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Senior Game Designer</h3>
                <p className="text-gray-600 mb-4">Los Angeles, CA (Hybrid)</p>
                <p className="text-gray-700 mb-4">
                  Design engaging gameplay mechanics and systems for our upcoming AAA game titles, collaborating with
                  artists, programmers, and narrative designers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Game Development
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    5+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* VFX Artist */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">VFX Artist</h3>
                <p className="text-gray-600 mb-4">Vancouver, BC (On-site)</p>
                <p className="text-gray-700 mb-4">
                  Create stunning visual effects for film and television productions, working with the latest VFX
                  software and technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Visual Effects
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    3+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Content Producer */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Digital Content Producer</h3>
                <p className="text-gray-600 mb-4">New York, NY (Remote Available)</p>
                <p className="text-gray-700 mb-4">
                  Develop and produce engaging digital content for our streaming platforms, overseeing projects from
                  concept to delivery.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Content Production
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    4+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded transition-colors"
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
