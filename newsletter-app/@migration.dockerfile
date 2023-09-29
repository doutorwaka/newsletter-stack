FROM node:20.7.0-bullseye-slim

WORKDIR /app

COPY . .

RUN npm install

RUN npx prisma generate

ENTRYPOINT npx prisma db push