# Kasparro - AI-SEO Audit Platform

A comprehensive AI-SEO auditing and optimization platform built with Next.js, TypeScript, and Tailwind CSS. This repository contains both a public marketing site and a product dashboard for running AI-powered SEO audits.

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm or pnpm (pnpm preferred)

### Installation

```bash
# Using npm
npm install

# Using pnpm (recommended)
pnpm install
```

### Development

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run Jest tests
- `npm run validate-mocks` - Validate mock JSON files against Zod schemas
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
kasparro/
├── app/
│   ├── (app)/              # App routes (authenticated)
│   │   ├── dashboard/      # Dashboard page
│   │   ├── audit/          # Audit interface
│   │   └── architecture/   # Architecture overview
│   ├── (marketing)/        # Marketing routes (public)
│   │   ├── page.tsx        # Home page
│   │   ├── platform/       # Platform overview
│   │   └── about/          # About page
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout
├── components/
│   ├── features/
│   │   ├── audit/          # Audit-specific components
│   │   └── dashboard/     # Dashboard components
│   ├── layout/             # Layout components
│   └── primitives/         # Reusable UI primitives
├── lib/
│   ├── mocks/              # Mock data loader
│   ├── schema/             # TypeScript type definitions
│   ├── state/              # Zustand store
│   └── utils/              # Utility functions
├── audit-data/             # Mock JSON files
├── __tests__/              # Unit tests
└── .github/workflows/      # CI configuration
```

## 🏗️ Architecture Decisions

### State Management: Zustand over Context

**Why Zustand?**

- **Simplicity**: Minimal boilerplate compared to Context + useReducer
- **Performance**: Only components that use specific store slices re-render
- **Developer Experience**: No provider wrapping needed, direct hook usage
- **Type Safety**: Excellent TypeScript support out of the box
- **Bundle Size**: Smaller than Redux, similar to Context but with better ergonomics

For this project, we only need to manage `selectedBrandId` and `selectedModuleId` across a few components. Zustand provides the perfect balance of simplicity and power without the overhead of Context providers or Redux complexity.

### Mocked JSON Approach

**Why import JSON directly instead of API calls?**

- **Simplicity for Reviewers**: No backend setup required, reviewers can run the app immediately
- **Type Safety**: JSON files are validated against Zod schemas at build time
- **Fast Iteration**: Easy to add new mock data without database setup
- **Production-Ready Pattern**: The `lib/mocks/loader.ts` abstraction makes it trivial to swap in real API calls later

The `validate-mocks` script ensures all JSON files match the expected schema, catching data issues early.

### Component Structure

- **Primitives**: Small, reusable UI components (Button, Card, Badge, etc.)
- **Features**: Domain-specific components grouped by feature (audit, dashboard)
- **Layout**: Page-level layout components
- **Pages**: Thin wrappers that compose features and layouts

This structure scales well and keeps components focused and testable.

## 🎨 Design System

- **Base Font Size**: 16px for readability
- **Spacing Scale**: 8px base unit (2px, 4px, 8px, 16px, 24px, 32px, etc.)
- **Color System**: Neutral palette with semantic colors for scores (green/orange/red)
- **Accessibility**: WCAG AA compliant, keyboard navigation, ARIA labels
- **Responsive**: Mobile-first design, sidebar collapses on mobile

## 🧪 Testing

The project includes unit tests for:

- Zustand store (`__tests__/store.test.ts`)
- AuditModuleView component (`__tests__/AuditModuleView.test.tsx`)

Run tests with:

```bash
npm test
```

## 🔍 Type Safety

All components must import types from `lib/schema/types.ts`. The project enforces this through:

- ESLint rules preventing `any` types
- TypeScript strict mode
- Zod validation for mock data

## 📦 Mock Data

Mock audit data is stored in `/audit-data/*.json`. The example file includes:

- 7 audit modules (Content Quality, E-E-A-T, Technical SEO, AI Readability, Link Profile, User Intent, Brand Signals)
- Realistic scores, insights, issues, and recommendations
- All data is typed and validated

To add new mock data:

1. Create a new JSON file in `/audit-data/`
2. Follow the schema defined in `lib/schema/types.ts`
3. Run `npm run validate-mocks` to verify

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in Vercel
3. Vercel will auto-detect Next.js and deploy

The `vercel.json` file includes recommended settings.

### Manual Build

```bash
npm run build
npm run start
```

## 🔧 Tooling

- **ESLint**: Code linting with Next.js and TypeScript rules
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit checks
- **lint-staged**: Run linters on staged files only
- **Jest**: Unit testing
- **TypeScript**: Strict type checking

## 📝 Tradeoffs & Simplifications

### What Was Simplified

1. **Single Brand Mock**: Only one example brand audit is included. In production, you'd load multiple brands from an API.
2. **No Authentication**: The `/app` routes assume authentication but don't implement it. In production, add NextAuth.js or similar.
3. **Static Mock Data**: All data comes from JSON files. Production would fetch from a backend API.
4. **Basic Icon System**: Simple SVG icons instead of a full icon library. Consider `lucide-react` or `heroicons` for production.
5. **No Real-time Updates**: Audit data is static. Production might include real-time score updates.

### Next Steps for Production

1. **Backend Integration**:
   - Replace `lib/mocks/loader.ts` with API calls
   - Add authentication (NextAuth.js recommended)
   - Implement real audit data fetching

2. **Enhanced Features**:
   - Real-time score updates
   - Historical trend charts
   - Export functionality (PDF, CSV)
   - User preferences and saved views

3. **Performance**:
   - Add React Query for data fetching and caching
   - Implement code splitting for large components
   - Add service worker for offline support

4. **Testing**:
   - Add E2E tests with Playwright or Cypress
   - Increase unit test coverage
   - Add visual regression testing

## 📄 License

This project is part of a frontend engineering assignment.

## 🤝 Contributing

This is a demonstration repository. For production use, follow standard contribution guidelines:

1. Create a feature branch
2. Make changes
3. Run tests and linters
4. Submit a pull request

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
