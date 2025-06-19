FROM node:20-alpine

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile

RUN yarn workspace graph-api build

WORKDIR /app/apps/graph-api

# Start the server
CMD ["node", "dist/index.js"]