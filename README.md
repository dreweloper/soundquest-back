# SoundQuest | Back-end

¡Bienvenido a SoundQuest, tu explorador de música aleatoria basado en las playlists de Spotify!

Nuestra web app utiliza el ID del usuario de Spotify para acceder a sus playlists, selecciona una al azar y te muestra una canción también aleatoria de esa lista.

A continuación, encontrarás toda la información relacionada con el Back-end de nuestra aplicación. Si deseas consultar el repositorio del Front-end, haz click [aquí](https://github.com/dreweloper/soundquest-front).

---

## Instalación

1. Clona el repositorio en local.

```shell
git clone https://github.com/dreweloper/soundquest-back.git
```

2. Cambia al directorio del proyecto.

```shell
cd soundquest
```

3. Instala las dependencias utilizando npm.

```shell
npm install
```

4. Crea el archivo `.env` en la raíz del proyecto y configura las siguientes variables de entorno:

- `PORT`: Puerto al que escucha el servidor.
- `URI_CONNECT`: La URI de conexión del despliegue de MongoDB.

5. Inicia la aplicación en tu entorno de desarrollo local.

```shell
npm run dev
```

## Tecnologías utilizadas

- **Node.js:** (Versión 18.14.2) - Plataforma de tiempo de ejecución de JavaScript.
- **Express:** (Versión 4.18.2) - Framework web para la construcción de aplicaciones web y APIs.
- **Mongoose:** (Versión 7.3.3) - Librería de ODM (Mapeo Objeto-Documento) utilizada para interactuar con la base de datos MongoDB en Node.js.
- **Docker:** (Versión 20.10.21, build baeda1f) - Plataforma de contenedores para el despliegue de aplicaciones.
- **node-fetch:** (Versión 2.6.11) - Librería para realizar solicitudes HTTP desde Node.js. Instalo la versión 2 porque la más reciente no es compatible con CommonJS (sistema de módulos de JavaScript).

## Despliegue

La aplicación se ha desplegado como un web service utilizando una imagen de Docker en la plataforma Render.

## Documentación

### Documentación API

La documentación de la API está hecha en Postman. La puedes consultar en este [enlace](https://documenter.getpostman.com/view/26092515/2s9Y5crf4P).

### Documentación proyecto (JSDoc)

(Github Pages)

---

## Créditos
El desarrollo de SoundQuest ha sido posible gracias a la [Web API de Spotify](https://developer.spotify.com/).

## Contacto

Si tienes alguna pregunta, sugerencia o comentario, no dudes en contactarme a través del e-mail: [dreweloper@gmail.com](mailto:dreweloper@gmail.com).