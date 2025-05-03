# Build stage: use PHP (Debian-based) so apt-get is available
FROM php:8.2-fpm AS build

# Install system dependencies
RUN apt-get update && \
    apt-get install -y git curl zip unzip nodejs npm

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /app

# Copy application code
COPY . .

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Install Node dependencies and build assets
RUN npm install && npm run prod

# Production stage
FROM php:8.2-fpm

WORKDIR /var/www/html

COPY --from=build /app ./

RUN docker-php-ext-install pdo pdo_mysql

EXPOSE 8000

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
