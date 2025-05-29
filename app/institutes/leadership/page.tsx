export default function InstitutesLeadershipPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Leadership Team</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            The brilliant minds guiding Xebecstar Institutes' mission to advance knowledge and transform education.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Leadership profiles */}
          <div className="flex flex-col items-center">
            <img
              className="h-48 w-48 rounded-full object-cover"
              src="/placeholder.svg?height=192&width=192&query=professional%20female%20academic%20leader"
              alt="Dr. Eleanor Harrington"
            />
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-medium text-burgundy-700">Dr. Eleanor Harrington</h3>
              <p className="text-lg text-gray-600">President & Chief Academic Officer</p>
              <p className="mt-3 text-base text-gray-500 max-w-md">
                Former Dean of Research at Cambridge University with over 25 years of experience in higher education
                leadership and policy development.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="h-48 w-48 rounded-full object-cover"
              src="/placeholder.svg?height=192&width=192&query=professional%20male%20academic%20leader"
              alt="Dr. Marcus Chen"
            />
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-medium text-burgundy-700">Dr. Marcus Chen</h3>
              <p className="text-lg text-gray-600">Executive Director of Research</p>
              <p className="mt-3 text-base text-gray-500 max-w-md">
                Pioneering researcher with a background in interdisciplinary studies and over 200 published papers in
                leading academic journals.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="h-48 w-48 rounded-full object-cover"
              src="/placeholder.svg?height=192&width=192&query=professional%20female%20education%20executive"
              alt="Dr. Sophia Williams"
            />
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-medium text-burgundy-700">Dr. Sophia Williams</h3>
              <p className="text-lg text-gray-600">Chief Innovation Officer</p>
              <p className="mt-3 text-base text-gray-500 max-w-md">
                Visionary leader in educational technology who has transformed learning experiences through innovative
                digital platforms and methodologies.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="h-48 w-48 rounded-full object-cover"
              src="/placeholder.svg?height=192&width=192&query=professional%20male%20global%20education%20leader"
              alt="Dr. Rajiv Mehta"
            />
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-medium text-burgundy-700">Dr. Rajiv Mehta</h3>
              <p className="text-lg text-gray-600">Director of Global Partnerships</p>
              <p className="mt-3 text-base text-gray-500 max-w-md">
                Expert in international education with extensive experience building academic partnerships across six
                continents.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership principles */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Our Guiding Principles</h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-burgundy-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-burgundy-700 mb-3">Academic Excellence</h4>
              <p className="text-gray-700">
                We uphold the highest standards of academic rigor and intellectual integrity in all our educational
                programs and research initiatives.
              </p>
            </div>

            <div className="bg-burgundy-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-burgundy-700 mb-3">Innovative Research</h4>
              <p className="text-gray-700">
                We foster groundbreaking research that addresses complex global challenges and expands the boundaries of
                human knowledge.
              </p>
            </div>

            <div className="bg-burgundy-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-burgundy-700 mb-3">Inclusive Education</h4>
              <p className="text-gray-700">
                We are committed to creating accessible educational opportunities that embrace diversity and promote
                equity in learning.
              </p>
            </div>

            <div className="bg-burgundy-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-burgundy-700 mb-3">Global Impact</h4>
              <p className="text-gray-700">
                We develop solutions and educational models that can be scaled globally to create positive change in
                communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
