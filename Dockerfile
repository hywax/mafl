FROM node:20-alpine as build

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

FROM gcr.io/distroless/nodejs20 as prod

LABEL org.opencontainers.image.title="Mafl"
LABEL org.opencontainers.image.description="Minimalistic flexible homepage"
LABEL org.opencontainers.image.source="https://github.com/hywax/mafl"
LABEL org.opencontainers.image.authors="Hywax <a.hywax@gmail.com>"
LABEL org.opencontainers.image.licenses="MIT"

WORKDIR /app

COPY --from=build /app/.output /app/.output

EXPOSE 3000/tcp

CMD ["/app/.output/server/index.mjs"]
