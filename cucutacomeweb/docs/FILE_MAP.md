# Mapa de archivos y criterios de mantenimiento

- `index.html`: landing breve, narrativa y contacto.
- `como-funciona.html`: explicación agrupada de cada módulo.
- `planes.html`: ofertas y cuadro comparativo.
- `preguntas-frecuentes.html`: FAQ.
- `demo.html`: simulación independiente, enlazada desde Cómo funciona.
- `assets/css/styles.css`: estilos base y componentes heredados.
- `assets/css/narrative.css`: estilos narrativos de secciones existentes.
- `assets/css/improvements.css`: ajustes de la versión anterior.
- `assets/css/demo.css`: demo.
- `assets/js/main.js`: navegación, animación, WhatsApp, vídeo, cálculos heredados.
- `assets/js/demo.js`: lógica local de ejemplo.
- `assets/img/`: imágenes y logotipo.
- `assets/video/`: vídeo de producto.

## Convenciones
- Nombres de archivos en inglés o slugs de rutas SEO en español; mantener nombres legibles.
- Evitar nuevas reglas CSS duplicadas: al refactorizar, separar tokens, layout, componentes y estilos por página.
- Los HTML publicables son documentos estáticos independientes, para funcionar en Vercel sin configuración adicional.
- Header/footer están repetidos por compatibilidad estática; si se implementa un build step futuro, centralizarlos en plantillas sin sacrificar SEO ni accesibilidad.
- Evitar cambiar librerías/framework hasta que exista un motivo concreto; la cantidad de páginas no obliga a React/Next.js.
