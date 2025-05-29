export default function EnterprisesCareersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Careers</h1>
        <p className="text-lg text-gray-700 mb-8">
          Join our team of business experts and help transform organizations at Xebecstar Enterprises.
        </p>

        <div className="bg-teal-50 border border-teal-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Impactful Work</h3>
              <p className="text-gray-700">
                Help transform businesses across industries, driving meaningful change and measurable results.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Professional Growth</h3>
              <p className="text-gray-700">
                Access exceptional learning opportunities, mentorship, and clear paths for career advancement.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Global Exposure</h3>
              <p className="text-gray-700">
                Work with diverse clients across industries and regions, gaining broad business experience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Collaborative Culture</h3>
              <p className="text-gray-700">
                Join a team that values diverse perspectives, teamwork, and knowledge sharing.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>

        <div className="space-y-6 mb-12">
          {/* Management Consultant */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Senior Management Consultant</h3>
                <p className="text-gray-600 mb-4">New York, NY (Hybrid)</p>
                <p className="text-gray-700 mb-4">
                  Lead strategic consulting engagements for Fortune 500 clients, developing and implementing solutions
                  to complex business challenges.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">Full-time</span>
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Consulting
                  </span>
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    8+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-teal-600 hover:bg-teal-700 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Digital Transformation Specialist */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Digital Transformation Specialist</h3>
                <p className="text-gray-600 mb-4">London, UK (Hybrid)</p>
                <p className="text-gray-700 mb-4">
                  Help clients leverage digital technologies to transform business operations, enhance customer
                  experiences, and develop new business models.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">Full-time</span>
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Digital Strategy
                  </span>
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    6+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-teal-600 hover:bg-teal-700 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Business Process Analyst */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Business Process Analyst</h3>
                <p className="text-gray-600 mb-4">Singapore (On-site)</p>
                <p className="text-gray-700 mb-4">
                  Analyze and optimize business processes for clients in the APAC region, identifying inefficiencies and
                  implementing improvements.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">Full-time</span>
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Process Optimization
                  </span>
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    4+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-teal-600 hover:bg-teal-700 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded transition-colors"
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
