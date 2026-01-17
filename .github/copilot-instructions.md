# AI Agent Instructions for React Portfolio

## Project Overview
Modern React portfolio built with Vite, Tailwind CSS, and animation libraries (Framer Motion, GSAP). Single-page app with routing to project detail pages. Data-driven architecture with JSON files for projects, experience, and tech stack.

## Architecture & Key Patterns

### Component Structure
- **Pages**: `src/pages/` - Route components (Home, ProjectDetail)
- **Components**: Modular, feature-based organization (Header, Hero, Portfolio, Skills, Experience, Footer)
- **Animation Components**: `src/components/animation/` - Reusable animation wrappers (FadeContent, SplitText, BlurText, GradientText)
- **Data Layer**: JSON files in `public/data/` and `src/Data/` (projectsData.json, experienceData.json, techLogos.js)

### Data Flow Pattern
1. Components fetch JSON via `fetch("/data/projectsData.json")` in useEffect
2. State management: `useState` for local component state (currentPage, selectCategory, loading)
3. Props drilling for pagination and filtering (currentPage, setCurrentpage, selectCategory)
4. Route params for detail pages: `/project-detail/:id` accessed via useParams()

### Animation Pattern
- **Motion Library**: Use `motion/react` (AnimatePresence, motion component)
- **GSAP**: Pre-configured in `@gsap/react` for timeline animations
- **Variants**: Export reusable animation configs from `Portfolio.js` (containerVariants, cardVariants)
- **Trigger Pattern**: IntersectionObserver in FadeContent for scroll-based animations (threshold, rootMargin control)

## Developer Workflows

### Local Development
```bash
npm run dev           # Start Vite dev server (HMR enabled)
npm run build         # Production build to dist/
npm run lint          # ESLint check (ignores dist/)
npm run preview       # Preview production build
```

### Build Configuration
- **Vite Config**: `@vitejs/plugin-react-swc` for fast refresh, Tailwind CSS integration
- **Tailwind**: Configured in `tailwing.config.js` with custom screens (max-xs, xs, sm, md, lg, xl, 2xl, 3xl)
- **Custom Fonts**: Poppins (body), Source Code Pro (code) - defined in tailwind theme
- **Custom Breakpoints**: Media query patterns use named breakpoints (max-xs, xs, sm, md, lg, xl, 2xl, 3xl)

## Project-Specific Conventions

### Naming & Structure
- **Components**: PascalCase files with corresponding .jsx extension
- **CSS Modules**: Used for scoped styles (e.g., `Experience.module.css`)
- **Data Files**: camelCase in src/Data/, kebab-case in public/data/
- **Icon Imports**: Centralized in `src/assets/iconExports/index.js`, imported from react-icons

### Styling Patterns
- **Tailwind-First**: Primary styling approach; breakpoints defined as max-xs, xs, sm, md, lg, xl, 2xl, 3xl
- **clsx Utility**: Use clsx() for conditional class composition (see Experience.jsx example)
- **CSS Utilities**: Gradient animations, custom gradients in `styles/` folder
- **Responsive Layout**: Mobile-first; lg: prefix for desktop changes

### Router Integration
- **React Router v7**: Routes in App.jsx, hash links via react-router-hash-link for smooth scroll
- **ScrollToHash**: Custom ScrollToHash component for navigation to sections
- **Detail Routes**: Dynamic routes with id parameter (`:id`) for project details

### Common Component Props Pattern
```jsx
// Pagination & Filtering Props
Portfolio({ currentPage, setCurrentpage })
// Animation Props
FadeContent({ children, blur, duration, easing, delay, threshold, initialOpacity, className })
// Reusable text animation
SplitText({ tag, text, className, delay, duration, ease })
```

## Critical Integration Points

### JSON Data Integration
- **Projects**: `public/data/projectsData.json` - id, title, caption, url, github, role, category, date, image, preview
- **Tech Stack**: `src/Data/techLogos.js` - exports techLogos array with id, src, category, title, href
- **Experience**: `src/Data/experienceData.json` - education and work history
- Fetch in useEffect with error/loading state management

### External Dependencies
- **Motion**: Use `motion/react` for component animations (prefer over styled-components for animations)
- **GSAP/React**: Timeline animations; check for SWC compatibility
- **React Icons**: Icon library; import from specific packages (SiReact, FaAward, GiGraduateCap)
- **React Scroll**: Hash-based navigation and smooth scrolling
- **React Spinners**: Loading indicators

### ESLint Rules
- Ignores "dist" folder
- Warns on unused variables except those starting with capital letters or "motion"
- Requires components to be exported as default in refresh rules
- Rules defined in `eslint.config.js` - no prop-types enforcement

## Code Patterns to Follow

1. **Fetch Pattern**: Always wrap in try/catch with loading/error state
2. **Animation Trigger**: Use IntersectionObserver in hooks for scroll animations, not imperative triggers
3. **Conditional Styling**: Use clsx() for multiple conditional classes instead of ternary operators
4. **Export Animations**: Reusable animation variants in separate .js files, import to components
5. **Data Shape**: Maintain consistent structure across JSON files; use category field for filtering
