ARG NODE=node:22.15.0-alpine

################# Builder ##############

FROM $NODE AS builder

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm build --filter @mafl/mafl

################# Mafl ##############

FROM $NODE

LABEL org.opencontainers.image.title="Mafl" \
      org.opencontainers.image.description="Minimalistic flexible homepage" \
      org.opencontainers.image.url="https://mafl.hywax.space" \
      org.opencontainers.image.documentation="https://mafl.hywax.space/guide/getting-started.html" \
      org.opencontainers.image.source="https://github.com/hywax/mafl" \
      org.opencontainers.image.authors="Hywax <me@hywax.space>" \
      org.opencontainers.image.licenses="MIT"

WORKDIR /app

COPY --from=builder /app/apps/mafl/.output .
COPY --from=builder /app/apps/mafl/extra/healthcheck.mjs ./extra/healthcheck.mjs

EXPOSE 3000/tcp

HEALTHCHECK --interval=10s --timeout=5s --start-period=10s CMD ["node", "/app/extra/healthcheck.mjs"]

CMD ["/app/server/index.mjs"]
