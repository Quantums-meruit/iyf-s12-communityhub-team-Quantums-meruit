# CommunityHub

CommunityHub is a React-based community platform built by the IYF Season 12 team. It provides a shared space where members can publish posts, interact with community content, and view member information.

## Features

- Navigate Home, Posts, Post Detail, Create Post, and About pages with React Router.
- Fetch community posts from JSONPlaceholder with loading, error, and retry states.
- Create posts with input validation and open the newly created post's detail page.
- Search posts by title, content, or author.
- Like and unlike posts, and allow post authors to delete their own posts.
- Persist locally created posts and likes in browser local storage.
- Display responsive community navigation, member information, and shared page sections.
- Practice React fundamentals through individual Week 8 exercises.

## Technology

- React
- JavaScript (ES modules)
- Vite
- Oxlint
- Vitest

## Project structure

```text
.
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/       # Reusable interface components
│   │   ├── context/          # Shared posts state and context hook
│   │   ├── exercises/        # Individual learning exercises
│   │   ├── hooks/            # Data fetching and local-storage hooks
│   │   ├── pages/            # Routed application pages
│   │   ├── utils/            # Reusable application logic
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
├── .gitignore
├── CONTRIBUTORS.md
└── README.md
```

## Getting started

### Requirements

- Node.js
- npm

### Install dependencies

From the repository root:

```bash
cd frontend
npm install
```

### Start the development server

```bash
npm run dev
```

Vite prints the local development URL in the terminal.

## Available scripts

Run these commands from the `frontend/` directory:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Check the frontend source with Oxlint |
| `npm test` | Run the automated test suite once |
| `npm run test:watch` | Run tests in watch mode |

## Team workflow

- Work on a dedicated feature branch.
- Keep changes focused on the assigned feature.
- Run the build and lint checks before opening a pull request.
- Open a pull request against `main`.
- Request review from another team member.
- Merge only after the required review and checks have passed.

## Lighthouse audit

Lighthouse audits were run in Chrome using the same Navigation mode and Desktop device settings on the original `main` version and the completed Week 9 feature branch.

| Category | Before (main) | After (Week 9) | Change |
| --- | ---: | ---: | ---: |
| Performance | 29 | 32 | +3 |
| Accessibility | 95 | 95 | No change |
| Best Practices | 100 | 100 | No change |
| SEO | 82 | 82 | No change |

The Week 9 version retained the original Accessibility, Best Practices, and SEO scores, while Performance increased by 3 points. Lighthouse scores can vary between runs and environments.

See [CONTRIBUTORS.md](CONTRIBUTORS.md) for the team contribution areas.
