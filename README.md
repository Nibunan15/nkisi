# N'kisi Global Consulting — MERN

`frontend/` is React 18 + Vite + React Router and renders the existing design unchanged. `backend/` is Express + Mongoose + MongoDB Atlas and stores the two enquiry forms.

## How the design was converted
The design was already written in React, so its page files were moved **verbatim** into `frontend/src/legacy/` as ES modules. Only three kinds of change were made:
1. **Module wiring.** `globals.js` puts React, GSAP (ScrollTrigger, Flip), lucide and the design system on `window`, which is where the original code expects to find them.
2. **Asset paths.** `../../assets/` became `/assets/`, and the 3D parrot script now lives in `/legacy/`.
3. **Forms.** The Contact and Work-with-us forms now POST to the API, with loading, error and success states, a hidden spam-trap field, and name/email validation.

All styling is the original inline styles plus the token CSS. Tailwind was not added, because it would change nothing visible and would duplicate the tokens. The icons use the `lucide` package the design already relies on (`<i data-lucide>`), not `lucide-react`.

All original URLs keep working (`/about.html`, …), and clean aliases (`/about`) work too. Internal links navigate client-side.

## Structure
```
frontend/
  index.html  vite.config.js  vercel.json  .env.example
  public/assets/…  public/legacy/FounderBird3D.js  public/images/ (put founder-photo.jpg here)
  src/
    main.jsx  App.jsx  globals.js
    config/routes.js        hooks/useSpaLinks.js     layouts/PageMount.jsx
    services/api.js         utils/imageSlot.js       styles/ (tokens)
    design-system/…         legacy/… (original page code + page CSS)
backend/
  src/ server.js app.js
    config/ env.js db.js    models/Enquiry.js        validators/enquiryValidator.js
    controllers/ routes/    middleware/ (validate, admin key, errors, 404)
    services/ utils/
  test/  postman/
docs/DESIGN_ANALYSIS.md   render.yaml
```

## Run locally (Node ≥ 18.18)
```bash
npm run install:all
cp backend/.env.example backend/.env      # set MONGODB_URI (and ADMIN_API_KEY if you want the admin endpoints)
cp frontend/.env.example frontend/.env    # leave VITE_API_URL empty for local dev
npm run dev:backend                        # http://localhost:5000
npm run dev:frontend                       # http://localhost:5173 (proxies /api → :5000)
npm test                                   # backend validator tests
npm run build                              # frontend production build → frontend/dist
```

## API
| Method | Path | Auth | Purpose |
|---|---|---|---|
| GET | /api/health | – | Status and DB state (returns 503 if the DB is down) |
| POST | /api/enquiries | – (10 requests / 15 min per IP) | Submit a Contact or Work-with-us form |
| GET | /api/enquiries?status=&source=&page=&limit= | x-admin-key | List enquiries |
| GET / PATCH / DELETE | /api/enquiries/:id | x-admin-key | Read / set status (`new` `contacted` `closed`) / delete |

Errors are returned as `{ success:false, message, errors?:[{field,message}] }`, with status 422 for validation errors. A Postman collection is in `backend/postman/`.

## MongoDB Atlas
1. Create a free M0 cluster.
2. Under Database Access, add a user with readWrite permission.
3. Under Network Access, allow `0.0.0.0/0` (Render IPs are dynamic) or Render's static outbound IPs.
4. Click Connect → Drivers and copy the URI. Add the database name: `…mongodb.net/nkisi?retryWrites=true&w=majority`.
5. Put the URI in `MONGODB_URI`. The `enquiries` collection and its indexes are created automatically on the first submission.

## Deploy
- **Backend → Render.** Create a New Blueprint from the repo (it uses `render.yaml`), or a Web Service with root `backend`, build `npm ci` and start `npm start`. Set `MONGODB_URI` and `CORS_ORIGINS=https://<your-vercel-domain>`. Check that `/api/health` returns `db: "connected"`.
- **Frontend → Vercel.** Import the repo with Root Directory `frontend` and Framework `Vite`. Set `VITE_API_URL=https://<your-render-service>.onrender.com`. `vercel.json` already rewrites every route to the SPA.
- After deploying, add the final Vercel domain to `CORS_ORIGINS` on Render and redeploy.

## Test checklist (run it yourself; I could not run it)
- [ ] `npm run build` succeeds with no errors
- [ ] All 8 pages render with no console errors, on both `.html` and clean URLs
- [ ] Nav shows the active-page underline, and the hamburger works at ≤900px
- [ ] Home, About, Services and Projects animations play, and scroll pinning works after navigating between pages
- [ ] Contact form: empty name or bad email shows a field error; a valid submit shows "Sending…", then the toast, and a document appears in Atlas
- [ ] Work form: submitting with no services shows "Pick at least one service"; a valid submit is stored with clientType, services and size
- [ ] Taking the backend offline makes the form show the network error text, not a crash
- [ ] Layouts look right at 375, 768, 1024 and 1440px wide, with no horizontal scroll
