# Lyssa · Design System

Sistema de diseño compilado para **Lyssa** (razón social **LyS SA**), empresa B2B de tecnología para **seguridad privada en Chile**. Esta carpeta es la fuente canónica de tokens, componentes, UI kits y reglas de uso de marca. Cualquier agente, diseñador o desarrollador que cree interfaces, documentos o material para Lyssa debe guiarse por este documento.

> El compilador del sistema indexa `styles.css` (tokens + fuentes), los componentes (`<Name>.jsx` + `<Name>.d.ts`) y las tarjetas `@dsCard`. No edites `_ds_bundle.js`, `_ds_manifest.json` ni `_adherence.oxlintrc.json` · se generan solos.

---

## Contexto del producto

Lyssa opera **dos PWAs** que comparten una sola identidad:

| Producto | Audiencia | Contexto de uso |
|---|---|---|
| **ControlApp** (+ Admin) | Supervisores y clientes | Escritorio, sala de control |
| **ReportApp** | Guardias en terreno | Móvil, exterior, turno de noche, uso al sol |

Lockup de producto: `Lyssa | ControlApp` / `Lyssa | ReportApp` · nombre del producto en Archivo/Montserrat 600, «App» en ámbar. **Los productos nunca llevan logo propio.** En comunicación: *Lyssa*. En documentos legales/facturación: *LyS SA*. Nunca «LYSSA» en mayúsculas dentro de texto corrido.

El tono del producto es **institucional, preciso y auditable** · nunca *playful*, nunca *startup*.

---

## Fuentes (input)

Este sistema se construyó a partir del repositorio de marca canónico de Lyssa. Si tienes acceso, explóralos para profundizar:

- **GitHub · `LyS-SA/BrandSystem`** (privado): libro de marca interactivo (`Lyssa Brand System.dc.html`), `README.md`, `CLAUDE.md`, activos SVG, y recreaciones reales de ReportApp (`ReportApp/*.dc.html`) con guía `INSTRUCCIONES.md` y tema MUI de handoff (`ReportApp/handoff/brandTheme.ts`).
- Productos relacionados (mismo org, para referencia de producto): `LyS-SA/ReportApp`, `LyS-SA/ControlApp`, `LyS-SA/Admin`, `LyS-SA/LyssaWeb`.

Explorar estos repos permite recrear las UIs con mayor fidelidad (los UI kits aquí se basan en el código y los DCs de ReportApp, no en capturas).

---

## CONTENT FUNDAMENTALS · cómo se escribe

**Idioma:** español de Chile, registro **formal y preciso** en **todos** los productos (incluido ReportApp). Trato de **usted** mediante imperativo directo: «Confirme», «Marque», «Ingrese», «Mantenga presionado», «Tome una foto». Nunca trato de **tú** ni informalidad, aunque las pantallas originales lo usaran. Mantenga el registro consistente.

**Reglas:**
- Sin emojis. Sin informalidad. Sin frases de disculpa ni de celebración («¡Ups!», «¡Listo!»).
- Verbos de acción al inicio de botones y avisos.
- Hora en **24 h** (`HH:MM` / `HH:MM:SS`), fecha `dd mmm aaaa` (`21 jun 2026`), RUT con puntos y guión (`12.345.678-K`), coordenadas `−33.4489, −70.6693`.

**Léxico canónico** (usar → evitar):
- Punto de control → *checkpoint* · Ronda → *patrullaje/vuelta* · Presencia → *marcaje/fichaje* · Control de acceso → *portería* · Guardia → *nochero/vigilante* · Supervisor → *jefe de turno* · Sin conexión → *offline/caído*.

**Ejemplos:** «Acceso autorizado · 21:48» · «Ronda atrasada en Torre Norte» · «Mantenga presionado el botón para enviar una alerta de pánico» · «Sin conexión. Se sincronizará al reconectar».

---

## VISUAL FOUNDATIONS

