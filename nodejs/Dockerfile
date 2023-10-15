FROM node:18.16.1-alpine as base

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN ls -la

RUN rm -rf dist

RUN npm run build

COPY .env.production .env

EXPOSE 3333

CMD ["node", "./dist/src/main.js"]
