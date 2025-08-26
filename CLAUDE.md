# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `pnpm i` - Install dependencies
- `pnpm dev` - Start development server with Turbo
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint checks
- `pnpm test` - Run Jest tests in watch mode
- `pnpm analyze` - Build with bundle analyzer enabled

### Development Setup
For local development with external services:
1. Install Vercel CLI: `npm i -g vercel`
2. Link to project: `vercel link`
3. Run with environment variables: `vercel dev`

## Architecture Overview

### Core Structure
This is an EXIF Photo Blog built with Next.js 15 App Router. The application handles photo uploads, EXIF data extraction, and provides a gallery interface with admin capabilities.

### Key Directories
- `/app/` - Next.js App Router pages and API routes
- `/src/` - Main application code organized by feature
- `/src/photo/` - Photo management core (actions, cache, forms, storage)
- `/src/admin/` - Admin interface components and actions
- `/src/platforms/` - External service integrations (storage, AI, etc.)
- `/src/utility/` - Shared utility functions and hooks
- `/src/components/` - Reusable UI components

### Storage Architecture
- Supports multiple storage providers: Vercel Blob, Cloudflare R2, AWS S3
- Storage abstraction in `/src/platforms/storage/`
- Current provider determined by `CURRENT_STORAGE` config
- Presigned URLs for secure uploads

### Data Layer
- PostgreSQL database with connection pooling
- Database queries in `/src/photo/db/`
- Caching layer with Redis integration
- EXIF data extraction using `exifr` and `ts-exif-parser`

### Admin Features
- Photo upload and batch management
- EXIF data synchronization
- Tag and recipe management
- Configuration management
- AI-powered text generation (OpenAI integration)

### Key Configuration
Configuration is centralized in `/src/app/config.ts` with environment-based settings for:
- Storage providers and preferences
- AI text generation settings
- Performance optimizations
- UI customizations
- Localization options

### Testing
- Jest configured for Next.js with jsdom environment
- Test files in `__tests__/` directory
- Setup file: `jest.setup.ts`

### Path Aliases
- `@/*` maps to `./src/*` for clean imports

### Special Features
- Fujifilm recipe and film simulation support
- Color-based photo sorting
- Static optimization for performance
- Internationalization support
- OG image generation
- RSS/JSON feeds