# Mostafa Elmniawy: Portfolio

Static single-page site (HTML, CSS, vanilla JS). No build step, no dependencies.

## Files
`index.html` · `styles.css` · `script.js`

## Run locally
Open `index.html` in a browser, or run `npx serve .` in this folder.

## Deploy
**GitHub Pages**
1. Create a repo and push these files to the root of `main`.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)` → Save.
3. Live at `https://<user>.github.io/<repo>/`.

**Netlify**
1. Go to app.netlify.com → *Add new site* → *Deploy manually*.
2. Drag this folder in. Or connect the GitHub repo (build command empty, publish directory `.`).

**Vercel**
1. Go to vercel.com/new and import the GitHub repo.
2. Framework Preset: *Other*. Leave build command empty, output directory `.`. Deploy.
   (CLI alternative: `npx vercel --prod`.)

## Customize
- LinkedIn URL: search `mostafa-elmniawy` in `index.html` and replace it with your real profile.
- Photo: replace the `.photo` placeholder in the About section with an `<img alt="…">`.
- Add Open Graph preview: add `<meta property="og:image" content="https://your-domain/og.png">` once you host an image.
