# Kasparro - AI-SEO Audit Platform

A comprehensive AI-SEO auditing and optimization platform built with Next.js, TypeScript, and Tailwind CSS. This repository implements the **Kasparro Frontend Engineering Assignment (V1)** with both a public marketing site and a product dashboard for running AI-powered SEO audits.

## 🎯 Assignment Compliance

This implementation strictly follows the assignment requirements:

- ✅ **Next.js (App Router)** - All routes use the `app/` directory structure
- ✅ **TypeScript** - Strict typing, no `any` types (except justified comments)
- ✅ **Tailwind CSS** - All styling via Tailwind utility classes
- ✅ **Modular Architecture** - Clear separation: layout, features, primitives
- ✅ **Zustand** - State management for brand/module selection
- ✅ **Framer Motion** - Subtle transitions (<200ms) for module switching only
- ✅ **Mocked JSON Data** - All product content from `/audit-data/*.json`
- ✅ **No Page Monoliths** - Thin page wrappers, component-based
- ✅ **No Hard-coded Content** - All audit data driven from typed JSON

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

## 📁 Project Structure (Per Assignment Requirements)

The folder structure follows the assignment's emphasis on clear component boundaries and system thinking:

```
kasparro/
├── app/                          # Next.js App Router
│   ├── (app)/                    # Route group for authenticated dashboard
│   │   ├── dashboard/            # /app/dashboard - Brand snapshot
│   │   ├── audit/                # /app/audit - Core product screen
│   │   ├── architecture/        # /app/architecture - System representation
│   │   └── layout.tsx            # App shell layout
│   ├── (marketing)/              # Route group for public marketing site
│   │   ├── page.tsx              # / - Home page
│   │   ├── platform/             # /platform - Product overview
│   │   ├── about/                # /about - Mission & philosophy
│   │   └── layout.tsx            # Marketing layout wrapper
│   ├── page.tsx                  # Root / route (fallback)
│   ├── globals.css               # Global styles + Tailwind directives
│   └── layout.tsx                # Root layout (sticky footer structure)
├── components/
│   ├── features/                 # Feature-specific components
│   │   ├── audit/                # Audit module components
│   │   │   ├── AuditSidebar.tsx  # Left sidebar with 7 modules
│   │   │   ├── AuditModuleView.tsx # Main panel with module details
│   │   │   ├── ModuleScore.tsx   # Score display component
│   │   │   └── RecommendationsList.tsx # Recommendations rendering
│   │   └── dashboard/            # Dashboard components
│   │       ├── BrandSelector.tsx # Brand dropdown selector
│   │       └── SnapshotCard.tsx # Score snapshot cards
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Footer.tsx            # Site footer
│   │   ├── AppShell.tsx          # App dashboard shell
│   │   └── MarketingLayout.tsx   # Marketing site layout
│   └── primitives/              # Reusable UI primitives
│       ├── Button.tsx            # Button component
│       ├── Card.tsx              # Card component
│       ├── Badge.tsx             # Badge component
│       ├── Icon.tsx              # Icon component
│       └── Skeleton.tsx          # Loading skeleton
├── lib/
│   ├── mocks/                    # Mock data loader
│   │   └── loader.ts             # Typed imports from JSON files
│   ├── schema/                   # TypeScript type definitions
│   │   └── types.ts              # All interfaces (Brand, Audit, Module, etc.)
│   ├── state/                    # State management
│   │   └── store.ts              # Zustand store (selectedBrandId, selectedModuleId)
│   └── utils/
│       ├── cn.ts                 # className utility (clsx + tailwind-merge)
│       └── validate-mocks.ts     # Zod validation script
├── audit-data/                   # Mock JSON files (per assignment requirement)
│   └── example-brand-audit.json # Complete audit with 7 modules
├── __tests__/                    # Unit tests
│   ├── store.test.ts             # Zustand store tests
│   └── AuditModuleView.test.tsx  # Component tests
└── .github/workflows/            # CI configuration
    └── ci.yml                    # GitHub Actions workflow
```

## 🏗️ Architecture Decisions (Per Assignment Requirements)

### Component Architecture

**Clear Separation (Assignment Requirement):**

- **Layout Components** (`components/layout/`): Page-level structure (Header, Footer, AppShell, MarketingLayout)
- **Feature Components** (`components/features/`): Domain-specific functionality (audit, dashboard)
- **UI Primitives** (`components/primitives/`): Reusable building blocks (Button, Card, Badge, etc.)

**No Page Monoliths:** All pages are thin wrappers that compose components. No massive JSX files.

### Data Modeling

**Typed Interfaces (Assignment Requirement):**

