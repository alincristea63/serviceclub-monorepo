# Multi-stage build for Next.js app
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./
COPY apps/hub-app/package.json ./apps/hub-app/
COPY packages/ui-components/package.json ./packages/ui-components/
COPY packages/api-client/package.json ./packages/api-client/
COPY packages/utils/package.json ./packages/utils/

# Install dependencies
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the hub-app
RUN npm run build --workspace=apps/hub-app

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder /app/apps/hub-app/.next ./apps/hub-app/.next
COPY --from=builder /app/apps/hub-app/public ./apps/hub-app/public
COPY --from=builder /app/apps/hub-app/package.json ./apps/hub-app/package.json

# Copy shared packages
COPY --from=builder /app/packages ./packages
COPY --from=builder /app/node_modules ./node_modules

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start", "--workspace=apps/hub-app"] 