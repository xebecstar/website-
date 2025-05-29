export default function DynamicsCareersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Careers</h1>
        <p className="text-lg text-gray-700 mb-8">
          Join our team of innovators and help shape the future of dynamic systems at Xebecstar Dynamics.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Engineering Excellence</h3>
              <p className="text-gray-700">
                Work alongside world-class engineers on cutting-edge dynamic systems and technologies.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Innovation Culture</h3>
              <p className="text-gray-700">
                Be part of a team that's constantly pushing the boundaries of what's possible in engineering.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Global Impact</h3>
              <p className="text-gray-700">
                Our technologies are deployed worldwide in aerospace, defense, and industrial applications.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-700">
                Continuous learning opportunities and clear paths for advancement in a dynamic field.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>

        <div className="space-y-6 mb-12">
          {/* Aerospace Engineer */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Senior Aerospace Engineer</h3>
                <p className="text-gray-600 mb-4">Seattle, WA (On-site)</p>
                <p className="text-gray-700 mb-4">
                  Design and develop advanced propulsion systems and aerodynamic components for next-generation
                  aerospace applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Full-time</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Aerospace Engineering
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    8+ Years Experience
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

          {/* Robotics Engineer */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Robotics Systems Engineer</h3>
                <p className="text-gray-600 mb-4">Boston, MA (Hybrid)</p>
                <p className="text-gray-700 mb-4">
                  Develop control systems and mechanical designs for advanced robotic platforms, focusing on autonomy
                  and precision movement.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Full-time</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Robotics Engineering
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

          {/* Software Engineer */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Embedded Systems Software Engineer</h3>
                <p className="text-gray-600 mb-4">Austin, TX (On-site)</p>
                <p className="text-gray-700 mb-4">
                  Develop real-time software for embedded control systems in autonomous vehicles and robotic platforms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Full-time</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Software Engineering
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
