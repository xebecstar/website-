export default function ChemicalsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Xebecstar Chemicals</h1>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Xebecstar Chemicals is revolutionizing the molecular world through innovative chemical research,
            development, and manufacturing. We create advanced chemical solutions that enhance industries and everyday
            life, from specialized polymers to agricultural compounds.
          </p>
          <p className="text-gray-700 mb-4">
            Our state-of-the-art facilities and expert team of chemists and engineers work at the molecular level to
            develop compounds that solve complex challenges across multiple sectors including pharmaceuticals,
            agriculture, manufacturing, and consumer goods.
          </p>
          <p className="text-gray-700">
            With a commitment to sustainability and safety, we're not just creating the chemicals of today, but
            pioneering the molecular innovations that will shape tomorrow's world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To develop chemical solutions that enhance industries and everyday life while maintaining the highest
              standards of safety and environmental responsibility.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be the global leader in sustainable chemical innovation, creating molecules that solve humanity's
              greatest challenges.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Key Focus Areas</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Advanced Polymers</h4>
                <p className="text-gray-700">
                  Developing next-generation polymers with enhanced properties for diverse applications.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Agricultural Solutions</h4>
                <p className="text-gray-700">
                  Creating sustainable fertilizers and crop protection products to enhance agricultural productivity.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Pharmaceutical Ingredients</h4>
                <p className="text-gray-700">Manufacturing high-purity compounds for pharmaceutical applications.</p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Green Chemistry</h4>
                <p className="text-gray-700">Pioneering environmentally friendly chemical processes and products.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