**Color.** Solo **3 colores base** por UI: texto (`--fg`), fondo (`--bg`), acento (`--accent`). El acento es **por contraste del fondo**: azul `#00539A` sobre papel `#F2F4F7`; dorado `#FEBE10` sobre azul tinta `#0A0E65`. El peligro es siempre rojo. `--warning` es **el mismo ámbar** del acento · no hay naranja intermedio; la diferencia entre «aviso» y «en vivo» es el **pulso**, no el color. Dos temas conmutables (`data-lyssa-theme="dark"`), ambos calibrados a contraste ≈13:1 (legibilidad con presbicia / luz adversa). ReportApp apunta a ≥7:1 para uso al sol.

**Tipografía.** Montserrat (títulos, 600/700/800) · Roboto (cuerpo/UI, 400/600) · Roboto Mono (IDs, hora, RUT, coordenadas, kickers). Nunca Inter, ni Roboto solo para títulos, ni fuentes fuera de la lista. Escala: Display 58 · H1 40 · H2 30 · H3 22 · H4 16 caps · cuerpo 16/lh 1.65 · caption 13 · mono 14 · kicker 9 caps.

**Espaciado.** Base 4px. Padding de tarjeta 16–28px. Layout institucional: denso pero respirable.

**Bordes y radios.** Bordes **rectos**: 3px en botones, 4px en tarjetas, 999px solo en badges/chips/switches; 0 en ítems de nav y tablas. Borde hair de 1px (`--line`) en tarjetas y campos; borde fuerte 1.5px (`--fg`) en botón secundario; borde-acento de 3px a la izquierda en nav activo, filtros y tarjetas de alerta.

**Fondos.** Planos: papel o tinta. **Sin gradientes** (especialmente prohibido el púrpura `#667eea→#764ba2` que arrastran las apps legadas). Sin texturas ni patrones. Las zonas suaves usan `--surface-alt`, nunca un degradado.

**Sombras.** La elevación es **deliberada, no decorativa**. Sin sombras flotantes genéricas uniformes en tarjetas. Solo: hover de botón (`--shadow-button`), modales (`--shadow-modal`) y el bezel del teléfono. Las tarjetas se separan con borde, no con sombra.

**Tarjetas.** `background: var(--surface)`, `border: 1px solid var(--line)`, `border-radius: 4px`, padding 16–28px, sin sombra. La tarjeta de alerta añade `border-left: 3px` del color de estado.

**Animación.** Movimiento institucional: transiciones cortas y rectas (`--ease-standard`, 120–240ms). **Sin bounces** en la UI general. Ver la sección TRANSICIONES.

**Iconografía.** Ver sección dedicada.

---

## TRANSICIONES Y MOVIMIENTO

Lifteadas del código real de ReportApp. Todas viven en `tokens/motion.css` como `@keyframes`; ninguna es decorativa.

- **Slide up** (`lyssaSlideUp`, `--dur-overlay` 300ms, `--ease-decelerate`) · entrada de ventanas full-screen (`StatusOverlay`) y hojas inferiores (`BottomSheet`). Las ventanas suben desde abajo.
- **Rebote de éxito** (`lyssaBounce`, 1s) · el ícono del overlay de éxito rebota **una vez** al aparecer. Es el único rebote permitido.
- **Anillo de progreso** (`lyssaSpin`) · giro del indicador de envío y relleno del anillo del `HoldButton` durante el hold.
- **Pulso de pánico** (`panicPulse`, 2s) · halo rojo del botón de emergencia en reposo.
- **Gesto de mantener-presionado** · el botón de pánico requiere `--hold-duration` (5000ms) de presión continua; soltar antes cancela.

## VIBRACIONES (HAPTICS)

Retroalimentación táctil vía Vibration API (`components/system/Haptics`). Acompaña la señal visual, **nunca la reemplaza**; es no-op donde no hay soporte (iOS Safari, escritorio). Patrones canónicos (ms):

