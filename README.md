# Portfolio de Nassim Manseur

Un portfolio interactif moderne, conçu pour présenter mes projets, mes expériences et mon parcours en tant qu'étudiant en informatique. Le site propose une expérience utilisateur soignée avec un thème sombre/clair, des animations fluides et un design épuré, pensé pour mettre en avant mes compétences.

## Fonctionnalités Principales

- **Navigation fluide :** Thème clair/sombre personnalisable, défilement ciblé via la barre de navigation.
- **Présentation structurée :** Sections distinctes pour le profil, les expériences, les formations, les compétences et les projets réalisés.
- **Portfolio visuel :** Mise en page asymétrique pour les travaux avec affichage des technologies utilisées et accès direct aux codes sources (GitHub) et aux démonstrations.
- **Section Profil & Passions :** Une touche personnelle présentant les loisirs qui forgent ma méthode de travail (échecs, Formule 1, photographie).
- **Formulaire de contact intégré :** Utilisation de l'API Formspree pour les prises de contact directes avec réponse visuelle.

## Stack Technique

Le projet repose sur des technologies modernes axées sur la performance et la modularité :

- **ReactJS :** Bibliothèque principale pour construire les interfaces avec une arborescence de composants réutilisables.
- **TypeScript :** Superset de JavaScript permettant d'ajouter du typage statique au projet (robustesse du code sur les interfaces de projets et données).
- **TailwindCSS :** Framework CSS utilitaire utilisé pour concevoir rapidement des designs responsifs et sur mesure.
- **Vite :** Outil de build et serveur de développement extrêmement rapide pour compiler l'application.

## Architecture

- **Dossier `components/` :** Contient des briques réutilisables comme `Navbar` ou `Viewfinder`.
- **Fichiers de base (`App.tsx`, `index.tsx`) :** Points d'entrée de l'application React.
- **Typage et Constantes (`types.ts`, `constants.tsx`) :** Concentre toutes les données affichables (expériences, liens GitHub, projets...). Cela permet de facilement modifier le contenu du portfolio de manière centralisée sans toucher à la structure de `App.tsx`.
