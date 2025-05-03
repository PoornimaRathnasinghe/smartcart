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

# Install Composer (after extensions are available)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /app

# Copy application code
COPY . .

# Install PHP dependencies
RUN php -m && composer install --no-dev --optimize-autoloader

# Install Node dependencies and build assets
RUN npm install && npm run prod

# Production stage
FROM php:8.2-fpm

WORKDIR /var/www/html

COPY --from=build /app ./

# Install PHP extensions in production image too
RUN apt-get update && \
    apt-get install -y \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
        libzip-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd exif zip pdo pdo_mysql

EXPOSE 8000

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
