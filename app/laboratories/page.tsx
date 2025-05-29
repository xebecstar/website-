export default function LaboratoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Xebecstar Laboratories</h1>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Xebecstar Laboratories is a premier research and development organization dedicated to scientific discovery
            and technological innovation. Our state-of-the-art facilities and multidisciplinary teams explore the
            frontiers of science to develop breakthrough solutions for industry, healthcare, and society.
          </p>
          <p className="text-gray-700 mb-4">
            We conduct fundamental and applied research across a wide range of disciplines, including materials science,
            biotechnology, quantum physics, artificial intelligence, and more. Our collaborative approach brings
            together scientists, engineers, and industry partners to translate scientific discoveries into practical
            applications.
          </p>
          <p className="text-gray-700">
            With a commitment to scientific excellence and a track record of groundbreaking innovations, Xebecstar
            Laboratories serves as the research engine for the entire Xebecstar Group, driving progress and creating the
            technologies of tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To advance scientific knowledge and develop transformative technologies that address global challenges and
              create new possibilities for industry and society.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be a world-leading research institution known for scientific breakthroughs, technological innovations,
              and our contribution to human progress.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Key Focus Areas</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Advanced Materials</h4>
                <p className="text-gray-700">
                  Research into novel materials with unique properties for applications in electronics, energy,
                  construction, and more.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Biotechnology</h4>
                <p className="text-gray-700">
                  Exploration of biological systems and processes to develop new therapies, agricultural solutions, and
                  industrial applications.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Quantum Computing</h4>
                <p className="text-gray-700">
                  Development of quantum technologies that will revolutionize computing, cryptography, and scientific
                  simulation.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Artificial Intelligence</h4>
                <p className="text-gray-700">
                  Research into advanced AI algorithms, machine learning systems, and cognitive computing technologies.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
