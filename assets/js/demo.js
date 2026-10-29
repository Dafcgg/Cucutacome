const products = {
  tacos: { name: 'Tacos de picaña', price: 16000 },
  limonada: { name: 'Limonada de coco', price: 7000 },
  burger: { name: 'Hamburguesa de la casa', price: 22000 }
};

const cart = { tacos: 0, limonada: 0, burger: 0 };
let orderType = 'PARA RECOGER';
let stage = 0;

const money = (value) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(value);

const cartList = document.querySelector('#cart-items');
const cartTotal = document.querySelector('#cart-total');
const sendBtn = document.querySelector('#send-order');
const advanceBtn = document.querySelector('#advance-order');
const statusBadge = document.querySelector('#order-status');
const notice = document.querySelector('#demo-notice');
const orderCard = document.querySelector('#order-card');
const orderEmpty = document.querySelector('#order-empty');
const orderItems = document.querySelector('#order-items');
const orderTotal = document.querySelector('#order-total');
const orderLabel = document.querySelector('#order-type-label');
const completedCard = document.querySelector('#order-completed');

function announceDemoStep(step) {
  document.dispatchEvent(new CustomEvent('demo:stepchange', {
    detail: { step: Math.max(0, Math.min(step, 2)) }
  }));
}

function renderCart() {
  const entries = Object.entries(cart).filter(([, qty]) => qty > 0);
  cartList.replaceChildren();

  if (!entries.length) {
    const emptyLi = document.createElement('li');
    emptyLi.className = 'empty-cart-msg';
    emptyLi.textContent = 'Agrega un producto del menú para empezar.';
    cartList.append(emptyLi);
  } else {
    entries.forEach(([key, qty]) => {
      const prod = products[key];
      const li = document.createElement('li');
      li.className = 'cart-item';

      const info = document.createElement('div');
      info.className = 'cart-item__info';
      const title = document.createElement('p');
      title.className = 'cart-item__title';
      title.textContent = prod.name;
      const unit = document.createElement('span');
      unit.className = 'cart-item__price';
      unit.textContent = money(prod.price);
      info.append(title, unit);

      const stepper = document.createElement('div');
      stepper.className = 'stepper';

      const decBtn = document.createElement('button');
      decBtn.type = 'button';
      decBtn.className = 'stepper-btn';
      decBtn.textContent = '−';
      decBtn.title = 'Reducir cantidad';
      decBtn.disabled = stage > 0;
      decBtn.addEventListener('click', () => {
        if (stage > 0) return;
        cart[key] = Math.max(0, cart[key] - 1);
        renderCart();
        notice.textContent = 'Cantidad actualizada en el pedido.';
      });

      const count = document.createElement('span');
      count.className = 'stepper-count';
      count.textContent = qty;

      const incBtn = document.createElement('button');
      incBtn.type = 'button';
      incBtn.className = 'stepper-btn';
      incBtn.textContent = '+';
      incBtn.title = 'Aumentar cantidad';
      incBtn.disabled = stage > 0;
      incBtn.addEventListener('click', () => {
        if (stage > 0) return;
        cart[key]++;
        renderCart();
        notice.textContent = 'Cantidad actualizada en el pedido.';
      });

      stepper.append(decBtn, count, incBtn);

      const subtotal = document.createElement('span');
      subtotal.className = 'cart-item__subtotal';
      subtotal.textContent = money(qty * prod.price);

      li.append(info, stepper, subtotal);
      cartList.append(li);
    });
  }

  const subtotal = entries.reduce(
    (sum, [key, qty]) => sum + products[key].price * qty,
    0
  );
  cartTotal.textContent = money(subtotal);
  sendBtn.disabled = !entries.length || stage > 0;
}

// Botones de agregar producto
document.querySelectorAll('[data-add]').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (stage > 0) return;
    const key = btn.dataset.add;
    if (products[key]) {
      cart[key]++;
      renderCart();
      notice.textContent = `Se agregó "${products[key].name}". Ya puedes enviar el pedido.`;
    }
  });
});

// Selección de tipo de comanda
document.querySelectorAll('.type-pill').forEach((pill) => {
  pill.addEventListener('click', () => {
    if (stage > 0) return;
    document.querySelectorAll('.type-pill').forEach((p) => p.classList.remove('is-selected'));
    pill.classList.add('is-selected');
    orderType = pill.dataset.type || 'PARA RECOGER';
    notice.textContent = `Modalidad elegida: ${pill.textContent.trim()}`;
  });
});

// Enviar pedido de muestra
sendBtn.addEventListener('click', () => {
  stage = 1;
  orderEmpty.hidden = true;
  orderCard.hidden = false;
  if (completedCard) completedCard.hidden = true;

  if (orderLabel) orderLabel.textContent = `PEDIDO #1042 · ${orderType}`;

  orderItems.replaceChildren();
  const entries = Object.entries(cart).filter(([, q]) => q > 0);
  entries.forEach(([key, q]) => {
    const li = document.createElement('li');
    li.innerHTML = `<span><strong>${q} ×</strong> ${products[key].name}</span> <span>${money(q * products[key].price)}</span>`;
    orderItems.append(li);
  });

  orderTotal.textContent = cartTotal.textContent;
  statusBadge.textContent = 'Nuevo';
  statusBadge.style.background = '#fff0e8';
  statusBadge.style.color = '#af391d';

  advanceBtn.disabled = false;
  advanceBtn.textContent = 'Aceptar y preparar →';

  notice.textContent = '¡La comanda llegó al panel del restaurante! Ahora acéptala para avisar a cocina.';

  announceDemoStep(1);
  renderCart();
});

// Avanzar estados de la comanda
advanceBtn.addEventListener('click', (e) => {
  stage++;
  const labels = {
    2: [
      'En preparación',
      'Marcar listo →',
      'Cocina está preparando el pedido. Con el Plan Pro también se descuentan los insumos.',
      '#eef4ff',
      '#1e40af'
    ],
    3: [
      'Listo',
      'Marcar entregado →',
      'El pedido está listo para entregar al cliente.',
      '#fef3c7',
      '#92400e'
    ],
    4: [
      'Entregado',
      'Pedido finalizado',
      'Recorrido completado: venta registrada en reportes y comanda cerrada.',
      '#dcfce7',
      '#166534'
    ]
  };

  const current = labels[Math.min(stage, 4)];
  if (current) {
    const [name, buttonLabel, message, bg, col] = current;
    statusBadge.textContent = name;
    statusBadge.style.background = bg;
    statusBadge.style.color = col;
    e.currentTarget.textContent = buttonLabel;
    notice.textContent = message;

    if (stage >= 4) {
      e.currentTarget.disabled = true;
      if (completedCard) completedCard.hidden = false;
    }
  }

  announceDemoStep(Math.min(stage, 2));
});

// Reiniciar recorrido
document.querySelector('#restart-demo').addEventListener('click', () => {
  stage = 0;
  cart.tacos = 0;
  cart.limonada = 0;
  cart.burger = 0;

  orderEmpty.hidden = false;
  orderCard.hidden = true;
  if (completedCard) completedCard.hidden = true;

  statusBadge.textContent = 'Nuevo';
  advanceBtn.disabled = false;
  advanceBtn.textContent = 'Aceptar y preparar →';
  notice.textContent = 'Recorrido reiniciado. Agrega productos para probar de nuevo.';

  announceDemoStep(0);
  renderCart();
});

// Inicializar
announceDemoStep(0);
renderCart();
