# CommunityHub

CommunityHub is a React-based community platform built by the IYF Season 12 team. It provides a shared space where members can publish posts, interact with community content, and view member information.

## Features

- Create posts with input validation.
- Display posts in a reusable feed.
- Like and unlike posts.
- Allow post authors to delete their own posts.
- Display community navigation, member information, and shared page sections.
- Practice React fundamentals through individual Week 8 exercises.

## Technology

- React
- JavaScript (ES modules)
- Vite
- Oxlint

## Project structure

```text
.
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/       # Reusable interface components
│   │   ├── exercises/        # Individual learning exercises
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

The current frontend package does not define an automated test script.

## Team workflow

- Work on a dedicated feature branch.
- Keep changes focused on the assigned feature.
- Run the build and lint checks before opening a pull request.
- Open a pull request against `main`.
- Request review from another team member.
- Merge only after the required review and checks have passed.

See [CONTRIBUTORS.md](CONTRIBUTORS.md) for the team contribution areas.
