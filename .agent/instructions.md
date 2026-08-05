# 🌌 CBS-UNMSM: Instrucciones del Agente

Estas reglas deben seguirse estrictamente para mantener la integridad técnica y visual del proyecto CBS-UNMSM.

## 🎨 Identidad Visual "Cosmic-Tech"
- **Paleta**: Fondo `#030308`, Acentos `#7b2ff7` (Púrpura), `#00e5ff` (Cian), `#ffb300` (Amarillo).
- **Diseño**: Uso mandatorio de **Bento Grids 2.0**.
- **Componentes**: Glassmorphism (`backdrop-filter: blur(12px)`), bordes sutiles neón.
- **Tipografía**: Lora (Display/Serif) para rigor académico, Inter (Sans) para cuerpo técnico.

## 🛠️ Stack Tecnológico
- **Core**: Astro 4.x (Islands Architecture).
- **CSS**: Vanilla CSS puro. **NO usar TailwindCSS** a menos que se especifique una migración completa aprobada.
- **Contenidos**: MDX con validación de Zod en `src/content/config.ts`.

## 🧬 Rigor Científico & Bioinfo
- **Nomenclatura**: Seguir estándares IUPAC para secuencias biológicas.
- **Citas**: Formato académico consistente en artículos.
- **Validación**: Siempre verificar que los nuevos artículos no rompan los tipos de Zod.

## 🚀 Protocolo de Desarrollo
- **Mobile First**: Todos los componentes deben ser responsivos.
- **Rendimiento**: Priorizar el renderizado estático. Minimizar el uso de JavaScript en el cliente.
- **Atomicidad**: Clasificar componentes en `common` (globales), `ui` (elementos básicos) y `logic` (features complejas).
