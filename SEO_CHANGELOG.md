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
