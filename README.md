# Yousif Abozid - Personal Portfolio

A modern, responsive portfolio website showcasing my experience as a Full Stack Software Engineer. Built with React 19, TypeScript, Vite, and Tailwind CSS v4, featuring a comprehensive theming system with dark mode support and smooth animations.

🌐 **Live Demo**: [yousifabozid.github.io](https://yousifabozid.github.io)

## 🚀 About Me

I'm a passionate Full Stack Software Engineer with 4+ years of experience creating robust, scalable applications. I specialize in React, TypeScript, Node.js, and cloud technologies, with a focus on delivering high-quality solutions that exceed expectations.

## ✨ Features

### 🎨 Design & User Experience

- **Modern UI/UX**: Clean, professional design with attention to detail
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Dark/Light Mode**: Complete theming system with user preference persistence
- **Smooth Animations**: Intersection Observer-based scroll animations
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Accessibility**: Built with accessibility best practices in mind

### 📱 Technical Features

- **Typed Animations**: Dynamic typewriter effect in hero section
- **Scroll Animations**: Elements animate in as they come into view
- **Theme Persistence**: User's theme preference saved to localStorage
- **System Theme Detection**: Automatically detects user's system preference
- **Performance Optimized**: Fast loading with optimized builds
- **SEO Friendly**: Proper meta tags and semantic HTML structure

### 📄 Content Sections

- **Hero Section**: Dynamic introduction with typing animation
- **About**: Personal background and professional journey
- **Experience**: Detailed work history with achievements and technologies
- **Skills**: Categorized skill set with proficiency levels
- **Projects**: Portfolio of notable projects and contributions
- **Testimonials**: Professional recommendations and feedback
- **Contact**: Multiple ways to get in touch
- **Footer**: Additional links and information

## 🛠️ Technologies Used

### Frontend

- **React 19**: Latest version with improved performance and features
- **TypeScript**: Static type checking for robust code
- **Tailwind CSS v4**: Utility-first CSS framework with dark mode
- **Lucide React**: Beautiful, customizable SVG icons
- **Custom Hooks**: Reusable logic for scroll animations and theme management

### Form Handling & Validation

- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema declaration and validation
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### UI Components

- **Radix UI**: Accessible, unstyled UI primitives
  - Dialog, Dropdown Menu, Form, Select, Switch, Tabs
- **Custom Components**: Tailored components for specific needs

### Build Tools & Development

- **Vite**: Next-generation frontend tooling
- **ESLint**: Code linting with React and TypeScript support
- **Prettier**: Code formatting for consistency
- **Husky**: Git hooks for code quality
- **lint-staged**: Run linters on staged files

### Styling & Theming

- **CSS Custom Properties**: Semantic color variables
- **Tailwind Merge**: Utility for merging Tailwind classes
- **CLSX**: Conditional class name utility
- **Font Integration**: Inter and JetBrains Mono fonts

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/YousifAbozid/YousifAbozid.github.io.git
   cd YousifAbozid.github.io
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm run preview  # Preview the production build
```

## 📁 Project Structure

```
YousifAbozid.github.io/
├── public/                     # Static assets
│   ├── favicon.png
│   └── Yousif_Abozid_Resume.pdf
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── sections/           # Page sections
│   │       ├── About.tsx
│   │       ├── Contact.tsx
│   │       ├── Experience.tsx
│   │       ├── Hero.tsx
│   │       ├── Projects.tsx
│   │       ├── Skills.tsx
│   │       └── Testimonials.tsx
│   ├── contexts/               # React contexts
│   │   └── ThemeProvider.tsx   # Theme management
│   ├── data/                   # Static data
│   │   └── portfolio.ts        # Portfolio content
│   ├── hooks/                  # Custom React hooks
│   │   └── useScrollAnimation.ts
│   ├── lib/                    # Utility functions
│   │   └── utils.ts
│   ├── App.tsx                 # Main application component
│   ├── main.tsx               # Application entry point
│   ├── globals.css            # Global styles and theme variables
│   └── vite-env.d.ts          # Vite type definitions
├── eslint.config.js           # ESLint configuration
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── README.md                  # Project documentation
```

## 🎨 Theme System

The portfolio features a comprehensive theming system with semantic color variables:

### Color Categories

- **Background Colors**: Primary, secondary, tertiary backgrounds
- **Text Colors**: Primary, secondary, tertiary, and inverted text
- **Accent Colors**: Primary, secondary, success, warning, danger
- **Border Colors**: Light and dark mode borders
- **Shadow Colors**: Consistent shadow effects

### Usage Examples

```tsx
// Background with theme colors
<div className="bg-l-bg-1 dark:bg-d-bg-1">

// Text with theme colors
<p className="text-l-text-2 dark:text-d-text-2">

// Accent colors
<button className="bg-primary hover:bg-primary-dark">
```

### Customizing Colors

Modify theme variables in `src/globals.css`:

```css
@theme {
  --color-primary: hsl(217.2 91.2% 59.8%);
  --color-l-bg-1: #ffffff;
  --color-d-bg-1: #0d1117;
  /* Add your custom colors */
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large Screens**: 1440px+

## 🔧 Available Scripts

- **`npm run dev`**: Start development server
- **`npm run build`**: Build for production
- **`npm run preview`**: Preview production build
- **`npm run lint`**: Run ESLint
- **`npm run lint:fix`**: Fix ESLint issues
- **`npm run format`**: Format code with Prettier
- **`npm run format:check`**: Check formatting
- **`npm run fix-all`**: Run both lint:fix and format
- **`npm run type-check`**: TypeScript type checking
- **`npm run upgrade`**: Update dependencies

## 📧 Contact

- **Email**: [yousif.abozid@yahoo.com](mailto:yousif.abozid@yahoo.com)
- **LinkedIn**: [linkedin.com/in/yousifabozid](https://linkedin.com/in/yousifabozid)
- **GitHub**: [github.com/YousifAbozid](https://github.com/YousifAbozid)
- **Twitter**: [twitter.com/YousifAbozid12](https://twitter.com/YousifAbozid12)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

While this is a personal portfolio, I welcome suggestions and improvements! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio designs and UI/UX best practices
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful SVG icons
- **Fonts**: [Inter](https://rsms.me/inter/) and [JetBrains Mono](https://www.jetbrains.com/mono/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) for accessible primitives
- **Color Palette**: GitHub's design system for dark mode inspiration

---

**Built with ❤️ by Yousif Abozid**

_This portfolio represents my journey as a Full Stack Software Engineer and showcases the projects and experiences that have shaped my career in technology._
