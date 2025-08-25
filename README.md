<<<<<<< HEAD
# portfolii
=======
# 🚀 Modern Portfolio Website

A stunning, modern portfolio website built with React.js, featuring beautiful animations, dark theme, and responsive design. This portfolio showcases skills, experience, projects, and provides an interactive way for potential clients and employers to connect.

## ✨ Features

### 🎨 Visual Design
- **Modern Dark Theme** - Eye-catching dark color scheme with gradient accents
- **Smooth Animations** - Powered by Framer Motion for fluid, professional animations
- **Interactive Particles** - Dynamic particle background system
- **Custom Cursor** - Unique cursor follower with interactive states
- **Glass Morphism** - Modern glassmorphism design elements
- **Responsive Design** - Fully responsive across all device sizes

### 📱 User Experience
- **Loading Screen** - Beautiful animated loading screen with progress indicator
- **Smooth Scrolling** - Seamless navigation between sections
- **Interactive Elements** - Hover effects, click animations, and micro-interactions
- **Mobile Optimized** - Touch-friendly interface for mobile devices
- **Performance Optimized** - Fast loading and smooth performance

### 📋 Sections
1. **Hero Section** - Dynamic typing animation with social links
2. **About Me** - Personal introduction with animated statistics
3. **Skills** - Categorized skill sets with progress animations
4. **Experience** - Professional timeline with detailed achievements
5. **Projects** - Filterable portfolio with live demos and source code
6. **Contact** - Interactive contact form with multiple contact options
7. **Footer** - Social links and additional information

## 🛠️ Technologies Used

### Frontend
- **React.js** - Modern JavaScript library for building user interfaces
- **Vite** - Next-generation frontend build tool
- **Framer Motion** - Production-ready motion library for React
- **Lucide React** - Beautiful & consistent icon toolkit
- **CSS3** - Advanced styling with custom properties and animations
- **React Intersection Observer** - Trigger animations on scroll

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Vite HMR** - Hot Module Replacement for fast development
- **Modern JavaScript** - ES6+ features and modern syntax

## 🚀 Getting Started

### Prerequisites
- Node.js (version 20.19+ or 22.12+)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.jsx        # About section with stats
│   ├── Contact.jsx      # Contact form and info
│   ├── CursorFollower.jsx # Custom cursor component
│   ├── Experience.jsx   # Professional timeline
│   ├── Footer.jsx       # Footer with social links
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Main hero section
│   ├── LoadingScreen.jsx # Animated loading screen
│   ├── ParticleBackground.jsx # Particle system
│   ├── Projects.jsx     # Portfolio projects
│   ├── Skills.jsx       # Skills showcase
│   └── *.css           # Component-specific styles
├── assets/             # Static assets
├── index.css          # Global styles and CSS variables
├── main.jsx          # React app entry point
└── App.jsx           # Main app component
```

## 🎨 Customization

### Colors & Theme
The color scheme is defined using CSS custom properties in `src/index.css`:

```css
:root {
  --primary-color: #64ffda;     /* Cyan accent */
  --secondary-color: #ff6b6b;   /* Coral accent */
  --accent-color: #4ecdc4;      /* Teal accent */
  --dark-bg: #0a0a0a;          /* Primary background */
  --darker-bg: #050505;        /* Darker background */
  --light-text: #ffffff;       /* Primary text */
  --gray-text: #a0a0a0;       /* Secondary text */
}
```

### Content Updates
To customize the content:

1. **Personal Information** - Update `Hero.jsx`, `About.jsx`, `Contact.jsx`
2. **Skills** - Modify the skills array in `Skills.jsx`
3. **Experience** - Update the experiences array in `Experience.jsx`
4. **Projects** - Replace project data in `Projects.jsx`
5. **Images** - Add your images to `src/assets/`

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `App.jsx`
3. Update the navigation in `Header.jsx`
4. Add corresponding CSS styles

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px

## 🔧 Performance Features

- **Code Splitting** - Automatic code splitting with Vite
- **Image Optimization** - Optimized images and lazy loading
- **CSS Optimization** - Minimal CSS with efficient selectors
- **Animation Optimization** - GPU-accelerated animations
- **Bundle Optimization** - Tree shaking and minification

## 🚀 Deployment

The project can be deployed to various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

- [ ] Blog section with markdown support
- [ ] Multi-language support (i18n)
- [ ] Dark/Light theme toggle
- [ ] Advanced filtering for projects
- [ ] Integration with CMS (Strapi/Contentful)
- [ ] Progressive Web App (PWA) features
- [ ] Google Analytics integration
- [ ] SEO optimization with React Helmet

## 💬 Support

If you have any questions or need help with customization, feel free to:

- Open an issue in the repository
- Contact via email: [your-email@example.com]
- Connect on social media

---

**Made with ❤️ and lots of ☕**

*This portfolio template provides a solid foundation for showcasing your work in a modern, professional way. Customize it to make it uniquely yours!*

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> f11527f (Initial commit)
