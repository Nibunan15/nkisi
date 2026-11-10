# Step 1 — Design analysis (source of truth: `ui_kits/website/`)

## Pages & sections
| URL | Component | Sections (in order) |
|---|---|---|
| `/` · `/index.html` | `Site` | Header · HeroPremium · HaDeck (about) · HsCube (services) · HfFan (founder) · HpWall (latest works) · Clients/Testimonials · Footer |
| `/about.html` | `AboutPage` | Header · AhParticles hero · ApTurntable (overview, vision, mission) · Awards & recognition · Logo story (LsDepth) · Impact stats · Founder1e · Testimonials · CTA band · Footer |
| `/services.html` (Expertise) | `ServicesPage` | Header · ServicesScroll (6 services, scroll-driven) · Footer |
| `/projects.html` (Our Work) | `ProjectsPage` | Header · ProjectsHero1d · ProjectsDeck · College / Content / Corporate · Testimonials · CTA band · Footer |
| `/founder.html` | `FounderPage` | Header · Page hero + portrait · Story & credentials · Awards · CTA band · Footer |
| `/clients.html` | `ClientsPage` | Header · Page hero · Corporate clients · Academic collaborators · Impact · CTA band · Footer |
| `/contact.html` | `ContactPage` | Header · Page hero · Contact details · Map · Enquiry form · Footer |
| `/work-with-us.html` (Let's Talk) | `WorkPage` | Header · Page hero · 2-step request form · Impact · Footer |

## Shared components
Header (logo · About · Expertise · Our Work · Contact · Let's Talk ↗, hamburger ≤900px), Footer, Impact, Clients, CtaBand, Contact form, PageHero, Shell (toast host).
Design-system primitives: Button, IconButton, Badge, Card, Tag, Input, Select, Checkbox, Radio, Switch, Tabs, Dialog, Toast, Tooltip.

## Forms
- **Contact** (`/contact.html`): name*, email*, organization, service (select), message, newsletter checkbox → `POST /api/enquiries` `source: "contact"`.
- **Work with us** (`/work-with-us.html`): services* (multi-select tiles), client type (Corporate/Academic/Individual), name*, email*, company/institution/profession, team size/students, goals & timeline → `POST /api/enquiries` `source: "work-with-us"`.

## Assets
`public/assets/` (logo mark, wordmark, lockup, hero photo, 12 parrot sprite frames), `public/legacy/FounderBird3D.js` (three.js parrot, loaded on demand), remote images on nkisi.in (unchanged URLs), Google Fonts (Zilla Slab, Manrope, JetBrains Mono).

## Backend needs
Only the two enquiry forms send data, so the backend is just that: one collection, **enquiries**, plus admin endpoints protected by an API key to read, update and delete them. There are no user accounts in the design, so JWT is not used.
