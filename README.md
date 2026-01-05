# Muadh George - Portfolio Website

A modern, minimalist portfolio website showcasing my work, experience, and skills as a Software Engineer. Built with Next.js 16, React 19, and Tailwind CSS.

## 🚀 Features

- **Minimalist Design** - Clean, professional interface with smooth animations
- **Responsive Layout** - Fully responsive design that works on all devices
- **Interactive Navigation** - Smooth scrolling with active section highlighting
- **Project Showcase** - Display of technical projects with live demos and GitHub links
- **Experience Timeline** - Professional experience and education history
- **Skills Section** - Comprehensive technical skills and technologies
- **Contact Form** - Direct email contact functionality
- **Resume Download** - Easy access to downloadable resume PDF
- **Performance Optimized** - Fast loading times with Next.js static generation

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **shadcn/ui** - Reusable component library

### Styling & Animation
- **Tailwind CSS** - Styling
- **CSS Animations** - Custom blur-in effects and transitions
- **Gradient Backgrounds** - Animated gradient overlays

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **pnpm** (or npm/yarn)

## 🏃 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MuadhGeorge/Personal-Portfolio-Website.git
   cd Personal-Portfolio-Website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
Personal-Portfolio-Website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main portfolio page
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # Reusable UI components (shadcn/ui)
│   └── theme-provider.tsx   # Theme configuration
├── public/
│   ├── images/              # Profile and project images
│   └── resume.pdf           # Resume PDF file
├── lib/
│   └── utils.ts             # Utility functions
├── hooks/                   # Custom React hooks
├── styles/                  # Additional styles
└── package.json             # Dependencies and scripts
```

## 🎨 Sections

- **Hero** - Introduction with profile image and status
- **About** - Personal background and achievements
- **Education** - Academic background
- **Experience** - Professional work experience
- **Projects** - Technical projects with links
- **Skills** - Technical skills and technologies
- **Contact** - Contact form and social links

## 🔧 Configuration

### Update Personal Information

1. **Profile Image**: Replace `public/images/muadh-profile.jpg` with your own image
2. **Resume**: Replace `public/resume.pdf` with your resume
3. **Content**: Edit `app/page.tsx` to update sections, projects, and experience
4. **Metadata**: Update `app/layout.tsx` for SEO and browser tab title

### Customize Styling

- Edit `app/globals.css` for global styles
- Modify Tailwind classes in `app/page.tsx` for component styling
- Update `tailwind.config.ts` for theme customization

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

This Next.js app can be deployed to:
- **Netlify**
- **AWS Amplify**
- **Railway**
- **Any platform supporting Node.js**

## 🔒 Security

- ✅ **Next.js 16.1.1** - Latest version with security patches (CVE-2025-66478 fixed)
- ✅ **Dependencies** - Regularly updated to latest secure versions
- ✅ **TypeScript** - Type safety for reduced runtime errors

## 📝 License

This project is private and personal. All rights reserved.

## 👤 Author

**Muadh George**

- Portfolio: [Your Portfolio URL]
- GitHub: [@MuadhGeorge](https://github.com/MuadhGeorge)
- LinkedIn: [muadhgeorge](https://linkedin.com/in/muadhgeorge)
- Email: muadh308@gmail.com

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Geist](https://vercel.com/font)

---

**Status**: Actively seeking New Grad Software Engineering roles and Internships for 2025.
