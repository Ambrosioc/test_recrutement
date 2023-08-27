# Affectation Niveau Junior : Composant React pour Suggestions d'Adresses Email

## Résumé de l'Affectation

Ce projet a pour objectif la création d'un composant React permettant aux utilisateurs de saisir une adresse e-mail et de recevoir des suggestions pour les fournisseurs d'adresses e-mail couramment utilisés. Le composant sera composé d'un champ de saisie de texte et d'une liste de suggestions. Son comportement variera en fonction de l'entrée de l'utilisateur.

## Comportement du Composant

- Si l'entrée ne contient pas le caractère "@" ("arobase"), les 3 fournisseurs d'adresses e-mail les plus populaires seront affichés.
- Si l'entrée contient le caractère "@", les 3 meilleures correspondances pour les fournisseurs d'adresses e-mail seront affichées (selon les critères définis).
- Si moins de 3 suggestions sont pertinentes, un nombre inférieur de suggestions pourra être affiché.
- Si aucune suggestion n'est jugée acceptable, les 3 fournisseurs d'adresses e-mail les plus populaires seront affichés.
- Si l'entrée est une adresse e-mail valide, aucune suggestion ne sera affichée.
- En cliquant sur une suggestion, l'adresse e-mail sera mise à jour avec le fournisseur sélectionné.
- Une fonctionnalité bonus serait de maintenir le focus après avoir cliqué sur une suggestion.

## Exemple de Comportement Souhaité

Pour visualiser le comportement attendu du composant, vous pouvez consulter cette [vidéo](https://www.youtube.com/watch?v=IUFwCEPCOoY).

## Dépendances

Les seules dépendances autorisées sont `react`, `react-dom`, `create-react-app` et une bibliothèque de validation d'adresses e-mail. Vous pouvez démarrer rapidement en utilisant [CodeSandbox](https://codesandbox.io/) pour développer votre solution.

## Compatibilité des Navigateurs

Assurez-vous que le code fonctionne correctement sur les navigateurs modernes les plus utilisés.

## Critères d'Évaluation

L'évaluation se fera en tenant compte des critères suivants :

- Justesse de la solution pour atteindre le comportement spécifié.
- Lisibilité du code, y compris la structure, le nommage des variables et les commentaires.

**Remarque :** Cette affectation est conçue pour les personnes au niveau junior en tests logiciels. Elle met l'accent sur les compétences de base en développement React et la mise en œuvre logique.
