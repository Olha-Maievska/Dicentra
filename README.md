# Dicentra Flowers

Created for portfolio.
To view the site: https://dicentra.vercel.app/

The site uses client-side state instead of a server. An update with server-side integration is expected soon.

The site does not have responsive design, as it was created to demonstrate frontend development skills rather than typical web layout.

### Technologies Used:

- React
- TypeScript
- Redux Toolkit
- React Router Dom
- React Hook Form
- Tailwind

#### Commands:

`npm run dev` - runs the application in development mode;
`npm run build` - builds the application in production mode;
`npm run deploy` - deploy the application;

#### Project Structure:

- `public`
  - `images` - folder with all images
  - `favicon.ico` - favicon;
- `src` - project's source code;
  - `common` - commom components and dto;
  - `features` - state management;
  - `hooks` - custom hooks;
  - `pages` - React components tied to router routes;
  - `utils` - helper reusable functions;
- `App.js` - main component;
- `index.css` - root stylesheet file;
- `main.tsx` - root component of the React application;
- `vite-env.d.ts`
- `.eslintrc.cjs`
- `.gitignore` - Git ignore configuration;
- `index.html` - main html file
- `package-lock.json` - hidden lock file;
- `package.json` - version management file;
- `postcss.config.js`
- `README.md`
- `tailwind.config.ts`
- `tsconfig.json`
- `tsconfig.node.json`
- `tsconfig.paths.json`
- `vite.config.ts`
