# Astrea — Sélection des classes

Écran web interactif prêt pour GitHub Pages.

## Fonctionnement

- L'écran de création apparaît dès l'ouverture du jeu.
- Les quatre cartes sont cliquables : **Chevalier**, **Chasseur**, **Sorcier** et **Sage**.
- Le personnage affiché à gauche change immédiatement.
- La classe choisie est conservée dans `localStorage` sous la clé `astrea.selectedClass`.
- Le bouton **Suivant** déclenche aussi l'événement JavaScript `astrea:class-selected`.

## Lancer en local

Ouvrir `index.html` dans un navigateur, ou utiliser un petit serveur local :

```bash
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Mettre sur GitHub Pages

1. Déposer tous les fichiers à la racine du dépôt.
2. Dans GitHub : **Settings → Pages**.
3. Choisir **Deploy from a branch**.
4. Sélectionner la branche `main` et le dossier `/root`.

Aucune installation et aucun build ne sont nécessaires.

## Relier l'écran suivant

Dans `script.js`, remplacer :

```js
const NEXT_PAGE = "";
```

par exemple par :

```js
const NEXT_PAGE = "selection-compagnon.html";
```

La classe choisie sera disponible sur la page suivante avec :

```js
const selectedClass = localStorage.getItem("astrea.selectedClass");
```

## Structure

```text
astrea-class-selection/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── background-character-selection.png
    ├── class-knight.png
    ├── class-hunter.png
    ├── class-wizard.png
    └── class-sage.png
```
