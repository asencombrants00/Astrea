# Astrea — sélection interactive (GitHub Pages)

Version corrigée du prototype :

- écran **Création de personnage** au chargement ;
- les **4 classes sont cliquables** ;
- le personnage sélectionné apparaît à gauche ;
- **Suivant** ouvre la page **Sélection du compagnon** ;
- les **3 compagnons sont cliquables** ;
- les choix sont conservés avec `localStorage`.

## Arborescence

- `index.html` → sélection des classes
- `companion.html` → sélection du compagnon
- `css/styles.css`
- `js/class-selection.js`
- `js/companion-selection.js`
- `assets/` → images

## Mise en ligne sur GitHub Pages

1. Crée un dépôt GitHub.
2. Dépose tout le contenu de ce dossier à la racine du dépôt.
3. Commit / push.
4. Dans **Settings > Pages** :
   - Source : **Deploy from a branch**
   - Branch : **main**
   - Folder : **/ (root)**
5. GitHub Pages publiera ensuite le site.

## Notes

- La page d'accueil du prototype est `index.html`.
- Les zones cliquables sont placées directement sur les cartes visibles de l'interface.
- Si tu veux, l'étape suivante peut être un vrai flux : accueil → classes → compagnons → résumé final.
