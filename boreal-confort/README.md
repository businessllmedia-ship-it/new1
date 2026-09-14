# Boréal Confort — Cloudflare Pages

Landing page statique HTML/CSS/JavaScript pour l’isolation et la décontamination de grenier.

## Configuration Cloudflare Pages

- Dépôt : `businessllmedia-ship-it/new1`
- Branche : `main`
- Commande de build : `exit 0`
- Dossier de sortie : `boreal-confort`

## À modifier

Ouvrir `config.js` pour changer :
- téléphone;
- courriel;
- URL du webhook Zuops;
- identifiant du Pixel Meta.

Remplacer `votre-domaine.ca` dans `robots.txt` et `sitemap.xml`.

## Logo

Ajouter le fichier PNG exact sous :
`boreal-confort/transpareboreal.png`

## Formulaire

Le formulaire redirige vers `merci.html` après une réponse réussie du webhook. Si `webhookUrl` est vide, il fonctionne en mode démonstration.
