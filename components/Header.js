import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-500">
            MyWebsite
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-500 transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-500 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500 transition">
              Contact
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-500">
              About
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-500">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
