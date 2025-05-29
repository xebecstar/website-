export default function TechnologiesLeadershipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Leadership</h1>
        <p className="text-lg text-gray-700 mb-8">
          Meet the team driving innovation and excellence at Xebecstar Technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* CEO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Sarah Chen</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-700">
                With over 20 years of experience in the technology sector, Sarah leads Xebecstar Technologies with a
                focus on innovation, growth, and sustainable business practices.
              </p>
            </div>
          </div>

          {/* CTO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Marcus Johnson</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Technology Officer</p>
              <p className="text-gray-700">
                Marcus oversees the technical vision of Xebecstar Technologies, driving product development and
                technological innovation across all business units.
              </p>
            </div>
          </div>

          {/* COO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Elena Rodriguez</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Operating Officer</p>
              <p className="text-gray-700">
                Elena ensures operational excellence across Xebecstar Technologies, optimizing processes and driving
                efficiency to deliver exceptional value to our clients.
              </p>
            </div>
          </div>

          {/* CFO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">David Kim</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Financial Officer</p>
              <p className="text-gray-700">
                David manages the financial strategy of Xebecstar Technologies, ensuring sustainable growth and
                maximizing shareholder value through strategic investments.
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
                <h4 className="font-medium">Innovation First</h4>
                <p className="text-gray-700">
                  We prioritize creative thinking and technological advancement in everything we do.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Customer Obsession</h4>
                <p className="text-gray-700">
                  We start with the customer and work backwards, always focusing on delivering value.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Operational Excellence</h4>
                <p className="text-gray-700">
                  We strive for efficiency, quality, and continuous improvement in all operations.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Ethical Leadership</h4>
                <p className="text-gray-700">
                  We lead with integrity, transparency, and a commitment to positive social impact.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
