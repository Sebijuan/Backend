# SJ CUSTOMS API

![Descripción de la imagen](https://files.oaiusercontent.com/file-3DCsMTxv1DW2nEC44h6FnQ?se=2025-03-07T19%3A19%3A24Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D96355607-3216-4d11-bb7d-ed00285f0c45.webp&sig=yQ3zKUqVaxjt1ge3sT%2BA%2BIaqcK588HiStJhUWV05ULs%3D)

## Descripción

**SJ CUSTOMS API** es una API para la gestión de tuneo y personalización de coches. Proporciona funcionalidades para registrar usuarios, iniciar sesión, gestionar coches, configurar opciones de personalización, realizar pedidos, procesar pagos, y más.

## Características

- **Autenticación y Autorización**: Registro de usuarios, inicio de sesión, recuperación y restablecimiento de contraseñas.
- **Gestión de Coches**: CRUD (Crear, Leer, Actualizar, Eliminar) de coches.
- **Configuración de Coches**: Opciones de personalización como colores, interiores y extras.
- **Pedidos**: Creación y gestión de pedidos de coches personalizados.
- **Pagos**: Procesamiento de pagos con diferentes opciones.
- **Favoritos**: Gestión de coches favoritos de los usuarios.
- **Mensajes de Contacto**: Envío de mensajes de contacto.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express.js**: Framework para aplicaciones web.
- **MongoDB**: Base de datos NoSQL.
- **Mongoose**: ODM para MongoDB.
- **JWT**: Autenticación basada en tokens.
- **Swagger**: Documentación de la API.
- **Jest**: Framework de pruebas.
- **Supertest**: Librería para pruebas de endpoints HTTP.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/Sebijuan/Backend
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd Backend/src
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Crea un archivo `.env` en el directorio `src` con las siguientes variables de entorno:
    ```env
    PORT=5000
    MONGO_URI=tu_mongo_uri
    JWT_SECRET=tu_jwt_secreto
    EMAIL_USER=tu_email
    EMAIL_PASS=tu_contraseña
    JWT_EXPIRES_IN=1h
    EMAIL_HOST=smtp.gmail.com
    EMAIL_PORT=587
    EMAIL_SECURE=false
    ```

## Uso

1. Inicia el servidor:
    ```bash
    npm start
    ```

2. La API estará disponible en `http://localhost:5000`.

## Documentación de la API

La documentación de la API está disponible en `http://localhost:5000/api-docs` gracias a Swagger.

## Scripts Disponibles

- `npm start`: Inicia el servidor en modo producción.
- `npm run dev`: Inicia el servidor en modo desarrollo con nodemon.
- `npm test`: Ejecuta las pruebas con Jest.

## Estructura del Proyecto

```plaintext
src/
├── Controllers/        # Controladores de la API
├── Loaders/            # Cargadores de configuración y servicios
├── Middlewares/        # Middlewares de la API
├── Models/             # Modelos de datos (Mongoose)
├── Routes/             # Rutas de la API
├── Services/           # Servicios de la aplicación
├── Test/               # Pruebas unitarias y de integración
├── Utils/              # Utilidades y helpers
├── app.js              # Configuración principal de la aplicación
├── config.js           # Configuración de variables de entorno
├── index.js            # Punto de entrada de la aplicación
└── .env                # Variables de entorno
```

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Para cualquier consulta o sugerencia, puedes contactarme a través de [sebijuacoc20@gmail.com](sebijuacoc20@gmail.com).

