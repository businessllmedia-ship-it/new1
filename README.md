# LL MEDIA — Cloudflare Lead Site Template

Template maître pour créer et déployer rapidement des landing pages de génération de leads.

## Stack
- GitHub : code source et historique
- Cloudflare Pages : hébergement + déploiement automatique depuis `main`
- Cloudflare Pages Functions : endpoint serveur `/api/lead`
- n8n : traitement et routage des leads
- GoHighLevel / Supabase : CRM et stockage optionnels

## Déploiement Cloudflare Pages
1. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
2. Choisir GitHub et le dépôt `businessllmedia-ship-it/new1`.
3. Branche de production : `main`.
4. Projet statique : aucun framework ni build command requis. Dossier de sortie : `/`.
5. Après le premier déploiement : Settings → Variables and Secrets.
6. Ajouter le secret `N8N_WEBHOOK_URL` avec l’URL du webhook de production n8n.
7. Redéployer.
8. Ajouter le domaine personnalisé dans Custom domains.

## Formulaire
Le navigateur envoie le lead à `/api/lead`. La Function `functions/api/lead.js` valide les données et les transfère vers n8n sans exposer l’URL du webhook dans le code public.

## Sécurité
Ne jamais mettre de clé API, token, mot de passe ou URL sensible directement dans le dépôt. Utiliser les secrets Cloudflare.

## Agent IA
Les instructions de l’agent LL MEDIA se trouvent dans `AGENT.md`.
