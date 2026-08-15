# EVOLYX Digital — Site Web

Site vitrine/portfolio de la branche développement logiciel du groupe EVOLYX.

## Documentation

Avant toute modification, lire dans l'ordre :
1. [`docs/VISION.md`](docs/VISION.md) — pourquoi ce site existe, principes directeurs
2. [`docs/CAHIER_DES_CHARGES.md`](docs/CAHIER_DES_CHARGES.md) — périmètre fonctionnel et technique
3. [`docs/AGENTS_PLAN.md`](docs/AGENTS_PLAN.md) — plan de continuation par phases (pour agents IA ou développeurs reprenant le projet)

## Stack technique

- React 19 + Vite
- Tailwind CSS v4
- React Router v7
- react-i18next (bilingue FR/EN)
- React Hook Form + Zod
- EmailJS (formulaire de contact, sans backend)

## Démarrage

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:5173`.

## Build de production

```bash
npm run build
npm run preview   # pour tester le build localement
```

## Structure du projet

```
src/
├── components/       # Composants réutilisables (layout, home, services, portfolio, contact, ui)
├── pages/            # Pages routées
├── data/             # Contenu (services.js, projects.js) -- à éditer pour ajouter du contenu
├── locales/           # Traductions fr/en
├── lib/              # Configuration (i18n)
└── App.jsx           # Routing principal
docs/                  # Documentation projet (vision, cahier des charges, plan agents IA)
```

## Configuration requise avant mise en production

- [ ] Configurer EmailJS dans `src/components/contact/ContactForm.jsx` (voir Phase B de `docs/AGENTS_PLAN.md`)
- [ ] Compléter les 3 projets manquants du portfolio dans `src/data/projects.js`
- [ ] Remplacer les placeholders de contact (`+237 XX XXX XXX`, liens réseaux sociaux) dans `src/components/layout/Footer.jsx` et `src/pages/Contact.jsx`
- [ ] Compléter les mentions légales dans `src/pages/LegalNotice.jsx`
- [ ] Ajouter les vraies images du portfolio (voir Phase C de `docs/AGENTS_PLAN.md`)

## Charte graphique

| Token | Valeur |
|---|---|
| Or | `#D4AF37` |
| Noir | `#1A1A1A` |
| Gris | `#6E6E6E` |
| Fond clair | `#F7F6F3` |
| Police titres | Playfair Display |
| Police texte | Inter |

Définis dans `src/index.css` (`@theme`).
