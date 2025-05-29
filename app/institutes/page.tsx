export default function InstitutesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Xebecstar Institutes</h1>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Xebecstar Institutes is dedicated to education, training, and knowledge advancement, operating a network of
            educational institutions and professional development centers worldwide. We prepare individuals for success
            in a rapidly evolving global economy through innovative learning experiences and industry-relevant
            curricula.
          </p>
          <p className="text-gray-700 mb-4">
            Our educational portfolio includes technical colleges, professional training academies, corporate learning
            centers, and specialized institutes focused on emerging fields. We combine academic rigor with practical
            skills development, leveraging advanced learning technologies and industry partnerships.
          </p>
          <p className="text-gray-700">
            With a commitment to lifelong learning and a focus on future-ready skills, Xebecstar Institutes empowers
            individuals to achieve their potential and organizations to build capable workforces for the challenges of
            tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To provide transformative educational experiences that develop skilled professionals, foster innovation,
              and prepare individuals for success in a rapidly changing world.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be a global leader in education and professional development, known for innovative learning approaches
              and our contribution to human potential and economic advancement.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Key Focus Areas</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Technical Education</h4>
                <p className="text-gray-700">
                  Specialized training in engineering, technology, and applied sciences for in-demand technical careers.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Professional Development</h4>
                <p className="text-gray-700">
                  Continuing education and skills enhancement programs for working professionals across industries.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Digital Skills</h4>
                <p className="text-gray-700">
                  Training in programming, data science, cybersecurity, and other digital competencies for the modern
                  economy.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Leadership Development</h4>
                <p className="text-gray-700">
                  Programs that cultivate management capabilities, strategic thinking, and organizational leadership.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
