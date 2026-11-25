VENDWEAVE — HERITAGE-ENHANCED PROTOTYPE

Contents
- index.html
- styles.css
- script.js
- images/
  - botanical-sprig.svg
  - corner-ornament.svg
  - guild-seal.svg
  - market-knot-divider.svg

WHAT CHANGED
- Added a botanical engraving accent to the homepage hero.
- Added subtle knotwork dividers between key sections.
- Replaced the text-only Guild emblem with the illustrated Guild seal.
- Added restrained Celtic-inspired corner ornaments to the Guild section.
- Kept product, maker, and event photography in the existing JavaScript data;
  these remain replaceable with real community-submitted images later.

DEPLOY TO GITHUB + CLOUDFLARE PAGES
1. Download and unzip this package.
2. Open your GitHub repository for the VendWeave site.
3. Upload/replace index.html, styles.css, and script.js at the repository root.
4. Upload the entire images folder so the four SVG files remain inside /images/.
5. Commit the changes.
6. Cloudflare Pages should automatically start a new deployment. Once it finishes,
   refresh the site.

IMPORTANT
Keep the file names and folder structure exactly as shown. The HTML references
styles.css, script.js, and the images/ folder using relative paths.


HERO IMAGE UPDATE
- The homepage opening section now uses images/market-hero.jpg as a full-width
  background instead of the previous split-layout stock photo.
- The headline, description, and search box sit over a darkened overlay so
  they remain readable.
- The layout adapts for mobile screens.
