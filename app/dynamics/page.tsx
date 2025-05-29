export default function DynamicsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Xebecstar Dynamics</h1>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Xebecstar Dynamics is at the forefront of advanced engineering and dynamic systems, developing cutting-edge
            solutions for aerospace, defense, robotics, and autonomous technologies. Our innovative approach combines
            mechanical engineering excellence with advanced control systems and AI.
          </p>
          <p className="text-gray-700 mb-4">
            With state-of-the-art facilities and a team of world-class engineers, we design and manufacture precision
            systems that operate in the most demanding environments. From advanced robotics to aerospace components, our
            technologies are trusted by industry leaders worldwide.
          </p>
          <p className="text-gray-700">
            Xebecstar Dynamics is committed to pushing the boundaries of what's possible in engineering, creating
            systems that are more efficient, reliable, and capable than ever before.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To engineer dynamic systems that solve complex challenges and advance human capabilities in aerospace,
              defense, and industrial applications.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be the global leader in advanced engineering and dynamic systems, creating technologies that define the
              future of movement and control.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Key Focus Areas</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Aerospace Systems</h4>
                <p className="text-gray-700">
                  Advanced propulsion, control systems, and structural components for aerospace applications.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Robotics & Automation</h4>
                <p className="text-gray-700">
                  Next-generation robotics systems for industrial, medical, and defense applications.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Autonomous Systems</h4>
                <p className="text-gray-700">
                  Self-operating vehicles and platforms with advanced navigation and decision-making capabilities.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Defense Technologies</h4>
                <p className="text-gray-700">
                  Specialized systems and components for defense applications, focusing on precision and reliability.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
