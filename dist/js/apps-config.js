// URLs de las aplicaciones reales que se embeben en proyectos/lyssa.html.
//
// · En desarrollo local se sirven los builds con:
//     (cd "Descargas/ControlApp/dist" && python -m http.server 8014 &)
//     (cd "Descargas/Admin/dist"      && python -m http.server 8015 &)
//
// · En producción, publicar cada aplicación como sitio propio (por ejemplo
//   en Netlify, desde sus repositorios) y reemplazar aquí las URLs:
//     control: 'https://controlapp.lyssa.cl'
//     admin:   'https://admin.lyssa.cl'
//
// Si la página se abre desde un dominio público y estas URLs siguen en
// localhost, los marcos muestran un aviso en lugar del iframe.
window.LYSSA_APPS = {
  control: 'http://localhost:8014',
  admin: 'http://localhost:8015'
};
