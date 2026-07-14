import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About - My Website</title>
        <meta name="description" content="Learn more about us" />
      </Head>
      <main>
        <Header />
        <div className="min-h-screen bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 text-lg mb-6">
                Welcome to our website! This is a modern, fast, and beautiful website built with the latest web technologies.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                We use Next.js for server-side rendering, Tailwind CSS for styling, and follow best practices for web development.
              </p>
              <p className="text-gray-700 text-lg">
                Whether you're looking to showcase your portfolio, launch a business, or share your ideas, this template provides the perfect foundation.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
