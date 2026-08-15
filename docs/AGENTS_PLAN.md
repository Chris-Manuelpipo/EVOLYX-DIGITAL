# Plan de Continuation pour Agents IA — EVOLYX Digital

Ce document sert de feuille de route pour tout agent IA (Claude Code, Cursor, etc.) reprenant ce projet. Lire d'abord `docs/VISION.md` et `docs/CAHIER_DES_CHARGES.md` avant toute intervention.

**État actuel du projet :** structure de base initialisée, pages principales fonctionnelles, contenu portfolio partiellement rédigé (7/10 projets), formulaire de contact non connecté (EmailJS à configurer), pas encore d'assets visuels réels (logo présent, mais pas d'images produits/écrans de projets).

---

## Phase A — Finalisation du contenu

**Prompt suggéré :**
> Lis `docs/CAHIER_DES_CHARGES.md` et `src/data/projects.js`. Il manque 3 projets dans le portfolio. Propose-moi 5 idées de projets cohérentes avec les services listés dans `src/data/services.js`, dans le même format que les projets existants (contexte / solution / highlight, bilingue fr/en). Attends ma validation avant de les ajouter au fichier.

**Vérification :** `projects.js` contient 10 projets, tous avec les champs `context`, `solution`, `highlight` remplis en fr et en.

---

## Phase B — Configuration EmailJS

**Prompt suggéré :**
> Le fichier `src/components/contact/ContactForm.jsx` utilise EmailJS avec des placeholders (`YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY`). Guide-moi pour créer un compte EmailJS, configurer un template d'email adapté aux champs du formulaire (name, company, email, phone, projectType, budget, message), et remplacer les placeholders par les vraies valeurs. Propose aussi de déplacer ces clés dans un fichier `.env` (`VITE_EMAILJS_*`) plutôt qu'en dur dans le code.

**Vérification :** un email de test envoyé depuis le formulaire arrive bien à l'adresse EVOLYX.

---

## Phase C — Assets visuels réels

**Prompt suggéré :**
> Actuellement, `ProjectCard.jsx` et `ProjectDetail.jsx` affichent un placeholder texte (dégradé + nom du projet) à la place d'une vraie image. J'ai des captures d'écran de mes projets [à fournir]. Intègre-les dans `src/assets/images/portfolio/`, ajoute un champ `image` dans `src/data/projects.js`, et adapte les composants pour afficher l'image si elle existe, sinon garder le placeholder actuel en repli.

**Vérification :** au moins les 3 projets "featured" (Talky/Alanya, OpenScience Hub, Stock Manager) ont une image réelle.

---

## Phase D — Optimisation des performances

**Prompt suggéré :**
> Le build actuel génère un seul bundle JS de ~1.7 Mo. Mets en place le code-splitting par route avec `React.lazy()` et `Suspense` dans `App.jsx`. Vérifie aussi que les images ajoutées en Phase C sont compressées et servies dans un format moderne (WebP avec fallback), et ajoute le lazy loading (`loading="lazy"`) sur toutes les images hors du premier écran.

**Vérification :** `npm run build` ne montre plus l'avertissement de chunk > 500kB ; le Lighthouse Performance score est ≥ 85 sur mobile.

---

## Phase E — SEO technique

**Prompt suggéré :**
> Ajoute une gestion des balises `<title>` et `<meta description>` dynamiques par page (via `react-helmet-async` ou équivalent), génère un `sitemap.xml` statique listant toutes les routes (y compris `/portfolio/:slug` pour chaque projet), et ajoute un fichier `robots.txt`. Vérifie que chaque page a une meta description unique et pertinente en fr et en.

**Vérification :** chaque page a un `<title>` distinct visible dans l'onglet du navigateur ; `sitemap.xml` et `robots.txt` sont accessibles à la racine du build.

---

## Phase F — Déploiement

**Prompt suggéré :**
> Prépare le déploiement du site sur [VPS existant avec Nginx + PM2 / Vercel — à préciser]. Si VPS : écris la configuration Nginx pour servir le build statique sur le sous-domaine `digital.evolyx.cm`, avec HTTPS (Let's Encrypt/Certbot). Si Vercel : configure le projet pour un déploiement automatique depuis le dépôt Git, avec le domaine personnalisé `digital.evolyx.cm`.

**Vérification :** le site est accessible publiquement sur `digital.evolyx.cm` avec un certificat HTTPS valide.

---

## Phase G — Espace client (V2, hors périmètre actuel)

**Prompt suggéré (à ne PAS exécuter avant validation explicite du porteur de projet) :**
> Conçois l'architecture d'un espace client authentifié permettant à un client EVOLYX de suivre l'avancement de son projet, consulter ses devis/factures, et échanger des messages. Propose un backend (Node.js/Express + PostgreSQL, cohérent avec la stack Alanya) et une intégration avec le frontend existant sans casser les pages publiques actuelles.

**Ne pas démarrer cette phase sans confirmation explicite** — elle sort du périmètre V1 défini dans le cahier des charges.

---

## Règles à respecter à chaque phase

1. Ne jamais casser le build (`npm run build` doit toujours passer avant de considérer une tâche terminée)
2. Ne jamais modifier la charte graphique (couleurs, polices) sans confirmation explicite
3. Toute nouvelle section de contenu doit être ajoutée en français ET en anglais
4. Committer par phase logique, pas par fichier isolé, pour garder un historique lisible
5. Mettre à jour ce document (`AGENTS_PLAN.md`) en cochant les phases terminées

## Suivi d'avancement

- [ ] Phase A — Contenu portfolio complété (10/10 projets)
- [ ] Phase B — EmailJS configuré et testé
- [ ] Phase C — Assets visuels intégrés
- [ ] Phase D — Performance optimisée
- [ ] Phase E — SEO technique en place
- [ ] Phase F — Site déployé sur digital.evolyx.cm
- [ ] Phase G — Espace client (V2 — non démarré, en attente de validation)
