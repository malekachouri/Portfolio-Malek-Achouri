# Achouri Malek, AI DevOps & Cloud Engineer

Personal portfolio: **https://portfolio-malek-achouri.netlify.app/**

Built with React 18, Vite 5, Tailwind CSS and Framer Motion. Dark-first design with a light theme, responsive, keyboard-accessible, and it respects `prefers-reduced-motion`.

## Updating content

All text (experience, projects, skills, certifications, education…) lives in **`src/data/content.js`**. Edit that file; the components only handle layout.

- CVs: `public/cv/` (EN + FR), linked from `profile.resumes`
- Images: `public/images/` (WebP)
- SEO: `index.html` (meta, Open Graph, JSON-LD), `public/og-image.png`, `public/sitemap.xml`

## Project structure

```
src/
  data/content.js      # all portfolio content
  sections/            # Hero, About, Projects, Experience, Skills, Certifications, Background, Contact
  components/          # Navbar, Footer, Section, Reveal, Tags, ThemeToggle, ResumeLinks, SocialLinks
  hooks/               # theme context, active-section tracking
```

## Development

```bash
npm ci
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview
```

## Delivery

- **Netlify** (live site): configured in `netlify.toml`
- **CI** (`.github/workflows/ci.yml`): `npm ci`, `npm audit` on runtime deps and build on every PR and push
- **Container** (`.github/workflows/main.yml`): multi-stage Docker build → Trivy scan (fails on fixable CRITICAL) → push to Docker Hub tagged `latest` and the commit SHA. nginx serves the SPA with caching and security headers (`nginx.conf`).

```bash
docker build -t portfolio . && docker run -p 8080:80 portfolio
```
