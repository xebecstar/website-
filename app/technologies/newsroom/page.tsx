export default function TechnologiesNewsroomPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Newsroom</h1>
        <p className="text-lg text-gray-700 mb-8">
          Stay up to date with the latest news, announcements, and insights from Xebecstar Technologies.
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
                Blog
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
                    <span>May 15, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Xebecstar Technologies Announces New Quantum Computing Initiative
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Xebecstar Technologies today announced a major investment in quantum computing research and
                    development, aiming to accelerate the commercialization of quantum technologies.
                  </p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
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
                    <span>Blog</span>
                    <span className="mx-2">•</span>
                    <span>April 28, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">The Future of Cloud Computing: Trends to Watch in 2023</h3>
                  <p className="text-gray-700 mb-4">
                    Our experts share insights on the emerging trends in cloud computing that are set to reshape the
                    technology landscape in the coming year.
                  </p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
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
                    <span>March 10, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Xebecstar Technologies Partners with Global Financial Institution
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Xebecstar Technologies announces a strategic partnership with a leading global financial institution
                    to develop next-generation fintech solutions.
                  </p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
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
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded transition-colors"
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
