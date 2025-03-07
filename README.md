# SJ CUSTOMS API

## Descripción
SJ CUSTOMS API es una API para la gestión de tuneo y personalización de coches. Proporciona funcionalidades para registrar usuarios, iniciar sesión, gestionar coches, configurar opciones de personalización, realizar pedidos, procesar pagos, y más.

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
    git clone https://github.com/tuusuario/Backend.git
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
├── [app.js](http://_vscodecontentref_/1)              # Configuración principal de la aplicación
├── [config.js](http://_vscodecontentref_/2)           # Configuración de variables de entorno
├── [index.js](http://_vscodecontentref_/3)            # Punto de entrada de la aplicación
└── .env                # Variables de entorno