- `Haptics.success()` · **30** · algo se envió correctamente (reporte, llave, novedad).
- `Haptics.error()` · **[90, 60, 90, 60, 120]** · falló el envío / acceso denegado / pánico.
- `Haptics.scan()` · **[15, 30, 15]** · se leyó una tarjeta NFC, un código QR o la cédula (MRZ).
- `Haptics.tap()` · **10** · confirmación táctil mínima (opcional).

Empareja cada patrón con su evento (POST exitoso → `success`; lectura de tag → `scan`). Valores en `HAPTIC_PATTERNS`.

## FLUJOS PRINCIPALES (ReportApp)

- **Reporte Inicial** · el guardia ingresa credencial (inicia turno) → captura foto → Enviar → POST `/v1/reports/new` → `Haptics.success()` + `StatusOverlay` "Reporte enviado". La credencial persiste entre páginas hasta volver a Reporte Inicial o expirar (11 h).
- **Rondas** · selecciona ronda → escanea cada punto NFC → `BottomSheet` de confirmación → `Haptics.scan()` → avanza el contador. Un punto puede reportar un **evento** (`event=true`, comentario obligatorio) con foto adjunta.
- **Control de Acceso** · escanea credencial/QR/cédula o ingresa RUT → autoriza o deniega → fila `EventLog` en la bitácora. Vehículos vía diálogo de selección.
- **Registro de Controles** · pestañas Llaves / Lactancia / Bicicletas; cada acción crea un documento abierto que luego se cierra (devolución / salida / egreso).
- **Estoy Despierto** · check-in nocturno: escanea la **propia** tarjeta NFC (sin login) cada 30 min → `Haptics.scan()`.
- **Emergencia (Pánico)** · `HoldButton` 5s → POST de alerta por dispositivo (sin login) + foto frontal → `Haptics.error()` + `StatusOverlay`; el aviso se repite 1 min.
- **Notificaciones push** · el dispositivo se registra al abrir la app; el header muestra el estado (`PushIndicator`).

## EVENTOS, ARCHIVOS Y DOCUMENTOS

Catálogo canónico en `events/EventDefinitions` (espejo del modelo real de la API). Renderiza filas con `events/EventLog`. No inventes tipos ni estados.

| Documento | id | Estados | Archivo | Haptic |
|---|---|---|---|---|
| Reporte Inicial | `report` | sent | foto | success |
| Estoy Despierto | `awake` | sent · overdue | · | scan |
| Rondas | `round` | open · closed · overdue | foto por evento | scan |
| Control de Acceso | `access` | authorized · denied | credencial / MRZ | scan |
| Llaves | `key` | inUse · returned | · | success |
| Sala de Lactancia | `lactation` | inUse · exited | · | success |
| Bicicletas | `bicycle` | parked · exited | · | success |
| Novedades | `novelty` | sent | foto | success |
| Emergencia (Pánico) | `emergency` | sent | foto frontal | error |

Subtipos de Novedad (`NOVELTY_TYPES`): seguridad · mantenimiento · incidente · emergencia · torniquete · consumo · otro. Estados → tono en `DOC_STATUS`. Cada definición trae sus `fields`, `endpoint`, `feature` flag y salida de archivo.

## ARCHIVOS DE SALIDA · IMPRESOS Y PRESENTACIONES

Hay dos sentidos de "documento" en este sistema: los **documentos de terreno** que ReportApp genera como datos (sección anterior) y los **archivos de salida** de marca que se imprimen o presentan. Estos últimos viven en `documents/DocumentDefinitions` (catálogo) y se renderizan con `documents/DocFormat`. No inventes formatos ni tamaños.

**Tamaños de página** (`PAGE_SIZES`, px @96dpi): Carta `816×1056` (default en Chile) · A4 `794×1123` · slide 16:9 `1920×1080`. **Márgenes** (`PRINT_MARGINS`, mm): documento `22/20/22/20`, portada `28/24/28/24`. La barra de acento de 6–8px va al **borde físico** de la página. **Fuentes**: Montserrat / Roboto / Roboto Mono embebidas (en DOCX, sustituir por estas).

