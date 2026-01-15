# docker/nginx/Dockerfile
FROM nginx:alpine

# Copy custom Nginx site configuration
# -----------------------------------------------------------
# Place our Laravel-optimized site configuration in conf.d/
# instead of replacing the main nginx.conf. This follows
# best practices for nginx configuration management.
# -----------------------------------------------------------
COPY ./docker/production/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 and start Nginx
# -----------------------------------------------------------
# The public files will be provided at runtime via the shared volume mount
# defined in docker-compose.yml
# -----------------------------------------------------------
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]