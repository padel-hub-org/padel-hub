#!/bin/sh
set -e

echo "Starting Laravel PHP-FPM entrypoint..."

# Ensure storage directories exist with proper structure
# Copy from the initial storage structure if storage is empty or missing
if [ ! -d "/var/www/storage/framework" ]; then
    echo "Initializing storage structure..."
    cp -r /var/www/storage-init/* /var/www/storage/
fi

# Ensure all required storage subdirectories exist
mkdir -p /var/www/storage/framework/cache/data
mkdir -p /var/www/storage/framework/sessions
mkdir -p /var/www/storage/framework/views
mkdir -p /var/www/storage/logs

# Set proper permissions for storage and bootstrap/cache
# Note: Running as www-data user, so these should already be owned correctly
chmod -R 775 /var/www/storage
chmod -R 775 /var/www/bootstrap/cache

# Optional: Cache Laravel configuration for better performance
# Uncomment if you want to cache config in production
php artisan optimize


echo "Laravel initialization complete. Starting PHP-FPM..."

# Execute the main container command (php-fpm)
exec "$@"
