FROM php:8.1-apache

# Habilitar el módulo rewrite de Apache
RUN a2enmod rewrite

#Configurar el archivo .htaccess para el enrutamiento de Angular
RUN echo '<IfModule mod_rewrite.c>\n\
  RewriteEngine On\n\
  RewriteBase /\n\
  RewriteRule ^index\.html$ - [L]\n\
  RewriteCond %{REQUEST_FILENAME} !-f\n\
  RewriteCond %{REQUEST_FILENAME} !-d\n\
  RewriteRule . /index.html [L]\n\
</IfModule>' > /var/www/html/.htaccess

# Exponer el puerto 80
EXPOSE 80
# Comando para iniciar Apache en primer plano
CMD ["apache2-foreground"]
