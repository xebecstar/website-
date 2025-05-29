export default function InstitutesNewsroomPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Xebecstar Institutes Newsroom
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Discover our latest research breakthroughs, educational initiatives, and institutional developments.
          </p>
        </div>

        {/* Featured news */}
        <div className="mt-16">
          <div className="bg-burgundy-50 rounded-lg overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-64 w-full object-cover md:w-96"
                  src="/placeholder.svg?height=256&width=384&query=academic%20research%20breakthrough"
                  alt="Xebecstar Institutes launches new research center"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-burgundy-700 font-semibold">Featured News</div>
                <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                  Xebecstar Institutes Launches $250M Global Climate Research Initiative
                </h3>
                <p className="mt-3 text-gray-600">
                  Our new interdisciplinary research program brings together scientists, policymakers, and industry
                  leaders to develop actionable solutions to climate challenges.
                </p>
                <p className="mt-2 text-sm text-gray-500">May 15, 2025</p>
                <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-burgundy-600 hover:bg-burgundy-700">
                  Read Full Story
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* News grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              className="h-48 w-full object-cover"
              src="/placeholder.svg?height=192&width=384&query=education%20technology%20innovation"
              alt="AI-powered learning platform"
            />
            <div className="p-6">
              <div className="text-xs text-gray-500 uppercase tracking-wider">Research & Innovation</div>
              <h3 className="mt-1 text-xl font-semibold text-gray-900">
                New AI-Powered Learning Platform Shows 40% Improvement in Student Outcomes
              </h3>
              <p className="mt-3 text-gray-600">
                Our EdTech research team has developed an adaptive learning system that personalizes education at
                unprecedented levels.
              </p>
              <p className="mt-2 text-sm text-gray-500">April 28, 2025</p>
              <button className="mt-4 text-burgundy-600 hover:text-burgundy-800 font-medium">Read More →</button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              className="h-48 w-full object-cover"
              src="/placeholder.svg?height=192&width=384&query=global%20academic%20partnership"
              alt="Global academic partnership"
            />
            <div className="p-6">
              <div className="text-xs text-gray-500 uppercase tracking-wider">Partnerships</div>
              <h3 className="mt-1 text-xl font-semibold text-gray-900">
                Xebecstar Institutes Forms Strategic Alliance with Oxford University
              </h3>
              <p className="mt-3 text-gray-600">
                This landmark partnership will create new opportunities for collaborative research and student exchange
                programs.
              </p>
              <p className="mt-2 text-sm text-gray-500">April 12, 2025</p>
              <button className="mt-4 text-burgundy-600 hover:text-burgundy-800 font-medium">Read More →</button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              className="h-48 w-full object-cover"
              src="/placeholder.svg?height=192&width=384&query=quantum%20computing%20breakthrough"
              alt="Quantum computing breakthrough"
            />
            <div className="p-6">
              <div className="text-xs text-gray-500 uppercase tracking-wider">Research Breakthrough</div>
              <h3 className="mt-1 text-xl font-semibold text-gray-900">
                Quantum Computing Team Achieves Major Breakthrough in Error Correction
              </h3>
              <p className="mt-3 text-gray-600">
                Our researchers have developed a novel approach to quantum error correction that could accelerate
                practical quantum computing.
              </p>
              <p className="mt-2 text-sm text-gray-500">March 30, 2025</p>
              <button className="mt-4 text-burgundy-600 hover:text-burgundy-800 font-medium">Read More →</button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              className="h-48 w-full object-cover"
              src="/placeholder.svg?height=192&width=384&query=educational%20scholarship%20program"
              alt="Scholarship program launch"
            />
            <div className="p-6">
              <div className="text-xs text-gray-500 uppercase tracking-wider">Education Access</div>
              <h3 className="mt-1 text-xl font-semibold text-gray-900">
                Xebecstar Launches $50M Global Scholarship Program for Underrepresented Students
              </h3>
              <p className="mt-3 text-gray-600">
                Our new initiative aims to provide educational opportunities to 1,000 talented students from underserved
                communities worldwide.
              </p>
              <p className="mt-2 text-sm text-gray-500">March 15, 2025</p>
              <button className="mt-4 text-burgundy-600 hover:text-burgundy-800 font-medium">Read More →</button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              className="h-48 w-full object-cover"
              src="/placeholder.svg?height=192&width=384&query=sustainable%20campus%20initiative"
              alt="Sustainable campus initiative"
            />
            <div className="p-6">
              <div className="text-xs text-gray-500 uppercase tracking-wider">Sustainability</div>
              <h3 className="mt-1 text-xl font-semibold text-gray-900">
                New Campus Achieves LEED Platinum Certification for Sustainable Design
              </h3>
              <p className="mt-3 text-gray-600">
                Our Singapore campus sets new standards for sustainable architecture in educational institutions with
                net-zero energy consumption.
              </p>
              <p className="mt-2 text-sm text-gray-500">February 28, 2025</p>
              <button className="mt-4 text-burgundy-600 hover:text-burgundy-800 font-medium">Read More →</button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              className="h-48 w-full object-cover"
              src="/placeholder.svg?height=192&width=384&query=medical%20research%20breakthrough"
              alt="Medical research breakthrough"
            />
            <div className="p-6">
              <div className="text-xs text-gray-500 uppercase tracking-wider">Medical Research</div>
              <h3 className="mt-1 text-xl font-semibold text-gray-900">
                Biomedical Team Develops Novel Approach to Treating Neurodegenerative Diseases
              </h3>
              <p className="mt-3 text-gray-600">
                Researchers at our Medical Sciences Division have identified a promising new therapeutic target for
                Alzheimer's disease.
              </p>
              <p className="mt-2 text-sm text-gray-500">February 10, 2025</p>
              <button className="mt-4 text-burgundy-600 hover:text-burgundy-800 font-medium">Read More →</button>
            </div>
          </div>
        </div>

        {/* Press contact */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">Press Contact</h3>
            <p className="mt-4 text-gray-600">For media inquiries, please contact our communications team:</p>
            <div className="mt-4">
              <p className="text-burgundy-700 font-medium">media@xebecstarinstitutes.com</p>
              <p className="text-gray-600">+1 (617) 555-0123</p>
            </div>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mt-16 bg-burgundy-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-white">Subscribe to Our Newsletter</h3>
            <p className="mt-2 text-burgundy-100 max-w-3xl mx-auto">
              Stay updated with our latest research findings, educational programs, and institutional developments.
            </p>
            <form className="mt-8 sm:flex sm:max-w-md sm:mx-auto">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 placeholder-gray-500 focus:ring-white focus:border-white sm:max-w-xs border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-white border border-transparent rounded-md py-3 px-5 flex items-center justify-center text-base font-medium text-burgundy-700 hover:bg-burgundy-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-burgundy-700 focus:ring-white"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
