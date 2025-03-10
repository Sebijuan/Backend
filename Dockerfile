# Usa una imagen base oficial de Node.js
FROM node:20

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm ci --production

# Copia el resto del código de la aplicación
COPY ./src/ ./src/

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

USER node


# Define el comando para ejecutar la aplicación
CMD ["node", "src/index.js"]