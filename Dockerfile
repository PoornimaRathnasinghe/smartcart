# Use an official PHP image with Composer and Node.js
FROM composer:2.7 AS build

# Install Node.js (v18 or later)
RUN apt-get update && \
    apt-get install -y nodejs npm && \
    npm install -g npm@latest

WORKDIR /app

# Copy application code
COPY . .

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Install Node dependencies and build assets
RUN npm install && npm run prod

# Production image
FROM php:8.2-fpm

WORKDIR /var/www/html

# Copy built application from build stage
COPY --from=build /app ./

# Install necessary PHP extensions
RUN docker-php-ext-install pdo pdo_mysql

# Expose port
EXPOSE 8000

# Start Laravel's built-in server (for demo; use NGINX/Apache for production)
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
