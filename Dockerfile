FROM node:21-alpine as build

RUN corepack enable

RUN corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json /app

RUN pnpm install

COPY . /app

RUN pnpm run build

FROM gcr.io/distroless/nodejs20 as prod

WORKDIR /app

COPY --from=build /app/.output /app/.output

EXPOSE 3000/tcp

CMD ["/app/.output/server/index.mjs"]
