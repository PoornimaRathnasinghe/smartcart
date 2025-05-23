FROM php:8.2-fpm AS build

# Install system dependencies and PHP extensions
RUN apt-get update && \
    apt-get install -y \
        git \
        curl \
        zip \
        unzip \
        nodejs \
        npm \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
        libzip-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd exif zip pdo pdo_mysql

# Install Composer (add this line)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /app
COPY . /app

# Debug: Search for any reference to IdeHelperServiceProvider
RUN grep -r IdeHelperServiceProvider . || echo "No references found"

# Remove all Laravel cache files before composer install
RUN rm -rf bootstrap/cache/*

# Install PHP dependencies without dev dependencies (recommended for production)
RUN composer install --no-dev --optimize-autoloader

RUN php artisan config:clear && php artisan cache:clear && php artisan route:clear && php artisan view:clear

# Build frontend assets
RUN npm cache clean --force && npm install --legacy-peer-deps && npm run prod

# Production stage
FROM php:8.2-fpm

WORKDIR /app

# Install system dependencies and PHP extensions in production image too
RUN apt-get update && \
    apt-get install -y \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
        libzip-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd exif zip pdo pdo_mysql

COPY --from=build /app ./

EXPOSE 8000

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
