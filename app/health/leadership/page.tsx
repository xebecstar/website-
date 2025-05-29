export default function HealthLeadershipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Leadership</h1>
        <p className="text-lg text-gray-700 mb-8">
          Meet the healthcare visionaries and medical experts leading Xebecstar Health.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* CEO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Dr. Emily Johnson</h3>
              <p className="text-teal-600 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-700">
                With a background in medicine and healthcare innovation, Dr. Johnson leads Xebecstar Health with a focus
                on developing transformative medical technologies and improving patient outcomes worldwide.
              </p>
            </div>
          </div>

          {/* CMO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Dr. Michael Patel</h3>
              <p className="text-teal-600 font-medium mb-4">Chief Medical Officer</p>
              <p className="text-gray-700">
                Dr. Patel oversees all clinical and medical aspects of our products and services, ensuring they meet the
                highest standards of safety, efficacy, and clinical relevance.
              </p>
            </div>
          </div>

          {/* CTO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Dr. Sarah Kim</h3>
              <p className="text-teal-600 font-medium mb-4">Chief Technology Officer</p>
              <p className="text-gray-700">
                Dr. Kim leads our technology development teams, driving innovation in medical devices, digital health
                platforms, and healthcare AI systems.
              </p>
            </div>
          </div>

          {/* CSO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Dr. James Rodriguez</h3>
              <p className="text-teal-600 font-medium mb-4">Chief Scientific Officer</p>
              <p className="text-gray-700">
                Dr. Rodriguez oversees our research initiatives, focusing on breakthrough discoveries in medical science
                and their translation into practical healthcare solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Healthcare Philosophy</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-teal-600">•</div>
              <div>
                <h4 className="font-medium">Patient-Centered Innovation</h4>
                <p className="text-gray-700">
                  We develop technologies and solutions that address real patient needs and improve healthcare outcomes.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-teal-600">•</div>
              <div>
                <h4 className="font-medium">Evidence-Based Approach</h4>
                <p className="text-gray-700">
                  Our products and services are developed and validated through rigorous scientific research and
                  clinical studies.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-teal-600">•</div>
              <div>
                <h4 className="font-medium">Healthcare Accessibility</h4>
                <p className="text-gray-700">
                  We strive to make quality healthcare more accessible through innovative technologies and delivery
                  models.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-teal-600">•</div>
              <div>
                <h4 className="font-medium">Ethical Innovation</h4>
                <p className="text-gray-700">
                  We uphold the highest ethical standards in our research, development, and business practices.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
