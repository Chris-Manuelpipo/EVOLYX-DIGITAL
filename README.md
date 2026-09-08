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
├── hooks/            # useReveal.js — l'observer partagé des animations
├── pages/            # Pages routées (dont NotFound.jsx)
├── data/             # Contenu (services.js, projects.js) -- à éditer pour ajouter du contenu
├── locales/          # Traductions fr/en
├── lib/              # i18n, thème, URLs canoniques, JSON-LD
├── index.css         # Système visuel complet : tokens, utilitaires, animations
└── App.jsx           # Routing principal
docs/                  # Documentation projet (vision, cahier des charges, plan agents IA)
```

## Configuration requise avant mise en production

- [ ] **Configurer EmailJS** — voir [Formulaire de contact](#formulaire-de-contact). Sans ça, seul le bouton WhatsApp fonctionne.
- [ ] **Google Analytics 4** — `VITE_GA_MEASUREMENT_ID` dans Vercel, puis redeploy. Voir [Référencement](#référencement-search-console-et-trafic).
- [ ] **Google Search Console** — propriété domaine `evolyx.cm` + sitemap. Voir la même section.
- [ ] **Remplacer les témoignages d'emplacement** dans `src/data/testimonials.js` — voir [Témoignages](#témoignages)
- [ ] **Ajouter les captures manquantes** (Talky, OpenScience Hub, Stock Manager, Mini Marché, PME Compta) — voir [Captures d'écran du portfolio](#captures-décran-du-portfolio)
- [ ] Compléter les mentions légales dans `src/data/contact.js` (RCCM, NIU, forme juridique, siège, directeur, hébergeur)
- [ ] Renseigner `linkedin` et `github` dans `src/data/contact.js` (masqués tant qu'ils sont vides)

## Charte graphique

| Token | Clair | Sombre |
|---|---|---|
| `surface` | `#FFFFFF` | `#17171A` |
| `surface-page` (fond) | `#FAFAFA` | `#0E0E10` |
| `surface-container` | `#F4F4F5` | `#1D1D21` |
| `on-surface` (texte) | `#18181B` | `#F4F4F5` |
| `on-variant` | `#57575F` | `#A2A2AC` |
| `outline` | `#E5E5EA` | `#2A2A30` |
| `gold` (aplats) | `#D4AF37` | `#D4AF37` |
| `gold-text` (texte, liens) | `#8A6B10` | `#E3C561` |

Police unique : **Inter** (400 à 800). Rayons 8 / 12 / 16 / 20 px.

L'or de marque `#D4AF37` ne plafonne qu'à 1,9:1 sur blanc : il est réservé aux
**aplats** (boutons, puces, emblème). Pour le texte et les liens sur fond clair,
`--gold-text` est un or assombri qui tient 5,6:1, au-dessus du seuil AA.

## Système visuel

Structure de tokens **Material 3** (`surface` / `on-surface` / `outline` /
`surface-container`) — c'est elle qui rend le thème clair et le thème sombre
cohérents sans duplication — avec la géométrie et la retenue de **Render** :
rayons contenus, ombres douces, 1px d'outline, beaucoup d'espace.

Tout est défini dans [`src/index.css`](src/index.css). Les valeurs vivent dans
`:root` et `[data-theme]` ; `@theme inline` les expose à Tailwind sans les figer
à la compilation, ce qui permet au thème de basculer à chaud.

Utilitaires maison :

| Classe | Rôle |
|---|---|
| `card` / `card-hover` | La brique de base : surface, outline 1px, ombre légère |
| `btn` + `btn-gold` / `btn-solid` / `btn-outline` / `btn-ghost` | Boutons, hauteur 44px minimum |
| `chip` | Puce d'étiquette (la seule forme en pilule du système) |
| `field` | Champ de formulaire |
| `display` | Titre : graisse 700, interligne serré, `text-wrap: balance` |
| `grid-faint` / `glow-gold` | Grille et halo doré, en fond de héros |
| `link-line` | Lien dont le filet se trace au survol |

## Thème clair / sombre

Trois états : **système** (par défaut), **clair**, **sombre**. Le contrôle
segmenté est dans l'en-tête et dans le menu mobile.

