FROM node:20-alpine as build

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

# todo remove after merge https://github.com/vitejs/vite-plugin-vue/pull/320
RUN apk add --no-cache patch
RUN patch -p1 -i /app/patches/@vitejs+plugin-vue+5.0.0.patch

RUN yarn run build

# There are build issues on the Node 20 version. Jump to 20 when the bug will be fixed.
# https://github.com/nodejs/docker-node/issues/1946
FROM gcr.io/distroless/nodejs18

LABEL org.opencontainers.image.title="Mafl"
LABEL org.opencontainers.image.description="Minimalistic flexible homepage"
LABEL org.opencontainers.image.source="https://github.com/hywax/mafl"
LABEL org.opencontainers.image.authors="Hywax <a.hywax@gmail.com>"
LABEL org.opencontainers.image.licenses="MIT"

WORKDIR /app

COPY --from=build /app/.output /app

EXPOSE 3000/tcp

CMD ["/app/server/index.mjs"]
