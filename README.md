# Next.js Starter

A modern Next.js starter template with authentication, database integration, and development tools.

## Features

- **Next.js 15** with App Router and Turbopack
- **Authentication** with NextAuth.js and Google OAuth
- **Database** with Prisma and PostgreSQL
- **UI Components** with Radix UI and Tailwind CSS
- **Form Handling** with React Hook Form and Zod validation
- **Code Quality** with ESLint, Prettier, and Husky
- **TypeScript** with strict type checking

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Google OAuth credentials

### Installation

1. Clone the repository and install dependencies:

```bash
yarn install
```

2. Set up environment variables:

```bash
cp .env.example .env
```

Fill in your environment variables:

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Random secret for NextAuth
- `GOOGLE_CLIENT_ID` - Google OAuth client ID
- `GOOGLE_CLIENT_SECRET` - Google OAuth client secret

3. Set up the database:

```bash
yarn db:push
```

4. Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Available Scripts

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript compiler
- `yarn format` - Format code with Prettier
- `yarn db:generate` - Generate Prisma client
- `yarn db:push` - Push schema to database
- `yarn db:migrate` - Run database migrations
- `yarn db:studio` - Open Prisma Studio

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── api/auth/       # NextAuth API routes
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   └── providers.tsx   # Session provider
└── lib/               # Utilities
    ├── auth.ts        # NextAuth configuration
    └── prisma.ts      # Prisma client
```

## Authentication

This project uses NextAuth.js with Google OAuth. To set up Google OAuth:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy client ID and secret to your `.env` file

## Database

The project uses Prisma with PostgreSQL. The schema includes NextAuth tables for user authentication. Run `yarn db:studio` to explore your database with Prisma Studio.

## Deployment

Deploy easily on [Vercel](https://vercel.com/new) or any platform that supports Next.js. Make sure to set up your environment variables in your deployment platform.
