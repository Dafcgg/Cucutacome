# Informe de auditoría y correcciones — Cúcuta Come

## 1. Rutas y navegación

- Los enlaces internos de navegación, CTA y pie usan rutas relativas con extensión `.html`; los enlaces con plan conservan el archivo, por ejemplo `index.html?plan=Pro#contacto`.
- La barra superior de las cinco páginas tiene Inicio, Explorar restaurantes, Para restaurantes, Cómo funciona (con desplegable), Planes, Preguntas frecuentes y el botón Agendar demo. No incluye el acceso Demo.
- Se amplió el espacio del header, se restauró el CTA rojo con círculo claro y flecha roja, y se añadió una animación de pulso al acento del logo al pasar el cursor.
- El header cápsula usa glassmorphism y refuerza el fondo y la sombra al desplazarse; el logo conserva su animación de mordisco sin mascota flotante.
- Los pies de página enlazan las secciones de clientes/restaurantes, preguntas, Demo y Contacto según corresponda.
- La auditoría local revisó los destinos de los enlaces y los fragmentos de las cinco páginas; no se encontraron rutas locales ni fragmentos inexistentes.
- Se abrieron directamente `index.html`, `como-funciona.html`, `planes.html`, `preguntas-frecuentes.html` y `demo.html` en el navegador local.

## 2. Contenido comercial

- El Hero de Inicio presenta el titular **«Descubre restaurantes. Haz tu pedido. Gestiona tu negocio.»**, dos CTA hacia Clientes y Restaurantes, y una lista de tres beneficios.
- El Hero usa un fondo oscuro cálido y un mockup de iPhone con la vista de la app, distintivo **0% comisión por venta** y notificación de pedido listo. El botón de la mini vista previa controla una barra de progreso simulada de 30 segundos.
- La sección de video presenta las características del recorrido junto a un video vertical en un marco de iPhone estilizado con Isla Dinámica, controles nativos para pausa, reproducción, volumen y pantalla completa, barra Home y el pie «Cúcuta Come en 30 segundos». El video cubre la pantalla con `object-fit: cover`. JavaScript fuerza el silencio e inicia la reproducción cuando el teléfono entra al viewport, la pausa al salir y respeta movimiento reducido.
- La sección «Tu menú tiene un enlace. El pedido llega a tu panel» de `como-funciona.html` también usa el marco iPhone, la Isla Dinámica, la barra Home y controles nativos, con el mismo MP4 y poster existentes. El reproductor mantiene autoplay silencioso, bucle y reproducción inline.
- La sección `#domicilios` de `como-funciona.html` presenta un diseño oscuro de alto contraste, la mascota oficial `delivery.webp` en el encabezado y un flujo neón serpenteante 01→06; en móvil los seis pasos se ordenan verticalmente sobre una línea continua. Los conectores y la mascota respetan `prefers-reduced-motion`.
- La sección de domiciliarios explica que cada restaurante administra y coordina su propio equipo desde la plataforma; el distintivo de la mascota indica «GESTIÓN DEL RESTAURANTE».
- La pantalla del smartphone demo deja el indicador Home debajo del área de controles para evitar cubrirlos; usa los recursos multimedia existentes (`assets/video/cucuta-come-30s.mp4` y `assets/video/poster.webp`). El MP4 se verificó reproduciéndose desde servidor local.
- La sección «Conoce la solución» ahora tiene fondo oscuro, mensaje y CTA en una columna, y tres tarjetas con los pasos del flujo en la otra. Incluye la mascota, enlaces relativos a Cómo funciona y Planes, diseño móvil y respeto por movimiento reducido.
- La sección `#contacto` se reorganizó en dos columnas: pasos y canales directos de WhatsApp/correo a la izquierda, formulario etiquetado y resaltado en una tarjeta a la derecha. Se retiró la imagen de la mascota de esta sección y se conservaron las validaciones y el flujo de preparación del mensaje de WhatsApp.
- La sección de problemas se reincorporó inmediatamente después del Hero, con la mascota 3D preocupada, alertas, cuatro tarjetas comparativas y cierre de impacto.
- La sección «Pedidos en orden» presenta una comanda ilustrativa interactiva, beneficios para cocina y panel, y aclara que cada restaurante coordina a sus propios domiciliarios.
- La sección `#clientes` presenta los pasos para descubrir restaurantes, consultar menús y pedir online en una columna; en la otra, una tarjeta interactiva que filtra restaurantes de muestra por Caobos, Atalaya, San Luis y La Libertad. Las pestañas admiten teclado y las tarjetas abren la demo del menú. `#restaurantes` explica el panel, las comandas en cocina y la coordinación operativa.
- Preguntas frecuentes incluye respuestas sobre cómo pedir, cómo funciona la plataforma, quién gestiona las entregas y cómo vincular un restaurante.
- La modalidad de domicilio quedó habilitada en la simulación de la demo.

