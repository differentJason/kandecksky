# kandecksky (website)

Public marketing site and user guide for Kandecksky, served at
<https://differentjason.github.io/kandecksky/>.

The application source and its CI live in a separate private repository,
`differentJason/kandecksky-app`. Nothing in this repo builds the app — it only
publishes the page that sells it.

## Layout

| Path            | Owner                                                    |
| --------------- | -------------------------------------------------------- |
| `index.html`    | Edited here by hand.                                      |
| `assets/`       | Edited here by hand.                                      |
| `guide/`        | **Generated.** Pushed from `kandecksky-app` on change.    |
| `release.json`  | **Generated.** Pushed from `kandecksky-app` on each tag.  |

Do not hand-edit `guide/` or `release.json` — the next sync from the build repo
will overwrite them. The guide's source of truth is `src/renderer/help/` in
`kandecksky-app`, which is also what ships inside the app.

## Store links

Purchase links are configured in one place: the `STORE` object in the script
block at the bottom of `index.html`.

```js
const STORE = {
  checkout: null,   // product/checkout URL
  library:  null,   // where existing buyers re-download
  price:    '$39',
};
```

While `checkout` is `null` the buy buttons render as a disabled "Coming soon"
state and prices are hidden. Set it to go live.

Installers are deliberately **not** hosted in this repo. They are built in the
private repo and attached to its private releases; the store is what delivers
them to buyers.

## Deploys

Any push to `main` redeploys via `.github/workflows/pages.yml`.
