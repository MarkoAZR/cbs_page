---
name: cbs_astro_expert
description: Habilidad especializada en mejores prácticas de Astro 4, optimización de performance y arquitectura fullstack para el proyecto CBS.
---

# 🚀 CBS Astro Expert Skill

Esta habilidad guía al agente en la implementación de patrones avanzados de Astro 4 y desarrollo web de alto rendimiento.

## 📚 Mejores Prácticas de Astro
- **Zero JS by Default**: Solo añadir componentes interactivos cuando sea estrictamente necesario.
- **Astro Images**: Utilizar siempre el componente `Image` de `astro:assets` para optimización automática.
- **View Transitions**: Mantener la configuración de `ViewTransitions` en el Layout central para una experiencia tipo SPA.
- **Content Collections**: Centralizar toda la lógica de datos en `src/content`. Usar `getCollection` de forma concurrente cuando sea posible.

## 🏗️ Arquitectura de Componentes
- **Slots**: Aprovechar al máximo el uso de `<slot />` para crear layouts flexibles (como `ArticleLayout`).
- **Props**: Documentar todas las interfaces de TypeScript para componentes.
- **Environment Variables**: Usar `import.meta.env` para manejar URLs bases y despliegues federados.

## 🔍 SEO & Web Vitals
- **Lighthouse**: Mantener un score de 100/100. Evitar blocking resources.
- **Metadata**: Generar dinámicamente títulos y meta-descripciones para cada slug de contenido.
- **OpenGraph**: Preparar la estructura para imágenes sociales dinámicas.

## 🛠️ Scripts Útiles
- `npm run check`: Ejecutar antes de cada push para evitar errores de tipo en el despliegue.
- `npm run build`: Validar que las rutas dinámicas se generen correctamente.
