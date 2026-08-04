# Astrea — prototype interactif corrigé

Cette version utilise maintenant une **taverne vide**, sans héros intégré dans le décor.
Chaque héros est un PNG transparent indépendant et apparaît sur le tapis après sélection.

## Corrections apportées

- les quatre classes sont réellement cliquables ;
- le héros d'origine a été retiré du fond ;
- Chevalier, Chasseur, Sorcier et Sage utilisent une taille normalisée ;
- leurs pieds partagent la même ligne de sol sur le tapis ;
- les PNG ont été nettoyés afin de retirer les pixels parasites ;
- les cadres lumineux ont été recalés sur les quatre cartes ;
- les cartes non sélectionnées sont légèrement assombries ;
- le bouton **Suivant** ouvre `companion.html` ;
- le choix reste enregistré avec `localStorage`.

## Publication GitHub Pages

1. Décompresse le ZIP.
2. Dépose son contenu à la racine du dépôt GitHub.
3. Ouvre **Settings → Pages**.
4. Choisis **Deploy from a branch**, branche `main`, dossier `/ (root)`.

La page d'entrée est `index.html`.
