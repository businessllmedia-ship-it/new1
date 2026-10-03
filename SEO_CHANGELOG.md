# LL MEDIA — SEO/GEO Change Log

Journal des optimisations, tests et apprentissages.

## Format

### YYYY-MM-DD — site / page

**Métrique / contexte avant**

- Position moyenne :
- Impressions :
- Clics :
- CTR :
- Leads organiques :
- Conversion :

**Hypothèse**

Décrire pourquoi un changement devrait améliorer SEO, GEO, design, copywriting ou conversion.

**Changement effectué**

Décrire précisément la modification.

**Résultat attendu**

Définir ce qui devrait bouger.

**Résultat observé**

À compléter quand suffisamment de données sont disponibles.

**Apprentissage**

Indiquer si la méthode doit être conservée, modifiée ou abandonnée.

---

### 2026-09-11 — Playbook LL MEDIA / GEO

**Contexte avant**

Le playbook traitait déjà le GEO comme une extension du SEO et rejetait les hacks, mais ne reflétait pas encore plusieurs précisions publiées dans le guide officiel Google sur l’optimisation pour les fonctionnalités génératives.

**Évidence**

Google Search Central indique désormais explicitement que les fonctionnalités génératives reposent sur les systèmes Search existants, avec RAG et query fan-out; qu’une page doit être indexée et admissible à un snippet; qu’il ne faut pas créer des pages pour chaque variation/fan-out; que `llms.txt`, le « chunking » et les mentions inauthentiques ne constituent pas des optimisations nécessaires; et que Search Console dispose d’un rapport Generative AI pour mesurer cette visibilité. Google recommande également de surveiller les rapports de données structurées après un nouveau template ou une modification importante.

**Changement effectué**

- renforcé la section GEO du `SEO_GEO_PLAYBOOK.md`;
- ajouté la règle d’éligibilité index + snippet;
- ajouté une stratégie de couverture des sous-questions sans multiplication de pages;
- ajouté explicitement l’abandon de `llms.txt`, chunking et mentions artificielles comme priorités SEO;
- ajouté le suivi du Generative AI performance report dans Search Console;
- ajouté un contrôle post-déploiement des structured data après changement de template.

**Résultat attendu**

Réduire le risque de produire des pages locales/FAQ en masse pour des fan-outs, concentrer l’effort sur des pages commerciales plus fortes et originales, et mesurer la visibilité générative avec les données Google plutôt qu’avec des métriques GEO spéculatives.

**Résultat observé**

À mesurer lorsque les propriétés Search Console LL MEDIA seront connectées et que les sites auront suffisamment de données.

**Apprentissage**

Pour Google, le meilleur investissement GEO reste un excellent SEO : indexabilité, contenu original utile, couverture naturelle des sous-intentions, médias pertinents et mesure Search Console. Ne pas créer une couche de tactiques « GEO » séparée sans preuve.

---

Ne jamais conclure qu'une modification fonctionne uniquement à partir d'une fluctuation de quelques heures ou de quelques impressions.


### 2026-09-25 — Search Console / recherche multimodale

**Évidence**

Google Search Central a annoncé le 24 septembre 2026 un filtre « multimodal search » dans les rapports Search Console Performance et Generative AI. Il couvre notamment Lens, Circle to Search, les uploads d’images dans Google Search et la recherche visuelle Chrome; le déploiement est mondial.

**Changement effectué**

Le playbook demande maintenant de mesurer ce canal séparément et, pour les services résidentiels visuels, de relier trafic multimodal, landing page et demandes de soumission. Il conserve la priorité aux photos originales et utiles plutôt qu’aux tactiques visuelles artificielles.

**Résultat attendu**

Identifier de nouvelles intentions commerciales visuelles et améliorer les pages capables de convertir ces recherches en demandes de soumission.

**Apprentissage**

La recherche visuelle est désormais un canal mesurable dans Search Console. L’objectif LL MEDIA doit être de relier la visibilité multimodale aux leads, pas simplement de maximiser les impressions d’images.


---

### 2026-10-03 — QA contenu IA + normalisation canonique

**Évidence**

Google Search Central a mis à jour le 1er octobre 2026 son guide sur le contenu généré par IA. Google recommande explicitement de vérifier manuellement l’exactitude et la fiabilité du contenu généré, et précise que cette revue s’applique aussi aux titles, meta descriptions, structured data et alt text.

Les données Search Console disponibles jusqu’au 29 septembre montrent aussi un signal technique concret sur CompareSoumission.ca : la requête commerciale « soumission excavation » est répartie entre `https://comparesoumission.ca/excavation` (position 10) et `https://www.comparesoumission.ca/excavation` (position 6). « décontamination moisissure prix » apparaît également sur une variante HTTP. Le volume est encore faible, donc il ne faut pas tirer de conclusion de ranking, mais la coexistence des variantes justifie un contrôle de normalisation/canonicalisation.

**Changement effectué**

- ajouté un QA humain/fact-check obligatoire pour tout contenu IA avant publication, incluant métadonnées, structured data et alt text;
- ajouté une règle technique de normalisation stricte HTTP/HTTPS et www/non-www avec 301, canonical, sitemap et liens internes cohérents;
- ajouté la règle de traiter une requête répartie entre variantes d’URL comme anomalie technique prioritaire avant une optimisation éditoriale.

**Résultat attendu**

Réduire les erreurs factuelles introduites par l’automatisation SEO et éviter de disperser les signaux entre variantes d’URL.

**Apprentissage**

L’automatisation LL MEDIA doit accélérer la production sans automatiser la confiance. Les faits et métadonnées doivent être validés; les variantes techniques d’une même page doivent être consolidées avant d’interpréter les positions.
