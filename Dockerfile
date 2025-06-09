FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock tsconfig.json ./
COPY . .

RUN yarn install --frozen-lockfile

RUN yarn build

RUN yarn api:build

WORKDIR /app/apps/api

EXPOSE 3000

CMD ["node", "dist/server.js"]
