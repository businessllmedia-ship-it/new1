# LL MEDIA — Cloudflare Lead Site Template

Template maître pour créer, publier et optimiser des sites de génération de demandes de soumission.

## Stack

- GitHub : code source et historique
- Cloudflare Pages : hébergement et déploiement automatique depuis `main`
- Cloudflare Pages Functions : endpoints serveur `/api/lead` et `/api/health`
- n8n : traitement et routage des leads
- GoHighLevel / Supabase / Google Sheets : CRM ou stockage selon le projet
- Google Search Console : suivi SEO et boucle d’amélioration

## Déploiement Cloudflare Pages

1. Cloudflare Dashboard → Workers & Pages → Create application → Pages.
2. Importer un dépôt Git existant.
3. Sélectionner GitHub puis `businessllmedia-ship-it/new1`.
4. Production branch : `main`.
5. Framework preset : aucun / None.
6. Build command : `exit 0`.
7. Build output directory : `.` si Cloudflare demande explicitement le dossier contenant le site statique.
8. Laisser le Root directory vide : le projet est à la racine du dépôt.
9. Lancer le premier déploiement.

Cloudflare reconstruira automatiquement le site après les prochains commits sur la branche de production.

## Secret n8n

Après création du projet :

1. Workers & Pages → projet → Settings → Variables and Secrets.
2. Ajouter `N8N_WEBHOOK_URL`.
3. Coller l’URL du webhook **de production** n8n.
4. Choisir le mode chiffré / Secret.
5. Sauvegarder puis redéployer si nécessaire.

Ne jamais placer cette URL ou une clé API sensible dans le HTML public ou dans GitHub.

## Vérification après déploiement

Ouvrir :

`/api/health`

Réponse attendue :

```json
{
  "ok": true,
  "service": "llmedia-cloudflare-pages",
  "webhook_configured": true
}
```

Si `webhook_configured` vaut `false`, `N8N_WEBHOOK_URL` n’est pas correctement configuré dans Cloudflare.

Ensuite envoyer une vraie soumission test depuis la page et confirmer qu’elle arrive dans n8n.

## Formulaire

Le navigateur envoie le lead à `/api/lead`. `functions/api/lead.js` :

- vérifie les champs essentiels;
- bloque le honeypot anti-spam;
- récupère les informations marketing;
- transmet le lead à n8n côté serveur;
- ne redirige vers la page Merci qu’après une réponse serveur réussie.

## Architecture SEO/GEO LL MEDIA

Lire avant de créer ou modifier une page :

- `AGENT.md` — rôle et règles de l’agent senior
- `STYLE_ISOLATION_QUEBEC.md` — design system de référence
- `SEO_GEO_PLAYBOOK.md` — méthode SEO/GEO
- `DAILY_IMPROVEMENT.md` — boucle d’amélioration continue
- `SEO_CHANGELOG.md` — historique des tests et apprentissages

## Sécurité

Ne jamais committer :

- `.env`
- `.dev.vars`
- token API
- mot de passe
- clé privée
- webhook sensible

Utiliser les Secrets Cloudflare pour les données sensibles.
