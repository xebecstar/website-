export default function EntertainmentPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Xebecstar Entertainment</h1>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Xebecstar Entertainment creates immersive media, gaming, and entertainment experiences that captivate
            audiences worldwide. From blockbuster films to chart-topping games, we're in the business of creating
            unforgettable stories and experiences.
          </p>
          <p className="text-gray-700 mb-4">
            Our diverse portfolio spans multiple entertainment mediums, including film production, television
            programming, video game development, and digital content creation. We leverage cutting-edge technology and
            creative talent to push the boundaries of entertainment.
          </p>
          <p className="text-gray-700">
            With studios and creative teams around the globe, we're committed to delivering premium entertainment that
            resonates with diverse audiences and creates lasting cultural impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To create immersive entertainment experiences that inspire, entertain, and connect people across the
              globe.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be the world's premier entertainment company, known for innovative storytelling and unforgettable
              experiences.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Key Focus Areas</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Film & Television</h4>
                <p className="text-gray-700">Award-winning productions spanning multiple genres and formats.</p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Interactive Gaming</h4>
                <p className="text-gray-700">Immersive gaming experiences across console, PC, and mobile platforms.</p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Digital Content</h4>
                <p className="text-gray-700">Streaming platforms and digital content creation for modern audiences.</p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-blue-600">•</div>
              <div>
                <h4 className="font-medium">Virtual Reality</h4>
                <p className="text-gray-700">
                  Pioneering VR and AR experiences that push the boundaries of immersive entertainment.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
