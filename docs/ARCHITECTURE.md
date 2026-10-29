# Arquitectura de información — Cúcuta Come

## Marcas y públicos
- **ParaTouch**: empresa desarrolladora.
- **Cúcuta Come**: producto/sistema que usan los restaurantes.
- **Experiencia pública Cúcuta Come**: perfil y menú online de los restaurantes inscritos, desde donde los consumidores pueden enviar pedidos al panel del negocio. Es parte de la oferta base de los planes; su despliegue público requiere una fase y cobertura confirmadas.
- Este repositorio contiene la web comercial y una demo local. No implementa el sistema operacional ni el directorio público.

## Navegación
- `index.html`: problema real, propuesta de valor, contacto.
- `como-funciona.html`: comandas, perfil/menú, recepción de pedidos online, inventario por plan y logística de domicilios futura.
- `planes.html`: planes y comparación exclusivamente; tarifas sujetas a confirmación.
- `preguntas-frecuentes.html`: dudas frecuentes.
- `demo.html`: ejemplo interactivo local; no envía pedidos ni cobra.

## Límites de afirmaciones
- No afirmar que el directorio público ya está abierto hasta confirmar su fecha, URL y cobertura.
- No anunciar convenio con transportadoras ni pasarela operativa sin validación.
- El cargo de $500 COP por pedido online lo paga el consumidor final; no se descuenta del valor del restaurante. No describirlo como comisión pagada por el restaurante.
- La logística y coordinación de domiciliarios son una etapa posterior; no presentarlas como función disponible de los planes iniciales.
- No exponer arquitectura interna, mensajes de IA, costos Firebase ni estados técnicos del despliegue en textos comerciales.
- Los precios de instalación/mensualidad y las condiciones finales de cada plan aún deben confirmarse antes de publicarse como compromiso contractual.
- Las descripciones de funcionalidades provienen de la versión previa de la web y **requieren validación contra el software real** antes de publicidad.

## Próximo proyecto independiente
Cuando se construya el directorio B2C de cucutacome.com, usar una web y estructura de despliegue separadas. Decidir entonces si la web B2B vivirá en subdominio `negocios.cucutacome.com` o en otro dominio, sin cambiar rutas antes de una decisión comercial y SEO.
