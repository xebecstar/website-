export default function TechnologiesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Xebecstar Technologies</h1>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Xebecstar Technologies is at the forefront of digital innovation, developing cutting-edge solutions that
            transform how businesses operate and people interact with technology. Our diverse portfolio spans cloud
            computing, artificial intelligence, enterprise software, and more.
          </p>
          <p className="text-gray-700 mb-4">
            With a focus on research and development, we're constantly pushing the boundaries of what's possible in the
            tech space. Our team of world-class engineers and developers work tirelessly to create products and services
            that solve real-world problems and drive digital transformation.
          </p>
          <p className="text-gray-700">
            From startups to Fortune 500 companies, organizations around the world rely on Xebecstar Technologies to
            provide the tools and infrastructure they need to succeed in an increasingly digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To empower businesses and individuals through innovative technology solutions that drive growth,
              efficiency, and positive change.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be the global leader in technology innovation, setting new standards for what technology can achieve
              and how it can improve lives.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Key Focus Areas</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Cloud Computing</h4>
                <p className="text-gray-700">
                  Scalable, secure, and flexible cloud infrastructure and platform services.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Artificial Intelligence</h4>
                <p className="text-gray-700">
                  Advanced AI solutions that automate processes and deliver actionable insights.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Enterprise Software</h4>
                <p className="text-gray-700">
                  Comprehensive software solutions that streamline operations and boost productivity.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Cybersecurity</h4>
                <p className="text-gray-700">
                  Robust security solutions that protect critical data and infrastructure.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
