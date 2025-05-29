export default function EnterprisesNewsroomPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Newsroom</h1>
        <p className="text-lg text-gray-700 mb-8">
          Stay up to date with the latest news, announcements, and insights from Xebecstar Enterprises.
        </p>

        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Latest News</h2>
            <div className="flex space-x-2">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded text-sm transition-colors">
                All
              </button>
              <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 px-4 py-2 rounded text-sm transition-colors">
                Press Releases
              </button>
              <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 px-4 py-2 rounded text-sm transition-colors">
                Business Insights
              </button>
            </div>
          </div>

          <div className="space-y-8">
            {/* News Item 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-48 bg-gray-200"></div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>Press Release</span>
                    <span className="mx-2">•</span>
                    <span>June 18, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Xebecstar Enterprises Launches Next-Generation Business Intelligence Platform
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Xebecstar Enterprises today announced the launch of its advanced business intelligence platform,
                    designed to help organizations transform data into actionable insights and strategic advantage.
                  </p>
                  <a href="#" className="text-teal-600 hover:text-teal-800 font-medium inline-flex items-center">
                    Read More
                    <svg
                      className="w-4 h-4 ml-1"
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

            {/* News Item 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-48 bg-gray-200"></div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>Business Insights</span>
                    <span className="mx-2">•</span>
                    <span>May 25, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">The Future of Work: Navigating the Hybrid Workplace</h3>
                  <p className="text-gray-700 mb-4">
                    Our workplace strategy experts explore how organizations can optimize hybrid work models to enhance
                    productivity, employee satisfaction, and organizational resilience.
                  </p>
                  <a href="#" className="text-teal-600 hover:text-teal-800 font-medium inline-flex items-center">
                    Read More
                    <svg
                      className="w-4 h-4 ml-1"
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

            {/* News Item 3 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-48 bg-gray-200"></div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>Press Release</span>
                    <span className="mx-2">•</span>
                    <span>April 10, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Xebecstar Enterprises Expands Global Consulting Practice with New EMEA Headquarters
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Xebecstar Enterprises today announced the opening of its new EMEA headquarters in Frankfurt,
                    Germany, strengthening its ability to serve clients across Europe, the Middle East, and Africa.
                  </p>
                  <a href="#" className="text-teal-600 hover:text-teal-800 font-medium inline-flex items-center">
                    Read More
                    <svg
                      className="w-4 h-4 ml-1"
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
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded transition-colors"
          >
            View All News
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
