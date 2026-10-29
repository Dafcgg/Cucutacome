# Estudio de posicionamiento y experiencia móvil

**Fecha:** 24 de octubre de 2026  
**Alcance:** revisión documental y heurística de la web comercial estática. No incluye entrevistas, analítica de tráfico, pruebas con restaurantes ni validación comercial de precios y funcionalidades.

## Recomendación ejecutiva

Mantener esta web enfocada en el restaurante que evalúa Cúcuta Come. La entrada debe partir de una necesidad observable —pedidos dispersos y comandas difíciles de seguir—, explicar el resultado que ofrece el sistema y conducir a una demostración. La necesidad ya aparece al inicio de `index.html`; la demo local sirve como prueba del pedido online y el panel, y el contacto permite continuar por WhatsApp.

La oferta del restaurante debe incluir su perfil/menú en Cúcuta Come y el panel que recibe los pedidos online. Esa experiencia de comensales es parte del producto, aunque su despliegue público requiere confirmar URL, fecha de apertura y cobertura. No afirmar que el directorio ya está abierto antes de que eso ocurra. La página comercial puede explicar el recorrido incluido sin dirigir al visitante a un directorio que todavía no está publicado.

La propuesta combina herramienta operativa y presencia ante comensales. La web comercial puede captar restaurantes para esa oferta integrada, separando esa conversión del recorrido de los consumidores. Antes del lanzamiento público hay que confirmar fase, URL, cobertura inicial de restaurantes y cómo se gestionará el tráfico hacia sus menús.

## Recorrido recomendado

1. **Restaurante:** necesidad concreta → beneficio operativo → demostración (muestra local o agendada) → alcance y precio confirmado → contacto.
2. **Comensal, cuando la experiencia pública esté disponible:** explorar por categoría/sector → revisar perfil y menú → enviar el pedido al panel del restaurante. El cargo de $500 COP por pedido online lo paga el consumidor final.
3. **Medición:** mantener recorridos y eventos separados. No contar una visita al demo como una solicitud comercial ni una visita al directorio como un lead de restaurante.

La página no debería competir consigo misma con varios botones principales. En la portada, priorizar “Agendar demostración” o una acción equivalente; dejar la demo como alternativa de menor compromiso. En páginas de planes, cada botón debe conservar el plan elegido al llevar al contacto. WhatsApp debe abrirse solo por una acción explícita del usuario, con el mensaje listo para revisar y enviar.

## Hallazgos de la revisión local

- La página ya abre con una escena del problema y presenta una demo; el público y el producto se entienden como B2B en la documentación comercial.
- La navegación global, los enlaces de contacto, las tarjetas de plan y el pie repiten destinos deliberadamente. En móvil conviene reservar el mayor peso visual para una acción principal y evitar que controles flotantes cubran contenido.
- Las tablas de primer mes y comparación tenían anchos mínimos de 460/560 px dentro de un contenedor desplazable. En teléfonos las columnas quedaban fuera de la vista sin una señal suficiente. Se adaptaron a filas apiladas con rótulos por plan/concepto y se conserva todo el contenido.
- Los ejemplos gráficos de la sección del problema se ocultaban por completo bajo 720 px. Se mantienen visibles y se ajustan al ancho disponible.
- El formulario solo prepara un mensaje: no guarda ni envía datos. Antes abría una pestaña de WhatsApp automáticamente y además mostraba un botón para volver a abrirlo. Ahora la apertura queda en manos del usuario y el texto explica qué ocurrirá.
- El video se reproduce en el propio control HTML5. El enlace que aparece como alternativa al contenido del video apunta al archivo MP4; se rotula como descarga para no parecer una navegación inesperada.
- El usuario confirmó que el consumidor paga el cargo de $500 COP por pedido online. Los precios de instalación/mensualidad, condiciones de pago, disponibilidad efectiva de las funciones de cada plan y fecha/cobertura del directorio aún requieren confirmación comercial y técnica.

## Características que deben definir los planes

Esta es una propuesta para revisar con el producto real; no convierte capacidades no verificadas en promesas comerciales.

**Base para todos los planes:**
- Perfil del restaurante en Cúcuta Come, con datos de contacto, ubicación/sector, horario y estado de atención.
- Menú organizado por categorías, precios y disponibilidad; el cliente puede seleccionar productos, revisar el pedido y enviarlo.
- Mostrar el cargo de $500 COP antes de confirmar, indicando que lo paga el consumidor final.
- Panel usable desde celular/tablet donde el negocio recibe el detalle del pedido y puede gestionarlo; definir exactamente los estados, acciones, notificación al restaurante y confirmación al cliente.
- Flujo inicial de recogida en el negocio. No ofrecer asignación ni seguimiento de domiciliarios hasta que exista esa etapa.

