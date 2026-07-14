# My Website

A modern, fast, and beautiful website built with **Next.js** and **Tailwind CSS**.

## 🚀 Features

- ⚡ **Fast Performance** - Optimized for speed with Next.js
- 🎨 **Beautiful Design** - Modern UI built with Tailwind CSS
- 📱 **Mobile Responsive** - Works perfectly on all devices
- 🔒 **Secure & Reliable** - Built with best practices
- 🌐 **SEO Optimized** - Built-in SEO support with Next.js
- 📄 **Multiple Pages** - Home, About, and Contact pages included

## 📁 Project Structure

```
my-website/
├── pages/              # Next.js pages
│   ├── _app.js        # App wrapper
│   ├── _document.js   # Document wrapper
│   ├── index.js       # Home page
│   ├── about.js       # About page
│   └── contact.js     # Contact page
├── components/         # Reusable React components
│   ├── Header.js      # Navigation header
│   ├── Hero.js        # Hero section
│   ├── Features.js    # Features section
│   └── Footer.js      # Footer
├── styles/            # Global styles
│   └── globals.css    # Tailwind CSS imports
├── public/            # Static files
├── package.json       # Dependencies
├── next.config.js     # Next.js config
├── tailwind.config.js # Tailwind CSS config
└── postcss.config.js  # PostCSS config
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/enghos2010/my-website.git
cd my-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js` to customize the color scheme:
```js
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',
      secondary: '#1F2937',
    },
  },
}
```

### Add New Pages
Create a new file in the `pages/` directory. Next.js will automatically create a route for it.

### Modify Components
Edit components in the `components/` directory to customize the design.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Your site will be live in seconds!

### Deploy to Other Platforms

- **Netlify**: Connect your GitHub repo and select Next.js as the preset
- **GitHub Pages**: Build and deploy manually
- **Docker**: Create a Dockerfile for containerization

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created by enghos2010

---

**Happy coding! 🎉**
