# VendWeave prototype 01

A static, responsive, clickable concept website for pitching the VendWeave marketplace idea. It uses plain HTML, CSS, and JavaScript—no build step, framework, database, or paid AI builder required.

## Preview locally

Open `index.html` in a modern browser. An internet connection is used for Google Fonts and the sample Unsplash photography. The layout and interactions are in the local files.

## What works in this prototype

- Responsive landing page and navigation
- Product search and category filters
- Save/favorite buttons (in-page demo state)
- Product and vendor detail preview dialogs
- Event detail preview
- Shopper/member, vendor, and premium concept dialogs
- Sample listings and dashboard figures

## Important limitations

This is a presentation prototype, not a production marketplace. It does not include real accounts, a database, persistent likes/comments, live event listings, payments, private dashboards, or real vendor onboarding. Sample names, listings, dates, and metrics are illustrative. Replace them with approved real content before public promotion.

## Publish with GitHub + Cloudflare Pages (recommended)

1. Create a free GitHub account if needed: https://github.com/
2. Create a new repository named `vendweave-prototype`. Public or private is fine for Cloudflare Pages; choose whichever suits your pitch materials.
3. Upload the contents of this folder to the repository root (not the containing folder itself). The root should show `index.html`, `styles.css`, and `script.js`.
4. Create/sign in to a Cloudflare account: https://dash.cloudflare.com/
5. Open Workers & Pages → Create application → Pages → Connect to Git.
6. Connect GitHub and select `vendweave-prototype`.
7. Configure: Production branch `main`; Framework preset `None` / `None`; Build command `exit 0`; Build output directory `/` (if the form rejects `/`, use `.` or the root directory option offered in the dashboard).
8. Save and deploy. Cloudflare will provide a `*.pages.dev` URL.
9. Later, edit files in GitHub and commit to `main`; Cloudflare automatically deploys the updated version.

**Important:** choose Git integration from the beginning. Cloudflare documents that a Direct Upload project cannot later be converted to a Git-integrated project. Git integration is the best fit here because GitHub will be the source of truth and every commit can trigger a deployment.

## Alternative: Cloudflare drag-and-drop

Cloudflare Pages also offers Direct Upload, but choose this only if you do not want automatic GitHub deployments. Cloudflare says Direct Upload projects cannot later be switched to Git integration; you would need a new Pages project to change paths. For this project, use Git integration instead.

## Next development steps

1. Confirm visual direction and brand assets.
2. Replace sample vendors/events/products with pitch-approved examples.
3. Add dedicated vendor and organizer dashboard screens.
4. Define data model and API contracts before selecting a real backend.
5. Add authentication, database, moderation, and payments only when the business requirements and budget are ready.
