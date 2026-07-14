# Portafolio Daniela Ruiz

Sitio web estático del portafolio de Daniela Ruiz Ardiles (Diseñadora Integral UC),
implementado a partir del diseño `Portafolio Daniela Ruiz.dc.html` del proyecto
Claude Design "Mockups UX/UI Lyssa".

## Estructura

```
index.html                     Página principal (navegación por anclas)
css/styles.css                 Estilos globales (paleta crema/tinta/vino)
css/proyecto.css               Estilos compartidos de las páginas de proyecto
js/lightbox.js                 Lightbox compartido (clic para ampliar imágenes)
proyectos/mediterranea.html    01 · Libro digital: portada, págs. 1-10 y 166-176
proyectos/daily-confort.html   02 · Caja 3D texturizada con el pliego real
proyectos/monarch.html         03 · Demo frontal/reverso/perfil con adhesivos móviles
proyectos/lyssa.html           04 · Apps reales embebidas (ReportApp + Admin)
img/                           Imágenes (libro/, monarch/, daily/, lyssa/)
docs/                          CV descargable
```

## Apps reales de Lyssa (modo demo autocontenido)

`proyectos/lyssa.html` embebe los builds reales de ReportApp y Admin desde
`apps/reportapp/` y `apps/admin/`, compilados en **modo demo** (`VITE_DEMO=1`):

- API simulada dentro del navegador con datos ficticios (sin backend, nada
  sale a la red).
- Sesión precargada: el visitante cae directo al interior de la app; si
  cierra sesión, el login acepta cualquier credencial.
- La PWA/service worker queda desactivada en el build demo (interferiría al
  servirse bajo subruta).

El modo demo vive en los repos de las apps (`Descargas/*/src/demo/`) detrás
del flag `VITE_DEMO`; sin el flag, el build de producción es idéntico al de
siempre (el código demo se elimina por tree-shaking).

Para regenerar los builds demo (requiere `Descargas/` con sus node_modules):

```
bash build-apps-demo.sh
```

`apps/` se commitea (son artefactos livianos) para que Netlify los publique
sin necesitar `Descargas/`.

## Origen de los assets

- `Descargas/Mockups UXUI Lyssa/` (export del proyecto de Claude Design, ignorado
  por git): renders del libro y de Daily Confort, aplicaciones Monarch en punto de
  venta, láminas y mockups de ReportApp/Lyssa. Convertidos a JPEG optimizado en `img/`.
- `Portada_Mediterranea a la chilena.pdf` → portada frontal/trasera (pliego dividido)
- `Mediterranea a la Chilena.pdf` (180 págs.) → primeras 5 y últimas 5 páginas
- `Grafica pijama original1 copy.pdf` (28 láminas) → huincha, tabelas, etiquetas,
  gancho y fotos de referencia del sistema Monarch
- `lyssa logo.svg` → logo para la app demo
- `docs/curriculum-daniela-ruiz.pdf` → CV descargable (botones del nav y contacto)

No existe "portafolio en PDF": este sitio es el portafolio.

## Desarrollo

Sitio estático sin build. Para verlo en local:

```
python -m http.server 8000
```

y abrir <http://localhost:8000>.

Nota: los mockups de Lyssa se embeben vía iframe, y el visor 3D y el flipbook usan
JS propio sin dependencias externas (solo Google Fonts requiere conexión).

## Despliegue en Netlify

El repo ya incluye `netlify.toml`: el build (`netlify-build.sh`) empaqueta en
`dist/` solo los archivos publicables (Descargas/ queda fuera).

**Opción A — desde git (recomendada):** subir el repo a GitHub/GitLab y en
Netlify crear el sitio apuntando al repo. Netlify lee `netlify.toml` y publica
`dist/` automáticamente en cada push.

**Opción B — manual:** ejecutar `bash netlify-build.sh` y arrastrar la carpeta
`dist/` a <https://app.netlify.com/drop>.

### Las apps de Lyssa en producción

ControlApp y Admin son SPAs con API propia: se despliegan como **sitios
separados** (desde sus repositorios, con `VITE_API_URL` configurada). Una vez
publicadas, poner sus URLs en `js/apps-config.js`:

```js
window.LYSSA_APPS = {
  control: 'https://<controlapp>.netlify.app',
  admin:   'https://<admin>.netlify.app'
};
```

Mientras las URLs sigan en `localhost`, el sitio publicado muestra un aviso
elegante en los marcos de las apps (en local siguen funcionando con los
servidores de los puertos 8014/8015).
