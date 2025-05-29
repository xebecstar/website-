export default function SecurityCareersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Careers</h1>
        <p className="text-lg text-gray-700 mb-8">
          Join our elite team of security professionals and help protect what matters most at Xebecstar Security.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Mission-Driven Work</h3>
              <p className="text-gray-700">
                Be part of a team dedicated to protecting people, assets, and information in an increasingly complex
                threat landscape.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Elite Training</h3>
              <p className="text-gray-700">
                Access world-class training programs developed by experts from military, law enforcement, and
                intelligence backgrounds.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Global Operations</h3>
              <p className="text-gray-700">
                Opportunity to work on diverse security challenges across different regions, industries, and threat
                environments.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Cutting-Edge Technology</h3>
              <p className="text-gray-700">
                Utilize advanced security technologies, from AI-powered surveillance to next-generation cybersecurity
                tools.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>

        <div className="space-y-6 mb-12">
          {/* Cybersecurity Analyst */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Senior Cybersecurity Analyst</h3>
                <p className="text-gray-600 mb-4">Washington, DC (Hybrid)</p>
                <p className="text-gray-700 mb-4">
                  Monitor, detect, and respond to cyber threats targeting critical infrastructure and sensitive
                  information systems for high-profile clients.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                  <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Cybersecurity
                  </span>
                  <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    7+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-slate-800 hover:bg-slate-900 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Security Operations Manager */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Security Operations Manager</h3>
                <p className="text-gray-600 mb-4">London, UK (On-site)</p>
                <p className="text-gray-700 mb-4">
                  Lead security teams providing executive protection, facility security, and event security for
                  high-profile clients in the EMEA region.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                  <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Physical Security
                  </span>
                  <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    10+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-slate-800 hover:bg-slate-900 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Threat Intelligence Analyst */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Threat Intelligence Analyst</h3>
                <p className="text-gray-600 mb-4">Singapore (Hybrid)</p>
                <p className="text-gray-700 mb-4">
                  Analyze global security threats, develop intelligence reports, and provide strategic insights to
                  inform security operations and client risk assessments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                  <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Intelligence
                  </span>
                  <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    5+ Years Experience
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="bg-slate-800 hover:bg-slate-900 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center bg-slate-800 hover:bg-slate-900 text-white font-medium px-6 py-3 rounded transition-colors"
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
