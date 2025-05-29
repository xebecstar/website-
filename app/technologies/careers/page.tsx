export default function TechnologiesCareersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Careers</h1>
        <p className="text-lg text-gray-700 mb-8">
          Join our team of innovators and help shape the future of technology at Xebecstar Technologies.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Innovation Culture</h3>
              <p className="text-gray-700">
                Work on cutting-edge technologies and contribute to solutions that are changing the world.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-gray-700">
                Continuous learning and development programs to help you advance your career.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Global Impact</h3>
              <p className="text-gray-700">
                Be part of a team whose work impacts millions of users and businesses worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Inclusive Environment</h3>
              <p className="text-gray-700">
                A diverse and inclusive workplace where all employees are valued and respected.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>

        <div className="space-y-6 mb-12">
          {/* Software Engineer */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Senior Software Engineer</h3>
                <p className="text-gray-600 mb-4">San Francisco, CA (Remote Available)</p>
                <p className="text-gray-700 mb-4">
                  Design, develop, and maintain high-performance software applications using modern technologies and
                  best practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Full-time</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Software Development
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    5+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Data Scientist */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Data Scientist</h3>
                <p className="text-gray-600 mb-4">Boston, MA (Remote Available)</p>
                <p className="text-gray-700 mb-4">
                  Analyze complex data sets to extract insights and develop machine learning models to solve business
                  problems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Full-time</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Data Science
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    3+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Product Manager */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Product Manager</h3>
                <p className="text-gray-600 mb-4">Austin, TX (Remote Available)</p>
                <p className="text-gray-700 mb-4">
                  Lead the development of innovative products from conception to launch, working closely with
                  engineering, design, and marketing teams.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Full-time</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Product Management
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    4+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded transition-colors"
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
