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
