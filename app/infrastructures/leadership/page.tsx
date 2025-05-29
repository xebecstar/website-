export default function InfrastructuresLeadershipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Leadership</h1>
        <p className="text-lg text-gray-700 mb-8">
          Meet the visionary leaders building the future at Xebecstar Infrastructures.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* CEO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Richard Thompson</h3>
              <p className="text-orange-600 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-700">
                With over 30 years in construction and infrastructure development, Richard leads Xebecstar
                Infrastructures with a vision for sustainable urban development and transformative projects.
              </p>
            </div>
          </div>

          {/* COO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Maria Gonzalez</h3>
              <p className="text-orange-600 font-medium mb-4">Chief Operating Officer</p>
              <p className="text-gray-700">
                Maria oversees global operations, ensuring project delivery excellence and operational efficiency across
                our infrastructure portfolio worldwide.
              </p>
            </div>
          </div>

          {/* Chief Engineer */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Dr. Ahmed Hassan</h3>
              <p className="text-orange-600 font-medium mb-4">Chief Engineering Officer</p>
              <p className="text-gray-700">
                Dr. Hassan leads our engineering teams in designing innovative infrastructure solutions that meet the
                challenges of modern urban development and sustainability.
              </p>
            </div>
          </div>

          {/* CSO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Lisa Chen</h3>
              <p className="text-orange-600 font-medium mb-4">Chief Sustainability Officer</p>
              <p className="text-gray-700">
                Lisa champions sustainable construction practices and green building initiatives, ensuring our projects
                contribute positively to communities and the environment.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Leadership Principles</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-orange-600">•</div>
              <div>
                <h4 className="font-medium">Building for the Future</h4>
                <p className="text-gray-700">
                  We design and construct infrastructure that will serve communities for generations to come.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-orange-600">•</div>
              <div>
                <h4 className="font-medium">Sustainable Development</h4>
                <p className="text-gray-700">
                  We prioritize environmental responsibility and sustainable practices in all our projects.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-orange-600">•</div>
              <div>
                <h4 className="font-medium">Community Impact</h4>
                <p className="text-gray-700">
                  We create infrastructure that enhances quality of life and drives economic growth in communities.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-orange-600">•</div>
              <div>
                <h4 className="font-medium">Engineering Excellence</h4>
                <p className="text-gray-700">
                  We maintain the highest standards of engineering and construction quality in every project.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
