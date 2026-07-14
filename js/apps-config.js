// URLs de las aplicaciones reales que se embeben en proyectos/lyssa.html.
//
// Son builds en modo demo (VITE_DEMO=1): API simulada con datos ficticios,
// sesión precargada, y el login acepta cualquier credencial. Viven dentro
// del mismo sitio en /apps/, así que el portafolio es 100 % autocontenido.
//
// Para regenerarlas: bash build-apps-demo.sh (ver README).
window.LYSSA_APPS = {
  reportapp: '/apps/reportapp/',
  admin: '/apps/admin/'
};
