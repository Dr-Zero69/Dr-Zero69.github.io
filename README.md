# Dr-Zero69.github.io

Personal portfolio site for Anurodh Jha, served by GitHub Pages at <https://dr-zero69.github.io>.

The design mirrors the [GitHub profile README](https://github.com/Dr-Zero69/Dr-Zero69): monospace type, numbered hairline-ruled sections, and the same bone / muted / accent palette in light and dark.

## Layout

| Path | Purpose |
| --- | --- |
| `index.html` | Page shell: nav, hero, section mount point, footer |
| `js/data.js` | All site content. Edit this to change text, add or remove entries |
| `js/main.js` | Renders `data.js` into the page; the `SECTIONS` list controls section order |
| `css/style.css` | Theme tokens and layout |
| `assets/` | Favicon and any images |

No build step. Open `index.html` directly or serve the folder with any static server.

Entries marked `todo: true` in `data.js` render with a dashed outline and a TBD tag so placeholders are visible until filled in.

## Workflow

Features are built in batches on the `preliminary` branch and merged into `main`, which is what GitHub Pages publishes.
