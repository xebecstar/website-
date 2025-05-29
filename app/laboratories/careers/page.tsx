export default function LaboratoriesCareersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Careers</h1>
        <p className="text-lg text-gray-700 mb-8">
          Join our team of world-class researchers and help shape the future of science at Xebecstar Laboratories.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Cutting-Edge Research</h3>
              <p className="text-gray-700">
                Work on groundbreaking projects at the forefront of science, with access to state-of-the-art facilities
                and equipment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Collaborative Environment</h3>
              <p className="text-gray-700">
                Join a diverse community of brilliant minds from around the world, fostering innovation through
                collaboration.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Research Freedom</h3>
              <p className="text-gray-700">
                Pursue your scientific interests with the freedom to explore new ideas and push boundaries.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Global Impact</h3>
              <p className="text-gray-700">
                Contribute to discoveries that advance human knowledge and solve global challenges.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>

        <div className="space-y-6 mb-12">
          {/* Quantum Research Scientist */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Senior Quantum Research Scientist</h3>
                <p className="text-gray-600 mb-4">Zurich, Switzerland (On-site)</p>
                <p className="text-gray-700 mb-4">
                  Lead research in quantum computing algorithms and quantum error correction, working with our
                  state-of-the-art quantum processors and simulators.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Quantum Physics
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    PhD Required
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* AI Research Scientist */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">AI Research Scientist - Machine Learning</h3>
                <p className="text-gray-600 mb-4">Cambridge, MA (Hybrid)</p>
                <p className="text-gray-700 mb-4">
                  Develop next-generation AI algorithms and neural architectures, focusing on explainable AI and
                  advanced machine learning techniques.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Artificial Intelligence
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    PhD Preferred
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Biotechnology Researcher */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Principal Biotechnology Researcher</h3>
                <p className="text-gray-600 mb-4">San Diego, CA (On-site)</p>
                <p className="text-gray-700 mb-4">
                  Lead innovative research in synthetic biology and gene editing technologies, developing novel
                  therapeutic approaches and biotechnology applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Biotechnology
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    10+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded transition-colors"
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
