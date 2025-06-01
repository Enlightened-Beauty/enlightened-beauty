
# 🚀 Deployment Guide

Complete guide for deploying the Enlightened Beauty website to Vercel.

## Method 1: One-Click Deployment (Recommended)

### Step 1: Deploy from GitHub
1. Click the "Deploy with Vercel" button in the README
2. Sign in to Vercel (or create account)
3. Connect your GitHub account if prompted
4. Choose where to create the repository
5. Set environment variables when prompted
6. Click "Deploy"

### Step 2: Set Environment Variables
During deployment, you'll be prompted to set:
- `DATABASE_URL`: Your PostgreSQL connection string

See [ENVIRONMENT.md](./ENVIRONMENT.md) for detailed setup instructions.

## Method 2: Manual GitHub + Vercel

### Step 1: Fork/Clone Repository
1. Fork this repository to your GitHub account
2. Or clone and push to your own repository

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Configure settings:
   - Framework Preset: Next.js
   - Root Directory: `app`
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Step 3: Environment Variables
1. In Vercel project settings
2. Go to "Environment Variables"
3. Add required variables (see ENVIRONMENT.md)
4. Deploy

## Method 3: Vercel CLI

### Prerequisites
- Node.js installed
- Vercel CLI: `npm i -g vercel`

### Steps
```bash
# Navigate to project
cd enlightened_beauty_website/app

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts to configure
```

## 🌐 Custom Domain Setup

### Step 1: Add Domain in Vercel
1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Click "Add Domain"
4. Enter your IONOS domain (e.g., `yourdomain.com`)

### Step 2: Configure DNS in IONOS
1. Log in to your IONOS account
2. Go to "Domains & SSL" → "Manage Domains"
3. Click on your domain
4. Go to "DNS Settings"
5. Add the DNS records provided by Vercel:

**For root domain (yourdomain.com)**:
- Type: A
- Name: @
- Value: 76.76.19.61

**For www subdomain**:
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

### Step 3: Verify Domain
1. Back in Vercel, click "Verify" next to your domain
2. Wait for DNS propagation (can take up to 48 hours)
3. Your site will be live at your custom domain!

## 🔧 Build Configuration

The project includes a `vercel.json` file with optimized settings:

```json
{
  "buildCommand": "cd app && npm run build",
  "outputDirectory": "app/.next",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

## 📊 Performance Optimization

- **Automatic**: Vercel optimizes images, fonts, and static assets
- **Edge Functions**: Fast global response times
- **Analytics**: Built-in performance monitoring

## 🐛 Troubleshooting

### Build Failures
- Check environment variables are set correctly
- Ensure all dependencies are in package.json
- Review build logs in Vercel dashboard

### Domain Issues
- Verify DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Check domain status in Vercel dashboard

### Database Connection
- Verify DATABASE_URL format
- Ensure database allows Vercel connections
- Check database is running and accessible

## 📞 Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **IONOS Support**: [ionos.com/help](https://www.ionos.com/help)

---

Happy deploying! 🎉
