FROM node:21-alpine as build

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

# To reduce the weight of the docker image, you should use "gcr.io/distroless/nodejs20".
# There are build issues on the Node 20 version. Switch to "distroless" when Node 22 is released or they fix a bug in 20
# More https://github.com/nodejs/docker-node/issues/1946
# FORM gcr.io/distroless/nodejs20 as prod
FROM build

LABEL org.opencontainers.image.title="Mafl"
LABEL org.opencontainers.image.description="Minimalistic flexible homepage"
LABEL org.opencontainers.image.source="https://github.com/hywax/mafl"
LABEL org.opencontainers.image.authors="Hywax <a.hywax@gmail.com>"
LABEL org.opencontainers.image.licenses="MIT"

WORKDIR /app

COPY --from=build /app/.output /app/.output

EXPOSE 3000/tcp

CMD ["/app/.output/server/index.mjs"]
