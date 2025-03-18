# Developer Portfolio

A modern, responsive developer portfolio website built with Next.js 15 and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Dark mode support
- Smooth animations with Framer Motion
- Sections for showcasing skills, work experience, and projects
- Contact form with validation
- Social media links
- SEO optimized

## Sections

- **Hero** - Introduction and call-to-action
- **About** - Personal information and skills
- **Experience** - Work history and responsibilities
- **Projects** - Portfolio projects with filtering capability
- **Contact** - Contact form and information

## Technologies Used

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Navigate to the project directory

```bash
cd portfolio
```

3. Install dependencies

```bash
npm install
```

4. Run the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

Update your personal information in the component files:

- `src/components/HeroSection.tsx` - Name, title, and introduction
- `src/components/AboutSection.tsx` - About text and skills
- `src/components/ExperienceSection.tsx` - Work experience
- `src/components/ProjectsSection.tsx` - Projects
- `src/components/ContactSection.tsx` - Contact information
- `src/components/Footer.tsx` - Social media links

### Images

Replace the placeholder images in the `public/images` directory with your own:

- `public/profile-placeholder.jpg` - Your profile picture
- `public/images/project1.jpg` to `public/images/project6.jpg` - Project images

## Deployment

This project can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
