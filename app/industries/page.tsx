export default function IndustriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Xebecstar Industries</h1>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Xebecstar Industries is a global leader in industrial manufacturing and production, creating essential
            components, equipment, and finished goods for diverse sectors of the global economy. Our advanced
            manufacturing capabilities and engineering expertise enable us to produce high-quality products at scale.
          </p>
          <p className="text-gray-700 mb-4">
            We operate state-of-the-art manufacturing facilities across multiple continents, employing advanced
            automation, precision engineering, and quality control systems. Our industrial operations span automotive
            components, industrial equipment, consumer durables, and specialized manufacturing services.
          </p>
          <p className="text-gray-700">
            With a commitment to operational excellence, sustainable manufacturing practices, and continuous innovation,
            Xebecstar Industries delivers reliable products that meet the highest standards of performance, durability,
            and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To manufacture high-quality industrial products that power the global economy, employing advanced
              technologies and sustainable practices to deliver exceptional value.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be the world's premier industrial manufacturer, known for operational excellence, product quality, and
              our contribution to industrial advancement worldwide.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Key Focus Areas</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Automotive Components</h4>
                <p className="text-gray-700">
                  Precision-engineered parts and systems for the global automotive industry, from traditional to
                  electric vehicles.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Industrial Equipment</h4>
                <p className="text-gray-700">
                  Heavy machinery, specialized tools, and industrial systems for manufacturing, construction, and other
                  sectors.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Consumer Durables</h4>
                <p className="text-gray-700">
                  High-quality appliances, electronics, and other consumer products built for performance and longevity.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Advanced Manufacturing</h4>
                <p className="text-gray-700">
                  Cutting-edge production technologies including robotics, 3D printing, and smart manufacturing systems.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
