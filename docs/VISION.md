# Vision — EVOLYX Digital

## Ce que nous construisons

EVOLYX Digital n'est pas "un site vitrine de plus". C'est le premier point de contact entre la branche développement logiciel du groupe EVOLYX et des clients potentiels — PME camerounaises, entreprises africaines francophones, et clients internationaux. Ce site doit convaincre en quelques secondes qu'EVOLYX Digital sait construire des produits numériques sérieux, pas juste "faire du code".

## Le problème qu'on résout

Beaucoup d'agences de développement au Cameroun se positionnent comme des exécutants génériques ("nous faisons des sites web et des applications"). EVOLYX Digital doit se différencier en montrant :

1. **Des preuves, pas des promesses** — un portfolio de projets réels avec du contexte métier, pas des maquettes
2. **Une expertise technique réelle** — notamment sur le temps réel (Talky/Alanya), rare sur le marché local
3. **Une approche orientée valeur** — "nous digitalisons vos opérations", pas "nous codons ce que vous demandez"

## Principes directeurs pour toute évolution future

Quiconque reprend ce projet (humain ou agent IA) devrait respecter ces principes :

1. **Le contenu prime sur la décoration.** Chaque section doit avoir une raison métier d'exister. Ne pas ajouter d'animations ou d'effets qui ne servent pas la compréhension.
2. **La charte graphique est fixe, pas négociable.** Or `#D4AF37` / Noir `#1A1A1A` doivent rester la signature visuelle sur tous les supports EVOLYX (print et web), pour la cohérence de marque entre EVOLYX, EVOLYX Shop et EVOLYX Digital.
3. **Le bilingue FR/EN n'est pas optionnel.** Toute nouvelle section de contenu doit être ajoutée dans les deux langues (`src/locales/fr` et `src/locales/en`, ou champs `{fr, en}` dans les données).
4. **Le site doit rester léger.** Contexte camerounais = connexions mobiles parfois limitées. Éviter les dépendances lourdes, les images non optimisées, les animations coûteuses.
5. **Les données de contenu sont séparées du code.** Services et projets vivent dans `src/data/` — ajouter un projet ne doit jamais nécessiter de toucher aux composants.
6. **Ce site est un socle, pas un aboutissement.** L'architecture doit permettre d'ajouter plus tard : espace client, blog, produits SaaS — sans réécriture complète.

## Ce que ce site n'est pas (pour éviter la dérive)

- Ce n'est **pas** un site e-commerce (c'est le rôle d'EVOLYX Shop)
- Ce n'est **pas** encore une plateforme SaaS (viendra plus tard, sur un sous-domaine ou une app dédiée)
- Ce n'est **pas** un espace d'authentification client pour l'instant (V2)

## Ton et voix

- Direct, orienté résultats, sans jargon technique inutile pour le visiteur non-technique
- Fier du travail réalisé, sans grandiloquence ("nous résolvons des problèmes réels" plutôt que "nous révolutionnons le digital")
- Professionnel mais pas froid — EVOLYX est une entreprise camerounaise ambitieuse, pas une agence anonyme

## Indicateur de succès

Le site réussit s'il génère des demandes de devis **qualifiées** (le visiteur comprend déjà ce qu'EVOLYX Digital fait avant de remplir le formulaire), pas juste du trafic.
