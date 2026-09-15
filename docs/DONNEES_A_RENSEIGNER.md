# Données à renseigner — EVOLYX Digital

Checklist avant mise en production « complète ». Aucun secret dans ce fichier : les clés API vont dans Vercel / `.env` local.

## 1. Mentions légales — `src/data/contact.js` → `legal`

| Champ | Statut |
|--------|--------|
| `company`, `parent`, `director` | Renseignés (voir `contact.js`) |
| `host` | Vercel Inc. (`{ name, address, url }`) |

Affichage : [`src/pages/LegalNotice.jsx`](../src/pages/LegalNotice.jsx).

## 2. Réseaux (optionnel) — `src/data/contact.js`

| Champ | Statut |
|--------|--------|
| `linkedin` | Vide = icône masquée |
| `github` | Vide = icône masquée |

## 3. EmailJS (Vercel → Environment Variables)

| Variable | Où la trouver |
|----------|----------------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS → Email Services |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS → Email Templates |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS → Account → API keys |

Procédure détaillée : [README.md](../README.md) § Configurer EmailJS.

**Sécurité :** EmailJS → Account → Security → domaines autorisés (`www.evolyx.cm`, `evolyx.cm`).

## 4. Google Search Console

| Variable | Usage |
|----------|--------|
| `VITE_GSC_VERIFICATION` | Jeton HTML (meta verification) injecté au build |

Alternative : vérification par enregistrement DNS sur le domaine `evolyx.cm`.

## 5. Captures portfolio — `public/portfolio/`

Format : **1600×1000**, de préférence **.webp**. Puis ajouter `image: '/portfolio/…'` dans [`src/data/projects.js`](../src/data/projects.js).

| Slug projet | Fichier attendu | Image renseignée |
|-------------|-----------------|------------------|
| `talky-alanya` | `talky-alanya.webp` | Non |
| `openscience-hub` | `openscience-hub.webp` | Non |
| `stock-manager` | `stock-manager.webp` | Non |
| `mini-marche` | `minimarche.png` | Oui |
| `not-gonna-lie` | `ngl.png` | Oui |
| `prestige-pressing` | `prestige-pressing.png` | Oui |
| `jk-it-solutions` | `jk-it-solutions.webp` | Oui |
| `oss-gestion` | `oss-gestion.webp` | Oui |
| `pme-compta` | `pme-compta.webp` | Non |

Priorité visuelle : projets `featured: true` et capture du héros (premier projet avec image).

## 6. Recette rapide après remplissage

- [x] `/mentions-legales` — éditeur + hébergeur + contact
- [ ] Formulaire `/contact` → email reçu (EmailJS)
- [ ] Bandeau cookies → Accepter → trafic visible dans GA4 (prod uniquement)
- [ ] Search Console : sitemap soumis, pages indexées
