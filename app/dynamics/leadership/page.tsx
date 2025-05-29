export default function DynamicsLeadershipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Leadership</h1>
        <p className="text-lg text-gray-700 mb-8">
          Meet the innovative engineers and visionaries leading Xebecstar Dynamics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* CEO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Dr. Robert Chen</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-700">
                With a background in aerospace engineering and robotics, Dr. Chen leads Xebecstar Dynamics with a focus
                on breakthrough engineering solutions and autonomous systems development.
              </p>
            </div>
          </div>

          {/* CTO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Dr. Sophia Martinez</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Technology Officer</p>
              <p className="text-gray-700">
                Dr. Martinez oversees all research and development initiatives, driving innovation in robotics, control
                systems, and advanced materials for next-generation dynamic systems.
              </p>
            </div>
          </div>

          {/* COO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Colonel James Wilson (Ret.)</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Operations Officer</p>
              <p className="text-gray-700">
                With extensive experience in military operations and defense systems, Col. Wilson ensures operational
                excellence across our manufacturing facilities and project deployments.
              </p>
            </div>
          </div>

          {/* Chief Engineer */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Dr. Akira Tanaka</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Engineer</p>
              <p className="text-gray-700">
                Dr. Tanaka leads our engineering teams in designing and developing advanced dynamic systems, with
                expertise in propulsion technologies and autonomous control systems.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Engineering Philosophy</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Precision Engineering</h4>
                <p className="text-gray-700">
                  We pursue exacting standards in design and manufacturing to create systems that perform flawlessly in
                  critical applications.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Integrated Innovation</h4>
                <p className="text-gray-700">
                  We combine mechanical, electronic, and software engineering to create holistic solutions to complex
                  challenges.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Reliability First</h4>
                <p className="text-gray-700">
                  We design systems that perform consistently and dependably, even in the most demanding environments.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Future-Focused Development</h4>
                <p className="text-gray-700">
                  We anticipate tomorrow's challenges and develop technologies that will meet emerging needs across
                  industries.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
