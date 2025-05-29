export default function InfrastructuresPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Xebecstar Infrastructures</h1>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Xebecstar Infrastructures is a global leader in infrastructure development and construction, specializing in
            large-scale projects that shape the built environment. From iconic skyscrapers to critical transportation
            networks, we design and build the foundations of modern society.
          </p>
          <p className="text-gray-700 mb-4">
            Our integrated approach combines architectural vision, engineering excellence, and construction expertise to
            deliver projects that are not only structurally sound but also sustainable, efficient, and aesthetically
            impressive. We leverage advanced technologies and innovative methods to overcome complex challenges and set
            new standards in the industry.
          </p>
          <p className="text-gray-700">
            With a portfolio spanning six continents, Xebecstar Infrastructures has established a reputation for
            delivering world-class infrastructure that stands the test of time while meeting the evolving needs of
            communities and economies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To develop infrastructure that enhances quality of life, drives economic growth, and creates sustainable
              built environments for generations to come.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be the world's premier infrastructure development company, known for innovation, sustainability, and
              transformative projects that define skylines and connect communities.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Key Focus Areas</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Urban Development</h4>
                <p className="text-gray-700">
                  Mixed-use developments, commercial centers, and residential complexes that revitalize urban areas.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Transportation Infrastructure</h4>
                <p className="text-gray-700">
                  Airports, railways, highways, and ports that connect people and goods across regions and continents.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Energy & Utilities</h4>
                <p className="text-gray-700">
                  Power generation facilities, transmission networks, and water management systems that support modern
                  life.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Sustainable Construction</h4>
                <p className="text-gray-700">
                  Green building practices, renewable energy integration, and environmentally responsible development.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
