# Cúcuta Come — Contexto del proyecto

Resumen de decisiones ya tomadas, para pegar al inicio de una conversación con cualquier herramienta. La fuente oficial es [CUCUTA-COME-VISION.md](CUCUTA-COME-VISION.md).

## Qué es
- Cúcuta Come ofrece a cada restaurante inscrito un perfil y menú online dentro de la experiencia pública, además del panel que recibe los pedidos de sus clientes.
- Los comensales pueden explorar restaurantes por categoría y sector, consultar el menú y enviar un pedido al panel del negocio. El cargo de $500 COP por pedido online lo paga el consumidor final.
- La web pública requiere confirmar fecha, URL y cobertura de lanzamiento. La coordinación de repartidores y la logística de domicilios quedan para una etapa posterior; el flujo inicial debe ofrecer una modalidad disponible como recoger en el local.
- El producto no procesa pagos de los platos. La forma de recaudar y liquidar el cargo de $500 debe definirse junto con el flujo de pago del pedido.

## Stack
- HTML, CSS y JavaScript sin frameworks, salvo aprobación.
- Base de datos **sin decidir** y sin proyecto creado: Firebase (provisional), Cloudflare D1 o MySQL en evaluación. No construir nada que ate a una sola opción. Por ahora todo es local y la Fase 1 no guarda datos: los restaurantes interesados escriben por WhatsApp o correo.

## Idioma
- Textos visibles al usuario: español de Colombia.
- Código y comentarios: inglés.

## Marca
- Slogan de trabajo: "El sabor de Cúcuta, en un solo lugar".
- Mascota: hamburguesa 3D chibi. Ojos formados por las letras "C C", pan dorado miel con semillas blancas, carne asada semi-realista, rostro y extremidades casi negros.
- Las imágenes de la mascota se generan fuera del proyecto (ChatGPT) y llegan como PNG transparentes a `src/assets/mascota/`. Nunca se dibuja ni se regenera la mascota en código; solo se integra y se anima.

## Reparto del trabajo
- **Claude:** todo el código, la arquitectura, las animaciones y la integración de imágenes. Es el único que escribe en el repositorio.
- **ChatGPT:** imágenes de la mascota y textos para redes. No entrega código.
- **DeepSeek:** revisiones puntuales de fragmentos. Nunca recibe claves, archivos `.env` ni datos de clientes o restaurantes.

## Principios de interfaz
- Primero móvil.
- Accesible: botones y enlaces reales, áreas táctiles de 44 px, contraste mínimo 4.5:1, respeto a `prefers-reduced-motion`.
- La mascota nunca bloquea clics (`pointer-events: none`) y tiene opción de pausa.

## Fuera de alcance por ahora
Juegos para niños, mascotas de restaurantes, salto de dimensión entre páginas, mascota en el encabezado de los restaurantes, cuentas de usuario y pedidos.

## Fases
- **Fase 0:** entorno y base (estructura, README, este documento, Git).
- **Fase 1:** página de presentación e invitación: invitar restaurantes (botones de WhatsApp y correo) y ganar seguidores en Instagram. La mascota vuela por la pantalla; si alcanza el tiempo, se "come" el nombre de la página. Las secciones se proponen y se aprueban antes de escribir código.
