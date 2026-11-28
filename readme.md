## location

# Initialisation

- créer un readme
- initialiser un frontend
  - npm create vite@latest frontend - React - TypeScript - ESLint - Installer et démarrer : Y
  - nettoyer le repo créé
  - supprimer frontend/src/\*.css
  - supprimer les -appels au css dans frontend/src/\*.tsx
  - vider le fichier frontend/src/App.tsx
  - supprimer dossier frontend/src/assets
  - supprimer frontend/public/icons.svg
- initialiser un backend
  - cloner le template Express TypeScript du formateur dans le dossier backend
  - supprimer le dossier caché backend/.git
  - npm install
  - copier .env.sample en .env et définir API_PORT
  - supprimer la route /pokemon dans backend/src/index.ts
  - ajouter une route de test sur /
  - npm run dev pour vérifier que le serveur démarre
- créer le repo GitHub "location" et le lier (git init, git remote add origin)
- utiliser le git workflow (main < dev < features)

le suget

- initialiser une bdd PostgreSQL
  - create database machin
  - create table character

- lier le backend à la bdd
  - package pg et @types/pg
  - environnement (dotnev)
  - crée la connexion
  - crée la premier requete
- lier le frontend au backend
  - useEffect, useState
  - créer un type Ts custum
  - fetch
  - .map

- afficher un seul tuple de ma base
- [bdd] une requete SQL
- [backend] une nouvelle route GET/voitures/:id
- [frontend]
  - une nouvelle page
  - un composant
  - react-router
  - main.tsx browserRouter
  - App.tsx
  - un bouton "supprimer"
  - ajouter une confirmation
  - ajouter des toasts

  - supprimer un article

-
- créer un PBacklog
- créer un SBacklog
