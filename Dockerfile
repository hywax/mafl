FROM node:20.12.2-alpine as build

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

RUN yarn run build

FROM gcr.io/distroless/nodejs20

LABEL org.opencontainers.image.title="Mafl"
LABEL org.opencontainers.image.description="Minimalistic flexible homepage"
LABEL org.opencontainers.image.source="https://github.com/hywax/mafl"
LABEL org.opencontainers.image.authors="Hywax <me@hywax.space>"
LABEL org.opencontainers.image.licenses="MIT"

WORKDIR /app

COPY --from=build /app/.output /app

EXPOSE 3000/tcp

HEALTHCHECK --interval=10s --timeout=5s --start-period=10s CMD node -e "require('http').get('http://localhost:3000/api/health', res => process.exit(res.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"

CMD ["/app/server/index.mjs"]
