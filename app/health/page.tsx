export default function HealthPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Xebecstar Health</h1>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Xebecstar Health is dedicated to advancing healthcare through innovative medical technologies,
            pharmaceuticals, and healthcare solutions. We develop and deliver products and services that improve patient
            outcomes, enhance clinical efficiency, and address the world's most pressing health challenges.
          </p>
          <p className="text-gray-700 mb-4">
            Our diverse portfolio spans medical devices, diagnostic technologies, therapeutic products, and digital
            health solutions. We combine scientific expertise with engineering excellence to create breakthrough
            innovations that transform healthcare delivery and patient care.
          </p>
          <p className="text-gray-700">
            With a global presence and collaborations with leading healthcare institutions, Xebecstar Health is
            committed to making quality healthcare more accessible, effective, and personalized for patients and
            healthcare providers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To improve human health and well-being through innovative medical technologies and solutions that enhance
              the quality, accessibility, and effectiveness of healthcare.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be a global leader in healthcare innovation, recognized for developing transformative medical
              technologies that address unmet clinical needs and improve lives worldwide.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Key Focus Areas</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Medical Devices</h4>
                <p className="text-gray-700">
                  Advanced diagnostic and therapeutic devices that enable precise diagnosis and effective treatment.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Pharmaceutical Solutions</h4>
                <p className="text-gray-700">
                  Innovative medications and drug delivery systems that address complex health conditions.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Digital Health</h4>
                <p className="text-gray-700">
                  Connected health technologies that enable remote monitoring, telehealth, and data-driven healthcare.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Healthcare Infrastructure</h4>
                <p className="text-gray-700">
                  Solutions for hospitals and healthcare facilities that enhance operational efficiency and care
                  delivery.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
