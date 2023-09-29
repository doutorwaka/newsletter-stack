FROM node:20.7.0-bullseye-slim as build

WORKDIR /app

COPY . .

RUN npm install
RUN npx prisma generate
RUN npm run build

FROM node:20.7.0-bullseye-slim

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist

RUN npm install --omit=dev

COPY --chown=node:node --from=build /app/prisma ./prisma
COPY --chown=node:node --from=build /app/node_modules/@prisma ./node_modules/@prisma
COPY --chown=node:node --from=build /app/node_modules/.prisma ./node_modules/.prisma

USER node

ENTRYPOINT node ./dist/main.js