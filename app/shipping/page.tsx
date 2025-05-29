export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Xebecstar Shipping</h1>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Xebecstar Shipping is a global leader in maritime transportation and logistics, connecting businesses and
            markets across oceans and continents. With one of the world's largest and most modern fleets, we transport
            goods efficiently, reliably, and sustainably on a global scale.
          </p>
          <p className="text-gray-700 mb-4">
            Our comprehensive services include container shipping, bulk cargo transport, specialized freight handling,
            and integrated logistics solutions. We leverage advanced technology and operational excellence to optimize
            routes, minimize environmental impact, and ensure timely delivery.
          </p>
          <p className="text-gray-700">
            With operations in over 120 ports worldwide and a commitment to innovation in maritime transportation,
            Xebecstar Shipping plays a vital role in global trade, helping businesses reach new markets and deliver
            products to customers around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To connect global markets through efficient, reliable, and sustainable shipping and logistics solutions
              that enable the flow of goods worldwide.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be the world's premier shipping and logistics company, known for operational excellence, environmental
              leadership, and our essential role in global commerce.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Key Focus Areas</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Container Shipping</h4>
                <p className="text-gray-700">
                  Global container transportation services with extensive route coverage and schedule reliability.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Bulk Cargo Transport</h4>
                <p className="text-gray-700">
                  Specialized vessels and expertise for transporting commodities, raw materials, and bulk goods.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Integrated Logistics</h4>
                <p className="text-gray-700">
                  End-to-end supply chain solutions that extend beyond shipping to include warehousing, distribution,
                  and more.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Sustainable Shipping</h4>
                <p className="text-gray-700">
                  Industry-leading initiatives to reduce emissions, improve fuel efficiency, and minimize environmental
                  impact.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
