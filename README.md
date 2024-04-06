<img src="/public/images/logo.svg" width="300px"/>

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   ├── fonts/
│   ├── images/
│   ├── favicon.svg
│   └── temario.pdf
├── src/
│   ├── api/
│   │   └── api.js
│   ├── components/
│   │   ├── Contact/
│   │   │   ├── EmailForm.jsx
│   │   │   ├── Form.jsx
│   │   │   └── FormInput.jsx
│   │   ├── Button.jsx
│   │   ├── Card.astro
│   │   ├── Icon.astro
│   │   └── Objective.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── sections/
│       ├── contact.astro
│       ├── focus.astro
│       ├── footer.astro
│       ├── header.astro
│       ├── idearialab.astro
│       ├── objectives.astro
│       └── performance.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run start`           | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |
