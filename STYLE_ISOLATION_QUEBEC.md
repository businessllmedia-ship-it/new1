# LL MEDIA — Design System « Isolation Québec »

Ce fichier définit le style visuel et UX par défaut des sites de génération de soumissions LL MEDIA.

## Positionnement visuel

Le site doit ressembler à une **grande plateforme québécoise de comparaison / soumission**, pas à une landing page générique ni à un template IA.

Mots-clés visuels :

- premium;
- crédible;
- rassurant;
- institutionnel moderne;
- grande marque;
- propre;
- conversion-first;
- mobile-first.

---

# Palette de référence

```css
:root {
  --navy: #14246f;
  --navy-dark: #0d174e;
  --blue: #2747c7;
  --blue-soft: #eef2ff;
  --cyan: #32b8e7;
  --green: #2ca66f;
  --ink: #172033;
  --muted: #667085;
  --border: #e4e8f0;
  --bg: #f7f8fb;
  --white: #ffffff;
  --shadow: 0 18px 60px rgba(16,24,40,.12);
  --radius: 24px;
  --radius-sm: 14px;
}
```

Ces couleurs peuvent être adaptées à la marque du client, mais conserver le même niveau de contraste, de sobriété et de hiérarchie.

---

# Typographie

Par défaut :

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Principes :

- H1 très fort et court;
- tracking légèrement négatif;
- poids élevé sur les titres;
- paragraphes lisibles;
- aucun bloc massif de texte;
- largeur de lecture limitée.

Échelle recommandée :

- H1 desktop : 52-72 px selon longueur;
- H1 mobile : 34-46 px;
- H2 : 32-52 px;
- body desktop : 17-20 px sur blocs importants;
- body mobile : 16 px minimum;
- microcopy : 12-14 px.

---

# Structure globale

## 1. Topbar

Petite barre navy foncée.

Utilisation :

- proposition de confiance;
- zone desservie;
- avantage court.

Exemple :

> Comparez plusieurs offres pour vos travaux d’isolation — Service partout au Québec

## 2. Header

- fond blanc;
- sticky desktop;
- logo à gauche;
- information de contact ou preuve à droite;
- très peu de navigation sur une landing transactionnelle.

## 3. Hero

Desktop : grille 2 colonnes.

Gauche :

- eyebrow;
- H1;
- sous-titre;
- badges;
- bullets;
- mini-card de confiance.

Droite :

- formulaire de soumission dans une card blanche premium.

Fond :

- blanc / bleu très pâle;
- gradients ou formes subtiles;
- aucun fond chargé.

## 4. Bande de confiance

3 ou 4 preuves simples :

- entreprise vérifiée;
- sans obligation;
- service local;
- garantie / licence / subvention si réellement applicable.

## 5. Sections de contenu

Alterner :

- blanc;
- `#f7f8fb`;
- bande CTA navy/bleu.

Utiliser :

- cartes;
- stats;
- checklists;
- comparatifs;
- étapes;
- FAQ;
- blocs pédagogiques.

## 6. Footer

Fond navy foncé.

Inclure :

- marque;
- courte description;
- contact;
- politique de confidentialité;
- mentions légales pertinentes.

---

# Hero — standard de conversion

Le hero doit être compris en moins de 3 secondes.

Exemple de structure :

```text
Eyebrow : Soumissions d’isolation au Québec

H1 : Payez le juste prix pour vos travaux d’isolation.

Sous-titre : Comparez des soumissions d’entrepreneurs vérifiés, découvrez les aides pertinentes et choisissez avec confiance.

Badges :
✓ Entrepreneurs vérifiés
✓ Soumissions sans obligation
✓ Service partout au Québec

CTA / formulaire : Obtenir mes soumissions
```

Le H1 doit toujours communiquer **service + bénéfice**, pas seulement le nom de l’entreprise.

---

# Form Card

Style :

- fond blanc;
- border 1 px très pâle;
- radius ~24-28 px;
- grande ombre diffuse;
- padding généreux;
- titre centré;
- champs 52 px minimum;
- focus visible;
- CTA pleine largeur.

Le formulaire doit être un des éléments visuellement dominants de la page.

### Microcopy recommandée

Au-dessus :

> Obtenez des offres pour votre projet

> Ça prend environ 2 minutes.