## 3. Ajustes visuales y móviles

- El banner `.ig-band` tiene separación inferior de 3.5–4 rem; en móvil se apila y el botón ocupa el ancho disponible. La demo recibió también el banner y pie de página.
- `html` y `body` ocultan desbordamiento horizontal. Los enlaces de menú y controles interactivos tienen áreas táctiles de al menos 44 × 44 px.
- El Hero apila texto, CTAs, beneficios e iPhone en móvil, y presenta texto y teléfono en columnas en escritorio; no presenta desbordamiento horizontal en anchos de 320 a 1440 px.
- Los botones flotantes de asistencia se ocultan mientras el Hero está visible para evitar que tapen la notificación del teléfono o el contenido principal; reaparecen al salir de la sección.

## 4. Animaciones e interacciones

- Scooter: vibración de motor (`scooterEngine`), flotación con sombra animada (`scooterFloat`) e inclinación/desplazamiento al hover.
- Mascotas estáticas: respiración y flotación orgánica (`mascotBreath`); mascota sorprendida: entrada con rebote (`mascotPop`) y flotación posterior.
- `IntersectionObserver` revela elementos marcados con `data-reveal` o `.scroll-reveal`, con alternativa visible cuando no hay soporte y respeto por movimiento reducido.
- Los botones primarios reciben un brillo diagonal, elevación y desplazamiento de flecha.
- El acordeón FAQ se hidrata en JavaScript y anima sus respuestas mediante `max-height`; se verificó la apertura y el cierre.
- El asistente flotante se añadió a las cinco páginas con la mascota oficial, aviso inicial, preguntas rápidas, respuestas por tema y entrada de texto; admite cerrar con Escape y respeta movimiento reducido. Los mensajes se insertan como texto para evitar interpretar la entrada como HTML.
- El chatbot incorpora un diagnóstico de tres preguntas (canal actual, gestión de domiciliarios y número de sedes) con recomendación orientativa de Esencial para una sede y Premium para varias sedes, sujeto a validar el alcance; incluye un enlace a WhatsApp con las respuestas y sin publicar precios.

## 5. Checklist de QA

