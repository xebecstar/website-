export default function ChemicalsCareersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Careers</h1>
        <p className="text-lg text-gray-700 mb-8">
          Join our team of innovators and help shape the future of chemical science at Xebecstar Chemicals.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Scientific Innovation</h3>
              <p className="text-gray-700">
                Work on cutting-edge chemical research and development that addresses global challenges.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Sustainability Focus</h3>
              <p className="text-gray-700">
                Be part of a company committed to developing sustainable chemical solutions and processes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Global Impact</h3>
              <p className="text-gray-700">
                Our chemical products and solutions are used by industries and consumers worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Professional Development</h3>
              <p className="text-gray-700">
                Continuous learning opportunities and career advancement in a dynamic scientific environment.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>

        <div className="space-y-6 mb-12">
          {/* Research Chemist */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Senior Research Chemist</h3>
                <p className="text-gray-600 mb-4">Houston, TX (On-site)</p>
                <p className="text-gray-700 mb-4">
                  Lead research projects focused on developing new polymer formulations with enhanced properties for
                  industrial applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">R&D</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    PhD Required
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Process Engineer */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Chemical Process Engineer</h3>
                <p className="text-gray-600 mb-4">Chicago, IL (On-site)</p>
                <p className="text-gray-700 mb-4">
                  Design and optimize chemical manufacturing processes to improve efficiency, safety, and
                  sustainability.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Engineering
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    5+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Quality Control Analyst */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Control Analyst</h3>
                <p className="text-gray-600 mb-4">Boston, MA (On-site)</p>
                <p className="text-gray-700 mb-4">
                  Conduct analytical testing to ensure chemical products meet quality specifications and regulatory
                  requirements.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Quality Assurance
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    3+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded transition-colors"
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
