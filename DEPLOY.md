# AluraFlix - Despliegue en Vercel

## 🚀 Despliegue Automático en Vercel

Este proyecto está optimizado para desplegarse automáticamente en Vercel con configuración serverless.

### Pasos para Desplegar:

1. **Conectar con GitHub**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "Add New Project"
   - Conecta tu repositorio de GitHub

2. **Configuración del Proyecto**
   - Vercel detectará automáticamente que es un proyecto Vite
   - La configuración en `vercel.json` ya está lista
   - No necesitas configurar nada adicional

3. **Deploy**
   - Haz clic en "Deploy"
   - Espera a que se complete el despliegue (1-2 minutos)
   - ¡Listo! Tu app estará en línea

### 📁 Estructura para Vercel

```
challenge-aluraflix/
├── api/                    # Serverless functions
│   └── videos.js          # API REST para videos
├── src/                   # Código fuente React
├── db.json               # Base de datos JSON
├── vercel.json          # Configuración Vercel
└── package.json
```

### 🔧 Configuración API

La API serverless está configurada en `/api/videos.js` y maneja:
- `GET /api/videos` - Obtener todos los videos
- `GET /api/videos/:id` - Obtener un video específico
- `POST /api/videos` - Crear un nuevo video
- `PUT/PATCH /api/videos/:id` - Actualizar un video
- `DELETE /api/videos/:id` - Eliminar un video

### 🏠 Desarrollo Local

Para desarrollo local:

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo (con json-server)
npm start

# O ejecutar solo el frontend
npm run dev
```

### ⚙️ Variables de Entorno

El proyecto detecta automáticamente el entorno:
- **Desarrollo**: Usa `http://localhost:3000/videos`
- **Producción**: Usa `/api/videos` (Vercel serverless)

### 🎨 Características Modernas

- ✅ Diseño 100% responsivo (mobile-first)
- ✅ Animaciones CSS suaves
- ✅ Variables CSS modernas
- ✅ Menú hamburguesa funcional
- ✅ Efectos hover mejorados
- ✅ Aspect ratio en videos
- ✅ Backdrop blur en modales
- ✅ Grid moderno para tarjetas
- ✅ Smooth scroll
- ✅ Gradientes y sombras modernas

### 📱 Breakpoints Responsivos

- **Mobile**: 320px - 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Wide Desktop**: 1025px+

### 🐛 Solución de Problemas

**Si la API no funciona en Vercel:**
1. Verifica que `vercel.json` existe en la raíz
2. Asegúrate de que `/api/videos.js` está en la carpeta `api/`
3. Revisa los logs en el dashboard de Vercel

**Si los estilos no se cargan:**
1. Limpia la caché: `npm run build`
2. Verifica que todas las importaciones CSS estén correctas

### 🔗 Enlaces Útiles

- [Documentación Vercel](https://vercel.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router](https://reactrouter.com/)

---

Desarrollado con ❤️ para Alura LATAM
