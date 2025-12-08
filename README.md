![Aluraflix](https://github.com/s3codecL/challenge-one-aluraflix/blob/main/src/assets/logo.png)

<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

### 🎬 Plataforma moderna de gestión de videos educativos

[Demo en Vivo](https://challenge-one-aluraflix-kappa.vercel.app) · [Reportar Bug](https://github.com/s3codecL/challenge-one-aluraflix/issues) · [Solicitar Feature](https://github.com/s3codecL/challenge-one-aluraflix/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#-sobre-el-proyecto)
- [Características](#-características)
- [Demo](#-demo)
- [Tecnologías](#-tecnologías)
- [Inicio Rápido](#-inicio-rápido)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Despliegue](#-despliegue)
- [API](#-api)
- [Roadmap](#-roadmap)
- [Contribución](#-contribución)
- [Licencia](#-licencia)
- [Contacto](#-contacto)
- [Agradecimientos](#-agradecimientos)

## 🎯 Sobre el Proyecto

**AluraFlix** es una plataforma web moderna e interactiva para la gestión y visualización de contenido educativo en video. Desarrollada como parte del programa **Oracle Next Education (ONE)** en colaboración con **Alura LATAM**, esta aplicación demuestra las mejores prácticas en desarrollo frontend con React.

### ✨ Características Destacadas

#### 🎨 Interfaz Moderna
- **Diseño 100% Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- **Animaciones Suaves**: Transiciones CSS profesionales y efectos hover elegantes
- **Sistema de Diseño**: Variables CSS modernas con paleta de colores consistente
- **Modo Oscuro**: Interfaz oscura optimizada para reducir fatiga visual

#### 🎥 Gestión de Videos
- **CRUD Completo**: Crear, leer, actualizar y eliminar videos
- **Categorización**: Organiza videos en Front End, Back End e Innovación y Gestión
- **Búsqueda y Filtrado**: Encuentra contenido rápidamente
- **Preview de Videos**: Visualiza videos de YouTube integrados

#### 🚀 Funcionalidades Avanzadas
- **API REST Serverless**: Backend funcional desplegado en Vercel
- **Validación de Formularios**: Validación en tiempo real con feedback visual
- **Notificaciones**: Sistema de alertas para acciones del usuario
- **Modal de Edición**: Interfaz intuitiva para modificar videos
- **Confirmación de Eliminación**: Diálogos de confirmación para prevenir errores

---

## 📸 Demo

### Vista Desktop

![Desktop View](https://via.placeholder.com/800x450?text=Desktop+View)

### Vista Móvil

![Mobile View](https://via.placeholder.com/375x667?text=Mobile+View)

### Funcionalidades en Acción

| Crear Video | Editar Video | Eliminar Video |
|-------------|--------------|----------------|
| ![Create](https://via.placeholder.com/250x150?text=Create) | ![Edit](https://via.placeholder.com/250x150?text=Edit) | ![Delete](https://via.placeholder.com/250x150?text=Delete) |

> 📺 [Ver Demo en Vivo](https://challenge-one-aluraflix-kappa.vercel.app)

---

## 🛠️ Tecnologías

### Frontend
- **React 18.2** - Biblioteca de JavaScript para interfaces de usuario
- **React Router DOM 6.23** - Enrutamiento declarativo para React
- **Vite 5.2** - Build tool ultrarrápido
- **Styled Components 6.1** - CSS-in-JS para estilos dinámicos
- **React Icons 5.2** - Iconos vectoriales como componentes React

### Backend
- **Vercel Serverless Functions** - API REST sin servidor
- **JSON Server** - API REST simulada para desarrollo local

### Desarrollo
- **ESLint** - Linter para mantener código limpio
- **Concurrently** - Ejecutar múltiples comandos npm simultáneamente

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 16+ y npm instalados
- Git instalado
- Cuenta en GitHub (opcional para deploy)
- Cuenta en Vercel (opcional para deploy)

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/s3codecL/challenge-one-aluraflix.git
cd challenge-aluraflix
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
npm start
```

Esto iniciará:
- Frontend en `http://localhost:5173`
- API local en `http://localhost:3000`

### Scripts Disponibles

```bash
npm start       # Inicia frontend + API local
npm run dev     # Solo frontend (Vite)
npm run build   # Build de producción
npm run preview # Preview del build
npm run lint    # Verificar código con ESLint
```

## 📁 Estructura del Proyecto

```
challenge-aluraflix/
├── api/                          # Serverless API functions
│   └── videos.js                 # CRUD endpoints para videos
├── public/                       # Archivos estáticos
├── src/
│   ├── assets/                   # Imágenes y recursos
│   ├── components/               # Componentes React
│   │   ├── banner/              # Banner principal con video
│   │   ├── card/                # Tarjeta de video
│   │   ├── category/            # Sección de categoría
│   │   ├── confirmationDialog/  # Diálogo de confirmación
│   │   ├── footer/              # Footer de la aplicación
│   │   ├── header/              # Cabecera con navegación
│   │   ├── loading/             # Indicador de carga
│   │   ├── modal/               # Modal de edición
│   │   └── notification/        # Sistema de notificaciones
│   ├── contexts/                # Context API de React
│   │   └── VideoContext.jsx     # Estado global de videos
│   ├── data/                    # Datos estáticos
│   │   ├── CardsData.js
│   │   └── CategoryData.js
│   ├── pages/                   # Páginas de la aplicación
│   │   ├── home/                # Página principal
│   │   └── newVideo/            # Formulario de nuevo video
│   ├── routes/                  # Configuración de rutas
│   ├── utils/                   # Utilidades y helpers
│   ├── App.jsx                  # Componente principal
│   ├── main.jsx                 # Punto de entrada
│   └── index.css                # Estilos globales
├── db.json                      # Base de datos local (desarrollo)
├── vercel.json                  # Configuración de Vercel
├── vite.config.js              # Configuración de Vite
├── package.json
└── README.md
```

## 🌐 Despliegue

### Despliegue en Vercel (Recomendado)

1. **Conectar con GitHub**
   - Accede a [vercel.com](https://vercel.com)
   - Haz clic en "Add New Project"
   - Importa tu repositorio de GitHub

2. **Configuración Automática**
   - Vercel detectará automáticamente Vite
   - La configuración en `vercel.json` ya está lista
   - No se requiere configuración adicional

3. **Deploy**
   - Haz clic en "Deploy"
   - Espera 1-2 minutos
   - Tu aplicación estará en línea con API funcional

> 📖 Para instrucciones detalladas, consulta [DEPLOY.md](./DEPLOY.md)

### Variables de Entorno

El proyecto detecta automáticamente el entorno:

```javascript
// Desarrollo
API_URL = 'http://localhost:3000/videos'

// Producción
API_URL = '/api/videos'
```

---

## 🔌 API

### Endpoints Disponibles

El proyecto incluye una API REST serverless con los siguientes endpoints:

#### Obtener todos los videos
```http
GET /api/videos
```

**Respuesta:**
```json
[
  {
    "id": "1",
    "title": "React desde Cero",
    "category": "FRONT END",
    "photo": "https://i.ytimg.com/vi/example/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=example",
    "description": "Aprende React desde cero"
  }
]
```

#### Obtener video por ID
```http
GET /api/videos/:id
```

#### Crear nuevo video
```http
POST /api/videos
Content-Type: application/json

{
  "title": "Nuevo Video",
  "category": "FRONT END",
  "photo": "url-de-imagen",
  "link": "url-de-youtube",
  "description": "Descripción del video"
}
```

#### Actualizar video
```http
PUT /api/videos/:id
Content-Type: application/json

{
  "title": "Título actualizado"
}
```

#### Eliminar video
```http
DELETE /api/videos/:id
```

### Categorías Disponibles

- `FRONT END` - Desarrollo Frontend
- `BACK END` - Desarrollo Backend  
- `INNOVACIÓN Y GESTIÓN` - Metodologías y herramientas

---
- **Desarrollo**: API local en `http://localhost:3000`
- **Producción**: API serverless en `/api/videos`

### Build Local

```bash
npm run build    # Genera build de producción en /dist
npm run preview  # Preview del build localmente
```

## 🗺️ Roadmap

### ✅ Completado
- [x] Sistema CRUD completo de videos
- [x] Diseño responsive mobile-first
- [x] Categorización de videos
- [x] Modal de edición
- [x] Confirmación de eliminación
- [x] API serverless en Vercel
- [x] Animaciones y transiciones modernas
- [x] Sistema de notificaciones

### 🚧 En Desarrollo
- [ ] Sistema de búsqueda por título
- [ ] Filtrado por categoría
- [ ] Paginación de videos
- [ ] Modo claro/oscuro toggle

### 💡 Futuras Mejoras
- [ ] Autenticación de usuarios
- [ ] Lista de favoritos
- [ ] Compartir videos en redes sociales
- [ ] Sistema de comentarios
- [ ] Valoraciones de videos
- [ ] Panel de administración avanzado

## 🤝 Contribución

Las contribuciones son bienvenidas y apreciadas. Si deseas contribuir:

1. **Fork el proyecto**
2. **Crea una rama para tu feature**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit tus cambios**
   ```bash
   git commit -m 'feat: Add AmazingFeature'
   ```
4. **Push a la rama**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Abre un Pull Request**

> 📖 Lee nuestra [Guía de Contribución](./CONTRIBUTING.md) para más detalles sobre el proceso, guía de estilo y mejores prácticas.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](./LICENSE) para más detalles.

## 👤 Contacto

**s3codecL** - Desarrollador Full Stack

- GitHub: [@s3codecL](https://github.com/s3codecL)
- LinkedIn: [gandradev](https://www.linkedin.com/in/gandradev/)
- Email: [gandradev@gmail.com](mailto:gandradev@gmail.com)

**Link del Proyecto**: [https://github.com/s3codecL/challenge-one-aluraflix](https://github.com/s3codecL/challenge-one-aluraflix)

---

## 🙏 Agradecimientos

- [Oracle Next Education (ONE)](https://www.oracle.com/lad/education/oracle-next-education/) - Por la oportunidad de aprendizaje
- [Alura LATAM](https://www.aluracursos.com/) - Por el contenido educativo de calidad
- [React](https://react.dev/) - Por el increíble framework
- [Vite](https://vitejs.dev/) - Por la velocidad en desarrollo
- [Vercel](https://vercel.com) - Por el hosting gratuito
- [React Icons](https://react-icons.github.io/react-icons/) - Por los iconos profesionales
- [Styled Components](https://styled-components.com/) - Por los estilos dinámicos
- La comunidad de desarrolladores que inspira y comparte conocimiento

---
- YouTube: [@s3codecL](https://www.youtube.com/@s3codecL/)

**Link del Proyecto**: [https://github.com/s3codecL/challenge-one-aluraflix](https://github.com/s3codecL/challenge-one-aluraflix)

**Demo en Vivo**: [https://challenge-one-aluraflix-kappa.vercel.app](https://challenge-one-aluraflix-kappa.vercel.app)

---

## 🎓 Agradecimientos

- [Alura LATAM](https://www.aluracursos.com/) - Plataforma de educación
- [Oracle Next Education](https://www.oracle.com/mx/education/oracle-next-education/) - Programa de formación
- [Vercel](https://vercel.com) - Plataforma de deployment
- [React Icons](https://react-icons.github.io/react-icons/) - Iconos
- [Vite](https://vitejs.dev/) - Build tool

---

<div align="center">

**⭐ Si este proyecto te fue útil, no olvides darle una estrella ⭐**

Desarrollado con ❤️ por [s3codecL](https://github.com/s3codecL)

</div>


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

### Deploy del proyecto en Vercel
1. Se crea una carpeta `dist` ejecutando el comando:

        npm run build

![Aluraflix](https://github.com/s3codecL/challenge-one-aluraflix/blob/main/src/assets/logo.png)
---

## - Tecnologías
- [x] [React + Vite](https://vitejs.dev/guide/)
- [x] JavaScript

## Tecnologías secundarias
- [x] Node.js y npm
- [x] JSON Server
- [x] VsCode
- [x] Git
- [x] GitHub
- [x] Figma

### Diseño
* [Figma](https://www.figma.com/design/fq7mKIvvVXYylv8eti3hjm/New-AluraFlix---ESP?node-id=1-106&t=HWLfNcrrMRgRcBBC-0) - Diseño del proyecto.