| Entregable | id | Página | Tema | Formatos |
|---|---|---|---|---|
| Propuesta de Servicio (two-pager) | `proposal` | Carta vertical | tinta | PDF · Word |
| Informe de Turno | `shift-report` | Carta vertical | papel | PDF · Word |
| Registro de Auditoría | `audit-log` | A4 horizontal | papel | PDF |
| Resumen al Cliente | `client-onepager` | A4 vertical | papel | PDF |
| Presentación de Producto | `product-deck` | 16:9 | tinta | PDF · PowerPoint |

**Formatos de exportación** (`EXPORT_FORMATS`): `pdf` (entregable final, no editable, fuentes embebidas) · `docx` (Word, editable, sustituir fuentes) · `pptx` (PowerPoint, 1920×1080, una página por slide). Cada definición trae `page`, `orientation`, `theme`, `margins`, `formats`, `sections` y `fonts`.

**Plantillas de slide** (grupo "Slides"): Portada (tinta + rejilla + slot de imagen), Estadísticas (grilla 2×2 de cifras doradas), Tres columnas (papel, kicker rojo), Cita y cierre (tinta + contacto). Patrón del deck: alterna fondos tinta/papel, barra de acento de 6px al borde, rejilla sutil de 80px sobre tinta, kicker mono numerado (`01 —`), cifras en Montserrat 800 dorado. Texto nunca bajo 24px en 1920×1080.

---

## VISTAS DE LISTA (Admin / ControlApp)

Toda página de administración es una **vista de lista** con el mismo esqueleto y ritmo. Lifteado del código real de Admin (`DataTable`, `PageHeader`, `UniversalFilters`, `TableControls`, `Pagination`). Componer con el grupo `components/data/`; no reconstruir a mano.

**Esqueleto canónico (de arriba a abajo):**
1. **PageHeader** — kicker mono de acento (9px) · título H2 Montserrat 30/700 con ícono + **badge de total** (Montserrat 800 18px en píldora con borde-izq. 3px acento) · descripción Roboto 14 `--muted`. A la derecha: «Última actualización» (reloj 16px) + botón **Actualizar** (secundario sm). Margen inferior 24px.
2. **FilterBar** — superficie con **borde-superior 3px acento**, título H4 con lupa + «Limpiar filtros». Rejilla responsiva `auto-fit minmax(280px, 1fr)`; cada campo en `FilterField` (etiqueta Roboto 14/500 + control `Input`/`Select`). Margen inferior 16px.
3. **TableControls** — «Elementos por página» + selector (5/10/20/25/50) · «Mostrando X de Y resultados». Alto mín. 48px.
4. **DataTable** — cabecera tinta `--app-side` + **Roboto Mono 12px MAYÚSCULAS** papel · filas **zebra** (`--surface` / `--bg`) · celdas Roboto **14px** padding 12×16 · fila de error wash rojo 9% · hover acento 5% solo si es clicable. En móvil cada fila colapsa a tarjeta (etiqueta + valor).
5. **Pagination** — centrada, «Página X de Y» + botones anterior/número/siguiente, mínimo táctil **44×44**, activo en acento sólido.

**Colores de estado en celda** (`StatusPill`): al día / autorizado → `success` · atención / atrasado → `warning` · denegado / suspendido / incidente → `danger` · neutro → `neutral`. Para estados fuera de tabla usar `Badge`; para roles `RoleLabel`.

**Crear / editar** siempre en **ventana modal** (`Modal`), nunca en formulario inline expandido.

---

## ICONOGRAPHY

**Un solo set** para todos los productos · no mezclar con Material, Bootstrap Icons ni FontAwesome (romperían la coherencia del trazo). Implementado como el componente React **`Icon`** (`components/icon/Icon.jsx`).