- La logique vit dans [`src/lib/theme.js`](src/lib/theme.js) ; le composant est
  [`ThemeToggle.jsx`](src/components/ui/ThemeToggle.jsx).
- Le choix est stocké dans `localStorage` sous `evolyx-theme`. En mode
  « système », la clé est supprimée et `prefers-color-scheme` reprend la main —
  y compris en direct si l'OS bascule.
- Un **script synchrone dans `index.html`** applique le thème avant la première
  peinture. Sans lui, un visiteur en mode sombre verrait un flash blanc à chaque
  chargement. Ne pas le déplacer dans le bundle.
- Pendant la bascule, la classe `theme-switching` coupe toutes les transitions :
  sans elle, les quarante propriétés de couleur de la page s'animent ensemble et
  l'écran clignote.

## Animations

Aucune librairie : `Motion` et `GSAP` pèsent 30 à 50 Ko gzip et animent en
JavaScript à chaque frame — incompatible avec la promesse « conçu pour les
connexions instables ». Ici :

- un **unique `IntersectionObserver`** partagé ([`src/hooks/useReveal.js`](src/hooks/useReveal.js))
  ajoute la classe `is-in` ; tout le reste se joue en CSS sur le compositeur
- les transitions ne touchent que `transform` et `opacity` — jamais de reflow
- le décalage se règle par élément avec la variable CSS `--d`
- `will-change` est relâché 1,6 s après la révélation (classe `is-settled`)
- `prefers-reduced-motion: reduce` désactive tout et **force l'état visible** :
  aucune information n'est jamais cachée par une animation

Primitives : `.r-rise`, `.r-line > span` (ligne de titre qui monte depuis un
masque), `.r-rule` (filet qui se trace), `.r-veil` (volet qui se lève), `.r-fade`.

Les états de départ sont scopés sous `.js-anim`, classe posée sur `<html>` par
`main.jsx` : le jour où un prerender / SSR est ajouté, une page servie sans JS
s'affichera entière au lieu de rester blanche.

Composants : `<Reveal>` enveloppe une zone, `<Headline lines={[...]}>` découpe un
titre en lignes masquées, `<SectionLabel>` produit la puce d'étiquette.

## Formulaire de contact

Deux voies d'envoi, côte à côte :

| Bouton | Chemin | État |
|---|---|---|
| **Envoyer la demande** | EmailJS → boîte mail | ⚠️ à configurer (voir ci-dessous) |
| **Envoyer sur WhatsApp** | `wa.me` avec le message pré-rédigé | ✅ fonctionne sans configuration |

L'email est **semi-optionnel** : le schéma l'accepte vide mais le refuse mal
formé. Tant qu'aucun email n'est saisi, le bouton d'envoi par email est grisé et
un texte explique pourquoi — un bouton grisé sans explication laisse le visiteur
bloqué. WhatsApp reste disponible sans email : la conversation identifie déjà
l'expéditeur.

