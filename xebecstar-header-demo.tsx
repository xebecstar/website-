import { XebecstarHeader } from "./components/xebecstar-header"

export default function HeaderDemo() {
  return (
    <div className="min-h-screen bg-gray-100">
      <XebecstarHeader />

      {/* Demo content to show the header in context */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Xebecstar</h1>
          <p className="text-gray-600 mb-6">
            This is a demo page showing the universal Xebecstar header. Hover over the "XEBECSTAR" text in the top right
            corner to see the mega menu dropdown.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Universal Design</h3>
              <p className="text-sm text-gray-600">
                This header can be embedded across all Xebecstar division websites
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Expandable</h3>
              <p className="text-sm text-gray-600">Easy to add new divisions and businesses as the company grows</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Responsive</h3>
              <p className="text-sm text-gray-600">Optimized for all screen sizes and devices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