Sous CTA :

> Gratuit pour le propriétaire. Sans obligation d’accepter une soumission.

Adapter uniquement si ces affirmations sont vraies.

---

# Cards

Style standard :

```css
background: #fff;
border: 1px solid var(--border);
border-radius: 18px 24px;
box-shadow: 0 8px 30px rgba(16,24,40,.04);
```

Éviter :

- gros glow;
- néons;
- gradients multicolores;
- glassmorphism excessif;
- 3D artificielle;
- icônes emoji;
- effets qui font « template IA ».

---

# Icônes

Utiliser des SVG line icons simples.

Style :

- stroke ~2;
- une couleur principale;
- carré arrondi clair derrière certaines icônes;
- cohérence sur toute la page.

Ne pas mélanger plusieurs bibliothèques visuelles avec des styles différents.

---

# Preuve / Trust

Les preuves doivent être très visibles mais crédibles.

Bon :

- Licence RBQ vérifiée — si vérifié;
- Entrepreneurs sélectionnés selon des critères précis;
- Sans obligation;
- Service dans la région;
- Subventions officielles avec sources;
- Nombre réel de demandes / clients si fourni.

Interdit :

- faux témoignage;
- faux badge gouvernemental;
- fausse certification;
- faux nombre de clients;
- faux avis Google.

---

# Comparateur / checklist

Pour les services à ticket élevé, inclure un bloc qui aide réellement l’utilisateur à comparer les soumissions.

Exemples :

- portée des travaux;
- matériaux;
- garantie;
- préparation;
- nettoyage;
- valeur R;
- ventilation;
- taxes;
- échéancier;
- exclusions.

Ce bloc améliore simultanément :

- qualité du contenu;
- confiance;
- SEO;
- conversion.

---

# Sections « expertise »

Le design doit permettre d’expliquer le service sans ressembler à un article de blog.

Utiliser :

- grande carte visuelle;
- checklist;
- mini-tableau;
- cartes de facteurs de prix;
- processus en étapes;
- FAQ.

---

# CTA Bands

Au moins une bande CTA intermédiaire sur les longues pages.

Style :

```css
background: linear-gradient(135deg, var(--navy-dark), var(--blue));
color: white;
```

Desktop : texte à gauche + bouton blanc à droite.

Mobile : pile verticale + bouton pleine largeur.

---

# CTA Mobile Sticky

Sur mobile, afficher un CTA sticky en bas si cela ne gêne pas les formulaires ou bandeaux légaux.

Exemple :

> COMPARER MES SOUMISSIONS

Style :

- largeur quasi complète;
- 52-56 px hauteur;
- gros rayon;
- ombre;
- respect du safe-area iOS.

---

# Responsive

Priorité absolue mobile.

Breakpoints recommandés :

- 1200;
- 1024;
- 820;
- 640;
- 420;
- 360.

Règles :

- une colonne sous ~820 px pour hero;
- formulaire pleine largeur;
- aucune largeur fixe qui déborde;
- `min-width:0` sur enfants de grid/flex;
- inputs 16 px minimum pour éviter zoom iOS;
- CTA large;
- sections plus courtes;
- cartes à une colonne sur petits écrans.

Toujours vérifier :

```css
html, body { max-width:100%; overflow-x:hidden; }
```

---

# Motion

Animation légère uniquement :

- hover bouton;
- FAQ accordion;
- micro-transition focus/hover.

Respecter :

```css
@media (prefers-reduced-motion: reduce) { ... }
```

Pas de longues animations avant interaction.

---

# Images

Quand une image améliore la compréhension :

- vraie maison / vrai chantier / vraie situation;
- forte qualité;
- cadrage crédible;
- cohérente avec le Québec;
- pas de texte illisible généré dans les images;
- compression WebP/AVIF;
- dimensions explicites;
- lazy-load hors hero.

Ne pas ajouter d’image décorative si elle ralentit la page sans augmenter compréhension ou confiance.

---

# Signature de marque

Le résultat final doit donner cette impression :

> « Ça ressemble à une vraie plateforme québécoise importante sur laquelle je peux laisser mes coordonnées en confiance. »

Si le site ressemble à une petite page affiliée, un template de dropshipping ou un site généré rapidement par IA, le design n’est pas terminé.
