// Lightbox compartido: amplía cualquier imagen marcada con data-zoom
// o contenida en una .pcard / .faja-full.
(function () {
  var overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-label', 'Imagen ampliada');
  overlay.innerHTML = '<img alt="Imagen ampliada">';
  document.body.appendChild(overlay);

  var img = overlay.querySelector('img');

  function open(src, alt) {
    // Nunca ampliar más allá de la resolución nativa (evita el pixelado)
    img.style.maxWidth = '';
    img.style.maxHeight = '';
    img.onload = function () {
      img.style.maxWidth = 'min(100%, ' + img.naturalWidth + 'px)';
      img.style.maxHeight = 'min(100%, ' + img.naturalHeight + 'px)';
    };
    img.src = src;
    img.alt = alt || 'Imagen ampliada';
    overlay.classList.add('open');
  }

  function close() {
    overlay.classList.remove('open');
  }

  overlay.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  document.querySelectorAll('.pcard img, .faja-full img, [data-zoom]').forEach(function (el) {
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', function () {
      open(el.dataset.zoom || el.currentSrc || el.src, el.alt);
    });
  });
})();
