export default function LaboratoriesLeadershipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Leadership</h1>
        <p className="text-lg text-gray-700 mb-8">
          Meet the brilliant scientists and research leaders driving innovation at Xebecstar Laboratories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* CEO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Dr. Rachel Anderson</h3>
              <p className="text-indigo-600 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-700">
                A Nobel laureate in Physics, Dr. Anderson leads Xebecstar Laboratories with a vision for groundbreaking
                research that bridges fundamental science and practical applications.
              </p>
            </div>
          </div>

          {/* Chief Scientific Officer */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Dr. Kenji Nakamura</h3>
              <p className="text-indigo-600 font-medium mb-4">Chief Scientific Officer</p>
              <p className="text-gray-700">
                Dr. Nakamura oversees all research initiatives across our laboratories, ensuring scientific rigor and
                fostering cross-disciplinary collaboration to accelerate discovery.
              </p>
            </div>
          </div>

          {/* Head of Quantum Research */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Dr. Elena Volkov</h3>
              <p className="text-indigo-600 font-medium mb-4">Head of Quantum Research</p>
              <p className="text-gray-700">
                Dr. Volkov leads our quantum computing and quantum physics research, pushing the boundaries of what's
                possible in quantum technologies and their applications.
              </p>
            </div>
          </div>

          {/* Head of Biotechnology */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Dr. Marcus Chen</h3>
              <p className="text-indigo-600 font-medium mb-4">Head of Biotechnology Research</p>
              <p className="text-gray-700">
                Dr. Chen directs our biotechnology initiatives, focusing on breakthrough discoveries in genomics,
                synthetic biology, and therapeutic development.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Research Philosophy</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-indigo-600">•</div>
              <div>
                <h4 className="font-medium">Scientific Excellence</h4>
                <p className="text-gray-700">
                  We pursue the highest standards of scientific rigor and integrity in all our research endeavors.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-indigo-600">•</div>
              <div>
                <h4 className="font-medium">Collaborative Discovery</h4>
                <p className="text-gray-700">
                  We foster interdisciplinary collaboration to accelerate breakthrough discoveries and innovations.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-indigo-600">•</div>
              <div>
                <h4 className="font-medium">Applied Innovation</h4>
                <p className="text-gray-700">
                  We bridge the gap between fundamental research and practical applications that benefit society.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-indigo-600">•</div>
              <div>
                <h4 className="font-medium">Open Science</h4>
                <p className="text-gray-700">
                  We believe in sharing knowledge and collaborating with the global scientific community.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
