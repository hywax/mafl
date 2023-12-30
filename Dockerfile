FROM node:18-alpine as build

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

# There are build issues on the Node 20 version. Jump to 20 when the bug will be fixed.
# https://github.com/nodejs/docker-node/issues/1946
FROM gcr.io/distroless/nodejs18

LABEL org.opencontainers.image.title="Mafl"
LABEL org.opencontainers.image.description="Minimalistic flexible homepage"
LABEL org.opencontainers.image.source="https://github.com/hywax/mafl"
LABEL org.opencontainers.image.authors="Hywax <a.hywax@gmail.com>"
LABEL org.opencontainers.image.licenses="MIT"

WORKDIR /app

COPY --from=build /app/.output /app/.output

EXPOSE 3000/tcp

CMD ["/app/.output/server/index.mjs"]