- **Rejilla:** 24×24 px, área activa 20×20. Tamaño mínimo de uso 16px.
- **Trazo:** 2px uniforme, sin relleno salvo puntos/marcadores.
- **Terminaciones:** rectas (`stroke-linecap="square"`), uniones en inglete (`stroke-linejoin="miter"`). **Sin redondeo** (`round` está prohibido).
- **Color:** reposo `var(--fg)` · activo / acción `var(--accent)` · peligro `var(--danger)`. El relleno usa el **mismo color del trazo**, nunca otro.
- **Emoji:** nunca en interfaces operativas. **Caracteres unicode** solo para el indicador de señal LTE de la barra de estado (`▘▖`).

Cobertura del set (40+): navegación (`home`, `dashboard`, `calendar`, `report`, `awake`, `definitions`, `history`, `shield`, `note`, `catalog`, `pin`, `devices`, `clients`, `user`, `download`, `settings`), acciones (`add`, `edit`, `trash`, `eye`, `search`, `filter`, `refresh`, `check`, `close`, `copy`, `logout`, `menu`, `chevronDown/Right`) y operativos (`presence`, `round`, `nfc`, `gps`, `access`, `offline`, `alert`, `panic`, `camera`, `qr`, `bell`, `credential`, `info`, `checkCircle`).

**Logo.** Todos los logos son **SVG, nunca PNG**. El logo **siempre incluye el wordmark «Lyssa»** · el isotipo (la vela/mástil, `assets/lyssa-sail*.svg`) **nunca se usa solo** como logo. El lockup completo (`assets/lyssa-logo.svg`) trae isotipo + «LYSSA» + subtítulo «Seguridad Privada»; la variante **simplificada** (`assets/lyssa-logo-simple.svg`, sin el subtítulo) trae solo isotipo + «LYSSA». Cada una tiene su versión blanca y navy (`*-simple.svg`, `lyssa-white-simple.svg`, `lyssa-navy-simple.svg`). En fondos claros (papel): **siempre el logo a color** (`assets/lyssa-logo.svg`). El monocromático blanco (`assets/lyssa-white.svg`) es **exclusivamente reverso sobre tinta** (fondo oscuro). El azul (`assets/lyssa-navy.svg`) queda para una sola tinta (grabado/impresión especial), no en UI. Nunca recolorear el logo, nunca en ámbar. El isotipo aislado se reserva como elemento gráfico de apoyo y, por necesidad técnica, como favicon/ícono de PWA en tamaños donde el wordmark sería ilegible · nunca como reemplazo del logo. Resguardo mínimo = altura de la «L». Tamaño mínimo del logo: 120px de ancho.

---

## Índice / manifiesto

