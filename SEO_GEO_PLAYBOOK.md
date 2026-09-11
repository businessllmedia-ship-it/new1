# LL MEDIA — SEO/GEO Operating Playbook

Playbook de l’agent **LL MEDIA SEO/GEO Lead Engine**. À lire avec `AGENT.md`, `STYLE_ISOLATION_QUEBEC.md` et `DAILY_IMPROVEMENT.md` avant toute stratégie importante.

## Objectif

Générer le plus possible de demandes de soumission organiques qualifiées au Québec en combinant SEO, GEO, design premium, copywriting direct-response et CRO.

Le succès n’est pas mesuré uniquement par les positions. Les KPI prioritaires sont :

1. leads organiques qualifiés;
2. taux de conversion organique;
3. mots-clés commerciaux en Top 3 / Top 10;
4. clics organiques qualifiés;
5. CTR;
6. indexation saine;
7. visibilité locale;
8. visibilité dans les expériences de recherche générative lorsque mesurable.

## 1. Recherche de marché

Avant de créer un site :

- identifier les services réellement vendus;
- identifier les zones réellement desservies;
- rechercher les mots-clés transactionnels;
- analyser les résultats Google actuels;
- identifier les principaux concurrents organiques et locaux;
- comprendre ce que Google semble privilégier pour chaque intention;
- relever les angles, contenus et preuves qui manquent aux concurrents.

Ne jamais copier la structure ou le texte d’un concurrent. Utiliser la SERP comme diagnostic d’intention et de qualité attendue.

## 2. Priorité des mots-clés

### Niveau 1 — intention commerciale forte

- soumission + service;
- service + ville;
- entrepreneur + service;
- prix + service;
- coût + service;
- installation + service;
- réparation + service;
- urgence + service;
- comparateur + service;
- service + Québec;
- service + région.

### Niveau 2 — décision

- meilleur + service;
- comment choisir + entrepreneur/service;
- prix moyen + service;
- service A vs service B;
- avis / garantie / licence;
- subvention + service.

### Niveau 3 — information support

- signes qu’un travail est nécessaire;
- durée;
- matériaux;
- normes;
- entretien;
- problèmes fréquents;
- erreurs à éviter.

Les contenus informationnels doivent soutenir les pages transactionnelles par un maillage interne naturel.

## 3. Clustering par intention

Une URL = une intention principale suffisamment distincte.

Ne pas créer une page pour chaque variante lexicale. Regrouper les mots-clés qui répondent au même besoin.

Créer une nouvelle page seulement lorsque l’utilisateur attend réellement un contenu ou un résultat différent.

## 4. Architecture type

Exemple pour l’isolation :

- `/` — page pilier commerciale;
- `/isolation/` — hub;
- `/isolation-entretoit/`;
- `/isolation-sous-sol/`;
- `/prix-isolation/`;
- `/subventions-isolation/`;
- `/regions/laurentides/`;
- `/isolation/saint-jerome/` si valeur locale réelle;
- `/guides/...` pour le support informationnel.

Chaque page importante doit être accessible par des liens HTML crawlables depuis la structure principale.

## 5. Pages locales

Ne jamais publier des pages où seul le nom de ville change.

Une page locale doit contenir des éléments réellement propres à la zone : contexte, problèmes, types de bâtiments, saisonnalité, zones voisines, disponibilité, données locales fiables, FAQ locale, projets authentiques, témoignages authentiques ou informations administratives pertinentes.

Si ces éléments n’existent pas, préférer une page régionale plus forte.

## 6. Brief obligatoire de chaque page

Avant rédaction :

- mot-clé/intention principal;
- intention secondaire;
- persona;
- stade d’achat;
- problème principal;
- promesse crédible;
- CTA;
- preuve disponible;
- objections;
- questions à couvrir;
- valeur unique de la page;
- liens internes entrants et sortants;
- sources factuelles à vérifier.

## 7. Copywriting SEO + conversion

Le H1 doit parler au client, pas au moteur.

Structure type :

- eyebrow : service/zone/preuve;
- H1 : service + bénéfice;
- sous-titre : résultat + réduction du risque;
- 2 à 4 preuves;
- formulaire/CTA;
- explications utiles;
- facteurs de prix;
- processus;
- comparaison/checklist;
- objections;
- FAQ;
- CTA final.

Le texte doit être concret, québécois naturel, spécifique et crédible.

Éviter les introductions génériques comme « L’isolation est importante pour votre maison ». Répondre directement au besoin de la requête.

## 8. Design

Utiliser `STYLE_ISOLATION_QUEBEC.md` comme référence par défaut.

Le design doit :

- donner confiance en moins de 3 secondes;
- ressembler à une grande marque;
- mettre le formulaire très tôt;
- être excellent sur mobile;
- utiliser peu de distractions;
- faire ressortir le H1, la preuve et le CTA;
- rester très rapide.

## 9. SEO On-page

Checklist :

- title unique;
- meta description unique;
- canonical;
- H1 unique;
- H2/H3 logiques;
- URL courte;
- contenu principal visible en HTML;
- alt descriptifs pertinents;
- liens internes contextuels;
- sources officielles lorsqu’utile;
- Open Graph;
- données structurées cohérentes;
- aucune duplication artificielle.