Le bouton WhatsApp valide le formulaire **de façon synchrone** (zod l'est) avant
d'ouvrir l'onglet. C'est délibéré : une validation asynchrone sortirait du geste
utilisateur et le navigateur bloquerait la fenêtre. Si l'ouverture échoue malgré
tout (navigateur intégré Facebook/Instagram), on bascule sur une navigation
classique. Le formulaire n'est jamais vidé après un envoi WhatsApp : si l'appli
ne s'ouvre pas, la saisie doit rester intacte.

### Configurer EmailJS

1. Créer un compte sur [emailjs.com](https://dashboard.emailjs.com) — l'offre
   gratuite plafonne à **200 emails/mois**.
2. **Email Services** → ajouter un service (Gmail, Outlook ou SMTP). Noter le
   `Service ID`.
3. **Email Templates** → créer un template. Noter le `Template ID`. Renseigner :
   - **To email** : `contact@evolyx.cm`
   - **Reply-To** : `{{email}}` ← indispensable, sinon répondre au prospect
     depuis la boîte mail renvoie vers vous-même
   - **Subject** : `Nouvelle demande — {{name}} ({{projectTypeLabel}})`
   - **Content** :

   ```
   Nom          : {{name}}
   Entreprise   : {{company}}
   Email        : {{email}}
   Téléphone    : {{phone}}
   Type projet  : {{projectTypeLabel}}
   Budget       : {{budgetLabel}}

   Besoin :
   {{message}}
   ```

   Variables disponibles : `name`, `company`, `email`, `phone`, `projectType`,
   `budget`, `message`, plus `projectTypeLabel` et `budgetLabel` (libellés déjà
   traduits dans la langue du visiteur — préférez-les aux clés brutes).
4. **Account → API Keys** → copier la `Public Key`.
5. Créer `.env` à la racine à partir de [`.env.example`](.env.example) et coller
   les trois valeurs.
6. Redémarrer `npm run dev` — Vite ne lit les `.env` qu'au démarrage.
7. **Account → Security** → restreindre les domaines autorisés à `evolyx.cm`
   (et `localhost` pour le développement).

### En production

`.env` est ignoré par git : les trois variables doivent être déclarées dans
l'hébergeur (Vercel → Settings → Environment Variables, Netlify → Site
configuration → Environment variables), **avant** le build. Vite les inline au
moment de la compilation ; les ajouter après coup n'a aucun effet tant qu'on n'a
pas relancé un déploiement.

Tant que les trois variables sont absentes, le formulaire n'échoue pas
silencieusement : il affiche « Le formulaire n'est pas encore connecté » et
renvoie vers l'email et WhatsApp.

## Témoignages

⚠️ **Les trois entrées de [`src/data/testimonials.js`](src/data/testimonials.js) sont
des emplacements, pas des témoignages.** Leur texte est une consigne de
remplissage, précisément pour qu'on ne puisse pas les confondre avec de vrais
avis clients. Publier de faux témoignages se retourne contre l'entreprise : un
prospect qui le repère ne revient pas.

Pour en ajouter un vrai :

```js
{
  quote: { fr: "…", en: "…" },   // 2 à 4 lignes. Un problème concret avant,
                                 // un résultat mesurable après.
  author: 'Awa N.',              // prénom + initiale si le client préfère
  role: { fr: 'Directrice', en: 'Director' },
  company: 'Nom de l\'entreprise',
  project: 'jk-it-solutions',    // slug d'un projet (optionnel)
  avatar: '/testimonials/awa.webp',  // carré 160x160 (optionnel)
}
```

Demandez l'accord **écrit** du client avant de publier son nom et celui de son
entreprise.

Comportement :

- une entrée dont `quote.fr` est vide est ignorée ;
- si plus aucune entrée n'est valide, la section disparaît entièrement de la
  page d'accueil et le bloc « Le mot du client » disparaît des pages projet —
  vérifié en capture. Mieux vaut un site plus court qu'une preuve sociale
  fabriquée ;
- la grille s'adapte : une carte centrée à 1, deux colonnes à 2, trois au-delà ;
- un témoignage rattaché à un `project` remonte automatiquement sur la page de
  ce projet, sous « Le mot du client ».

Composants : [`TestimonialsSection.jsx`](src/components/home/TestimonialsSection.jsx)
(accueil) et [`TestimonialCard.jsx`](src/components/testimonials/TestimonialCard.jsx).

## Captures d'écran du portfolio

Les cartes de projet affichent de **vraies captures**. Pour en ajouter une :

1. déposer le fichier dans `public/portfolio/<slug>.webp`, au format 1600×1000 (16:10)
2. renseigner `image: '/portfolio/<slug>.webp'` sur le projet dans [`src/data/projects.js`](src/data/projects.js)

Sans image, la carte affiche une surface neutre avec l'emblème — visiblement un
emplacement en attente, pas une illustration qui prétendrait montrer le produit.

Actuellement fournies : `jk-it-solutions`, `oss-gestion`. Manquantes : Talky,
OpenScience Hub, Stock Manager, Mini Marché, PME Compta.

## Référencement, Search Console et trafic

Le site canonique est **`https://www.evolyx.cm`**. L'apex `https://evolyx.cm`
redirige déjà vers `www`.

Déjà en place dans le dépôt :

| Fichier / mécanisme | Rôle |
|---|---|
| `public/robots.txt` | Autorise Google et les crawlers d'IA, pointe vers le sitemap |
| `public/sitemap.xml` | Toutes les URLs indexables (pages + projets) |
| `public/llms.txt` | Fiche factuelle pour ChatGPT, Claude, Perplexity, etc. |
| `index.html` | Title, description, Open Graph **absolus**, JSON-LD Organisation |
| `src/components/seo/Seo.jsx` | Title / meta / canonical / OG / fil d'Ariane par page ; `noindex` sur le 404 |
| `src/components/seo/Analytics.jsx` | GA4, seulement si `VITE_GA_MEASUREMENT_ID` est défini **et** que l'hôte est `evolyx.cm` |

Les langues FR/EN partagent les **mêmes URLs** (commutateur client). On ne
déclare pas de `hreflang` vers des adresses distinctes qui n'existent pas.

### 1. Google Analytics 4 (trafic)

1. Ouvre [Google Analytics](https://analytics.google.com) avec un compte Google.
2. **Admin** → **Créer** → **Propriété**. Nom : `EVOLYX Digital`. Fuseau :
   `Africa/Douala`. Devise : `XAF` (ou EUR si tu préfères comparer).
3. Plateforme **Web**. URL : `https://www.evolyx.cm`.
4. Copie l'**identifiant de mesure** `G-XXXXXXXX`.
5. Vercel → projet → **Settings → Environment Variables** :
   - Name : `VITE_GA_MEASUREMENT_ID`
   - Value : `G-XXXXXXXX`
   - Environments : **Production**
6. **Deployments** → dernier déploiement → **Redeploy**. Vite inline la
   variable au build : sans rebuild, rien ne change.
7. Visite `https://www.evolyx.cm`, puis dans GA4 **Rapports → Temps réel**.
   Une vue doit apparaître en moins d'une minute.

Le script n'est **pas** chargé sur `localhost` ni sur `*.vercel.app`.

### 2. Google Search Console (indexation)

La méthode **DNS** est la plus fiable (SPA : la balise HTML n'est pas
toujours lue avant JavaScript). Les nameservers du domaine sont déjà Vercel.

1. Ouvre [Google Search Console](https://search.google.com/search-console).
2. Ajoute une propriété de type **Domaine** : `evolyx.cm` (sans `www`, sans
   `https`). Ça couvre apex, `www` et les futurs sous-domaines.
3. Google affiche un enregistrement **TXT**. Copie-le.
4. Vercel → le projet (ou **Team → Domains → evolyx.cm**) → **DNS**.
   Ajoute :
   - Type : `TXT`
   - Name : `@`
   - Value : la chaîne `google-site-verification=…` fournie par Google
5. Dans Search Console, clique **Valider**. La propagation TXT peut prendre
   de quelques minutes à 48 h.
6. Une fois validé : **Sitemaps** → saisis `https://www.evolyx.cm/sitemap.xml`
   → **Envoyer**.
7. **Paramètres → utilisateurs** : tu peux ajouter un second compte Google
   plus tard.

Vérification HTML (plan B) : colle le jeton dans `VITE_GSC_VERIFICATION` sur
Vercel, redeploy, puis revalide. Le plugin Vite n'écrit la balise
`<meta name="google-site-verification">` que si le jeton est présent.

### 3. Après 48 h

- Search Console → **Couverture / Pages** : aucune URL importante en
  `Exclue` à tort (le 404 doit rester `noindex`).
- Teste une URL : [Inspecteur d'URL](https://search.google.com/search-console)
  → `https://www.evolyx.cm/` → **Demander une indexation**.
- Partage WhatsApp / LinkedIn : [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
  avec `https://www.evolyx.cm/` pour rafraîchir `og:image`.
- Rich results : [Google Rich Results Test](https://search.google.com/test/rich-results)
  sur l'accueil (Organisation) et une fiche projet.

Quand tu ajoutes un projet dans `src/data/projects.js`, ajoute aussi son URL
dans `public/sitemap.xml`.

