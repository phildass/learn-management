# Learn Management - iiskills.cloud

> **MBA-Standard Business Curriculum Platform**
> 
> A comprehensive learning management system for mastering business management skills, designed to be deployed as learn-management.iiskills.cloud

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

## 🎯 Overview

Learn Management is part of the **iiskills.cloud network** of educational subdomains. It provides a structured, MBA-standard curriculum covering all essential business management topics including Organizational Behavior, Marketing, Finance, Operations, Strategy, and Communication.

### Key Features

- ✅ **100 Comprehensive Lessons** across 10 modules
- ✅ **Interactive Quizzes** (5 questions per lesson, 3/5 required to progress)
- ✅ **Final Certification Exam** (20 questions, 13/20 pass threshold)
- ✅ **Live Business News Monitor** (Indian & Global news)
- ✅ **Job Aggregation** for business management roles
- ✅ **Support Ticket System** for learner assistance
- ✅ **Admin Panel** with statistics and content management
- ✅ **UPI Payment Integration** (Razorpay)
- ✅ **Email Confirmations** (no-reply@iiskill.in)
- ✅ **Responsive Design** with iiskills.cloud branding

## 📚 Curriculum Structure

### 10 Modules × 10 Lessons = 100 Total Lessons

1. **Organizational Behavior & HR** - Employee motivation, leadership, team dynamics, performance management
2. **Marketing Management** - Consumer behavior, branding, digital marketing, analytics
3. **Financial Management** - Corporate finance, investment analysis, capital structure
4. **Operations & Supply Chain** - Process optimization, quality management, logistics
5. **Strategic Management** - Competitive analysis, strategic planning, implementation
6. **Business Communication** - Professional writing, presentations, negotiations
7. **Business Analytics** - Data-driven decision making, predictive analytics
8. **Entrepreneurship & Innovation** - Startup management, business models, innovation
9. **Ethics & Governance** - Corporate social responsibility, ethical leadership
10. **Global Business & Leadership** - International strategy, executive leadership

**Each Lesson Includes:**
- 5 paragraphs of content (max 400 words)
- 5-question multiple choice quiz
- ~15 minutes estimated completion time
- Progress tracking

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager
- MongoDB (for production deployment)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/phildass/learn-management.git
cd learn-management
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` file with your configuration:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_DOMAIN=learn-management.iiskills.cloud
MONGODB_URI=mongodb://localhost:27017/learn-management
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=no-reply@iiskill.in
EMAIL_PASSWORD=your-email-password
RAZORPAY_KEY_ID=your-razorpay-key
RAZORPAY_KEY_SECRET=your-razorpay-secret
ADMIN_PASSWORD=phil123
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
learn-management/
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation header with iiskills branding
│   ├── Footer.tsx      # Footer with network links
│   └── Layout.tsx      # Main layout wrapper
├── lib/                # Utility libraries and data
│   ├── curriculum.ts   # Module 1 curriculum data
│   └── curriculumExtended.ts  # Modules 2-10 data
├── pages/              # Next.js pages and API routes
│   ├── index.tsx       # Landing page with news monitor
│   ├── curriculum.tsx  # Course catalog
│   ├── register.tsx    # Registration flow with UPI payment
│   ├── news.tsx        # Business news aggregator
│   ├── jobs.tsx        # Job listings
│   ├── support.tsx     # Support ticket submission
│   ├── admin.tsx       # Admin panel (password: phil123)
│   └── api/            # API endpoints
│       ├── news.ts     # News fetching API
│       ├── auth/       # Authentication APIs
│       ├── admin/      # Admin APIs
│       └── support/    # Support ticket APIs
├── styles/             # Global styles and Tailwind config
├── public/             # Static assets
└── README.md          # This file
```

## 🎨 Design System

### iiskills.cloud Color Theme

```javascript
primary: '#0284c7'    // Blue for primary actions
secondary: '#c026d3'  // Purple for accents
accent: '#f97316'     // Orange for highlights
```

### Typography
- **Headings:** Poppins (600-800 weight)
- **Body:** Inter (300-700 weight)

### Component Library
- Buttons: `.btn-primary`, `.btn-secondary`
- Cards: `.card`
- Inputs: `.input-field`
- Container: `.container-custom`

## 🔐 Authentication & Payment

### Registration Flow

1. **Basic Information** - Name, Email, Phone
2. **Payment** - UPI gateway integration (₹999)
3. **Post-Registration** - Mandatory question: "Why do you want to learn about AI?"
4. **Email Confirmation** - Automated email with access code

