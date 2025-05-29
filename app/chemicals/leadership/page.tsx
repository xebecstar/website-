export default function ChemicalsLeadershipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Leadership</h1>
        <p className="text-lg text-gray-700 mb-8">
          Meet the team driving innovation and excellence at Xebecstar Chemicals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* CEO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Michael Reynolds</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-700">
                With over 25 years in the chemical industry, Michael leads Xebecstar Chemicals with a focus on
                sustainable innovation and global market expansion.
              </p>
            </div>
          </div>

          {/* CTO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Dr. Amara Patel</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Technology Officer</p>
              <p className="text-gray-700">
                Dr. Patel oversees all research and development initiatives, driving molecular innovation and new
                product development across our chemical divisions.
              </p>
            </div>
          </div>

          {/* COO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Thomas Nguyen</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Operating Officer</p>
              <p className="text-gray-700">
                Thomas ensures operational excellence across our global manufacturing facilities, optimizing processes
                and maintaining the highest safety and quality standards.
              </p>
            </div>
          </div>

          {/* CSO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Dr. Emma Larsson</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Sustainability Officer</p>
              <p className="text-gray-700">
                Dr. Larsson leads our sustainability initiatives, ensuring our chemical processes and products meet the
                highest environmental standards while driving our green chemistry innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Leadership Principles</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Scientific Excellence</h4>
                <p className="text-gray-700">
                  We pursue rigorous scientific methods and continuous innovation in all our chemical research.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Environmental Stewardship</h4>
                <p className="text-gray-700">
                  We prioritize sustainable practices and minimize environmental impact in all our operations.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Safety First</h4>
                <p className="text-gray-700">
                  We maintain the highest safety standards in our facilities, products, and processes.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Customer-Focused Solutions</h4>
                <p className="text-gray-700">
                  We develop chemical solutions that address our customers' most pressing challenges.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
