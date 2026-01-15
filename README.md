# Nandan Thakur Portfolio

A modern, interactive portfolio website built with React and TypeScript that mimics Google's search interface. This project showcases professional experience, projects, achievements, and technical skills in an engaging, searchable format.

## Features

- **Google-like Search Interface**: Familiar search experience with tabs for different content types
- **Interactive Knowledge Graph**: Visual representation of skills and technologies
- **Image Gallery**: Showcase of projects and achievements
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite
- **Smooth Animations**: Powered by Framer Motion
- **Analytics Integration**: PostHog for usage tracking

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (via component classes)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Analytics**: PostHog
- **Deployment**: GitHub Pages

## Run Locally

**Prerequisites:** Node.js (v16 or higher)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nandan-thakur/nandan-thakur.github.io.git
   cd nandan-thakur.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── components/          # React components
│   ├── ImageViewer.tsx  # Image gallery component
│   ├── KnowledgeGraph.tsx # Skills visualization
│   ├── Logo.tsx         # Logo component
│   └── SearchResult.tsx # Search results display
├── public/             # Static assets
│   ├── images/         # Image assets
│   └── ...             # Other static files
├── App.tsx             # Main application component
├── data.ts             # Portfolio data and content
├── types.ts            # TypeScript type definitions
├── analytics.ts        # Analytics event definitions
└── index.html          # HTML template
```

## Deployment

This project is configured for deployment on GitHub Pages. The built files in the `dist` directory can be deployed to any static hosting service.

## Contributing

This is a personal portfolio project. Feel free to fork and adapt it for your own use!

## License

© 2026 Nandan Thakur. All rights reserved.