**Raíz**
- `styles.css` · único punto de entrada de CSS (solo `@import`). Los consumidores enlazan este archivo.
- `tokens/` · `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `radius-elevation.css` · `motion.css`.
- `assets/` · logos SVG: lockup completo (`lyssa-logo`, `lyssa-navy`, `lyssa-white`), simplificado sin subtítulo (`lyssa-logo-simple`, `lyssa-navy-simple`, `lyssa-white-simple`) e isotipo de apoyo (`lyssa-sail`, `lyssa-sail-navy`, `lyssa-sail-white`).
- `SKILL.md` · skill descargable compatible con Agent Skills.
- `exports/` · archivos empaquetados standalone (offline) generados desde el sistema; no son fuente.

**Componentes** (`components/<grupo>/`) · primitivas React; módulo `window.LyssaDesignSystem_c38568`:
- `icon/` · **Icon**, `ICON_NAMES` (set único, incl. catálogo de controles: `key`, `bicycle`, `coffee`, `walk`, `car`, `room`, `file`).
- `core/` · **Button**, **Card** + `CardHeader`, **Badge** + `RoleLabel`, **Avatar**, **Fab**.
- `forms/` · **Field**, **Input**, **Textarea**, **Select**, **Checkbox**, **Switch**.
- `feedback/` · **Alert**, **Modal** + `FormSectionTitle`, **HoldButton** (pánico), **StatusOverlay**, **PushIndicator**.
- `navigation/` · **Tabs**, **BottomSheet**.
- `data/` · muebles de página de lista (Admin/ControlApp): **DataTable** + `StatusPill`, **PageHeader**, **FilterBar** + `FilterField`, **Pagination**, **TableControls**. Ver VISTAS DE LISTA.
- `system/` · **Haptics** (`HAPTIC_PATTERNS`) · API de vibración.

**Eventos** (`events/`) · modelo de datos de terreno; mismo módulo:
- **EventDefinitions** · `EVENT_DEFINITIONS`, `DOC_STATUS`, `NOVELTY_TYPES` · búsquedas vía `EventHelpers.getEventDefinition` / `EventHelpers.getDocStatus`.
- **EventLog** · fila de evento/documento (ícono + estado + chip de foto).

**Documentos de salida** (`documents/`) · impresos y presentaciones; mismo módulo:
- **DocumentDefinitions** · `DOCUMENT_DEFINITIONS`, `PAGE_SIZES`, `PRINT_MARGINS`, `EXPORT_FORMATS` · búsquedas vía `DocumentHelpers.getDocumentDefinition` / `.getPageSize` / `.getExportFormat`.
- **DocFormat** · ficha de un formato de salida (miniatura de página + chips PDF/Word/PowerPoint).
- Especímenes (`@dsCard`): portada de propuesta, página de informe de turno (grupo "Documents").

**Plantillas de slide** (`slides/`) · especímenes 1920×1080 del deck de producto (grupo "Slides"): Portada, Estadísticas, Tres columnas, Cita y cierre.

**UI kits** (`ui_kits/<producto>/`) · recreaciones interactivas de pantalla completa:
- `reportapp/` · PWA móvil del guardia (dark por defecto): Inicio, Crear Reporte, Control de Acceso, Registro de Controles, Rondas, Novedades, Estoy Despierto, Emergencia. Usa HoldButton, StatusOverlay, BottomSheet, EventLog y Haptics.
- `controlapp/` · supervisor, **responsive (web + móvil)**: Panel, Historial de rondas, Reportes de acceso, Registros de controles, Perfiles de acceso, Novedades, Estoy Despierto.
- `admin/` · consola de administración, **responsive (web + móvil)**, nav completa de 7 secciones: Inicio, Usuarios, Clientes, Ubicaciones, Dispositivos, Catálogo de controles, Reportes descargables, y más.
- `_shared/` · chasis responsive compartido por ControlApp y Admin: `admin-shell.jsx` (menú lateral **colapsable** + tema claro/oscuro) y `admin-screens.jsx` (`DataTable` responsive, `FilterBar`).

**Templates** (`templates/<slug>/`) · puntos de partida para proyectos consumidores, uno por producto: `reportapp/`, `controlapp/`, `admin/`. Cada uno es un `<Slug>.dc.html` que carga el sistema vía `ds-base.js` y monta el kit.

**Guidelines** (`guidelines/`) · tarjetas de especimen (`@dsCard`) de Colores, Tipografía, Espaciado, Marca y Movimiento, visibles en la pestaña Design System.

---

## Lo que NO hacer

- ❌ Gradientes de fondo (incluido el púrpura `#667eea→#764ba2`). ❌ Sombras flotantes genéricas uniformes en tarjetas.
- ❌ `border-radius > 4px` en tarjetas (999px solo en badges). ❌ Íconos con `stroke-linecap="round"`.
- ❌ Colores fuera de los tokens (azul `#0d6efd`, shell `#2c3e50/#34495e`, indigo `#6366f1`, fondos de rol MUI `#e3f2fd/#f3e5f5/#ffebee`).
- ❌ Logo en ámbar o color inventado, o en PNG. ❌ Emoji en interfaces operativas.
- ❌ Inter, Fraunces, o Roboto solo para títulos. ❌ Tono informal/playful.
- ❌ Formulario de edición inline expandido · crear/editar **siempre en ventana modal**.
- ❌ Vista o pantalla mono-tema · soportar siempre claro y oscuro.

---

*Lyssa Design System · LyS SA · sistema de marca v2.0 · 2026*