## 10. SEO technique

Toujours vérifier :

- HTTPS;
- robots.txt;
- sitemap.xml;
- index/noindex;
- canonicals;
- statut HTTP;
- 404;
- redirections;
- crawl interne;
- mobile;
- performance;
- Core Web Vitals;
- images optimisées;
- JavaScript non bloquant;
- structured data valide;
- absence de ressources critiques bloquées.

## 11. GEO / Google Generative AI Search

Traiter le GEO comme du **SEO moderne**, pas comme une discipline séparée fondée sur des hacks. Les fonctionnalités génératives de Google s’appuient sur l’index et les systèmes de classement Search, notamment via retrieval-augmented generation et query fan-out.

### Règles opérationnelles

- Une page doit d’abord être **indexée et admissible à un snippet Google** pour pouvoir être éligible aux fonctionnalités génératives.
- Créer du contenu non-commoditisé : expérience réelle, expertise, données locales vérifiées, comparaisons utiles, réponses précises et informations qui apportent quelque chose de plus que le consensus générique du Web.
- Anticiper les sous-questions naturelles d’un prospect (prix, matériaux, subventions, délais, garanties, choix d’entrepreneur, erreurs à éviter), mais **ne pas créer une page distincte pour chaque fan-out ou variation de requête**. Regrouper les sous-questions dans une ressource forte lorsque l’intention est la même.
- Utiliser des images/vidéos pertinentes et de qualité lorsqu’elles améliorent réellement la compréhension du service ou du projet.
- Conserver une architecture technique claire et crawlable.
- Ne pas investir du temps dans `llms.txt`, le « chunking SEO », des mentions artificielles ou d’autres tactiques GEO non soutenues par Google.
- Ne jamais fabriquer des citations, avis, experts ou mentions pour influencer les réponses génératives.

### Mesure

Quand Search Console le permet, utiliser le **Generative AI performance report** en plus du rapport Performance classique. Mesurer la visibilité générative comme un canal de découverte et la relier, lorsque possible, aux landing pages et aux conversions.

Pour LL MEDIA, l’ordre de priorité reste :

**indexation → intention commerciale → qualité originale → Top 3/Top 10 → CTR → conversion → visibilité générative**.

## 12. Données structurées

Employer seulement des schémas conformes au contenu réel :

- Organization;
- Service;
- BreadcrumbList;
- LocalBusiness seulement si les données représentent une vraie entreprise/localisation;
- autres types lorsque réellement applicables.

Ne jamais fabriquer Review, AggregateRating, adresse, licence, prix ou certification.

Après le déploiement initial d’un balisage structuré ou une modification importante de template, contrôler Search Console/Rich Results après recrawl : hausse des éléments invalides, baisse inattendue des éléments valides, puis inspecter l’URL et corriger avant de généraliser le template.

## 13. Maillage interne

Construire des clusters :

- pilier → sous-services;
- sous-services → prix/guides/subventions;
- guides → pages commerciales;
- pages locales → service principal + région;
- ancres descriptives naturelles.

Identifier les pages orphelines et les corriger.

## 14. Autorité

Chercher des signaux légitimes :

- Google Business Profile lorsqu’approprié;
- citations locales sérieuses;
- associations;
- fournisseurs;
- partenaires;
- médias locaux;
- contenus dignes de liens;
- mentions authentiques.

Éviter réseaux de liens, liens achetés en masse et répertoires spammy.

## 15. Search Console

Lorsque disponible :

- comparer périodes;
- trouver les requêtes positions 4-15;
- trouver les pages à fortes impressions et faible CTR;
- détecter cannibalisation;
- vérifier indexation;
- surveiller mobile/desktop;
- identifier nouveaux mots-clés;
- prioriser les pages commerciales proches du Top 3;
- consulter le rapport Generative AI lorsqu’il est disponible;
- après un changement de template ou de structured data, contrôler les rapports d’amélioration et utiliser URL Inspection en cas d’anomalie.

## 16. CRO

Mesurer :

- CTA clicks;
- démarrages formulaire;
- complétions;
- abandons;
- leads organiques;
- conversion par landing page;
- mobile vs desktop;
- qualité des leads.

Améliorer en priorité le hero, la preuve, le CTA, la longueur du formulaire, la microcopy et les objections.

## 17. Boucle d’amélioration

Suivre `DAILY_IMPROVEMENT.md`.

Chaque amélioration importante doit être documentée dans `SEO_CHANGELOG.md`.

Une méthode gagnante sur plusieurs cas peut devenir une règle du playbook. Une méthode inefficace doit être supprimée ou corrigée.

## 18. Definition of Done

Une page n’est pas terminée tant que :

- l’intention n’est pas claire;
- le contenu n’est pas utile et distinct;
- le design n’est pas premium;
- le mobile n’est pas propre;
- le formulaire n’est pas fonctionnel;
- le SEO technique n’est pas vérifié;
- le maillage n’est pas présent;
- les affirmations ne sont pas vérifiées;
- le CTA n’est pas clair;
- la page n’a pas une vraie chance de satisfaire mieux l’utilisateur que les résultats concurrents.
