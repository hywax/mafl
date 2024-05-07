ARG NODE=node:20.12.2-alpine

FROM $NODE as build

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

RUN yarn run build

FROM $NODE

LABEL org.opencontainers.image.title="Mafl"
LABEL org.opencontainers.image.description="Minimalistic flexible homepage"
LABEL org.opencontainers.image.source="https://github.com/hywax/mafl"
LABEL org.opencontainers.image.authors="Hywax <me@hywax.space>"
LABEL org.opencontainers.image.licenses="MIT"

WORKDIR /app

COPY --from=build /app/.output /app
COPY --from=build /app/extra/healthcheck.mjs /app/extra/healthcheck.mjs

EXPOSE 3000/tcp

HEALTHCHECK --interval=10s --timeout=5s --start-period=10s CMD ["node", "/app/extra/healthcheck.mjs"]

CMD ["/app/server/index.mjs"]
