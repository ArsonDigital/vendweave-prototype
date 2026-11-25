VENDWEAVE VENDOR STUDIO — DEMO BUILD

WHAT'S NEW
- Vendor onboarding flow with merchant profile fields and optional logo upload
- Merchant dashboard and setup checklist
- Product/inventory manager: create, edit, delete, feature, search/filter, set quantity, category, price, status and description
- Product photo upload (browser-resized/compressed for local demo)
- Store appearance editor: accent/background/text colors, grid/list/featured layouts, show/hide story and featured items
- Storefront preview (live mini-preview and larger shopper preview)
- Profile editor for shop identity, location, story, banner/logo, website and Instagram
- JSON backup export/import
- Local browser persistence via localStorage
- Existing marketplace homepage links now open Vendor Studio

HOW TO TRY IT
1. Unzip this package to a folder.
2. Open index.html in a modern browser (Chrome recommended).
3. Click Vendor Studio in the top navigation, or open vendor-studio.html directly.
4. Create a demo shop, then use the left-side workspace tabs to explore.
5. Changes save locally in the browser. Export a JSON backup if you want to save a copy.

NOTES / LIMITATIONS
- This is a local browser prototype. It does not create a real account or authenticate users.
- No database/server is connected; localStorage is specific to this browser/device.
- Image uploads are resized to fit browser local storage; very large sets of images may exceed storage quota.
- The example products are fictional and should be replaced with real vendor content before public launch.
- No checkout, payment, orders, public sharing, vendor approval, or backend inventory sync yet.
- Google Fonts and the existing sample homepage photos require an internet connection. Uploaded photos work locally after upload.

NEXT DEVELOPMENT MILESTONE
When the demo flow feels right, define the real backend model and authentication flow (vendor accounts, shops, products, product images, inventory, storefront appearance) before moving local demo storage to a database.
