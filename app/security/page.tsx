export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Xebecstar Security</h1>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Xebecstar Security provides comprehensive protection services and solutions for governments, corporations,
            and high-profile individuals worldwide. In an increasingly complex security landscape, we deliver peace of
            mind through advanced technology, expert personnel, and proven methodologies.
          </p>
          <p className="text-gray-700 mb-4">
            Our integrated approach encompasses physical security, cybersecurity, intelligence services, and risk
            management, allowing us to address the full spectrum of security challenges. We combine cutting-edge
            technology with human expertise to detect, prevent, and respond to threats effectively.
          </p>
          <p className="text-gray-700">
            With operations in over 40 countries and a team of security professionals drawn from elite military, law
            enforcement, and intelligence backgrounds, Xebecstar Security has established itself as a trusted partner
            for those facing the most demanding security challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To safeguard people, assets, and information through innovative security solutions that anticipate and
              neutralize threats before they materialize.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be the global leader in integrated security services, setting new standards for protection in a rapidly
              evolving threat landscape.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Key Focus Areas</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Physical Security</h4>
                <p className="text-gray-700">
                  Executive protection, facility security, and specialized security operations for high-risk
                  environments.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Cybersecurity</h4>
                <p className="text-gray-700">
                  Advanced threat detection, network security, and cyber intelligence to protect digital assets and
                  infrastructure.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Intelligence Services</h4>
                <p className="text-gray-700">
                  Threat assessment, risk analysis, and strategic intelligence to inform security decision-making.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Security Technology</h4>
                <p className="text-gray-700">
                  Cutting-edge surveillance, access control, and security management systems for comprehensive
                  protection.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
