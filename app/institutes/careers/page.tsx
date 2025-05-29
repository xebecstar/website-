export default function InstitutesCareersPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Careers at Xebecstar Institutes
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Join our community of scholars, researchers, and innovators dedicated to advancing knowledge and
            transforming education.
          </p>
        </div>

        {/* Why work with us section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Why Work With Us</h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-burgundy-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-burgundy-700 mb-3">Academic Freedom</h4>
              <p className="text-gray-700">
                We foster an environment where intellectual curiosity thrives and researchers have the freedom to pursue
                groundbreaking ideas.
              </p>
            </div>

            <div className="bg-burgundy-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-burgundy-700 mb-3">Global Network</h4>
              <p className="text-gray-700">
                Connect with leading scholars and institutions worldwide through our extensive network of academic and
                research partnerships.
              </p>
            </div>

            <div className="bg-burgundy-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-burgundy-700 mb-3">Cutting-edge Resources</h4>
              <p className="text-gray-700">
                Access state-of-the-art facilities, advanced technologies, and comprehensive research funding to support
                your work.
              </p>
            </div>

            <div className="bg-burgundy-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-burgundy-700 mb-3">Meaningful Impact</h4>
              <p className="text-gray-700">
                Contribute to research and educational initiatives that address real-world challenges and create
                positive societal change.
              </p>
            </div>
          </div>
        </div>

        {/* Current openings */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Current Openings</h3>

          <div className="space-y-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h4 className="text-xl font-semibold text-burgundy-700">
                    Senior Research Fellow - Quantum Computing
                  </h4>
                  <p className="mt-2 text-gray-600">Boston, MA | Full-time</p>
                </div>
                <button className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-burgundy-600 hover:bg-burgundy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-burgundy-500">
                  Apply Now
                </button>
              </div>
              <p className="mt-4 text-gray-700">
                Lead groundbreaking research in quantum computing applications for solving complex societal challenges.
                Ph.D. in Physics, Computer Science, or related field required.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h4 className="text-xl font-semibold text-burgundy-700">Educational Technology Specialist</h4>
                  <p className="mt-2 text-gray-600">Remote | Full-time</p>
                </div>
                <button className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-burgundy-600 hover:bg-burgundy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-burgundy-500">
                  Apply Now
                </button>
              </div>
              <p className="mt-4 text-gray-700">
                Design and implement innovative educational technology solutions to enhance learning experiences across
                our global programs. Experience in EdTech development required.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h4 className="text-xl font-semibold text-burgundy-700">Climate Science Research Director</h4>
                  <p className="mt-2 text-gray-600">London, UK | Full-time</p>
                </div>
                <button className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-burgundy-600 hover:bg-burgundy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-burgundy-500">
                  Apply Now
                </button>
              </div>
              <p className="mt-4 text-gray-700">
                Lead our interdisciplinary climate research initiative focused on developing sustainable solutions to
                global climate challenges. Ph.D. and significant research experience required.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h4 className="text-xl font-semibold text-burgundy-700">Global Education Program Manager</h4>
                  <p className="mt-2 text-gray-600">Singapore | Full-time</p>
                </div>
                <button className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-burgundy-600 hover:bg-burgundy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-burgundy-500">
                  Apply Now
                </button>
              </div>
              <p className="mt-4 text-gray-700">
                Coordinate and expand our international educational programs across Asia-Pacific. Experience in
                international education and program management required.
              </p>
            </div>
          </div>
        </div>

        {/* Join our team CTA */}
        <div className="mt-16 bg-burgundy-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">Don't see the right position?</h3>
              <p className="mt-2 text-burgundy-100 max-w-3xl">
                We're always looking for talented individuals to join our team. Send us your resume and let us know how
                you can contribute to our mission.
              </p>
            </div>
            <div className="mt-8 md:mt-0 flex-shrink-0">
              <button className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-burgundy-700 bg-white hover:bg-burgundy-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-burgundy-700">
                Submit Open Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
