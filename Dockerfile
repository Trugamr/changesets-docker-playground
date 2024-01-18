FROM node:20.11.0-alpine3.19 as base

RUN corepack enable



FROM base as runner

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --production

COPY . .

EXPOSE 3000

USER node

CMD ["node", "index.js"]