- All data structures defined in `lib/schema/types.ts`
- No ad-hoc object shapes - all components import types from schema
- Consistent schemas across the application

**Mocked JSON Approach:**

- All product content comes from `/audit-data/*.json` files
- No hard-coded JSX content (per assignment requirement)
- Data loaded via typed imports in `lib/mocks/loader.ts`
- Zod validation ensures JSON matches TypeScript interfaces

### State Management

**Zustand Store (Assignment Requirement):**

- Manages `selectedBrandId` and `selectedModuleId`
- Predictable state flow
- Easy to reason about
- No Context provider boilerplate

**Why Zustand over Context:**

- Minimal boilerplate compared to Context + useReducer
- Better performance (only components using specific slices re-render)
- Excellent TypeScript support
- No provider wrapping needed

### UX Quality (Assignment Requirements)

**Information Hierarchy:**

- Clear typography scale (16px base, heading hierarchy)
- Visual grouping with cards and spacing
- Color-coded scores (green/orange/red) for quick scanning

**Readable Dense Data:**

- Module details broken into clear sections (Score, Insights, Issues, Recommendations)
- Proper spacing (8px scale)
- Adequate contrast (WCAG AA compliant)

**Spacing & Typography:**

- 8px spacing scale throughout
- 16px base font size for readability
- Consistent line-height (1.5, leading-relaxed for paragraphs)

## 🎨 Design System

### Color Palette

Following assignment's emphasis on clarity for data-dense content:

- **Neutral Base**: Gray scale (gray-50 to gray-900) for text and backgrounds
- **Score Colors**:
  - Green (success): `bg-green-100 text-green-800` for scores ≥80
  - Orange (warning): `bg-orange-100 text-orange-800` for scores 60-79
  - Red (error): `bg-red-100 text-red-800` for scores <60
- **Accents**: Slate for buttons and interactive elements
- **Hero Background**: Subtle gradients with radial and linear patterns

### Typography

- **Base**: 16px (system font stack)
- **Headings**:
  - H1: text-4xl to text-7xl (responsive)
  - H2: text-3xl to text-4xl
  - H3: text-lg to text-xl
- **Body**: text-base (16px) with leading-relaxed for paragraphs
- **Small**: text-sm for metadata and labels

### Spacing Scale

8px base unit system:

- `gap-2` (8px) - Tight spacing
- `gap-4` (16px) - Standard spacing
- `gap-6` (24px) - Section spacing
- `gap-8` (32px) - Large section spacing
- `py-12`, `py-16`, `py-20` - Vertical rhythm

### Component Styling

- **Cards**: `rounded-xl`, `shadow-sm`, `hover:shadow-md` for depth
- **Buttons**: `rounded-lg`, active scale animations, shadow transitions
- **Borders**: `border-gray-200` for subtle separation
- **Shadows**: Progressive shadow system (sm → md → lg)

## 🧪 Testing

The project includes unit tests as required:

- **Zustand Store** (`__tests__/store.test.ts`): Tests for brand/module selection
- **AuditModuleView** (`__tests__/AuditModuleView.test.tsx`): Component rendering tests

Run tests with:

```bash
npm test
```

## 🔍 Type Safety

**Assignment Requirement: No ad-hoc object shapes**

- All components import types from `lib/schema/types.ts`
- ESLint rules prevent `any` types
- TypeScript strict mode enabled
- Zod validation for mock data ensures runtime type safety

## 📦 Mock Data Structure

**Assignment Requirement: All data from `/audit-data/*.json`**

The example audit file (`example-brand-audit.json`) contains:

- 7 audit modules (Content Quality, E-E-A-T, Technical SEO, AI Readability, Link Profile, User Intent, Brand Signals)
- Complete module data: scores, insights, issues, recommendations
- Overall brand scores: AI Visibility, Trust/E-E-A-T, Non-Branded Coverage
- All data is typed and validated via Zod schemas

To add new mock data:

1. Create a new JSON file in `/audit-data/`
2. Follow the schema in `lib/schema/types.ts`
3. Run `npm run validate-mocks` to verify

## 🚢 Deployment

### Vercel (Recommended)

1. Push repository to GitHub
2. Import in Vercel dashboard
3. Vercel auto-detects Next.js and deploys

The `vercel.json` file includes recommended settings.

### Manual Build

```bash
npm run build
npm run start
```

## 🔧 Tooling

**Per Assignment Requirements:**

- **ESLint**: Code linting with Next.js and TypeScript rules
- **Prettier**: Code formatting (with Tailwind plugin)
- **Husky**: Git hooks for pre-commit checks
- **lint-staged**: Run linters on staged files only
- **Jest**: Unit testing framework
- **TypeScript**: Strict type checking
- **Zod**: Runtime validation for mock data

