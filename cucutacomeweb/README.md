# Cúcuta Come — web comercial

Sitio informativo para **restaurantes** que evalúan el sistema Cúcuta Come, desarrollado por **ParaTouch**. No es el directorio público de restaurantes ni el panel operativo del producto.

Publicado en **https://cucutacome.web.app** (Firebase Hosting).

## Páginas

| Ruta | Archivo | Contenido |
| --- | --- | --- |
| `index.html` | `index.html` | Inicio, exploración para clientes y soluciones para restaurantes. |
| `como-funciona.html` | `como-funciona.html` | Explicación de módulos, comandas y coordinación de domiciliarios propios. |
| `planes.html` | `planes.html` | Plan Esencial, Pro y Premium con cuadro comparativo. |
| `preguntas-frecuentes.html` | `preguntas-frecuentes.html` | Preguntas frecuentes para clientes y restaurantes. |
| `demo.html` | `demo.html` | Simulación local de pedidos (no envía nada). |

Sitio estático: HTML, CSS y JavaScript sin framework ni build.

## Estructura

```
assets/
  css/      styles.css (base) · narrative.css · improvements.css · multipage.css · refinements.css (móvil) · demo.css
  js/       main.js (navegación, animaciones, WhatsApp, video y chatbot con quiz) · demo.js (lógica de la demo guiada)
  img/      logo, favicon, capturas y mascota/ (webp optimizados)
  video/    cucuta-come-30s.mp4 y su póster
docs/       arquitectura, guía de contenido, estudio UX, visión y referencias de diseño
fuentes/    originales de la mascota e íconos (no se publican)
```

La demo guiada es una demostración local y no envía pedidos reales. Las fotos de la demo son opcionales: ver `assets/img/demo/LEEME.txt`.

## Desarrollo local

```bash
python -m http.server 8000
```

Abre http://localhost:8000. Las páginas se enlazan con su nombre de archivo `.html` para que las rutas funcionen también en hosting estático.

## Despliegue

Firebase Hosting, proyecto `cucutacome-39830`, sitio `cucutacome`. Solo la cuenta `cucutacomee@gmail.com` tiene acceso.

```bash
firebase deploy --only hosting --project cucutacome-39830 --account cucutacomee@gmail.com
```

`firebase.json` y `.firebaserc` no se versionan. Si faltan, crea `firebase.json` con:

```json
{
  "hosting": {
    "site": "cucutacome",
    "public": ".",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**", "codigo/**", "docs/**", "fuentes/**", "src_antiguo/**", "*.md"]
  }
}
```

Mantén las rutas con `.html` en los enlaces internos, incluso al pasar un plan seleccionado (por ejemplo, `index.html?plan=Pro#contacto`).

## Documentación

- `docs/ARCHITECTURE.md`: separación entre web comercial, producto y futuro directorio.
- `docs/CONTENT_GUIDELINES.md`: reglas editoriales y precisión comercial.
- `docs/ESTUDIO-UX-CAPTACION-MOVIL.md`: posicionamiento, validación y recomendaciones móviles.
- `docs/FILE_MAP.md`: mapa técnico y convenciones.
- `docs/CAMBIOS.md`: historial de cambios de contenido.
- `docs/CONTEXTO.md` y `docs/CUCUTA-COME-VISION.md`: contexto del negocio y visión del producto.

## Nota comercial

Desde octubre de 2026 la web **no publica precios** de los planes ni cargos por pedido: cada plan invita a consultar el precio por WhatsApp (320 313 8714). Cualquier cifra o compromiso nuevo requiere validación comercial antes de publicarse. La demo es una simulación y no envía pedidos.
