# Astrea — Le Royaume des Étoiles

Dépôt statique de la page d’accueil d’Astrea.

La page affiche l’image de référence fournie sans modification, recadrage ni animation.

## Lancer localement

Aucune installation n’est nécessaire.

Depuis le dossier du projet, lancez un serveur HTTP local, par exemple :

```bash
python -m http.server 8000
```

Puis ouvrez `http://localhost:8000` dans un navigateur.

## Publication sur GitHub Pages

1. Envoyez le contenu de ce dossier dans un dépôt GitHub.
2. Ouvrez **Settings → Pages**.
3. Dans **Build and deployment**, sélectionnez **Deploy from a branch**.
4. Choisissez la branche principale et le dossier `/ (root)`.

## Structure

```text
.
├── assets/
│   └── astrea-home.png
├── index.html
├── styles.css
├── script.js
├── .gitignore
├── .nojekyll
└── README.md
```
