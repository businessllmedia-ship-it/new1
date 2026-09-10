# LL MEDIA — Daily Improvement Loop

Ce fichier définit comment l'agent **LL MEDIA SEO/GEO Lead Engine** doit s'améliorer continuellement sans modifier ses règles au hasard.

## Principe

L'agent ne doit pas « apprendre » à partir d'opinions isolées. Il doit améliorer ses méthodes à partir de données, de tests et de changements vérifiés.

Chaque cycle d'amélioration doit comparer :

1. données Google Search Console;
2. positions et SERP actuelles;
3. performances de conversion des pages;
4. qualité des leads;
5. Core Web Vitals / erreurs techniques;
6. nouvelles documentations ou changements officiels Google;
7. résultats des optimisations précédentes.

## Cycle quotidien

### Étape 1 — Observer

Repérer :

- nouveaux mots-clés;
- requêtes qui progressent;
- requêtes qui baissent;
- pages en positions 4 à 15;
- pages avec beaucoup d'impressions et faible CTR;
- nouvelles pages indexées;
- pages non indexées;
- cannibalisation;
- changements importants de SERP;
- erreurs techniques;
- changements de conversion;
- nouveaux leads organiques.

### Étape 2 — Prioriser

Classer les opportunités selon :

**Impact potentiel × intention commerciale × probabilité de gain ÷ effort**.

Priorité maximale aux requêtes transactionnelles proches du Top 3.

### Étape 3 — Formuler une hypothèse

Exemple :

> La page est en position 6 sur « soumission isolation Laval » mais son title est générique. Améliorer le title, le H1, la preuve locale et deux liens internes pourrait augmenter CTR et pertinence.

Ne jamais modifier une page uniquement parce qu'une métrique a bougé pendant quelques heures.

### Étape 4 — Améliorer

Selon le problème :

- title/meta;
- copywriting du hero;
- profondeur du contenu;
- réponse à une intention manquante;
- données locales;
- maillage interne;
- FAQ;
- preuve;
- formulaire;
- vitesse;
- schema;
- canonical;
- crawl/indexation;
- contenus support;
- autorité externe légitime.

### Étape 5 — Journaliser

Chaque changement important doit être ajouté à `SEO_CHANGELOG.md` :

- date;
- site/page;
- métrique avant;
- hypothèse;
- changement;
- résultat attendu;
- métrique après lorsqu'elle devient disponible;
- conclusion.

### Étape 6 — Apprendre

Une règle peut être ajoutée au playbook seulement si :

- elle est soutenue par une documentation fiable; OU
- elle se répète sur plusieurs pages/sites avec des résultats cohérents; OU
- un test mesurable montre une amélioration suffisamment claire.

Éviter de transformer une anomalie en règle générale.

## Amélioration du design

Analyser aussi :

- taux de démarrage formulaire;
- taux de complétion;
- abandon par étape;
- clics CTA;
- mobile vs desktop;
- sections ignorées;
- objections récurrentes des prospects.

Les enseignements doivent améliorer le design system si plusieurs sites montrent le même problème.

## Amélioration du copywriting

Tester en priorité :

- H1;
- sous-titre;
- CTA;
- microcopy du formulaire;
- preuve;
- ordre des bénéfices;
- traitement des objections.

Ne jamais sacrifier la précision ou la vérité pour augmenter le taux de clic.

## Amélioration GEO

Surveiller les changements officiels liés à :

- Google Search;
- AI Overviews / AI Mode;
- données structurées;
- crawl/indexation;
- contenu utile;
- spam policies;
- Search Console.

Ne pas adopter de tactiques GEO non vérifiées simplement parce qu'elles deviennent populaires sur les réseaux sociaux.

## Règle anti-régression

Avant une modification importante :

1. conserver l'ancienne version dans Git;
2. définir ce qui devrait s'améliorer;
3. éviter de changer plusieurs variables non liées en même temps;
4. contrôler que les formulaires continuent à fonctionner;
5. vérifier mobile et SEO technique.

## Objectif final

Chaque semaine, le système doit devenir meilleur sur au moins un de ces axes :

- positions;
- impressions qualifiées;
- CTR organique;
- conversion en demandes de soumission;
- qualité des leads;
- vitesse;
- indexation;
- autorité;
- qualité du design;
- qualité du copywriting.

Le but n'est pas de publier davantage. Le but est d'obtenir davantage de **leads organiques rentables**.
