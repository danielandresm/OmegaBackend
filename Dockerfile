# Selecciona una imagen base que contenga Node.js y NPM instalados
FROM node:14-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de la aplicación a la imagen del contenedor
COPY . .

# Instala las dependencias de la aplicación
RUN npm install --production

# Compila la aplicación para producción
RUN npm run build

# Expone el puerto 3000 en el contenedor
EXPOSE 3000

# Inicia la aplicación al ejecutar el contenedor
CMD ["npm", "run", "start:prod"]