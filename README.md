
# Node.js Email con Google OAuth 2

Este proyecto es un backend simple creado con Node.js y Express que permite el envío de correos electrónicos utilizando Nodemailer junto con Google OAuth 2 para la autenticación. Es ideal para aplicaciones que necesitan una funcionalidad de envío de emails segura, como formularios de contacto o notificaciones.

## Características

- **Envío de correos electrónicos seguro:** Utiliza Nodemailer y Google OAuth 2 para autenticar y enviar correos electrónicos.
- **Configuración y personalización sencilla:** Permite personalizar fácilmente el contenido y la estructura del email.
- **Implementación rápida:** Puede integrarse y desplegarse rápidamente en proyectos simples.

## Requisitos previos

Asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/)

### Configuración de Google OAuth 2

1. Crea un proyecto en [Google Cloud Console](https://console.cloud.google.com/).
2. Activa la API de Gmail para tu proyecto.
3. Configura las credenciales de OAuth 2.0:
   - Selecciona **Tipo de aplicación** como "Aplicación de escritorio" o "Aplicación web".
   - Descarga el archivo JSON de las credenciales o anota el **Client ID** y **Client Secret**.

4. Habilita el acceso para que el token pueda enviar correos en tu nombre.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/DylanNavarro97/portfolioBack.git
   cd portfolioBack
   ```

2. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

3. Configura las variables de entorno. Crea un archivo `.env` en la raíz del proyecto y añade los valores de tus credenciales de OAuth 2.0 y el destinatario de correos:

   ```plaintext
   CLIENT_ID=tu-client-id
   CLIENT_SECRET=tu-client-secret
   REFRESH_TOKEN=tu-refresh-token
   EMAIL_USER=tu-correo@gmail.com
   PORT=tu_puerto_seleccionado
   mail=tu_mail_receptor
   ```

   > **Nota:** Reemplaza los valores con las credenciales y tokens que configuraste en Google Cloud Console.

## Uso

Para iniciar el servidor, ejecuta el siguiente comando:

```bash
npm start
```
### Endpoint de Envío de Correo

- **Endpoint:** `/mail`
- **Método:** `POST`
- **Cuerpo de la petición:** JSON con los siguientes campos:

  ```json
  {
    "from": "Emisor del mensaje",
    "to": "destinatario@example.com",
    "subject": "Asunto del correo",
    "text": "Cuerpo del correo"
  }
  ```

- **Ejemplo de respuesta:** 
  ```json
  {
    "status": "success (200)",
    "mensaje": "Se envió el mail correctamente."
  }
  ```

## Dependencias

- [express](https://www.npmjs.com/package/express) - Framework para Node.js.
- [nodemailer](https://www.npmjs.com/package/nodemailer) - Librería para envío de correos electrónicos.
- [dotenv](https://www.npmjs.com/package/dotenv) - Manejo de variables de entorno.
- [google-auth-library](https://www.npmjs.com/package/google-auth-library) - Autenticación OAuth 2.0 de Google para acceso seguro.

## Contribuciones

Si deseas contribuir, por favor realiza un pull request o abre un issue con sugerencias y mejoras.
