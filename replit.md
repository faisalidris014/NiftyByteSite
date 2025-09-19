# Overview

NiftyByte Technologies is a comprehensive IT consulting company website built as a full-stack application. The platform showcases the company's services, industry expertise, and provides an interactive contact system with intelligent booking recommendations. The application features a modern, gradient-themed design with dark styling and includes pages for services, industries, resources, blog, about, and contact functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Tooling**: React 18 with TypeScript, using Vite as the build tool and development server. The application uses Wouter for client-side routing instead of React Router.

**UI Components**: Built with shadcn/ui components library using Radix UI primitives for accessibility. Tailwind CSS provides utility-first styling with custom brand colors and gradients.

**State Management**: TanStack Query (React Query) handles server state management and API caching. Local component state is managed with React hooks.

**Styling System**: Custom design system with brand-specific color palette (NiftyByte purple/pink gradients), custom component variants (GlowButton, GlowCard, GradientText), and CSS animations for interactive elements.

## Backend Architecture

**Server Framework**: Express.js with TypeScript, featuring middleware for logging, JSON parsing, and error handling.

**API Design**: RESTful API endpoints for contact form submissions with validation using Zod schemas. Currently implements in-memory storage but structured for easy database integration.

**Data Validation**: Comprehensive input validation using Zod schemas that are shared between frontend and backend, ensuring type safety across the stack.

## Database Design

**ORM & Schema**: Drizzle ORM with PostgreSQL dialect configured for future database integration. Schema includes users table and contact_inquiries table with proper typing.

**Current Storage**: Temporary in-memory storage implementation that matches the database schema structure, allowing for seamless transition to PostgreSQL.

## Business Logic Features

**Intelligent Booking System**: Dynamic booking recommendations based on form data (company size and urgency level determine whether free or paid consultation is offered).

**Contact Flow**: Multi-step contact process where users fill out intake form first, then see appropriate booking options based on their responses.

**Content Management**: Structured content for services, industries, testimonials, and blog posts with proper TypeScript interfaces.

## Development & Deployment

**Build Process**: Vite handles frontend bundling, esbuild compiles the backend, with separate development and production configurations.

**Development Tools**: Replit-specific plugins for development experience, runtime error overlays, and cartographer integration.

**Type Safety**: Comprehensive TypeScript coverage with shared types between client and server, path mapping for clean imports.

# External Dependencies

## Database & Storage
- **Neon Database**: PostgreSQL hosting (configured via @neondatabase/serverless)
- **Drizzle ORM**: Database ORM and query builder with PostgreSQL dialect

## UI & Styling
- **Tailwind CSS**: Utility-first CSS framework with custom brand configuration
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Accessible component primitives for complex UI elements
- **Lucide React**: Icon library for consistent iconography

## Frontend Libraries
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with @hookform/resolvers for validation
- **Wouter**: Lightweight client-side routing
- **date-fns**: Date manipulation and formatting

## Development Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Fast JavaScript bundler for backend compilation
- **tsx**: TypeScript execution for development server

## External Fonts & Icons
- **Google Fonts**: Inter and Sora font families
- **Font Awesome**: Icon library via CDN for enhanced iconography

## Replit Integration
- **Replit Dev Banner**: Development environment integration
- **Vite Plugin Runtime Error Modal**: Enhanced error reporting in development
- **Cartographer Plugin**: Replit-specific development tooling