# Henry's Personal Website

A modern, responsive personal website built with React, TypeScript, and Tailwind CSS. Features a clean design with smooth animations and a professional layout.

## Features

- 🏠 **Dynamic Home Page**: Featuring an animated text carousel showcasing personal traits
- 👤 **About Section**: Professional background and skills overview
- 💼 **Projects Portfolio**: Showcase of development work with links to live demos and source code
- 📱 **Responsive Design**: Fully responsive layout that works on all devices
- ✨ **Smooth Animations**: Clean, performant animations for enhanced user experience

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- React Router DOM
- Lucide React (for icons)
- Vite (build tool)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd personal-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── App.tsx        # Main application component
├── main.tsx       # Application entry point
└── index.css      # Global styles
```

## Customization

### Modifying the Animated Text

To change the rotating text on the home page, modify the `phrases` array in `src/pages/Home.tsx`:

```typescript
const phrases = ["music lover", "hot sauce hater", "thing doer"];
```

### Updating Projects

Projects are stored in `src/pages/Projects.tsx`. Add or modify projects by updating the `projects` array:

```typescript
const projects = [
  {
    title: 'Project Name',
    description: 'Project description',
    image: 'image-url',
    github: 'github-url',
    demo: 'demo-url',
    tags: ['React', 'TypeScript']
  }
  // Add more projects...
];
```

## License

MIT License - feel free to use this code for your own personal website!