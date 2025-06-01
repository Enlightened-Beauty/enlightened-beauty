
# 🔐 Environment Variables Setup

This document explains all the environment variables needed to run the Enlightened Beauty website.

## Required Variables

### DATABASE_URL
**Description**: PostgreSQL database connection string
**Required**: Yes
**Format**: `postgresql://username:password@host:port/database`

**Where to get it**:
1. **Vercel Postgres** (Recommended):
   - Go to your Vercel dashboard
   - Click "Storage" → "Create Database" → "Postgres"
   - Copy the connection string from the database settings

2. **Other PostgreSQL providers**:
   - Supabase: Project Settings → Database → Connection String
   - Railway: Database → Connect → Connection URL
   - Neon: Dashboard → Connection Details

**Example**:
```
DATABASE_URL="postgresql://username:password@hostname:5432/database_name"
```

## Setting Up in Vercel

1. **During Deployment**:
   - When deploying from GitHub, Vercel will prompt for environment variables
   - Paste your `DATABASE_URL` in the provided field

2. **After Deployment**:
   - Go to your Vercel project dashboard
   - Click "Settings" → "Environment Variables"
   - Add `DATABASE_URL` with your database connection string
   - Click "Save"
   - Redeploy your application

## Local Development

Create a `.env.local` file in the `/app` directory:

```bash
# .env.local
DATABASE_URL="your_database_connection_string_here"
```

**Important**: Never commit `.env.local` to version control. It's already in `.gitignore`.

## Database Setup

After setting the environment variable:

1. The database schema will be automatically applied during deployment
2. If you need to manually run migrations:
   ```bash
   npx prisma db push
   ```

## Troubleshooting

**Connection Issues**:
- Ensure your database allows connections from Vercel's IP ranges
- Check that the connection string format is correct
- Verify the database is running and accessible

**Deployment Errors**:
- Double-check the environment variable name (case-sensitive)
- Ensure there are no extra spaces in the connection string
- Try redeploying after setting variables

---

Need help? Check the [deployment guide](./DEPLOYMENT.md) or contact support.
