export default function HealthCareersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Careers</h1>
        <p className="text-lg text-gray-700 mb-8">
          Join our team of healthcare innovators and help shape the future of medicine at Xebecstar Health.
        </p>

        <div className="bg-teal-50 border border-teal-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Meaningful Impact</h3>
              <p className="text-gray-700">
                Develop technologies and solutions that directly improve patient care and health outcomes worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Innovation Culture</h3>
              <p className="text-gray-700">
                Work in an environment that encourages creative thinking and breakthrough approaches to healthcare
                challenges.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Collaborative Teams</h3>
              <p className="text-gray-700">
                Join multidisciplinary teams of scientists, engineers, clinicians, and business professionals.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Professional Growth</h3>
              <p className="text-gray-700">
                Access continuous learning opportunities and clear paths for advancement in the healthcare technology
                sector.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>

        <div className="space-y-6 mb-12">
          {/* Medical Device Engineer */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Senior Medical Device Engineer</h3>
                <p className="text-gray-600 mb-4">Minneapolis, MN (On-site)</p>
                <p className="text-gray-700 mb-4">
                  Design and develop innovative medical devices that meet clinical needs while ensuring regulatory
                  compliance and manufacturability.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">Full-time</span>
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Medical Devices
                  </span>
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    7+ Years Experience
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

          {/* Clinical Research Scientist */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Clinical Research Scientist</h3>
                <p className="text-gray-600 mb-4">Boston, MA (Hybrid)</p>
                <p className="text-gray-700 mb-4">
                  Design and conduct clinical studies to evaluate the safety and efficacy of our medical technologies
                  and pharmaceutical products.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">Full-time</span>
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Clinical Research
                  </span>
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    PhD Required
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

          {/* Digital Health Product Manager */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2">Digital Health Product Manager</h3>
                <p className="text-gray-600 mb-4">San Francisco, CA (Remote Available)</p>
                <p className="text-gray-700 mb-4">
                  Lead the development and launch of innovative digital health platforms and telehealth solutions from
                  concept to market.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">Full-time</span>
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Product Management
                  </span>
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    5+ Years Experience
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
