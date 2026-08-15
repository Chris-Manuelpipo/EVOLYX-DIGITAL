# Cahier des Charges — Site EVOLYX Digital

**Version 1.0**
**Projet :** Site vitrine/portfolio EVOLYX Digital
**Domaine cible :** digital.evolyx.cm

---

## 1. Contexte et objectifs

EVOLYX Digital est la branche développement logiciel du groupe EVOLYX (Cameroun). Le site a pour objectif de :

1. Démontrer la capacité technique réelle d'EVOLYX Digital via un portfolio de projets concrets
2. Générer des demandes de devis qualifiées
3. Poser un positionnement clair : "nous résolvons des problèmes métiers avec du logiciel sur mesure", pas "nous faisons des sites web"
4. Servir de socle technique évolutif pour accueillir plus tard un espace client et des produits SaaS

## 2. Utilisateurs cibles

- PME camerounaises et africaines francophones cherchant à digitaliser leurs opérations
- Clients internationaux francophones et anglophones (diaspora, Europe, Amérique du Nord)
- Partenaires et recruteurs évaluant la crédibilité technique d'EVOLYX

## 3. Périmètre fonctionnel

### Fonctionnalités incluses (V1)
- Page d'accueil avec hero, aperçu services, aperçu portfolio, section "pourquoi nous", processus, CTA
- Page Services avec catalogue complet (6 familles de services)
- Page Portfolio avec filtre par catégorie
- Page détail projet (contexte / solution / point fort / stack technique)
- Page À propos
- Page Contact avec formulaire structuré (envoi via EmailJS, sans backend)
- Bilingue français / anglais avec sélecteur de langue persistant
- Design responsive (mobile-first)
- Accessibilité de base (focus visible, `prefers-reduced-motion` respecté)

### Fonctionnalités explicitement exclues (V1)
- Espace client authentifié (suivi de projet, factures)
- Blog / actualités
- Backend propre (API, base de données)
- Calculateur de devis interactif
- CMS pour édition de contenu sans code

Ces éléments sont prévus dans l'architecture pour une V2, mais ne font pas partie du périmètre actuel.

## 4. Architecture technique

| Élément | Choix | Justification |
|---|---|---|
| Framework | React 19 + Vite | Cohérent avec `stock-manager-frontend` existant |
| Styling | Tailwind CSS v4 | Rapide à maintenir, design tokens centralisés |
| Routing | React Router v7 | Standard, léger |
| i18n | react-i18next | Solution mature, fichiers de traduction JSON simples |
| Formulaires | React Hook Form + Zod | Validation robuste, déjà utilisé dans `stock-manager-frontend` |
| Envoi de formulaire | EmailJS | Pas de backend nécessaire pour la V1 |
| Icônes | react-icons (Font Awesome) | Cohérence avec les documents EVOLYX déjà produits |
| Déploiement | VPS existant (Nginx + PM2) ou Vercel | À trancher selon la charge du VPS actuel |

## 5. Identité visuelle

| Token | Valeur |
|---|---|
| Or | `#D4AF37` |
| Noir | `#1A1A1A` |
| Gris | `#6E6E6E` |
| Fond clair | `#F7F6F3` |
| Police titres | Playfair Display (serif) |
| Police texte | Inter (sans-serif) |

Charte identique à celle utilisée dans tous les documents PDF EVOLYX déjà produits (ordre du jour, catalogue de services, contrats).

## 6. Contenu — Portfolio

7 projets confirmés à afficher, répartis en catégories (Web / Temps réel / Métier / Desktop / Fintech) :

1. Talky / Alanya — messagerie temps réel
2. OpenScience Hub — répertoire académique
3. Stock Manager — gestion de stock
4. Mini Marché — gestion d'épicerie (desktop)
5. JK IT Solutions — site vitrine avec CMS
6. OSS — gestion d'organisme de sécurité sociale
7. PME Compta — MVP fintech comptabilité PME

**Complément à venir :** 3 projets additionnels à choisir parmi 5 propositions (InvoiceFlow, BookIt, SchoolConnect, DeliverEasy, AssistantPME) ou à construire spécifiquement pour étoffer le portfolio.

## 7. Contraintes

- Le site doit rester performant sur connexion mobile limitée (contexte camerounais)
- Le contenu doit être facilement modifiable sans redéploiement complexe (données centralisées dans `src/data/`)
- Le code doit rester compréhensible et repris facilement par un futur développeur ou un agent IA (voir `docs/VISION.md` et `docs/AGENTS_PLAN.md`)

## 8. Critères de validation

- [ ] Le site est responsive de 320px à 1920px
- [ ] Le changement de langue FR/EN fonctionne sur toutes les pages sans rechargement
- [ ] Le formulaire de contact valide les champs et envoie effectivement l'email (une fois EmailJS configuré)
- [ ] Chaque page se charge sans erreur console
- [ ] Le build de production (`npm run build`) passe sans erreur
- [ ] La navigation clavier fonctionne (focus visible sur tous les éléments interactifs)

## 9. Livrables

- Code source complet du site (ce dépôt)
- Document de vision (`docs/VISION.md`)
- Plan de continuation pour agents IA (`docs/AGENTS_PLAN.md`)
- Ce cahier des charges

---

*Ce cahier des charges est un document vivant, à mettre à jour au fil des décisions (choix des 3 projets additionnels, hébergement définitif, configuration EmailJS, etc.).*
