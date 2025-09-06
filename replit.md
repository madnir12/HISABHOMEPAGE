# Hisab.cloud - ERP Solutions Platform

## Overview

Hisab.cloud is a modern web application designed to provide ERPNext implementation and digital invoicing solutions for Pakistani businesses. The platform serves as a comprehensive business website showcasing ERP services, FBR-compliant digital invoicing, business analytics, and cloud infrastructure solutions. Built as a full-stack application with a React frontend and Express backend, it includes user authentication capabilities and is designed to support future expansion into a full ERP service platform.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for client-side routing with pages for Home, About, Services, Portfolio, and Contact
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent design
- **Styling**: Tailwind CSS with custom CSS variables for theming support (light/dark modes)
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture  
- **Framework**: Express.js with TypeScript running on Node.js
- **Database Integration**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and database implementation for production
- **Development Setup**: Hot reload with Vite integration for seamless development experience

### Database Schema
- **User Management**: Users table with UUID primary keys, unique usernames, and password fields
- **Schema Validation**: Zod schemas for runtime type validation and API request/response validation
- **Migrations**: Drizzle migrations system for database version control

### Authentication System
- **Session Management**: Express sessions with PostgreSQL session storage using connect-pg-simple
- **User Model**: Basic user authentication with username/password (ready for expansion)
- **Storage Layer**: Modular design supporting both in-memory (development) and database (production) implementations

### Development Environment
- **Database**: Neon PostgreSQL for cloud database hosting
- **Type Safety**: Comprehensive TypeScript configuration with strict mode enabled
- **Path Aliases**: Configured path mapping for clean imports (@/, @shared/)
- **Development Tools**: ESBuild for server bundling, TSX for development server

## External Dependencies

### Database Services
- **Neon Database**: PostgreSQL cloud database provider via @neondatabase/serverless
- **Session Storage**: PostgreSQL-backed session storage for user authentication

### UI Component Libraries
- **Radix UI**: Complete set of accessible UI primitives (@radix-ui/react-*)
- **Lucide Icons**: Icon library for consistent iconography throughout the application
- **Embla Carousel**: Carousel functionality for portfolio and testimonial sections

### Development Tools
- **Drizzle Kit**: Database migrations and schema management
- **Vite Plugins**: Runtime error overlay and Replit-specific development features
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer

### Styling Dependencies  
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Class Variance Authority**: Type-safe component variants
- **Tailwind Merge**: Intelligent class merging for component composition

### Form and Validation
- **React Hook Form**: Form state management with @hookform/resolvers
- **Zod**: Runtime type validation and schema definition
- **Date-fns**: Date manipulation and formatting utilities

The architecture is designed for scalability, with clear separation between frontend presentation, backend business logic, and data persistence layers. The modular storage interface allows for easy transition from development to production environments.