# Cúcuta Come — Documento de visión y experiencia interactiva

> **Proyecto:** Cúcuta Come (cucutacome.com) · **Empresa:** ParaTouch
> **Autor:** Deyvid · **Versión:** 1.0 · **Fecha:** 21 de octubre de 2026
> **Estado:** Planeación. Ninguna decisión técnica de este documento es definitiva hasta aprobarla.

---

## 1. Propósito

Cúcuta Come es una plataforma web pública que reúne en un solo lugar la oferta gastronómica de Cúcuta, Norte de Santander. Las personas exploran restaurantes por **categoría de comida**, con el **barrio o sector** como filtro, conocen sus platos y pasan a pedir a domicilio o para recoger.

Cúcuta Come **no procesa pedidos ni pagos**. Cada restaurante tiene su página dentro de Cúcuta Come, y el botón **"Pedir"** redirige al panel de pedidos propio del negocio, construido por ParaTouch.

Más allá de un directorio, el objetivo es demostrar la capacidad de creación digital que existe en Cúcuta: una experiencia con identidad propia, que la gente quiera recorrer, compartir y visitar de nuevo.

**Slogan de trabajo:** *"El sabor de Cúcuta, en un solo lugar"*.

---

## 2. Concepto central: la mascota como guía

La mascota es el hilo conductor de la navegación, no un adorno. Acompaña a la persona por la página, reacciona a lo que hace y protagoniza las transiciones entre secciones.

### 2.1 Personaje

- Hamburguesa en estilo **3D chibi**, tierna y expresiva.
- **Ojos formados por las letras "C C"**, las iniciales de Cúcuta Come.
- Pan dorado miel con semillas blancas, carne asada semi-realista con marcas de parrilla y una capa de lechuga.
- Rostro, brazos y piernas casi negros.
- **Sin tonos naranja** en la mascota.

### 2.2 Comportamientos deseados

| # | Comportamiento | Dónde ocurre | Fase |
|---|---|---|---|
| 1 | **Vuela libremente por la pantalla**, con movimiento suave y orgánico. | Toda la página | **Fase 1** |
| 2 | **Se "come" el nombre de la página** de vez en cuando y lo devuelve. | Logo / encabezado | Fase 1 (si el tiempo lo permite) |
| 3 | **Salta a otra dimensión** al hacer clic en un restaurante: el salto es la transición de carga hacia la página del negocio. | Paso del listado a la página del restaurante | Fase 2 |
| 4 | **Vive en el encabezado** de la página del restaurante: camina, se sienta, observa y juega cerca de los botones del menú. | Página del restaurante | Fase 2 |
| 5 | **Mueve levemente los botones del menú** al jugar con ellos. | Encabezado | Fase 2 |

### 2.3 Regla de los botones del menú

El movimiento de los botones es **leve** (unos pocos píxeles o una ligera inclinación); nunca desordena el menú. Los botones **vuelven a su posición original**:

- cuando la mascota deja de interactuar con ellos, o
- en cuanto la persona toca o pasa el cursor por el encabezado.

Así la persona nunca tiene que perseguir un botón para poder usarlo.

---

## 3. Primera fase: página de presentación e invitación

Antes de la plataforma completa se lanza una página de presentación con dos objetivos:

1. **Invitar a los restaurantes** a unirse a Cúcuta Come, con un formulario de interés (nombre del negocio, barrio, categoría y contacto).
2. **Ganar seguidores** en redes sociales (Instagram) antes del lanzamiento.

Esta página debe comunicar desde el primer segundo la identidad, la personalidad y el potencial de la marca. Es la carta de presentación del proyecto ante restaurantes, público y prensa.

**Alcance de la mascota en esta fase:** solo el **vuelo por la pantalla** (comportamiento 1), y si el tiempo alcanza, la mascota comiéndose el nombre (comportamiento 2).

---

## 4. Modelo base de la mascota (fase 1)

En esta fase **no** se construye un personaje animado completo. Se trabaja con un **modelo base generado con imágenes en ChatGPT**, empezando por una sola acción: **volar**.

### 4.1 Enfoque

- **Una imagen principal** de la mascota volando, en PNG con fondo transparente.
- El movimiento lo produce el **código**: desplazamiento por la pantalla, flotación suave, inclinación según la dirección y rebote ligero.
- Opcionalmente, **2 a 4 cuadros** de aleteo o de movimiento de brazos para dar vida, siempre que salgan consistentes entre sí.

Mover una imagen fija con código es más confiable que depender de muchos cuadros: ChatGPT suele variar detalles entre imágenes, y en una animación cuadro a cuadro esas diferencias se notan como parpadeo.

### 4.2 Lineamientos para generar las imágenes en ChatGPT

- Fijar primero **una imagen oficial de referencia** (vista frontal) y adjuntarla en cada pedido nuevo.
- Repetir siempre la misma descripción del personaje (sección 2.1).
- Pedir **fondo transparente**, formato PNG y una resolución mínima de 1024 × 1024 px.
- Sin texto dentro de la imagen.

