# VendWeave Shopper Experience — Prototype 02

A static, responsive shopper-facing marketplace prototype built with plain HTML, CSS, and JavaScript. No framework, package installation, build process, paid AI builder, or backend is required.

## Preview
Open `index.html` in a modern browser. Internet access is needed for the remote sample photography and Google Fonts.

## Included shopper flows
- Search sample products and makers by keyword
- Filter by category, location, and upcoming-event availability
- Sort discoveries by featured, product name, or maker
- Open product detail panels with maker story and sample community comments
- Save/unsave products and view a personal collection
- Open maker profiles, follow makers, and view their featured products
- Explore a sample event and click booth-map locations
- Preview a shopper profile and account-style summary
- Responsive mobile navigation and layouts

## Demo limitations
This is a clickable concept prototype, not a production marketplace. Product listings, prices, vendor names, locations, event details, booth assignments, and comments are illustrative. Favorites and follows exist only in the current page session; comments are local to the open product panel. There is no real account authentication, shared database, live event data, payment processing, moderation, or persistent cross-device state. The sample event date is illustrative and must not be presented as a real event.

## Publish free with GitHub + Cloudflare Pages
1. Create a GitHub repository, for example `vendweave-shopper`.
2. Upload the contents of this folder to the repository root: `index.html`, `styles.css`, `script.js`, and `README.md`.
3. In Cloudflare, open Workers & Pages → Create application → Pages → Connect to Git.
4. Connect GitHub and select the repository.
5. Set production branch to `main`, framework preset to None, build command to `exit 0`, and build output directory to `/` (or `.` if required by the dashboard).
6. Deploy. Cloudflare provides a `*.pages.dev` URL and can redeploy when you commit updates to GitHub.

Choose Git integration at project creation; Cloudflare documents that a Git-integrated Pages project cannot later be switched to Direct Upload. See https://developers.cloudflare.com/pages/get-started/git-integration/ and https://developers.cloudflare.com/pages/framework-guides/deploy-anything/.
