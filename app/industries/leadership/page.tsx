export default function IndustriesLeadershipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Leadership</h1>
        <p className="text-lg text-gray-700 mb-8">
          Meet the experienced leaders driving innovation and excellence in manufacturing at Xebecstar Industries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* CEO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Victor Ramirez</h3>
              <p className="text-slate-600 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-700">
                With over 30 years of experience in industrial manufacturing, Victor leads Xebecstar Industries with a
                focus on operational excellence, technological innovation, and sustainable production.
              </p>
            </div>
          </div>

          {/* COO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Sarah Chen</h3>
              <p className="text-slate-600 font-medium mb-4">Chief Operations Officer</p>
              <p className="text-gray-700">
                Sarah oversees global manufacturing operations, ensuring efficiency, quality, and continuous improvement
                across our production facilities worldwide.
              </p>
            </div>
          </div>

          {/* Chief Technology Officer */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Dr. Markus Schmidt</h3>
              <p className="text-slate-600 font-medium mb-4">Chief Technology Officer</p>
              <p className="text-gray-700">
                Dr. Schmidt leads our technology strategy, driving innovation in advanced manufacturing technologies,
                automation, and smart factory initiatives.
              </p>
            </div>
          </div>

          {/* Chief Sustainability Officer */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Dr. Amina Patel</h3>
              <p className="text-slate-600 font-medium mb-4">Chief Sustainability Officer</p>
              <p className="text-gray-700">
                Dr. Patel champions our sustainable manufacturing initiatives, developing strategies to reduce
                environmental impact while maintaining production excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Manufacturing Principles</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-slate-600">•</div>
              <div>
                <h4 className="font-medium">Operational Excellence</h4>
                <p className="text-gray-700">
                  We pursue the highest standards of efficiency, quality, and reliability in all our manufacturing
                  operations.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-slate-600">•</div>
              <div>
                <h4 className="font-medium">Technological Innovation</h4>
                <p className="text-gray-700">
                  We continuously adopt and develop advanced manufacturing technologies to stay at the forefront of
                  industrial production.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-slate-600">•</div>
              <div>
                <h4 className="font-medium">Sustainable Manufacturing</h4>
                <p className="text-gray-700">
                  We integrate environmental responsibility into our production processes, reducing waste and energy
                  consumption.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-slate-600">•</div>
              <div>
                <h4 className="font-medium">Customer-Focused Production</h4>
                <p className="text-gray-700">
                  We align our manufacturing capabilities with customer needs, delivering products that exceed
                  expectations for performance and quality.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
