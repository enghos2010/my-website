import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to My Website
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Built with Next.js and Tailwind CSS for the best experience
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/about"
            className="bg-white text-blue-500 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="bg-blue-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition border-2 border-white"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
