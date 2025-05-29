export default function EntertainmentLeadershipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Leadership</h1>
        <p className="text-lg text-gray-700 mb-8">
          Meet the creative minds and visionaries leading Xebecstar Entertainment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* CEO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Alexandra Rivera</h3>
              <p className="text-purple-600 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-700">
                With a background in film production and digital media, Alexandra leads Xebecstar Entertainment with a
                focus on innovative storytelling and global audience engagement.
              </p>
            </div>
          </div>

          {/* CCO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">James Wilson</h3>
              <p className="text-purple-600 font-medium mb-4">Chief Creative Officer</p>
              <p className="text-gray-700">
                James oversees all creative development across our entertainment divisions, ensuring compelling content
                that resonates with diverse audiences worldwide.
              </p>
            </div>
          </div>

          {/* CTO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Hiroshi Tanaka</h3>
              <p className="text-purple-600 font-medium mb-4">Chief Technology Officer</p>
              <p className="text-gray-700">
                Hiroshi leads our technology initiatives, driving innovation in gaming, virtual reality, and digital
                content delivery platforms.
              </p>
            </div>
          </div>

          {/* CFO */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-2 bg-gray-100">
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Olivia Chen</h3>
              <p className="text-purple-600 font-medium mb-4">Chief Financial Officer</p>
              <p className="text-gray-700">
                Olivia manages the financial strategy of Xebecstar Entertainment, balancing creative investment with
                sustainable growth and profitability.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Creative Philosophy</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 text-purple-600">•</div>
              <div>
                <h4 className="font-medium">Innovative Storytelling</h4>
                <p className="text-gray-700">
                  We push the boundaries of narrative and create immersive experiences that captivate audiences.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-purple-600">•</div>
              <div>
                <h4 className="font-medium">Diverse Perspectives</h4>
                <p className="text-gray-700">
                  We champion inclusive storytelling that reflects the rich diversity of global cultures and
                  experiences.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-purple-600">•</div>
              <div>
                <h4 className="font-medium">Technological Excellence</h4>
                <p className="text-gray-700">
                  We leverage cutting-edge technology to create entertainment experiences that weren't possible before.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 text-purple-600">•</div>
              <div>
                <h4 className="font-medium">Audience Connection</h4>
                <p className="text-gray-700">
                  We create content that resonates emotionally and intellectually with audiences around the world.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
