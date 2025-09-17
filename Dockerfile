FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci --unsafe-perm=false --no-audit --no-fund

COPY tsconfig.json ./
COPY src ./src

RUN npm run build

RUN npm ci --only=production --no-audit --no-fund && \
    rm -rf src tsconfig.json

FROM gcr.io/distroless/nodejs18:nonroot

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./

ENV NODE_ENV=production \
    PORT=3000

EXPOSE 3000

USER nonroot

CMD ["dist/index.js"]
