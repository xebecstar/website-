export default function ShippingLeadershipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Leadership</h1>
        <p className="text-lg text-gray-700 mb-8">
          Meet the maritime experts and logistics leaders navigating Xebecstar Shipping to global success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* CEO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Captain Erik Larsen</h3>
              <p className="text-blue-700 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-700">
                With over 35 years in maritime transportation, Captain Larsen leads Xebecstar Shipping with deep
                industry expertise and a vision for sustainable global shipping solutions.
              </p>
            </div>
          </div>

          {/* COO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Yuki Tanaka</h3>
              <p className="text-blue-700 font-medium mb-4">Chief Operations Officer</p>
              <p className="text-gray-700">
                Yuki oversees global shipping operations, ensuring efficient fleet management, route optimization, and
                exceptional service delivery across our worldwide network.
              </p>
            </div>
          </div>

          {/* Chief Fleet Officer */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Andreas Papadopoulos</h3>
              <p className="text-blue-700 font-medium mb-4">Chief Fleet Officer</p>
              <p className="text-gray-700">
                Andreas manages our global fleet of vessels, overseeing maintenance, modernization, and the integration
                of new technologies to enhance efficiency and reduce environmental impact.
              </p>
            </div>
          </div>

          {/* Chief Sustainability Officer */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Dr. Maria Santos</h3>
              <p className="text-blue-700 font-medium mb-4">Chief Sustainability Officer</p>
              <p className="text-gray-700">
                Dr. Santos leads our environmental initiatives, developing strategies to reduce emissions, improve fuel
                efficiency, and pioneer sustainable shipping practices across the industry.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Maritime Principles</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-blue-700">•</div>
              <div>
                <h4 className="font-medium">Operational Excellence</h4>
                <p className="text-gray-700">
                  We maintain the highest standards of safety, reliability, and efficiency in all our maritime
                  operations.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-700">•</div>
              <div>
                <h4 className="font-medium">Environmental Stewardship</h4>
                <p className="text-gray-700">
                  We lead the industry in sustainable shipping practices, protecting our oceans for future generations.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-700">•</div>
              <div>
                <h4 className="font-medium">Global Connectivity</h4>
                <p className="text-gray-700">
                  We connect markets and enable global trade through our extensive network and reliable services.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-700">•</div>
              <div>
                <h4 className="font-medium">Innovation at Sea</h4>
                <p className="text-gray-700">
                  We embrace new technologies and approaches to continuously improve maritime transportation.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
