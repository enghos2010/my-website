export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Fast Performance',
      description: 'Built with Next.js for lightning-fast page loads and optimal performance.',
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Styled with Tailwind CSS for a modern, responsive, and stunning UI.',
    },
    {
      icon: '📱',
      title: 'Mobile Responsive',
      description: 'Works perfectly on all devices - desktop, tablet, and mobile.',
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Built with security best practices and modern web standards.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">
            Everything you need for a modern web presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md p-8 text-center hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
