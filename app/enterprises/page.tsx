export default function EnterprisesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Xebecstar Enterprises</h1>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Xebecstar Enterprises delivers comprehensive business solutions and services that help organizations
            optimize operations, drive growth, and achieve strategic objectives. As a trusted partner to businesses of
            all sizes, we combine industry expertise with innovative approaches to solve complex business challenges.
          </p>
          <p className="text-gray-700 mb-4">
            Our portfolio encompasses management consulting, business process outsourcing, enterprise software, and
            professional services. We work across industries to identify opportunities, implement solutions, and deliver
            measurable results that create lasting value for our clients.
          </p>
          <p className="text-gray-700">
            With a global team of business experts and a track record of successful engagements with Fortune 500
            companies, mid-sized businesses, and emerging enterprises, Xebecstar Enterprises has established itself as a
            catalyst for business transformation and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To empower organizations to achieve exceptional performance through innovative business solutions that
              optimize operations, enhance capabilities, and drive sustainable growth.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be the premier global provider of business solutions, recognized for our ability to transform
              organizations and create lasting value in an ever-changing business landscape.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Key Focus Areas</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Management Consulting</h4>
                <p className="text-gray-700">
                  Strategic advisory services that help organizations navigate complex challenges and capitalize on
                  opportunities.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Business Process Outsourcing</h4>
                <p className="text-gray-700">
                  Efficient, high-quality outsourcing solutions that allow organizations to focus on core competencies.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Enterprise Software</h4>
                <p className="text-gray-700">
                  Powerful business applications that streamline operations, enhance productivity, and provide
                  actionable insights.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Digital Transformation</h4>
                <p className="text-gray-700">
                  Comprehensive services to help organizations leverage digital technologies and adapt to changing
                  market dynamics.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