**Diferenciales que deben verificarse por plan:**
- **Esencial:** flujo de pedido y panel, comandas de salón/caja, carga inicial del menú, capacitación y soporte; delimitar horarios/cantidad de productos, usuarios y alcance del soporte.
- **Pro:** lo anterior más recetas, inventario de insumos, costo y margen por producto; verificar cómo se registran compras, desperdicio, ajustes y descuentos de inventario por venta.
- **Premium:** personalización e integraciones con alcance y precio cotizados por escrito. No anunciar pasarela de pagos como incluida ni operativa hasta escoger proveedor, acordar quién recibe cada pago y probar reembolsos/cancelaciones.
- **Etapa futura, no parte de los planes iniciales:** gestión del domicilio, asignación de repartidor, seguimiento y red de domiciliarios.

**Decisiones transaccionales pendientes:** definir si los $500 se agregan al total que paga el consumidor, cómo se recaudan/liquidan si no hay pasarela, qué ocurre si el pedido se cancela y cómo se informa el cargo antes de confirmar. La tarifa está definida por el usuario; su mecanismo de cobro aún no.

## Validación pendiente con usuarios

La revisión de código no demuestra disposición de pago ni demanda local para la oferta integrada de sistema, perfil y menú online. Para validarla:

- Entrevistar de 5 a 8 restaurantes de distintos sectores y tamaños, empezando por cómo reciben, organizan y entregan pedidos; no presentar primero una solución para evitar inducir la respuesta.
- Mostrar el recorrido completo: encontrar el restaurante en Cúcuta Come, revisar menú y enviar pedido al panel. Preguntar si ese beneficio influye en la decisión de contratar y qué necesita el negocio para operar el menú.
- Probar la web desde teléfonos con tareas concretas: encontrar qué incluye un plan, comparar el primer mes, probar la demo, solicitar contacto y volver atrás sin perder contexto.
- Registrar por separado visitas a demo, inicio y finalización del formulario, clic voluntario de WhatsApp, consultas recibidas y, cuando exista, visitas y clics de salida del directorio.
- Decidir el mensaje según solicitudes calificadas y cierres, no solo clics. No hay línea base de tráfico en el repositorio, por lo que todavía no corresponde declarar ganador a un CTA.

## Criterios móviles para esta web

- Conservar en el HTML móvil la misma información esencial de escritorio; resolver la falta de espacio mediante reflujo, etiquetas y apilamiento, no eliminando contenido.
- Priorizar anchos fluidos, cuadrículas que puedan reducirse y contenido sin desplazamiento horizontal de página. Las tablas de datos pueden reorganizarse si se mantienen sus encabezados y cada valor queda identificado.
- Mantener controles cómodos para toque. WCAG 2.2 AA fija 24 × 24 CSS px como mínimo con excepciones; la visión del proyecto adopta el objetivo más generoso de 44 px para controles importantes.
- En diálogos, trasladar el foco al abrir, devolverlo al disparador al cerrar y permitir Escape; no usar un modal si un reproductor en línea resuelve la tarea.
- Probar en anchos estrechos (320, 360 y 390 CSS px), zoom de texto, teclado y movimiento reducido. La revisión actual es estática: falta comprobar visualmente esos estados en dispositivos/navegadores reales.

## Fuentes

- [Google Search Central: Mobile site and mobile-first indexing best practices](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing). Recomienda diseño responsive y conservar contenido principal equivalente en móvil; mover información a controles compactos es válido si no se pierde.
- [W3C: WCAG 2.2, Target Size (Minimum), criterio 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html). Define el mínimo de 24 × 24 CSS px y excepciones de separación, línea, equivalencia y controles del navegador.
- [W3C WAI: ARIA Authoring Practices, patrón de diálogo modal](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/). Describe foco inicial, confinamiento de tabulación, cierre con Escape y devolución del foco.
- [web.dev: Learn Responsive Design](https://web.dev/learn/design/). Curso técnico sobre consultas de medios, macro/micro layouts, tipografía, accesibilidad e interacción adaptable.

## Decisión que debe confirmarse

La definición de producto queda establecida: el restaurante inscrito debe tener perfil/menú online en Cúcuta Come y recibir los pedidos en su panel; el cargo de $500 COP por pedido lo paga el consumidor final. Falta confirmar la fecha/URL/cobertura pública y validar qué funciones operativas estarán listas en cada plan. La logística de domicilios queda para una etapa posterior.