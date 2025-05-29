export default function IndustriesCareersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Careers</h1>
        <p className="text-lg text-gray-700 mb-8">
          Join our team of manufacturing professionals and help build the products that power the global economy at
          Xebecstar Industries.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Advanced Manufacturing</h3>
              <p className="text-gray-700">
                Work with cutting-edge production technologies, robotics, and smart manufacturing systems.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Global Operations</h3>
              <p className="text-gray-700">
                Join a team with manufacturing facilities across multiple continents, offering diverse experiences and
                career paths.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Innovation Culture</h3>
              <p className="text-gray-700">
                Contribute to continuous improvement and technological innovation in industrial production.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Sustainable Impact</h3>
              <p className="text-gray-700">
                Be part of our commitment to environmentally responsible manufacturing practices.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>

        <div className="space-y-6 mb-12">
          {/* Manufacturing Engineer */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Senior Manufacturing Engineer</h3>
                <p className="text-gray-600 mb-4">Detroit, MI (On-site)</p>
                <p className="text-gray-700 mb-4">
                  Design, implement, and optimize manufacturing processes for automotive components, focusing on
                  efficiency, quality, and automation integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                  <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Engineering
                  </span>
                  <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    8+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-slate-700 hover:bg-slate-800 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Robotics Specialist */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Industrial Robotics Specialist</h3>
                <p className="text-gray-600 mb-4">Stuttgart, Germany (On-site)</p>
                <p className="text-gray-700 mb-4">
                  Implement and optimize robotic systems in manufacturing environments, focusing on programming,
                  integration, and maintenance of industrial robots.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                  <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Robotics
                  </span>
                  <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    5+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-slate-700 hover:bg-slate-800 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Quality Control Manager */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Control Manager</h3>
                <p className="text-gray-600 mb-4">Shenzhen, China (On-site)</p>
                <p className="text-gray-700 mb-4">
                  Oversee quality assurance processes for consumer electronics manufacturing, ensuring products meet the
                  highest standards of performance and reliability.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                  <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Quality Assurance
                  </span>
                  <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    7+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-slate-700 hover:bg-slate-800 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center bg-slate-700 hover:bg-slate-800 text-white font-medium px-6 py-3 rounded transition-colors"
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
