# Builder Stage
FROM dunglas/frankenphp:php8.4 AS builder

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    postgresql-client \
    git \
    unzip \
    libzip-dev \
    libicu-dev \
    libpq-dev \
    curl \
    gnupg \
    && install-php-extensions \
    pdo_mysql \
    pdo_pgsql \
    pgsql \
    opcache \
    intl \
    zip \
    bcmath \
    soap \
    redis \
    pcntl

# Install Node.js 24
RUN curl -fsSL https://deb.nodesource.com/setup_24.x | bash - \
    && apt-get install -y nodejs

WORKDIR /app

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy application files
COPY . .

# Install PHP dependencies
ENV COMPOSER_ALLOW_SUPERUSER=1
RUN composer install --no-dev --optimize-autoloader --no-interaction --no-progress

# Build frontend assets
RUN npm ci
RUN npm run build

# Final Stage
FROM dunglas/frankenphp:php8.4

# Install runtime dependencies
RUN apt-get update && apt-get install -y \
    postgresql-client \
    unzip \
    libzip-dev \
    libicu-dev \
    libpq-dev \
    && install-php-extensions \
    pdo_mysql \
    pdo_pgsql \
    pgsql \
    opcache \
    intl \
    zip \
    bcmath \
    soap \
    redis \
    pcntl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Enable PHP production settings
RUN cp "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

# Copy application from builder
# We copy the entire directory to ensure we have everything, 
# then remove node_modules which isn't needed in prod.
COPY --from=builder --chown=www-data:www-data /app /app
RUN rm -rf /app/node_modules

# Prepare storage
RUN cp -r storage storage-init

# Setup permissions
RUN chmod -R 775 storage bootstrap/cache

# Entrypoint setup
COPY docker/production/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Environment variables
ENV SERVER_NAME=:80

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["frankenphp", "run", "--config", "/etc/caddy/Caddyfile"]