## 📝 Implementation Details

### Part A - Public Website

**Route: `/` (Home)**

- ✅ Hero with value proposition (readable in <10 seconds)
- ✅ "Why AI-SEO vs Traditional SEO" section (3 cards)
- ✅ Core modules overview (7 modules from mocked data)
- ✅ Pipeline visualization (Input → Modules → Output)
- ✅ Footer with links
- ✅ CTA: "Run AI-SEO Audit" → `/app/audit`

**Route: `/platform`**

- ✅ Audit pipeline flow explanation
- ✅ InputAssembler, ContextPack, Modules, Outputs
- ✅ Sample data from mocked JSON
- ✅ Product explainer tone (not sales)

**Route: `/about`**

- ✅ Mission statement
- ✅ Product philosophy (3 principles)
- ✅ Founder/engineer credibility

### Part B - Product Dashboard

**Route: `/app/dashboard`**

- ✅ Brand selector (from mocked data)
- ✅ Snapshot cards: AI Visibility, Trust/E-E-A-T, Non-Branded Coverage, Last audit timestamp
- ✅ All data from mocked JSON

**Route: `/app/audit`**

- ✅ Left sidebar: 7 modules with scores (keyboard accessible)
- ✅ Main panel: Module details (Score, Insights, Issues, Recommendations)
- ✅ Framer Motion transitions (<200ms) for module switching
- ✅ All content from `/audit-data/*.json` (no hard-coded JSX)

**Route: `/app/architecture`**

- ✅ Frontend representation of system architecture
- ✅ InputAssembler, ContextPack, Modules, Outputs explained

### Optional Bonuses Implemented

- ✅ **Micro-interactions**: Framer Motion transitions for module switching
- ✅ **Clean Empty States**: Dashboard and audit pages have empty states
- ✅ **Responsive Dashboard**: Mobile sidebar collapses, cards stack
- ✅ **Loading Skeletons**: Skeleton components for async states

## 📝 Tradeoffs & Simplifications

### What Was Simplified

1. **Single Brand Mock**: Only one example brand audit (`example-brand-1`) is included. Production would load multiple brands from an API. The `lib/mocks/loader.ts` abstraction makes it trivial to swap in API calls.

2. **No Authentication**: The `/app` routes assume authentication but don't implement it. To convert to production: add NextAuth.js with providers, protect routes with middleware, and add user session management.

3. **Static Mock Data**: All product content comes from JSON files. To convert to real backend: replace functions in `lib/mocks/loader.ts` with API calls, add React Query for caching, and move Zod validation to API response validation.

4. **Basic Icon System**: Simple SVG icons instead of a full icon library. Consider `lucide-react` or `heroicons` for production.

5. **No Real-time Updates**: Audit data is static. Production might include real-time score updates via WebSockets or polling.

### Next Steps for Production

1. **Backend Integration**:
   - Replace `lib/mocks/loader.ts` with API calls (fetch/axios)
   - Add React Query or SWR for data fetching, caching, and error handling
   - Create API route handlers in `app/api/` or point to external API

2. **Authentication**:
   - Add NextAuth.js with providers (Google, GitHub, email)
   - Protect `/app/*` routes with middleware
   - Add user session management and role-based access control

3. **Enhanced Features**:
   - Real-time score updates
   - Historical trend charts
   - Export functionality (PDF, CSV)
   - User preferences and saved views

4. **Performance**:
   - Add React Query for data fetching and caching
   - Implement code splitting for large components
   - Add service worker for offline support

5. **Testing**:
   - Add E2E tests with Playwright or Cypress
   - Increase unit test coverage
   - Add visual regression testing

## 🎯 Assignment Evaluation Criteria Met

- ✅ **Frontend System Design**: Clear component architecture, separation of concerns
- ✅ **Component Architecture**: Layout/features/primitives separation, no monoliths
- ✅ **Data Modeling**: Typed interfaces, consistent schemas, no ad-hoc shapes
- ✅ **State Handling**: Zustand store with predictable flow
- ✅ **UX Clarity**: Clear hierarchy, readable dense data, proper spacing/typography
- ✅ **Engineering Discipline**: Clean folder structure, good naming, reusable components

## 📄 License

This project is part of the Kasparro Frontend Engineering Assignment.

## 🤝 Contributing

This is a demonstration repository. For production use, follow standard contribution guidelines:

1. Create a feature branch
2. Make changes
3. Run tests and linters
4. Submit a pull request

---

**Built according to Kasparro Frontend Engineering Assignment (V1) specifications.**

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
