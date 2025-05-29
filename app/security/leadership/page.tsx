export default function SecurityLeadershipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Leadership</h1>
        <p className="text-lg text-gray-700 mb-8">
          Meet the security experts and strategic leaders at the helm of Xebecstar Security.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* CEO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">General James Blackwell (Ret.)</h3>
              <p className="text-slate-600 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-700">
                With a distinguished military career and extensive experience in global security operations, General
                Blackwell leads Xebecstar Security with strategic vision and uncompromising standards.
              </p>
            </div>
          </div>

          {/* COO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Victoria Reyes</h3>
              <p className="text-slate-600 font-medium mb-4">Chief Operations Officer</p>
              <p className="text-gray-700">
                Victoria oversees global security operations, ensuring seamless execution of protection services and
                security solutions across diverse environments and threat landscapes.
              </p>
            </div>
          </div>

          {/* CISO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Dr. Aiden Chen</h3>
              <p className="text-slate-600 font-medium mb-4">Chief Information Security Officer</p>
              <p className="text-gray-700">
                Dr. Chen leads our cybersecurity division, developing advanced digital protection strategies and
                solutions to safeguard critical information assets and infrastructure.
              </p>
            </div>
          </div>

          {/* CSO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Sophia Kovalev</h3>
              <p className="text-slate-600 font-medium mb-4">Chief Strategy Officer</p>
              <p className="text-gray-700">
                Sophia shapes our strategic direction, identifying emerging security challenges and developing
                innovative solutions to address evolving threats across physical and digital domains.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Security Principles</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-slate-600">•</div>
              <div>
                <h4 className="font-medium">Proactive Protection</h4>
                <p className="text-gray-700">
                  We anticipate threats before they materialize, implementing preventive measures to ensure
                  comprehensive security.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-slate-600">•</div>
              <div>
                <h4 className="font-medium">Operational Excellence</h4>
                <p className="text-gray-700">
                  We maintain the highest standards of professionalism, precision, and effectiveness in all security
                  operations.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-slate-600">•</div>
              <div>
                <h4 className="font-medium">Integrated Security</h4>
                <p className="text-gray-700">
                  We deliver holistic security solutions that address physical, digital, and human factors in a
                  coordinated approach.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-slate-600">•</div>
              <div>
                <h4 className="font-medium">Ethical Conduct</h4>
                <p className="text-gray-700">
                  We uphold the highest ethical standards in all our operations, respecting privacy, rights, and legal
                  frameworks.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
