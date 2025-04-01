import Link from 'next/link'
import { Globe } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
        <Globe className="text-6xl text-blue-500 mx-auto mb-4" />
        <h2 className="text-3xl font-semibold mb-4">Lost in Space</h2>
        <p className="text-gray-600 mb-8">Sorry, we couldn't find the page you were looking for.</p>
        <Link href="/">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Return Home
          </a>
        </Link>
      </div>
    </div>
  )
}