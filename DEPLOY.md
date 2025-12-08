# 🚀 Guía de Despliegue en Vercel

## Descripción General

Esta guía detalla el proceso completo para desplegar AluraFlix en Vercel con una API serverless completamente funcional. El proyecto está preconfigurado para funcionar sin requerir configuración adicional.

---

## 📋 Prerequisitos

Antes de comenzar, asegúrate de tener:

- ✅ Cuenta en [GitHub](https://github.com)
- ✅ Cuenta en [Vercel](https://vercel.com) (puedes usar tu cuenta de GitHub)
- ✅ Repositorio del proyecto en GitHub
- ✅ Código actualizado y pusheado

---

## 🎯 Despliegue Paso a Paso

### 1️⃣ Preparar el Repositorio

```bash
# Asegúrate de que todos los cambios estén commiteados
git add .
git commit -m "feat: Preparado para deploy en Vercel"
git push origin main
```

### 2️⃣ Conectar con Vercel

1. Accede a [vercel.com](https://vercel.com)
2. Haz clic en **"Add New Project"**
3. Autoriza a Vercel para acceder a tu GitHub
4. Selecciona el repositorio `challenge-one-aluraflix`

### 3️⃣ Configurar el Proyecto

Vercel detectará automáticamente:
- ✅ **Framework Preset**: Vite
- ✅ **Build Command**: `npm run build`
- ✅ **Output Directory**: `dist`
- ✅ **Install Command**: `npm install`

**No necesitas modificar nada**, la configuración en `vercel.json` ya está optimizada.

### 4️⃣ Desplegar

1. Haz clic en **"Deploy"**
2. Espera 1-2 minutos mientras Vercel:
   - Clona tu repositorio
   - Instala dependencias
   - Construye el proyecto
   - Despliega la aplicación y la API

3. ¡Listo! Tu aplicación estará disponible en:
   ```
   https://challenge-one-aluraflix-[tu-usuario].vercel.app
   ```

---

## 🏗️ Arquitectura del Despliegue

### Estructura en Vercel

```
Dominio Vercel
├── / (Frontend)
│   └── Aplicación React construida con Vite
└── /api (Backend)
    └── /videos (Serverless Function)
        ├── GET    - Listar todos los videos
        ├── GET    - Obtener video por ID
        ├── POST   - Crear nuevo video
        ├── PUT    - Actualizar video
        └── DELETE - Eliminar video
```

### Archivos de Configuración

#### `vercel.json`
```json
{
  "rewrites": [
    {
      "source": "/api/videos/:path*",
      "destination": "/api/videos"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

#### `/api/videos.js`
Serverless function que maneja todas las operaciones CRUD:
- No requiere servidor dedicado
- Se ejecuta on-demand
- Escala automáticamente
- 0 configuración de infraestructura

---

## 🔧 Configuración de Entornos

### Detección Automática de Entorno

El proyecto detecta automáticamente si está en desarrollo o producción:

**Desarrollo Local:**
```javascript
API_URL = 'http://localhost:3000/videos'
```

**Producción (Vercel):**
```javascript
API_URL = '/api/videos'
```

### Variables de Entorno (Opcional)

Si necesitas agregar variables de entorno:

1. En el dashboard de Vercel, ve a **Settings → Environment Variables**
2. Agrega tus variables:
   ```
   VITE_API_URL=/api/videos
   VITE_APP_NAME=AluraFlix
   ```
3. Redeploy el proyecto

---

## 🔍 Verificación del Despliegue

### Checklist Post-Deploy

Después del despliegue, verifica:

- [ ] ✅ La página principal carga correctamente
- [ ] ✅ Los videos se muestran en las categorías
- [ ] ✅ El banner muestra el video correctamente
- [ ] ✅ Puedes crear un nuevo video
- [ ] ✅ Puedes editar un video existente
- [ ] ✅ Puedes eliminar un video
- [ ] ✅ El diseño es responsive en móvil
- [ ] ✅ No hay errores en la consola del navegador

### Probar la API

Puedes probar los endpoints directamente:

```bash
# Obtener todos los videos
curl https://tu-app.vercel.app/api/videos

# Obtener un video específico
curl https://tu-app.vercel.app/api/videos/1

# Crear un nuevo video (POST)
curl -X POST https://tu-app.vercel.app/api/videos \
  -H "Content-Type: application/json" \
  -d '{"title":"Test","category":"FRONT END","photo":"url","link":"url","description":"test"}'
```

---

## 🐛 Solución de Problemas

### La API no responde

**Problema**: GET /api/videos devuelve 404

**Solución**:
1. Verifica que `/api/videos.js` existe en tu repositorio
2. Revisa los logs en Vercel Dashboard → Deployments → View Function Logs
3. Asegúrate de que `vercel.json` está en la raíz del proyecto

### Errores de Build

**Problema**: El build falla en Vercel

**Solución**:
```bash
# Probar build localmente
npm run build

# Si funciona local pero falla en Vercel:
# 1. Limpia node_modules
rm -rf node_modules package-lock.json
npm install

# 2. Verifica que todas las dependencias estén en package.json
npm run build

# 3. Commit y push
git add .
git commit -m "fix: Corregir dependencias para build"
git push origin main
```

### CSS no se carga

**Problema**: Los estilos no aparecen después del deploy

**Solución**:
1. Verifica las importaciones de CSS en los componentes
2. Asegúrate de que no uses rutas absolutas en imports
3. Limpia la caché de Vercel:
   - Dashboard → Settings → Clear Cache → Redeploy

### Videos no cargan (Loading infinito)

**Problema**: La app se queda en "Loading..."

**Solución**:
1. Abre DevTools → Network
2. Verifica si `/api/videos` responde con 200
3. Revisa la consola para errores CORS
4. Confirma que `VideoContext.jsx` usa la URL correcta

---

## 🔄 Actualizaciones Automáticas

### Deploy Automático con Git

Cada vez que hagas push a la rama `main`, Vercel desplegará automáticamente:

```bash
# Hacer cambios en el código
git add .
git commit -m "feat: Nueva funcionalidad"
git push origin main

# Vercel detecta el push y despliega automáticamente
```

### Preview Deployments

Cada Pull Request genera un preview deployment:
- URL única para testing
- No afecta producción
- Ideal para code review

---

## 📊 Monitoreo y Analytics

### Analytics de Vercel

Activa analytics en tu dashboard:
1. Project → Analytics
2. Ve métricas de:
   - Visitantes únicos
   - Page views
   - Países de origen
   - Dispositivos

### Function Logs

Revisa logs de tu API:
1. Project → Deployments
2. Selecciona un deployment
3. View Function Logs
4. Filtra por `/api/videos`

---

## 🎨 Dominios Personalizados

### Agregar un Dominio Custom

1. **Compra un dominio** (Namecheap, GoDaddy, etc.)

2. **En Vercel Dashboard**:
   - Settings → Domains
   - Add Domain
   - Ingresa tu dominio

3. **Configura DNS**:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Espera propagación** (5-48 horas)

---

## 🚀 Optimizaciones para Producción

### Performance

El proyecto ya incluye:
- ✅ Code splitting automático (Vite)
- ✅ Tree shaking
- ✅ Minificación de JS/CSS
- ✅ Optimización de imágenes
- ✅ Lazy loading de componentes

### SEO

Para mejorar SEO, considera agregar:
- Meta tags en `index.html`
- Sitemap.xml
- robots.txt
- Open Graph tags

---

## 📚 Recursos Adicionales

- [Documentación Oficial de Vercel](https://vercel.com/docs)
- [Vercel Serverless Functions](https://vercel.com/docs/functions/serverless-functions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router con Vercel](https://vercel.com/guides/deploying-react-with-vercel)

---

## 💡 Consejos Pro

1. **Usa Environment Variables** para configuraciones sensibles
2. **Habilita Preview Deployments** para testing seguro
3. **Configura Branch Protection** en GitHub
4. **Monitorea los logs** regularmente
5. **Usa Vercel CLI** para deploys desde terminal:
   ```bash
   npm i -g vercel
   vercel login
   vercel --prod
   ```

---

<div align="center">

**¿Problemas con el deploy?** Abre un [issue en GitHub](https://github.com/s3codecL/challenge-one-aluraflix/issues)

Desarrollado con ❤️ por [s3codecL](https://github.com/s3codecL)

</div>