### 4.3 Entrega de archivos

Las imágenes se guardan en `src/assets/mascota/` con nombres descriptivos:

```
mascota-referencia.png   ← imagen oficial, vista frontal
mascota-volando.png      ← modelo base de la fase 1
mascota-volando-01.png   ← cuadros opcionales de aleteo
mascota-volando-02.png
```

Para la web se exportan además en **WebP**, que pesa menos y carga más rápido en el celular.

---

## 5. Herramientas y reparto del trabajo

### 5.1 Herramientas

| Herramienta | Uso |
|---|---|
| **VS Code** | Editor de código del proyecto. |
| **Obsidian** | Documentación y planeación; la bóveda es la carpeta `docs/` del proyecto. |
| **Git + GitHub** | Control de versiones y trabajo en equipo. |
| **ChatGPT Plus** | Generación de imágenes de la mascota, piezas gráficas y textos para redes sociales. |
| **Claude** | Desarrollo del código, arquitectura, animaciones e integración de las imágenes. |
| **DeepSeek** | Segunda opinión y revisión puntual de fragmentos de código. |
| **Firebase** | Base de datos provisional (formulario de restaurantes interesados). |
| **Cloudflare** | En evaluación: dominio, alojamiento y base de datos D1. |

### 5.2 Reglas del reparto

1. **Claude es el único que escribe en el repositorio de código.** Las sugerencias de otras herramientas se integran a través de él para mantener un solo estilo.
2. **ChatGPT entrega imágenes y textos**, nunca código del repositorio.
3. **DeepSeek solo recibe fragmentos sin datos sensibles:** nunca claves de Firebase o Cloudflare, archivos `.env` ni datos de clientes o restaurantes.
4. Todas las herramientas trabajan con el mismo contexto: el archivo `docs/CONTEXTO.md`.

---

## 6. Tecnologías de la experiencia interactiva

| Necesidad | Tecnología | Notas |
|---|---|---|
| Estructura y estilos | HTML, CSS y JavaScript sin frameworks | Coherente con el stack actual de ParaTouch. |
| Vuelo de la mascota | `requestAnimationFrame` + transformaciones CSS (`transform`) | Movimiento fluido sin recargar el navegador. |
| Animaciones cortas (comer el nombre, rebotes) | Web Animations API / animaciones CSS | Nativas del navegador, sin librerías. |
| Salto de dimensión entre páginas | **View Transitions API** | Hace que el cambio de página se vea como una transición continua. En navegadores sin soporte, la página carga normal. |
| Imágenes | PNG transparente (origen) y WebP (web) | Menor peso en celulares. |
| Logo final | SVG (vector) | Nítido en cualquier tamaño y animable por partes. |

---

## 7. Requisitos de experiencia y accesibilidad

- **Primero móvil:** la mayoría de las personas entrará desde el celular.
- **La mascota nunca bloquea un clic:** pasa por encima del contenido sin capturar toques (`pointer-events: none`).
- **Movimiento reducido:** si la persona tiene activada la opción del sistema de reducir movimiento (`prefers-reduced-motion`), la mascota queda quieta o con animación mínima.
- **Opción de pausar** a la mascota, visible y fácil de encontrar.
- **Rendimiento:** la animación no debe afectar la fluidez en celulares de gama media.
- **Botones reales:** enlaces y botones accesibles por teclado, áreas táctiles de al menos 44 px y contraste suficiente.
- Todos los textos de la página en **español**.

---

## 8. Fuera del alcance por ahora

Estas ideas hacen parte de la visión, pero no entran en la primera fase:

- Sección de juegos para niños.
- Mascotas propias para los restaurantes que fueron pilares del proyecto.
- Hoja completa de la mascota en todos los ángulos y sistema completo de animaciones.
- Personaje en 3D animado en tiempo real (requeriría modelado y esqueleto en Blender).
- Cuentas de usuario y procesamiento de pedidos.

---

## 9. Decisiones pendientes

| Decisión | Opciones |
|---|---|
| Base de datos definitiva | Firebase · Cloudflare D1 · MySQL |
| Alojamiento y dominio | Cloudflare · Firebase Hosting |
| Dominios a registrar | Solo .com · .com + .org |
| Paleta de colores final | Referencia actual: rojo y negro |
| Logo | Concepto con la mascota y el nombre, versión final en SVG |
| Versión final del slogan | "El sabor de Cúcuta, en un solo lugar" (de trabajo) |

---

## 10. Riesgos

| Riesgo | Mitigación |
|---|---|
| La mascota cambia de apariencia entre imágenes de ChatGPT. | Imagen oficial de referencia adjunta en cada pedido y movimiento hecho por código. |
| La animación vuelve lenta la página en celulares. | Una sola imagen optimizada en WebP y animación con `transform`. |
| La interacción distrae o frustra a quien quiere pedir. | Botones que vuelven a su sitio, mascota que no bloquea clics y opción de pausa. |
| El alcance crece antes de lanzar. | Respetar las fases de este documento y aprobar cada paso antes de construir. |
