# Copilot Instructions for YousifAbozid.github.io

## Project Overview

This is a personal portfolio website for Yousif Abozid, a Full Stack Software Engineer. The site is built with React 19, TypeScript, Vite, and Tailwind CSS v4. It features a modern, responsive design with a comprehensive theming system (dark/light mode) and smooth animations.

## Architecture & Key Components

### Component Structure

- **Single Page Application**: The site uses a single-page structure with sections rendered in `App.tsx`.
- **Section-based Architecture**: Each major content section is a separate component in `src/components/sections/`.
- **Context-based Theming**: Theme management is handled via React Context in `src/contexts/ThemeProvider.tsx`.
- **Data-driven Content**: Portfolio data is centralized in `src/data/portfolio.ts` as structured TypeScript interfaces.

### Key Patterns

#### Theme System

- Uses semantic color variables defined in `src/globals.css`
- Color scheme follows the pattern:
  ```css
  /* Light Mode: l-bg-1, l-text-2, etc. */
  /* Dark Mode: d-bg-1, d-text-2, etc. */
  ```
- Theme preference is persisted in localStorage and detects system preferences
- Example: `className="bg-l-bg-1 dark:bg-d-bg-1 text-l-text-2 dark:text-d-text-2"`

#### Animation System

- Uses Intersection Observer API through custom hooks in `src/hooks/useScrollAnimation.ts`
- Elements use data attributes for animation type: `data-animate="slide-right"`
- CSS classes defined in `src/globals.css` control animation behavior
- Example:
  ```tsx
  const elementRef = useScrollAnimation({ delay: 200 });
  <div ref={elementRef} data-animate="slide-right">
    Content
  </div>;
  ```

#### Utility Functions

- Common utilities in `src/lib/utils.ts`
- `cn()` function for merging Tailwind classes (using clsx and tailwind-merge)
- Date formatting and calculation helpers
- Debounce/throttle functions for performance optimization

## Development Workflow

### Setup and Installation

```bash
# Clone repository
git clone https://github.com/YousifAbozid/YousifAbozid.github.io.git
cd YousifAbozid.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build and Deployment

- The project uses a 'source' branch for development and builds to 'main' branch for GitHub Pages
- `npm run build` generates static files in the 'dist' directory
- Manual deployment: push to 'source' and deploy to 'main'

### Key Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run fix-all` - Run both lint:fix and format

## Best Practices for this Codebase

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add corresponding data interface/content in `src/data/portfolio.ts`
3. Import and add the section to `App.tsx`

### Styling Guidelines

- Use Tailwind utility classes with the theme system
- For complex components, use the `cn()` utility for conditional classes
- Follow the established pattern for responsive design:
  ```tsx
  <div className="text-base md:text-lg lg:text-xl">...</div>
  ```

### Data Handling

- All content should be sourced from `src/data/portfolio.ts`
- Use TypeScript interfaces to ensure type safety
- Keep UI components focused on presentation logic, not data management

## Known Limitations/Quirks

- When adding animations, note that animation delays > 800ms may not be properly typed
- The scroll animation system re-initializes on each App render
- Theme switching may cause a brief flash when first loading the site
