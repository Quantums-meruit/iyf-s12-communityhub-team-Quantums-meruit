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

## Accessibility audit

The Week 9 task requires Lighthouse Accessibility scores to be recorded before and after accessibility improvements. The actual audit values have not yet been captured, so no scores are claimed here. Run Lighthouse against the same application build and record the measured Accessibility scores below.

| Audit | Lighthouse Accessibility score |
| --- | --- |
| Before improvements | Pending measurement |
| After improvements | Pending measurement |

See [CONTRIBUTORS.md](CONTRIBUTORS.md) for the team contribution areas.
