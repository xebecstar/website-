export default function EnterprisesLeadershipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Leadership</h1>
        <p className="text-lg text-gray-700 mb-8">
          Meet the business leaders and industry experts guiding Xebecstar Enterprises to deliver exceptional business
          solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* CEO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Katherine Morgan</h3>
              <p className="text-teal-600 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-700">
                With extensive experience in management consulting and business transformation, Katherine leads
                Xebecstar Enterprises with a focus on innovation, client success, and sustainable growth.
              </p>
            </div>
          </div>

          {/* COO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Marcus Chen</h3>
              <p className="text-teal-600 font-medium mb-4">Chief Operations Officer</p>
              <p className="text-gray-700">
                Marcus oversees global operations, ensuring excellence in service delivery and operational efficiency
                across our diverse portfolio of business solutions and services.
              </p>
            </div>
          </div>

          {/* Chief Strategy Officer */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Dr. Amara Patel</h3>
              <p className="text-teal-600 font-medium mb-4">Chief Strategy Officer</p>
              <p className="text-gray-700">
                Dr. Patel leads our strategic initiatives, identifying market opportunities and developing innovative
                business solutions that address emerging client needs and industry trends.
              </p>
            </div>
          </div>

          {/* Chief Digital Officer */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Thomas Rodriguez</h3>
              <p className="text-teal-600 font-medium mb-4">Chief Digital Officer</p>
              <p className="text-gray-700">
                Thomas drives our digital transformation initiatives, helping clients leverage technology to enhance
                operations, improve customer experiences, and create new business models.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Business Principles</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-teal-600">•</div>
              <div>
                <h4 className="font-medium">Client-Centric Approach</h4>
                <p className="text-gray-700">
                  We place our clients at the center of everything we do, focusing on their unique challenges and goals
                  to deliver tailored solutions.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-teal-600">•</div>
              <div>
                <h4 className="font-medium">Data-Driven Decisions</h4>
                <p className="text-gray-700">
                  We leverage analytics and insights to inform strategic recommendations and drive measurable business
                  outcomes.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-teal-600">•</div>
              <div>
                <h4 className="font-medium">Continuous Innovation</h4>
                <p className="text-gray-700">
                  We constantly explore new approaches, technologies, and methodologies to deliver innovative solutions
                  to complex business challenges.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-teal-600">•</div>
              <div>
                <h4 className="font-medium">Collaborative Excellence</h4>
                <p className="text-gray-700">
                  We work as true partners with our clients, combining our expertise with their knowledge to achieve
                  exceptional results.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