- [x] Los cinco archivos `.html` cargan directamente en la prueba local.
- [x] Los cinco headers y sus menús móviles se comprobaron a 390 px; no hay desbordamiento horizontal en ninguno de los cinco a 320 px. Inicio también se comprobó a 1280 px.
- [x] Enlaces internos revisados; destinos y fragmentos válidos.
- [x] Navegación principal y pies revisados para las rutas requeridas.
- [x] Demo interactiva probada con modalidad **Domicilio**.
- [x] Acordeón FAQ probado al abrir y cerrar.
- [x] Sin scroll horizontal entre 320 y 414 px; también se revisaron 768, 1024 y 1440 px.
- [x] Sección de video validada a 320, 375, 414, 576, 768, 991 y 1280 px: sin desbordamiento horizontal, controles nativos presentes y área Home separada de la pantalla; marco iPhone responsivo e Isla Dinámica por encima del video.
- [x] El video de `como-funciona.html` se validó en los mismos anchos: MP4 y poster cargados, controles/autoplay/bucle/silencio/playsinline activos, barra Home separada de la pantalla y sin scroll horizontal.
- [x] La ruta de domicilios se validó a 320, 375, 414, 768, 920, 991, 1024 y 1280 px: sin overflow, mascota cargada, seis pasos en orden, conectores del recorrido serpenteante en escritorio y línea vertical continua en móvil; las animaciones se desactivan con `prefers-reduced-motion: reduce`.
- [x] Autoplay comprobado en servidor local: MP4 de 30 s cargado, reproducción avanza al estar visible, pausa al salir y reanudación al regresar. Sin movimiento reducido el autoplay, bucle, silencio y reproducción inline están activos; con movimiento reducido queda pausado.
- [x] Sección «Conoce la solución» validada a 320, 375, 414, 768, 991 y 1280 px: sin desbordamiento horizontal, tres tarjetas visibles, mascota cargada y CTA de al menos 48 px de alto. Con `prefers-reduced-motion: reduce`, se detienen sus animaciones decorativas.
- [x] Contacto validado a 320, 375, 414, 768, 991 y 1280 px: no hay desbordamiento ni mascota en la sección; canales y formulario se adaptan al ancho disponible.
- [x] El Hero con iPhone es la primera sección de contenido; la sección de problemas sigue inmediatamente después.
- [x] Los cinco headers usan navegación cápsula glassmorphism y no incluyen la mascota emergente del logo.
- [x] La sección de problemas y la comanda ilustrativa se validaron a 320, 390, 768, 1024 y 1440 px: sin desbordamiento horizontal, mascota oficial cargada, cuatro tarjetas y controles táctiles de al menos 44 px.
- [x] La comanda ilustrativa permite aceptar el pedido y expandir su detalle; los accesos flotantes se ocultan durante la sección de control para no cubrir el contenido.
- [x] Chatbot presente y funcional en las cinco páginas: carga de la mascota oficial, apertura/cierre con estado accesible, respuesta rápida de domicilios y entrada de texto para planes y restaurantes.
- [x] Chatbot validado en móvil: panel dentro del viewport a 320 y 375 px, sin desbordamiento horizontal y separado del acceso flotante de WhatsApp.
- [x] Quiz del chatbot presente en las cinco páginas y probado desde el botón rápido y desde una consulta escrita; recorridos de una sede y varias sedes completados, con enlace a WhatsApp que precarga las tres respuestas y la recomendación. Opciones accesibles y sin overflow en móvil; se respeta movimiento reducido.
- [x] Formulario de contacto probado: campos obligatorios muestran errores accesibles; una solicitud válida prepara el enlace de WhatsApp y la opción «Enviar otra solicitud» restablece el formulario. No se envió información.
- [x] Sin solapamiento del scooter con el ticket o sus acciones en los tamaños probados.
- [x] **0 errores JavaScript registrados en la consola del navegador durante la prueba local.**

La verificación se realizó localmente con las rutas directas `.html`; no se hizo un despliegue ni una prueba del hosting remoto.

## 6. Actualización del banner de Instagram y contacto

- Se aumentó el espacio del banner de Instagram a `4.5rem` arriba y `3.5rem` abajo para separarlo de las secciones vecinas y del footer.
- Se unificó el diseño del banner en las cinco páginas con tarjeta rosa suave, icono SVG de Instagram en degradado, texto y botón de seguimiento. En móviles, la tarjeta se apila y el botón ocupa el ancho disponible.
- En los cinco pies de página, correo e Instagram ahora aparecen en cápsulas independientes con iconos SVG; el enlace a Preguntas frecuentes permanece en la lista de navegación.
- El botón y las cápsulas mantienen un área interactiva mínima de 44 px de alto. Los enlaces externos de Instagram conservan `target="_blank"` y `rel="noopener"`.

## 7. Rediseño de la demo interactiva

- Se reorganizó `demo.html` en una cabecera con progreso, dos paneles paralelos para cliente y restaurante, y una tarjeta CTA oscura.
- Se conservaron los iconos vectoriales originales y las etiquetas de categoría; se mantuvieron los identificadores y atributos de los controles necesarios para agregar productos, elegir modalidad, enviar la comanda, avanzar su estado y reiniciar el recorrido.
- `main.js` sincroniza el paso activo con su estado accesible `aria-current`; `demo.js` emite los cambios de etapa desde la simulación existente.
- Se añadieron estilos responsive, transiciones de tarjetas y estados animados para los pasos y la comanda, con alternativa para `prefers-reduced-motion`.
- La secuencia de pedido, gestión de cocina, finalización y reinicio se probó en navegador. Se revisó overflow a 320, 375, 414, 768, 1024 y 1440 px; no se detectó desbordamiento horizontal en la sección de demo.

## 8. Refinamiento visual de Planes

- Se adaptó el tratamiento visual del bloque de tarifas a la estructura ya existente en `planes.html`, sin reemplazar su contenido ni modificar los iconos SVG de las listas.
- Se mejoraron la jerarquía del encabezado, las tarjetas de planes, el destacado Pro, el aviso de claridad de cargos, las opciones de recomendación y la llamada a consultar precios.
- Se mantuvo la disposición de tres tarjetas en escritorio y una columna en tablet/móvil, con transiciones suaves y respeto por `prefers-reduced-motion`.
- La página se verificó a 320, 375, 414, 768, 920, 1024 y 1440 px; no se detectó desbordamiento horizontal y se conservaron los 15 iconos SVG de características.

