# Guía de Contribución

¡Gracias por tu interés en contribuir a AluraFlix! 🎉

---

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo puedo contribuir?](#cómo-puedo-contribuir)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Guía de Estilo](#guía-de-estilo)
- [Proceso de Pull Request](#proceso-de-pull-request)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Mejoras](#sugerir-mejoras)

---

## 📜 Código de Conducta

Este proyecto y todos los participantes están regidos por nuestro [Código de Conducta](#). Al participar, se espera que sigas este código. Por favor, reporta comportamiento inaceptable a [tu-email@example.com].

---

## 🤝 ¿Cómo puedo contribuir?

### Reportar Bugs

Si encuentras un bug, por favor:

1. **Verifica** que no haya sido reportado antes en [Issues](https://github.com/s3codecL/challenge-one-aluraflix/issues)
2. **Crea un issue** usando la plantilla de bug report
3. **Incluye**:
   - Descripción clara del problema
   - Pasos para reproducirlo
   - Comportamiento esperado vs actual
   - Screenshots si aplica
   - Entorno (navegador, versión de Node, OS)

### Sugerir Mejoras

Para sugerir nuevas características:

1. **Busca** en issues existentes para evitar duplicados
2. **Crea un issue** con la etiqueta `enhancement`
3. **Describe**:
   - El problema que resuelve
   - La solución propuesta
   - Alternativas consideradas
   - Impacto potencial

### Contribuir con Código

1. **Fork** el repositorio
2. **Crea una rama** desde `main`:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Desarrolla** tu característica
4. **Commit** tus cambios siguiendo [Conventional Commits](#conventional-commits)
5. **Push** a tu fork
6. **Abre un Pull Request**

---

## 🛠️ Proceso de Desarrollo

### Configuración del Entorno

```bash
# Clonar el repositorio
git clone https://github.com/s3codecL/challenge-one-aluraflix.git
cd challenge-aluraflix

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Estructura de Ramas

- `main`: Código en producción
- `develop`: Rama de desarrollo activo
- `feature/*`: Nuevas características
- `fix/*`: Corrección de bugs
- `hotfix/*`: Correcciones urgentes en producción

### Conventional Commits

Usa el formato de [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Tipos de commits
feat:     Nueva característica
fix:      Corrección de bug
docs:     Cambios en documentación
style:    Formateo, espacios, etc (no afecta código)
refactor: Refactorización de código
test:     Agregar o corregir tests
chore:    Mantenimiento, dependencias

# Ejemplos
git commit -m "feat: Agregar filtro por categoría"
git commit -m "fix: Corregir error en modal de edición"
git commit -m "docs: Actualizar README con instrucciones de deploy"
```

---

## 🎨 Guía de Estilo

### JavaScript/React

```javascript
// ✅ Bueno
const VideoCard = ({ video, onEdit, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleEdit = () => {
    onEdit(video.id);
  };
  
  return <div className="card">...</div>;
};

// ❌ Malo
function VideoCard(props) {
  var hovered = false;
  
  return <div>...</div>
}
```

**Reglas:**
- Usa `const` y `let`, evita `var`
- Nombres descriptivos en camelCase
- Destructuring de props
- Funciones flecha para componentes funcionales
- React Hooks al inicio de los componentes

### CSS

```css
/* ✅ Bueno */
.video-card {
  display: flex;
  gap: var(--spacing-md);
  transition: transform var(--transition-base);
}

.video-card:hover {
  transform: translateY(-4px);
}

/* ❌ Malo */
.card {
  display: flex;
  gap: 16px;
  transition: all 0.3s;
}
```

**Reglas:**
- Usa variables CSS de `index.css`
- BEM naming: `.block__element--modifier`
- Mobile-first: `@media (min-width: ...)`
- Evita `!important`
- Agrupa propiedades: layout, box model, tipografía, visual

### Archivos y Carpetas

```
src/
  components/
    videoCard/
      VideoCard.jsx      # Componente principal
      VideoCard.css      # Estilos (o .module.css)
      VideoCard.test.js  # Tests (opcional)
      index.js           # Re-export (opcional)
```

**Reglas:**
- PascalCase para componentes React
- camelCase para utilidades y hooks
- kebab-case para archivos CSS
- Un componente por archivo
- Coloca componentes relacionados en carpetas

---

## 🔄 Proceso de Pull Request

### Antes de Abrir el PR

- [ ] El código sigue la guía de estilo
- [ ] Los tests pasan (`npm run test` si aplica)
- [ ] El linter no marca errores (`npm run lint`)
- [ ] El build funciona (`npm run build`)
- [ ] Actualizaste la documentación si es necesario
- [ ] Agregaste descripción clara del cambio

### Plantilla de PR

```markdown
## Descripción
Descripción breve del cambio

## Tipo de Cambio
- [ ] Bug fix (cambio que corrige un issue)
- [ ] Nueva característica (cambio que agrega funcionalidad)
- [ ] Breaking change (cambio que rompe compatibilidad)
- [ ] Documentación

## ¿Cómo se ha probado?
Describe las pruebas realizadas

## Screenshots (si aplica)
Agrega imágenes del antes/después

## Checklist
- [ ] Mi código sigue la guía de estilo
- [ ] He revisado mi propio código
- [ ] He comentado código complejo
- [ ] He actualizado la documentación
- [ ] Mis cambios no generan warnings
- [ ] He agregado tests que prueban mi fix/feature
```

### Revisión de Código

- Los PRs requieren al menos 1 aprobación
- Responde a comentarios de revisión
- Mantén el PR pequeño y enfocado
- Rebase si es necesario para mantener historial limpio

---

## 🐛 Reportar Bugs

### Plantilla de Bug Report

```markdown
**Descripción del Bug**
Descripción clara y concisa del bug

**Pasos para Reproducir**
1. Ir a '...'
2. Click en '...'
3. Scroll hasta '...'
4. Ver error

**Comportamiento Esperado**
Lo que debería ocurrir

**Screenshots**
Si aplica, agrega screenshots

**Entorno:**
 - OS: [ej. Windows 11]
 - Navegador: [ej. Chrome 120]
 - Versión: [ej. 2.0.0]

**Contexto Adicional**
Cualquier otra información relevante
```

---

## 💡 Sugerir Mejoras

### Plantilla de Feature Request

```markdown
**¿Tu solicitud está relacionada con un problema?**
Descripción clara del problema. Ej: Siempre me frustra cuando [...]

**Describe la solución que te gustaría**
Descripción clara de lo que quieres que ocurra

**Describe alternativas que has considerado**
Otras soluciones o características alternativas

**Contexto adicional**
Screenshots, mockups, ejemplos de otras apps
```

---

## 🏆 Reconocimientos

Los contribuidores serán:
- Listados en el README.md
- Mencionados en el CHANGELOG.md
- Reconocidos en releases

---

## 📞 ¿Preguntas?

Si tienes dudas sobre cómo contribuir:

- Revisa la [documentación](./README.md)
- Abre un [issue de discusión](https://github.com/s3codecL/challenge-one-aluraflix/issues)
- Contacta al mantenedor: [@s3codecL](https://github.com/s3codecL)

---

<div align="center">

¡Gracias por contribuir a AluraFlix! 🎬✨

</div>
