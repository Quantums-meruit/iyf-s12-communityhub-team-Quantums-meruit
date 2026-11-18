# CommunityHub

CommunityHub is a React-based community platform built by the IYF Season 12
team. It is intended to give members a shared space to publish posts, interact
with community content, and view member information.

## Project status

The current frontend includes a Vite/React scaffold, reusable interface and
member-profile components, and individual Week 8 React exercises. Post creation,
feed interactions, and author-only post deletion are planned platform features
and are not implemented yet.

## Technology

- React
- JavaScript (ES modules)
- Vite
- Oxlint

## Project structure

```text
.
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable interface and profile components
│   │   ├── exercises/        # Individual learning exercises
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
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Check the frontend source with Oxlint |

## Team workflow

- Work on a dedicated feature branch.
- Keep changes focused on the assigned feature.
- Run the build and lint checks before opening a pull request.
- Open a pull request against `main`.
- Request review from another team member.
- Merge only after the required review and checks have passed.

See [CONTRIBUTORS.md](CONTRIBUTORS.md) for team members and contribution logs.
