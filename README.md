# Personal Website

My repo for my [personal website.](https://scarvy.github.io)

Plain HTML, CSS, and JavaScript — no build step. [GitHub Pages](https://pages.github.com/) serves `main` from the repo root, so every push to `main` goes live.

- `index.html` — about, links, and timeline
- `books/index.html` — books page, loaded in the browser from the [Readwise Books](https://readwise.io/books_api) public feed
- `404.html` — not-found page
- `css/style.css`, `js/main.js` — shared styles (JetBrains Mono, light/dark theme) and the theme toggle
- `assets/` — favicon and the Readwise Books icon
- `extra/` — resume and papers

Timeline and social icons come from `https://www.google.com/s2/favicons?domain={domain}`.

## Updating

- **Timeline:** edit the `<ol class="timeline">` in `index.html`. Job details go in a `<details>` so they start collapsed.
- **Resume:** replace `extra/Scott-Carvalho-Resume.pdf`, keeping the same name.
- **Books:** nothing to do; the page reads Readwise on each visit (cached 5 minutes).

## Preview locally

```sh
python3 -m http.server
```

Then open http://localhost:8000.
