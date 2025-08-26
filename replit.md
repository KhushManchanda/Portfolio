# Portfolio Website

## Overview

This is a modern, responsive portfolio website built for Khush Manchanda, a Computer Science graduate student at Arizona State University. The application showcases his software development experience, mobile and web projects, technical skills, and provides a contact form for potential opportunities. The site is built using a full-stack architecture with React frontend and Express backend.

## Recent Changes (January 2025)

- Updated all content to reflect Khush's latest resume and experience
- Changed experience from Graduate Services Assistant to Instructional Assistant for CSE 110
- Added Software Developer role for Mobile AR Application project
- Updated Software Engineer Intern experience at Vayumegha Systems
- Replaced projects with current work: BreatheFree app, WanderMind travel planner, and manufacturing tracker
- Expanded technical skills to include mobile development, AI integration, and modern frameworks
- Updated leadership section to reflect current technical achievements
- Connected to PostgreSQL database for contact form storage
- Updated resume download to use latest SWE resume file

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between frontend and backend concerns:

- **Frontend**: React-based single-page application built with Vite
- **Backend**: Express.js REST API server
- **Database**: PostgreSQL with Drizzle ORM (configured but using in-memory storage currently)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Deployment**: Production-ready build system with separate client/server builds

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Build Tool**: Vite with hot module replacement for development

### Backend Architecture
- **Server**: Express.js with TypeScript
- **API Design**: RESTful endpoints with proper error handling
- **File Serving**: Static file serving for resume downloads
- **Middleware**: Request logging, JSON parsing, and error handling
- **Development**: Hot reload with tsx for server-side development

### Database Design
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Type-safe database schemas with Zod validation
- **Tables**: Users and contacts tables defined
- **Current State**: In-memory storage implementation (MemStorage class)
- **Migration Ready**: Drizzle migrations configured for future database deployment

### Component Structure
The frontend is organized into logical sections:
- Navigation with smooth scrolling
- Hero section with resume download
- About section with educational background
- Experience timeline with work history
- Projects showcase with technology tags
- Skills visualization with progress indicators
- Leadership achievements
- Contact form with backend integration
- Responsive footer

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express routes handle requests with validation
3. **Data Processing**: Zod schemas validate incoming data
4. **Storage**: Currently uses in-memory storage, ready for database integration
5. **Response**: JSON responses with proper error handling
6. **UI Updates**: React Query manages cache and UI state updates

### Key API Endpoints
- `POST /api/contact` - Contact form submission
- `GET /api/resume/download` - Resume file download

## External Dependencies

### Production Dependencies
- **UI Framework**: React ecosystem with Radix UI components
- **Database**: Drizzle ORM with Neon serverless PostgreSQL driver
- **Validation**: Zod for runtime type checking
- **HTTP Client**: Fetch API with TanStack Query wrapper
- **Icons**: Lucide React icon library
- **Date Handling**: date-fns utility library

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **TypeScript**: Full type safety across the stack
- **Styling**: PostCSS with Tailwind CSS
- **Development Server**: Express with Vite middleware integration

### Third-party Integrations
- **Fonts**: Google Fonts (Inter family)
- **Images**: Unsplash for placeholder images
- **File Storage**: Local file system for resume storage
- **Replit Integration**: Development banner and error overlay

## Deployment Strategy

### Development Environment
- Vite dev server for frontend with HMR
- Express server with tsx hot reload
- Integrated development experience with proxy setup
- Environment-specific configurations

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: esbuild compiles TypeScript server to `dist/index.js`
- **Assets**: Static files served by Express in production
- **Process**: Single Node.js process serves both API and static files

### Database Strategy
- Currently using in-memory storage for development
- Drizzle configuration ready for PostgreSQL deployment
- Environment variable-based database URL configuration
- Migration system in place for schema updates

### Key Features
- Responsive design for all screen sizes
- Professional portfolio presentation
- Contact form with backend validation
- Resume download functionality
- Smooth scrolling navigation
- Toast notifications for user feedback
- Loading states and error handling
- SEO-friendly structure

The application is designed to be easily deployable to platforms like Replit, Vercel, or traditional hosting providers with minimal configuration changes.