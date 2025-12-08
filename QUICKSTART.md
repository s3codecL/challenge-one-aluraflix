# ⚡ Guía de Inicio Rápido

> Pon en marcha AluraFlix en menos de 5 minutos

---

## 🚀 Instalación y Ejecución Local

### Prerrequisitos

- Node.js 16+ instalado
- npm o yarn
- Git

### Pasos Rápidos

```bash
# 1. Clonar el repositorio
git clone https://github.com/s3codecL/challenge-one-aluraflix.git
cd challenge-aluraflix

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

**✅ Listo!** La aplicación estará disponible en:
- Frontend: `http://localhost:5173`
- API Mock: `http://localhost:3000` (si usas json-server)

---

## 🌐 Deploy Rápido a Vercel

### Método 1: Dashboard Web (Recomendado)

1. Ve a [vercel.com](https://vercel.com)
2. Click en **"Add New Project"**
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente Vite
5. Click en **"Deploy"**
6. ¡Espera 2 minutos y tu app estará en vivo! 🎉

### Método 2: Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

**🔗 Tu app estará en:** `https://tu-proyecto.vercel.app`

---

## 📱 Prueba en Diferentes Dispositivos

### Vista Previa Responsive

- 📱 **Mobile** (< 480px): Menú hamburguesa, stack vertical
- 📱 **Tablet** (768px - 1024px): 2 columnas, navegación adaptativa
- 💻 **Desktop** (> 1024px): Grid completo, todas las características

### Testing Rápido

1. Abre DevTools (F12)
2. Toggle Device Toolbar (Ctrl + Shift + M)
3. Prueba diferentes resoluciones

---

## 🎨 Funcionalidades Principales

### ✅ Lo que puedes hacer inmediatamente:

- ➕ **Crear videos**: Click en "Nuevo Video" → Completa el formulario
- ✏️ **Editar videos**: Click en el ícono de lápiz en cualquier card
- 🗑️ **Eliminar videos**: Click en el ícono de basurero → Confirma
- 🎬 **Ver videos**: Click en cualquier card para ver en YouTube
- 📂 **Filtrar por categoría**: Navega por FRONT END, BACK END, INNOVACIÓN

### 🎯 Categorías Disponibles

1. **FRONT END** - React, CSS, JavaScript
2. **BACK END** - Node.js, APIs, Bases de datos
3. **INNOVACIÓN Y GESTIÓN** - Metodologías, Herramientas

---

## 🔧 Comandos Útiles

```bash
# Desarrollo con hot reload
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linter
npm run lint

# Instalar nueva dependencia
npm install <paquete>
```

---

## 🐛 Solución Rápida de Problemas

### El servidor no inicia

```bash
# Limpia node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Puerto 5173 en uso

```bash
# Usa otro puerto
npm run dev -- --port 3001
```

### Build falla

```bash
# Verifica versión de Node
node -v  # Debe ser 16+

# Reinstala dependencias
npm ci
npm run build
```

---

## 📚 Próximos Pasos

Una vez que tengas la app corriendo:

1. 📖 Lee el [README.md](./README.md) completo para entender la arquitectura
2. 🚀 Consulta [DEPLOY.md](./DEPLOY.md) para deploy detallado
3. 📝 Revisa [CHANGELOG.md](./CHANGELOG.md) para ver todas las mejoras
4. 🛠️ Explora el código en `src/` para personalizaciones

---

## 💡 Tips Pro

- Usa `Ctrl + Shift + P` en VS Code → "Simple Browser" para preview integrado
- Habilita React DevTools para debug
- Usa Vercel Dashboard para ver analytics
- Configura hot reload guardando archivos con `Ctrl + S`

---

<div align="center">

**¿Necesitas ayuda?** [Abre un issue](https://github.com/s3codecL/challenge-one-aluraflix/issues) o consulta la [documentación completa](./README.md)

Desarrollado con ❤️ por [s3codecL](https://github.com/s3codecL)

</div>
