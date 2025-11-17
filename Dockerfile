# Dockerfile (prod - recommended)
# Stage 1: build
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies (use package-lock for reproducible installs)
COPY package*.json ./
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: runtime - serve the built static files
FROM node:18-alpine
WORKDIR /app

# install a tiny static server
RUN npm i -g serve --silent

# copy built files from builder
COPY --from=builder /app/dist ./dist

# expose the port HF Spaces expects
EXPOSE 7860

# serve the built app on port 7860 and bind to all interfaces
CMD ["serve", "-s", "dist", "-l", "7860"]
