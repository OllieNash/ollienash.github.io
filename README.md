# ollienash.github.io
Academic webpage, live at **https://ollienash.github.io**.

It is a plain HTML/CSS site: there is nothing to install or build. GitHub Pages publishes whatever is on the `main` branch.

## Files

| File | What it is |
|---|---|
| `index.html` | All the text on the page. Placeholders are in `[square brackets]` and marked with `<!-- EDIT -->` comments. |
| `css/style.css` | Colours, fonts and layout. The colours are at the top of the file. |
| `js/main.js` | Small extras: maths rendering, fade-in on scroll, nav highlighting. |
| `images/` | Your photo, the favicon and the project image. |
| `.nojekyll` | Tells GitHub Pages to publish the files as they are. Leave it in place. |

## Preview on your computer

In VS Code, install the **Live Server** extension, then right-click `index.html` → **Open with Live Server**. The page reloads each time you save.

(Opening `index.html` by double-clicking also works.)

## Common edits

- **Name, department, institution, bio:** search `index.html` for `[Your Name]`, `[Department]` and `[Institution]`.
- **Photo:** save a square image (about 400×400px, under 200KB) as `images/profile.jpg`. It replaces the placeholder automatically.
- **Link buttons:** replace each `[... URL]` in the intro. To remove a button, delete its whole `<li> ... </li>`.
- **Add a publication:** copy an `<article class="card pub"> ... </article>` block, paste it inside the right year, and edit it. For a new year, copy the whole `<div class="pub-year"> ... </div>` block and put the newest year first.
- **Add a project:** there is a commented-out template under the Projects section.
- **Maths:** write LaTeX between `$...$` (inline) or `$$...$$` (on its own line). For a literal dollar sign, write `\$`.
- **Colours:** change the variables at the top of `css/style.css`. The blobs use `--violet`, `--cyan`, `--indigo` and `--pink`.

## Publish changes

Commit and push to `main`, either from VS Code's Source Control panel or with:

```
git add .
git commit -m "Update website"
git push
```

The live site updates within a minute or two. In the repo's **Settings → Pages**, the source should be **Deploy from a branch**, `main`, `/ (root)`.