### Admin Access

- URL: `/admin`
- Password: `phil123`
- Features: Dashboard stats, user management, lesson management, support tickets, job moderation

## 📱 Features

### Landing Page
- Compelling value proposition
- Skills & outcomes showcase
- Live business news feed (search, pagination)
- Call-to-action buttons

### News Monitor
- Aggregated Indian & global business news
- Search functionality
- Pagination
- Click-to-source external links

### Learning System
- Three-level onboarding: Beginner → Advanced → Practical
- Quiz validation (3/5 correct to unlock next lesson)
- Progress tracking
- Final exam after 10th module

### Support System
- Ticket submission with categorization
- 24-hour response time commitment
- Admin moderation panel

### Jobs Portal
- Aggregated business management jobs
- Search and filter by location, type
- Direct application links

### Community (Coming Soon)
- Currently disabled
- Moderation controls ready
- Will be enabled post-launch

## 🌐 Deployment

### Subdomain Architecture

This application is designed to run at **learn-management.iiskills.cloud** as part of the iiskills.cloud network.

### Production Deployment Steps

1. **Build the application**
```bash
npm run build
```

2. **Set up MongoDB**
```bash
# Configure MongoDB connection in production .env
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/learn-management
```

3. **Configure email service**
```bash
# Set up SMTP credentials for no-reply@iiskill.in
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=no-reply@iiskill.in
EMAIL_PASSWORD=your-secure-password
```

4. **Set up Razorpay**
```bash
# Get production keys from Razorpay dashboard
RAZORPAY_KEY_ID=rzp_live_xxxxx
RAZORPAY_KEY_SECRET=your_secret_key
```

5. **Deploy to hosting platform**
```bash
# Vercel deployment (recommended)
vercel --prod

# Or other platforms (Netlify, AWS, etc.)
npm run start
```

6. **Configure DNS**
```
Type: CNAME
Name: learn-management
Value: your-deployment-url
```

### Environment Variables for Production

Ensure all environment variables are set in your hosting platform:
- `NEXT_PUBLIC_DOMAIN=learn-management.iiskills.cloud`
- `MONGODB_URI` - Production database
- `EMAIL_*` - Email service credentials
- `RAZORPAY_*` - Payment gateway keys
- `JWT_SECRET` - Secure random string
- `ADMIN_PASSWORD` - Change from default

## 🔗 iiskills.cloud Network

Part of the iiskills.cloud educational platform network:
- **learn-pr.iiskills.cloud** - Public Relations & Communications
- **learn-math.iiskills.cloud** - Mathematics & Quantitative Skills
- **learn-investing.iiskills.cloud** - Investment & Finance
- **learn-winning.iiskills.cloud** - Personal Development & Success
- **learn-management.iiskills.cloud** - Business Management (this platform)

All subdomains share:
- Common branding and design language
- Consistent navigation patterns
- Unified user experience
- Cross-platform features

## 📊 Admin Features

### Statistics Dashboard
- Total registered users
- Active learners count
- Course completions
- Revenue metrics

### Content Management
- Lesson editor
- Quiz management
- Module organization
- Progress monitoring

### User Management
- User list and search
- Access control
- Progress reports
- Support ticket handling

### Moderation
- Community posts (when enabled)
- Job listings approval
- Content flagging system

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Code Style

- TypeScript for type safety
- Functional components with hooks
- Tailwind CSS for styling
- Next.js API routes for backend

### Adding New Lessons

Edit `/lib/curriculum.ts` or `/lib/curriculumExtended.ts`:

```typescript
{
  id: 'lesson-X-Y',
  moduleId: 'module-X',
  lessonNumber: Y,
  title: 'Lesson Title',
  content: [
    'Paragraph 1...',
    'Paragraph 2...',
    // 5 paragraphs total, max 400 words
  ],
  quiz: [
    // 5 questions
  ],
  estimatedTime: 15
}
```

## 📞 Support

- **Email:** support@iiskills.cloud
- **Support Tickets:** [https://learn-management.iiskills.cloud/support](https://learn-management.iiskills.cloud/support)
- **Response Time:** Within 24 hours

## 📄 License

Copyright © 2026 iiskills.cloud. All rights reserved.

## 🤝 Contributing

This is a proprietary platform. For contribution inquiries, contact the iiskills.cloud team.

---

**Built with ❤️ for business management education in India**
