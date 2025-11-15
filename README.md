#  CraveCart - Online Food Ordering Web App

[![React](https://img.shields.io/badge/React-19+-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7+-646CFF.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4+-38B2AC.svg)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5+-5A0EF8.svg)](https://daisyui.com/)

> A modern, responsive food ordering platform built with React and Vite. Order your favorite meals from local restaurants with ease!

## ✨ Features

- 🏪 **Restaurant Discovery** - Browse and search local restaurants
- 🍔 **Menu Browsing** - View detailed menus with images and descriptions
- 🛒 **Shopping Cart** - Add items and manage your order
- 👤 **User Authentication** - Secure login and registration
- 💳 **Payment Integration** - Secure online payments
- 📱 **Responsive Design** - Works on all devices
- ⚡ **Real-time Updates** - Live order tracking
- ⭐ **Reviews & Ratings** - Customer feedback system
- 🎨 **Modern UI** - Clean and intuitive interface

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/crave-cart-client.git
   cd crave-cart-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
crave-cart-client/
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/             # Route components
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API services
│   ├── utils/             # Utility functions
│   ├── constants/         # App constants
│   ├── styles/            # CSS files
│   └── config/            # Configuration
├── docs/                  # Documentation
├── public/                # Static assets
└── tests/                 # Test files
```

> 📋 See [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md) for detailed structure documentation.

## 🛠️ Built With

- **[React 19](https://reactjs.org/)** - UI library
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[DaisyUI](https://daisyui.com/)** - Component library for Tailwind
- **[ESLint](https://eslint.org/)** - Code linting

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Testing (when configured)
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

## 🌍 Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3001/api

# Third-party Services
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key

# Feature Flags
VITE_ENABLE_ANALYTICS=false
```

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Docker
```bash
docker build -t crave-cart-client .
docker run -p 3000:3000 crave-cart-client
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 📚 Documentation

- [Folder Structure](./FOLDER_STRUCTURE.md)
- [API Documentation](./docs/api-reference.md)
- [Contributing Guidelines](./docs/contributing.md)
- [Deployment Guide](./docs/deployment.md)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](./docs/contributing.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **[Tisha Akter]**
- **[Munim ]**


---

<div align="center">
  <p>Made with ❤️ for food lovers everywhere</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
