# thenoisesinside.art (website)

Combined site for The Noises Inside (music) and Kandecksky (software), served
at <https://www.thenoisesinside.art> via GitHub Pages, with DNS pointed there
from DreamHost. Also reachable at <https://differentjason.github.io/kandecksky/>.

Two pages, sharing `assets/site.css` / `assets/site.js`: `index.html` is the
band/music home (bio, discography linking to Bandcamp, YouTube), and
`kandecksky.html` is the existing Kandecksky pitch. The top nav links between
them.

The Kandecksky application source and its CI live in a separate private
repository, `differentJason/kandecksky-app`. Nothing in this repo builds the
app — it only publishes the page that sells it.

## Layout

| Path              | Owner                                                    |
| ------------------ | -------------------------------------------------------- |
| `index.html`       | Edited here by hand. Band/music home page.               |
| `kandecksky.html`  | Edited here by hand. Kandecksky pitch page.              |
| `CNAME`            | Custom domain for GitHub Pages (`www.thenoisesinside.art`). |
| `assets/`          | Edited here by hand. Includes shared `site.css`/`site.js` and `discog/` cover art. |
| `guide/`           | **Generated.** Pushed from `kandecksky-app` on change.   |
| `release.json`     | **Generated.** Pushed from `kandecksky-app` on each tag. |

Do not hand-edit `guide/` or `release.json` — the next sync from the build repo
will overwrite them. The guide's source of truth is `src/renderer/help/` in
`kandecksky-app`, which is also what ships inside the app.

## Store links

Purchase links are not yet configured — the site is in its pre-launch state.

Installers are deliberately **not** hosted in this repo. They are built in the
private repo and attached to its private releases.

## Deploys

Any push to `main` redeploys via `.github/workflows/pages.yml`.
