<p align="center">
  <img src="https://github.com/s3codecL/challenge-one-aluraflix/blob/main/assets/logo.png?raw=true" alt="LogoMain"/>
</p>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

# Challenge AluraFlix
<p align="right"></p>

## Descripción del proyecto
AluraFlix es una plataforma de videos en línea que permite a los usuarios ver y compartir contenido audiovisual en diferentes categorías. En este proyecto, se implementará una aplicación web con React y Vite para gestionar una lista de videos y mostrarlos en una interfaz de usuario interactiva y atractiva.

## Características
### Gestión de Videos:

- Listar videos
- Registrar videos
- Actualizar información
- Eliminar videos

### Funcionalidades de React:
- `Componentes:`Dividir la aplicación en componentes reutilizables para facilitar el mantenimiento y la escalabilidad del código.
- `Hooks:`Utilizar hooks de estado y efecto para gestionar el estado de la aplicación y realizar acciones en diferentes momentos del ciclo de vida de los componentes.
- `API:`Realizar peticiones a una API REST simulada para obtener y enviar información a través de la red.
- `Rutas:`Utilizar rutas para navegar entre diferentes secciones de la aplicación y mostrar información específica en cada una de ellas.

## Creación de proyecto
Crear un proyecto con Vite y React, ejecutando el comando:

    npm create vite@latest


Selecciona el nombre del proyecto:

    ...aluraflix

Template:

    React +
    JavaScript +

Ingresar a la carpeta del proyecto:

    cd challenge-aluraflix

Instalar las dependencias:

    npm install

Iniciar el proyecto:
    npm run dev

### Opcional
Modificar el package.json agregando en el campo scripts el siguiente script: 

        "scripts": {
        "start": "vite",
        "dev": "vite",
        },

Para iniciar el proyecto ejecutar:

     npm start

Inicia el proyecto en [http://localhost:5173/](http://localhost:5173/)

## Instalación 🔧
1. Instalar [react-router-dom](https://www.npmjs.com/package/react-router-dom) Documentación de [react-router-dom](https://reactrouter.com/web/guides/quick-start)

        npm i react-router-dom


2. Instalar [react-icons](https://www.npmjs.com/package/react-icons) para agregar iconos a la aplicación.

        npm install react-icons

3. Instalar [react-loaders-kit](https://www.npmjs.com/package/react-loaders-kit) para agregar animaciones de carga.

    npm i --save react-loaders-kit

    **Pasos a realizar:**
    1. Ingresar a react-loaders-kit.
    2. Dar clic en Documentación.
    3. Copiar el código de la animación que se desea utilizar.
    4. Pegar el código en el archivo App.jsx.


4. Instalar [styled-components](https://www.npmjs.com/package/styled-components) para agregar estilos a los componentes. Documentación de [styled-components](https://styled-components.com/docs/basics)

        npm i styled-components

    

5. Instalar [normalize.css](https://www.npmjs.com/package/normalize.css) para normalizar los estilos de los navegadores.

        npm install normalize.css

    **Pasos a realizar:**
    1. Ingresar a normalize.css.
    2. Dar clic en descargar.
    3. Seleccionar el contenido con:
    
            Ctrl + a (selecciona)

            Ctrl + v (pega)

        Se pega el contenido del archivo normalize.css en el archivo GlobalStyles.jsx.

        *Ruta:*

            src
            ├── components
            │   ├── globalStyles
            │   │   ├── GlobalStyles.jsx

    4. Importar el archivo GlobalStyles.jsx en el archivo App.jsx.
    
                import GlobalStyles from './components/globalStyles/GlobalStyles';


6.  **API falsa con json server**

    **6.1.** Instalar json-server

        npm install json-server

    Dentro del **package.json** se agrega automáticamente la siguiente dependencia:

        "json-server": "^1.0.0-beta.0"

    **6.2.** Crear un archivo **db.json** en la raíz del proyecto con la siguiente estructura:

        {
            "videos": [
                {
                    "id": 1,
                    "title": "Video 1",
                    "url": "https://www.youtube.com/watch?v=1",
                    "category": "Frontend"
                },
                {
                    "id": 2,
                    "title": "Video 2",
                    "url": "https://www.youtube.com/watch?v=2",
                    "category": "Backend"
                },
                {
                    "id": 3,
                    "title": "Video 3",
                    "url": "https://www.youtube.com/watch?v=3",
                    "category": "DevOps"
                }
            ]
        }

    **6.3.** Iniciar el servidor JSON ejecutando:

            npx json-server --watch db.json --port 3000
    
            npm run json-server

### Opcional

7. **Concurrently**

        npm install concurrently --save-dev

    **7.1.**  Modificar el campo scripts en el archivo **package.json** agregando el siguiente script:

        "start": "concurrently \"vite\" \"npx json-server --watch db.json --port 3000\"",


    **7.2.** El archivo **package.json** quedará de la siguiente manera:

        "scripts": {
        "start": "concurrently \"vite\" \"npx json-server --watch db.json --port 3000\"",
        "dev": "vite",
        "build": "vite build",
        "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
        "preview": "vite preview"
    },

    **7.3.** Iniciar el proyecto ejecutando:

           npm start

* Se accede a la API en:

        http://localhost:3000/videos

* Se accede al proyecto en:

        http://localhost:5173/

## 📁 Acceso al proyecto

### Deploy del proyecto en Vercel
1. Se crea una carpeta `dist` ejecutando el comando:

        npm run build

2. Comentar la carpeta `dist` en gitignore

            #dist

3. Subir la carpeta `dist` a GitHub.*

### Demo

![challenge-aluraflix](https://github.com/s3codecL/challenge-one-aluraflix/assets/101030215/9f350de6-de55-45be-b728-bbb69357155f)


---

## - [x] Tecnologías
- [ ] [React + Vite](https://vitejs.dev/guide/)
- [ ] JavaScript

## Tecnologías secundarias
- [ ] Node.js y npm
- [ ] JSON Server
- [ ] VsCode
- [ ] Git
- [ ] GitHub
- [ ] Figma

### Diseño
* [Figma](https://www.figma.com/design/fq7mKIvvVXYylv8eti3hjm/New-AluraFlix---ESP?node-id=1-106&t=HWLfNcrrMRgRcBBC-0) - Diseño del proyecto.

