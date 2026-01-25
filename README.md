# Personal Website

My personal portfolio website built with React and modern web technologies.

## Dependencies

### Core Framework
- **React 19** - UI library
- **React Router DOM v7** - Client-side routing
- **CRACO** - Create React App Configuration Override

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Radix UI** - Headless UI components
- **Lucide React** - Icon library

### Additional Libraries
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Axios** - HTTP client
- **Recharts** - Charts and data visualization
- **date-fns** - Date utilities
- **Sonner** - Toast notifications
- **Embla Carousel** - Carousel functionality

## Development

Install dependencies:
```bash
npm install --legacy-peer-deps
```

Run the development server:
```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Deployment to GitHub Pages

### 1. Install GitHub Pages package
```bash
npm install --save-dev gh-pages
```

### 2. Update `package.json`
Add the homepage field (replace `username` and `repo-name` with your GitHub username and repository name):
```json
"homepage": "https://username.github.io/repo-name"
```

Add deployment scripts:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### 3. Build and Deploy
```bash
npm run deploy
```

This will create a `gh-pages` branch and push the build folder to it.

### 4. Configure GitHub Repository
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select the `gh-pages` branch
4. Click **Save**

Your site will be live at `https://username.github.io/repo-name` in a few minutes.

## Credits

- Kirby CSS Art by [Pyxofy](https://www.pyxofy.com/css-art-how-to-make-a-game-character-kirby/)
