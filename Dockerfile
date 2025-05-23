# ---- Étape de build : génère les fichiers statiques ----
FROM node:18-alpine AS builder

# 1) Installation de pnpm (nécessaire dans une image Node "classique")
RUN npm install -g pnpm

# 2) Répertoire de travail
WORKDIR /app

# 3) Copie des fichiers indispensables à l'installation des dépendances
COPY pnpm-lock.yaml package.json ./

# 4) Installation des dépendances sans modification du lockfile (sécurise la version des paquets)
RUN pnpm install --frozen-lockfile

# 5) Copie du reste du code source
COPY . .

# 6) Lancement du build de production
RUN pnpm run build

# ---- Étape finale : sert les fichiers statiques avec Nginx ----
FROM nginxinc/nginx-unprivileged:alpine3.18

# Nettoyage du répertoire par défaut de nginx
RUN rm -rf /etc/nginx/html/*

# Copie du bundle depuis l'étape builder vers le dossier statique de Nginx
COPY --from=builder --chown=nginx:nginx /app/dist /etc/nginx/html
COPY --chown=nginx:nginx nginx.conf /etc/nginx/nginx.conf

# Exposition du port 80
EXPOSE 80

# Commande de démarrage de Nginx
CMD ["nginx", "-g", "daemon off;"]
    