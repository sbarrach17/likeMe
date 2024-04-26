Desafio Sebastián Barra Like-me parte I 

Para iniciar desafio correctamente, crear bbdd en PostgreSQL.
##
 CREATE DATABASE likeme;
##
 CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000),
descripcion VARCHAR(255), likes INT DEFAULT 0);

cd like-me

CREAR ARCHIVO .ENV CON DATOS DE USUARIO PARA ACCESO A BBDD DESDE POSTGRESQL


(1) Ejecutar app a través de dos terminales distintas.

a- Primera Terminal: ejecutar `npm start` para iniciar Frontend

b- Segunda Terminal: Ejecutar el comando `node server.js` esto inicia el servidor.

c- Realizar los siguientes test en la aplicación, utilizando un navegador web

-   Prueba de Ruta Vacia: Al abrir la página principal (http://localhost:3000/) se muestra un mensaje que dice 'Welcome, Servidor en NodeJS'
-   Prueba de Posts: Verificar que se muestren todos los posts (http://localhost:3000/posts)



(2) Ejecutar app a traves del comando `npm run dev`, iniciar tanto servidor como cliente. Instalar en terminal `npm i concurrently`

Para realizar este punto se utiliza el siguiente comando en una sola terminal: `npm run dev`. Esto abrirá simultaneamente ambos proyectos y podrás ver
el resultado de ambos procesos, es decir, muestra en ella lo que se ve al realizar los pasos anteriores pero ahora
combina las tareas `node server.js` y `npm start`, es decir, arranca ambos procesos al mismo tiempo.

```

CONFIGURACIÓN PARA USO: PACKAGE.JSON

 "scripts": {
    "dev": "concurrently \"npm run dev:server\" \"npm run dev:client\"",
    "dev:server": "node server.js",
    "dev:client": "vite",
    "start": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "concurrently": "^8.2.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "pg": "^8.11.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-toastify": "^9.1.1"
  },
