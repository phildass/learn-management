# Deployment Guide - Learn Management

## Overview
This guide covers deploying learn-management.iiskills.cloud to production.

## Prerequisites
- Node.js 18+ installed
- MongoDB database (Atlas recommended)
- Email service (Gmail/SendGrid)
- Razorpay account for payments
- Domain configured (learn-management.iiskills.cloud)

## Step 1: Environment Setup

Create a `.env` file in production with these variables:

```bash
# Application
NEXT_PUBLIC_APP_URL=https://learn-management.iiskills.cloud
NEXT_PUBLIC_DOMAIN=learn-management.iiskills.cloud

# Database (MongoDB Atlas)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/learn-management?retryWrites=true&w=majority

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=no-reply@iiskill.in
EMAIL_PASSWORD=your-app-specific-password
EMAIL_FROM=no-reply@iiskill.in

# JWT Secret (generate a strong random string)
JWT_SECRET=your-super-secret-jwt-key-min-32-characters

# Razorpay (UPI Gateway)
RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_secret_key

# Admin
ADMIN_PASSWORD=change-this-in-production

# News API (optional - for real news integration)
NEWS_API_KEY=your-newsapi-key
```

## Step 2: Database Setup

### MongoDB Atlas Setup
1. Create account at mongodb.com
2. Create new cluster
3. Add database user
4. Whitelist IP addresses (or use 0.0.0.0/0 for all)
5. Get connection string
6. Create database: `learn-management`

### Collections Needed
- `users` - User accounts and progress
- `modules` - Curriculum data (optional, can use static data)
- `progress` - User learning progress
- `tickets` - Support tickets
- `jobs` - Job listings

## Step 3: Email Setup

### Gmail Setup (Recommended for Development)
1. Enable 2FA on Gmail account
2. Generate App Password:
   - Go to Google Account → Security
   - 2-Step Verification → App passwords
   - Select app: Mail, Device: Other
   - Copy generated password to EMAIL_PASSWORD

### SendGrid Setup (Recommended for Production)
1. Create SendGrid account
2. Verify sender email
3. Generate API key
4. Update email configuration

## Step 4: Payment Gateway Setup

### Razorpay Integration
1. Create Razorpay account
2. Complete KYC verification
3. Get API keys:
   - Dashboard → Settings → API Keys
   - Use Test keys for testing
   - Use Live keys for production
4. Set up webhook (optional):
   - URL: https://learn-management.iiskills.cloud/api/webhook/razorpay
   - Events: payment.captured, payment.failed

## Step 5: Build and Deploy

### Option A: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Set environment variables in Vercel dashboard
# Project Settings → Environment Variables
```

### Option B: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

### Option C: Self-Hosted (VPS/Cloud)

```bash
# Build the application
npm run build

# Start with PM2
npm i -g pm2
pm2 start npm --name "learn-management" -- start
pm2 save
pm2 startup

# Configure Nginx reverse proxy
# /etc/nginx/sites-available/learn-management
server {
    listen 80;
    server_name learn-management.iiskills.cloud;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Enable site and reload Nginx
sudo ln -s /etc/nginx/sites-available/learn-management /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Install SSL with Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d learn-management.iiskills.cloud
```

## Step 6: DNS Configuration

Add these DNS records:

```
Type: A or CNAME
Name: learn-management
Value: your-server-ip or deployment-url
TTL: 3600
```

## Step 7: Post-Deployment Checks

### Health Checks
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Curriculum pages accessible
- [ ] Registration flow works
- [ ] Email confirmation sent
- [ ] Payment gateway functional
- [ ] Admin panel accessible
- [ ] Mobile responsive
- [ ] SSL certificate valid

### Test User Flow
1. Register new account
2. Complete payment
3. Receive email confirmation
4. Login with access code
5. Start Module 1
6. Complete a lesson
7. Pass a quiz
8. Submit support ticket

## Step 8: Monitoring

### Setup Monitoring Tools

```bash
# Application monitoring
npm install @vercel/analytics

# Error tracking
npm install @sentry/nextjs
```

### Monitor These Metrics
- Server uptime
- Response times
- Error rates
- User registrations
- Payment success rate
- Email delivery rate
- Database performance

## Step 9: Backup Strategy

### Database Backups
```bash
# MongoDB Atlas - Enable automatic backups
# Settings → Backup → Enable Cloud Backup

# Manual backup
mongodump --uri="mongodb+srv://..." --out=/backup/$(date +%Y%m%d)
```

### File Backups
- Environment variables
- Custom configuration
- User uploads (if any)

## Step 10: Security Checklist

- [ ] Change default admin password
- [ ] Use strong JWT secret
- [ ] Enable HTTPS only
- [ ] Set secure cookie flags
- [ ] Implement rate limiting
- [ ] Enable CORS properly
- [ ] Validate all user inputs
- [ ] Sanitize database queries
- [ ] Keep dependencies updated
- [ ] Monitor security alerts

## Scaling Considerations

### When Traffic Grows
1. **Database**: Upgrade MongoDB tier
2. **CDN**: Use Cloudflare for static assets
3. **Caching**: Implement Redis for sessions
4. **Load Balancer**: Multiple server instances
5. **File Storage**: Move to S3/Cloud Storage

## Troubleshooting

### Common Issues

**Email not sending:**
- Check EMAIL_PASSWORD is app-specific password
- Verify SMTP settings
- Check firewall/port 587

**Payment failing:**
- Verify Razorpay keys (test vs live)
- Check webhook configuration
- Review Razorpay dashboard logs

**Database connection errors:**
- Verify MongoDB URI
- Check IP whitelist
- Confirm database user permissions

**Build errors:**
- Clear .next folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node version: `node -v` (should be 18+)

## Maintenance

### Regular Tasks
- Weekly: Check error logs
- Monthly: Update dependencies
- Quarterly: Review security
- Yearly: Renew SSL certificates (auto with Certbot)

### Update Process
```bash
# Test updates locally first
git pull origin main
npm install
npm run build
npm test

# Deploy updates
vercel --prod
# or
pm2 restart learn-management
```

## Support

For deployment issues:
- Email: support@iiskills.cloud
- Documentation: Check README.md
- Community: GitHub Discussions

---

**Production Checklist:**
- [ ] Environment variables configured
- [ ] Database setup and backed up
- [ ] Email service configured and tested
- [ ] Payment gateway in live mode
- [ ] DNS configured correctly
- [ ] SSL certificate installed
- [ ] Monitoring enabled
- [ ] Security hardened
- [ ] Performance optimized
- [ ] Backup strategy implemented