## 9. Animaciones de botones flotantes

- Se actualizaron los estilos del tooltip y del launcher del chatbot, y se añadieron auras animadas al botón actual de WhatsApp (`.wa-fab`) sin cambiar su marcado ni su posición.
- `main.js` aplica movimientos de atención breves a intervalos, solo cuando la pestaña está visible y el chatbot cerrado; las preferencias de movimiento reducido desactivan las animaciones y los efectos periódicos.
- Los efectos decorativos usan principalmente `transform` y `opacity`, y los botones continúan siendo interactivos.

## 10. Logo interactivo del encabezado

- Se unificó el logo interactivo en las cinco páginas: «Cúcuta Come» enlaza a `index.html`, y la mascota con su mensaje decorativo aparece al pasar el cursor o al enfocar el enlace con teclado.
- Al activar el logo se anima el mordisco de la «o» y aparece la mascota; desde Inicio se evita recargar la página y se vuelve suavemente al inicio. Se respeta `prefers-reduced-motion`.
- La mascota emergente se posiciona debajo del logo para no tapar el nombre de marca; en móvil se oculta el globo de texto y se reduce la imagen.
- Se verificó el marcado del logo en las cinco páginas, su aparición al pasar el cursor y al enfocar con teclado, y el clic en Inicio y desde la demo. A 320 px, `documentElement.scrollWidth` coincide con `documentElement.clientWidth`, sin overflow horizontal real.

## 11. Header flotante tipo cápsula

- Los cinco encabezados usan el mismo contenedor fijo en forma de cápsula, con vidrio translúcido, desenfoque y sombra; al desplazarse, la cápsula refuerza el fondo y la sombra sin ocultarse.
- Se conservaron las rutas, el estado de página activa, el desplegable del sistema y la CTA roja «Agendar demostración». En pantallas de hasta 1100 px, los enlaces se alojan en un menú desplegable accesible con botón y estado `aria-expanded`; incluye las opciones del submenú y permite desplazarse si no caben en la pantalla.
- La navegación principal gestiona el estado de scroll en `main.js`; `scroll-padding-top` y el espacio superior compensan el header fijo para no tapar el contenido ni los destinos de los enlaces internos.
- Se verificó el header en las cinco páginas: posición fija, apertura/cierre del menú móvil, enlaces del submenú, CTA y ausencia de desbordamiento horizontal en móvil. También se revisaron las anchuras de escritorio, incluida la transición entre el menú expandido y el botón compacto.

## 12. Optimización global e idioma

- Se reemplazó el favicon PNG de las cinco páginas por un SVG integrado con las iniciales «CC» y fondo rojo; se conserva el icono táctil PNG.
- El selector `ES | EN` traduce los encabezados y descripciones principales de las cinco páginas sin recargar, actualiza el atributo `lang` y está disponible también junto al menú hamburguesa en móvil.
- Se conservó el cierre del menú al seleccionar un enlace o tocar fuera; el drawer móvil utiliza fondo oscuro translúcido. Se añadió el botón accesible «Volver arriba», con desplazamiento suave desde 400 px y alternativa para movimiento reducido.
- Se añadió el efecto ripple a CTA principales, animación escalonada y flotación del mockup del Hero, y un shimmer breve mientras se inicializa el espacio de la demo.
- La validación del formulario ahora reevalúa los campos requeridos al escribir, anuncia los errores, anima el estado inválido y mantiene el panel de éxito y el enlace para abrir WhatsApp.
- Los pies de las cinco páginas ofrecen ahora «Agendar demostración por WhatsApp» con un mensaje inicial de agenda. Se añadieron `loading="lazy"` y `decoding="async"` a los avatares de mascota del chatbot; los controles conservan objetivos táctiles de al menos 44 × 44 px.
- QA: se alternó el idioma en las cinco páginas; se probó el drawer oscuro y su cierre al tocar fuera; el botón de regreso al inicio y el formulario (error, validación en vivo y éxito); no hubo overflow horizontal en 320, 390, 414, 768, 991, 1024 ni 1440 px.
- No se añadieron testimonios ni fotografías de propietarios: el repositorio no contiene reseñas verificables ni imágenes autorizadas para atribuirlas a restaurantes reales. Para publicar esa sección se requiere contenido aprobado por los negocios.
