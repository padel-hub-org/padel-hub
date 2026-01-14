# docker/nginx/Dockerfile
# Stage 1: Build assets
FROM node:24-slim AS builder

# Set working directory
WORKDIR /var/www

# Copy package files
COPY package*.json ./

# Install Node dependencies
RUN npm ci

# Copy application code needed for build
COPY . /var/www

# Build frontend assets
RUN npm run build

# Stage 2: Nginx production image
FROM nginx:alpine

# Copy custom Nginx site configuration
# -----------------------------------------------------------
# Place our Laravel-optimized site configuration in conf.d/
# instead of replacing the main nginx.conf. This follows
# best practices for nginx configuration management.
# -----------------------------------------------------------
COPY ./docker/production/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy Laravel's public assets from the builder stage
# -----------------------------------------------------------
# We only need the 'public' directory from our Laravel app.
# -----------------------------------------------------------
COPY --from=builder /var/www/public /var/www/public

# Set the working directory to the public folder
WORKDIR /var/www/public

# Expose port 80 and start Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]