#!/bin/sh
set -e

# Copy the initial storage structure if needed
if [ ! -d "/app/storage/framework" ]; then
    echo "Initializing storage structure..."
    cp -r /app/storage-init/* /app/storage/
fi

# Ensure directories exist and have permissions
mkdir -p /app/storage/framework/cache/data \
         /app/storage/framework/sessions \
         /app/storage/framework/views \
         /app/storage/logs

# Fix permissions
chown -R www-data:www-data /app/storage /app/bootstrap/cache

# Run migrations and cache config
php artisan migrate --force
php artisan optimize

echo "Starting FrankenPHP..."
exec "$@"
