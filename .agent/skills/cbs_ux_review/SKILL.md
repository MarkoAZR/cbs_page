---
name: cbs_ux_review
description: Protocolo de auditoría visual y revisión de diseño UI/UX para asegurar la consistencia de la estética Cosmic-Tech y el Bento Grid.
---

# 👁️ CBS UX Review Protocol

Esta habilidad establece el estándar de revisión visual tras cualquier modificación en componentes CSS o layouts.

## 🛡️ Protocolo de Revisión Visual
1. **Captura & Observación**: Tras modificar un estilo, el agente debe usar la herramienta de navegador para visualizar la página en modo desktop y mobile.
2. **Chequeo Bento**: 
   - Verificar que no haya desbordamiento de texto en las tarjetas.
   - Asegurar que los gaps entre items sean consistentes (2rem por defecto).
   - Validar el escalado de la grilla en tablets.
3. **Contraste & Accesibilidad**:
   - Verificar que el texto sea legible contra el fondo oscuro.
   - Asegurar que los efectos de hover no sean demasiado intrusivos.
4. **Resplandor (Glow)**: Los efectos de neón en el Navbar y Hero deben ser sutiles y no impactar el rendimiento.

## 📏 Estándares UI/UX específicos
- **Glassmorphism**: Verificar que el `backdrop-filter` no se rompa en navegadores antiguos (usar prefijos si es necesario).
- **Animaciones**: Las animaciones `animate-in` deben ser discretas y no durar más de 0.6s.
- **Micro-interacciones**: Los botones deben tener transiciones suaves (`cubic-bezier(0.4, 0, 0.2, 1)`).

## ⚡ Verificación Final
Antes de dar por terminada una tarea de diseño, se debe reportar el estado visual comparando el resultado final con los requerimientos originales de Marko.
