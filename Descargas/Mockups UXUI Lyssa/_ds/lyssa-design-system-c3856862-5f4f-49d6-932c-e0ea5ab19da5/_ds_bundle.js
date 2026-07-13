/* @ds-bundle: {"format":4,"namespace":"LyssaDesignSystem_c38568","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"RoleLabel","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"Fab","sourcePath":"components/core/Fab.jsx"},{"name":"StatusPill","sourcePath":"components/data/DataTable.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"FilterBar","sourcePath":"components/data/FilterBar.jsx"},{"name":"FilterField","sourcePath":"components/data/FilterBar.jsx"},{"name":"PageHeader","sourcePath":"components/data/PageHeader.jsx"},{"name":"TableControls","sourcePath":"components/data/Pagination.jsx"},{"name":"Pagination","sourcePath":"components/data/Pagination.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"HoldButton","sourcePath":"components/feedback/HoldButton.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"FormSectionTitle","sourcePath":"components/feedback/Modal.jsx"},{"name":"PushIndicator","sourcePath":"components/feedback/PushIndicator.jsx"},{"name":"StatusOverlay","sourcePath":"components/feedback/StatusOverlay.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Switch","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Input.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Input.jsx"},{"name":"Icon","sourcePath":"components/icon/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/icon/Icon.jsx"},{"name":"BottomSheet","sourcePath":"components/navigation/BottomSheet.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"HAPTIC_PATTERNS","sourcePath":"components/system/Haptics.jsx"},{"name":"Haptics","sourcePath":"components/system/Haptics.jsx"},{"name":"DocFormat","sourcePath":"documents/DocFormat.jsx"},{"name":"PAGE_SIZES","sourcePath":"documents/DocumentDefinitions.jsx"},{"name":"PRINT_MARGINS","sourcePath":"documents/DocumentDefinitions.jsx"},{"name":"EXPORT_FORMATS","sourcePath":"documents/DocumentDefinitions.jsx"},{"name":"DOCUMENT_DEFINITIONS","sourcePath":"documents/DocumentDefinitions.jsx"},{"name":"DocumentDefinitions","sourcePath":"documents/DocumentDefinitions.jsx"},{"name":"DocumentHelpers","sourcePath":"documents/DocumentDefinitions.jsx"},{"name":"DOC_STATUS","sourcePath":"events/EventDefinitions.jsx"},{"name":"NOVELTY_TYPES","sourcePath":"events/EventDefinitions.jsx"},{"name":"EVENT_DEFINITIONS","sourcePath":"events/EventDefinitions.jsx"},{"name":"EventDefinitions","sourcePath":"events/EventDefinitions.jsx"},{"name":"EventHelpers","sourcePath":"events/EventDefinitions.jsx"},{"name":"EventLog","sourcePath":"events/EventLog.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"2ca3974c3aaa","components/core/Badge.jsx":"182b599fd077","components/core/Button.jsx":"4e6b4a4a519d","components/core/Card.jsx":"0b9a531a6c49","components/core/Fab.jsx":"56acdd5fee29","components/data/DataTable.jsx":"f45b8d262078","components/data/FilterBar.jsx":"0cb74b93358a","components/data/PageHeader.jsx":"569e35bc5a3a","components/data/Pagination.jsx":"f26452a2cff3","components/feedback/Alert.jsx":"3bc1879dbcf4","components/feedback/HoldButton.jsx":"d3f08c907896","components/feedback/Modal.jsx":"26584565249f","components/feedback/PushIndicator.jsx":"572d2e8ba3a4","components/feedback/StatusOverlay.jsx":"4b07f51e4b83","components/forms/Checkbox.jsx":"9466f760c9a1","components/forms/Input.jsx":"fde1dabbd329","components/icon/Icon.jsx":"4455b4fdb6c4","components/navigation/BottomSheet.jsx":"4477afb5a435","components/navigation/Tabs.jsx":"e191bcbae5ca","components/system/Haptics.jsx":"4727bf167694","documents/DocFormat.jsx":"c785c4849d23","documents/DocumentDefinitions.jsx":"3e76e5fdfa86","events/EventDefinitions.jsx":"3426af5faa93","events/EventLog.jsx":"f8ede3591eac","ui_kits/_shared/admin-screens.jsx":"fbc144f9c7cb","ui_kits/_shared/admin-shell.jsx":"bd20306909f1","ui_kits/admin/app.jsx":"766fd2fb3702","ui_kits/controlapp/app.jsx":"bab7c8ec3a50","ui_kits/reportapp/screens.jsx":"6cadaa0c7ca5","ui_kits/reportapp/shell.jsx":"cf17a06735a0"},"inlinedExternals":[],"unexposedExports":[{"name":"getDocStatus","sourcePath":"events/EventDefinitions.jsx"},{"name":"getDocumentDefinition","sourcePath":"documents/DocumentDefinitions.jsx"},{"name":"getEventDefinition","sourcePath":"events/EventDefinitions.jsx"},{"name":"getExportFormat","sourcePath":"documents/DocumentDefinitions.jsx"},{"name":"getPageSize","sourcePath":"documents/DocumentDefinitions.jsx"}]} */

(() => {

const __ds_ns = (window.LyssaDesignSystem_c38568 = window.LyssaDesignSystem_c38568 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ════════════════════════════════════════════════════════════════════════
   Avatar · iniciales en Montserrat 700 sobre fondo tinta (--app-side).
   Tamaños sm/md/lg. Acepta imagen (src) o iniciales derivadas del nombre.
   ════════════════════════════════════════════════════════════════════════ */

const AV = {
  sm: 28,
  md: 38,
  lg: 56
};
function initials(name = "") {
  const p = name.trim().split(/\s+/);
  return ((p[0]?.[0] || "") + (p[1]?.[0] || "")).toUpperCase() || "—";
}
function Avatar({
  name,
  src,
  size = "md",
  style,
  ...rest
}) {
  const d = typeof size === "number" ? size : AV[size] || AV.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    title: name,
    style: {
      width: d,
      height: d,
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-pill)",
      background: src ? "transparent" : "var(--app-side)",
      color: "#F2F4F7",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: Math.round(d * 0.38),
      overflow: "hidden",
      userSelect: "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ════════════════════════════════════════════════════════════════════════
   Badge · píldora de estado. radius 999px, fondo y borde derivados por
   color-mix del color de estado. Punto de 7px del mismo color.
   ════════════════════════════════════════════════════════════════════════ */

const TONE = {
  success: "var(--success)",
  warning: "var(--warning)",
  danger: "var(--danger)",
  info: "var(--info)",
  accent: "var(--accent)",
  neutral: "var(--faint)"
};
function Badge({
  children,
  tone = "neutral",
  dot = true,
  style,
  ...rest
}) {
  const c = TONE[tone] || TONE.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.02em",
      lineHeight: 1.4,
      color: "var(--fg)",
      background: `color-mix(in srgb, ${c} 14%, var(--surface))`,
      border: `1px solid color-mix(in srgb, ${c} 45%, var(--surface))`,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "999px",
      background: c
    }
  }), children);
}

/* ── Rol: solo texto coloreado, SIN fondo (nunca fondos MUI). ──────────── */
const ROLE_COLOR = {
  Administrador: "var(--danger)",
  Supervisor: "var(--accent-text)",
  Guardia: "var(--info)",
  Usuario: "var(--muted)"
};
function RoleLabel({
  role,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 13,
      color: ROLE_COLOR[role] || "var(--muted)",
      ...style
    }
  }, role);
}
Object.assign(__ds_scope, { Badge, RoleLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ════════════════════════════════════════════════════════════════════════
   Card · superficie base. border 1px var(--line), radius 4px, sin sombra.
   Variante "alert" añade borde-izquierdo de 3px en un color de estado.
   ════════════════════════════════════════════════════════════════════════ */

function Card({
  children,
  padding = 20,
  accent,
  // "warning" | "danger" | "success" | "accent" · barra izquierda de 3px
  as: Tag = "div",
  style,
  ...rest
}) {
  const accentColor = accent ? `var(--${accent === "accent" ? "accent" : accent})` : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderLeft: accentColor ? `3px solid ${accentColor}` : undefined,
      borderRadius: "var(--radius-card)",
      padding,
      color: "var(--fg)",
      ...style
    }
  }, rest), children);
}

/** Encabezado de tarjeta opcional: kicker mono + título Montserrat. */
function CardHeader({
  kicker,
  title,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-kicker)",
      fontWeight: 500,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--accent-text)",
      marginBottom: 6
    }
  }, kicker), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--fs-h3)",
      lineHeight: "var(--lh-heading)",
      color: "var(--fg)"
    }
  }, title)), action);
}
Object.assign(__ds_scope, { Card, CardHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ════════════════════════════════════════════════════════════════════════
   DataTable · tabla de datos institucional (canónica en Admin/ControlApp).
   Cabecera: fondo tinta (var(--app-side)) + Roboto Mono 12px MAYÚSCULAS.
   Filas zebra: par = var(--surface) · impar = var(--bg). Celdas Roboto 14px,
   padding 12×16. Fila de error = wash rojo 9%. Hover solo si es clicable.
   Bordes rectos, sin sombra. StatusPill es la píldora de estado de celda.
   ════════════════════════════════════════════════════════════════════════ */

const STATUS = {
  success: "var(--success)",
  warning: "var(--warning)",
  danger: "var(--danger)",
  info: "var(--info)",
  accent: "var(--accent-text)",
  neutral: "var(--muted)"
};

/** Píldora de estado dentro de una celda: texto en color de estado sobre wash 14%. */
function StatusPill({
  children,
  tone = "neutral",
  style
}) {
  const c = STATUS[tone] || STATUS.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      padding: "4px 8px",
      borderRadius: "var(--radius-card)",
      background: `color-mix(in srgb, ${c} 14%, var(--surface))`,
      color: c,
      fontSize: 13,
      fontWeight: 500,
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
function Row({
  row,
  index,
  isError,
  columns,
  renderCell,
  rkey,
  onRowClick
}) {
  const [hover, setHover] = React.useState(false);
  const bg = isError ? "color-mix(in srgb, var(--danger) 9%, var(--surface))" : onRowClick && hover ? "color-mix(in srgb, var(--accent) 5%, var(--surface))" : index % 2 === 0 ? "var(--surface)" : "var(--bg)";
  return /*#__PURE__*/React.createElement("tr", {
    onClick: onRowClick ? () => onRowClick(row, index) : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: bg,
      cursor: onRowClick ? "pointer" : "default",
      transition: "background var(--dur-fast) var(--ease-standard)"
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("td", {
    key: `${rkey}-${col.id}`,
    style: {
      textAlign: col.align || "left",
      padding: "12px 16px",
      fontSize: 14,
      lineHeight: 1.45,
      color: "var(--fg)",
      borderTop: "1px solid var(--line)",
      verticalAlign: "middle"
    }
  }, renderCell ? renderCell(col, row, index) : row[col.id])));
}
function DataTable({
  columns = [],
  rows = [],
  renderCell,
  rowKey = "id",
  errorRowIds = [],
  emptyMessage = "No hay registros",
  onRowClick,
  style,
  ...rest
}) {
  const getKey = (row, i) => typeof rowKey === "function" ? rowKey(row, i) : row[rowKey] ?? i;
  if (!rows.length) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16,
        textAlign: "center",
        color: "var(--muted)",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-card)",
        background: "var(--surface)"
      }
    }, emptyMessage);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-card)",
      overflow: "auto",
      background: "var(--surface)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(col => /*#__PURE__*/React.createElement("th", {
    key: col.id,
    style: {
      textAlign: col.align || "left",
      width: col.width,
      padding: "12px 16px",
      background: "var(--app-side)",
      color: "#F2F4F7",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      whiteSpace: "nowrap"
    }
  }, col.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => {
    const k = getKey(row, i);
    return /*#__PURE__*/React.createElement(Row, {
      key: k,
      rkey: k,
      row: row,
      index: i,
      isError: errorRowIds.includes(String(k)),
      columns: columns,
      renderCell: renderCell,
      onRowClick: onRowClick
    });
  }))));
}
Object.assign(__ds_scope, { StatusPill, DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/icon/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ════════════════════════════════════════════════════════════════════════
   Lyssa · Icon set (set único)
   Rejilla 24×24, área activa 20×20. Trazo 2px uniforme, sin relleno salvo
   puntos/marcadores. Terminaciones rectas (square), uniones en inglete
   (miter). SIN redondeo. No mezclar con Material / Bootstrap / FontAwesome.
   Color: reposo var(--fg) · activo/dato-en-vivo var(--accent) · peligro
   var(--danger). El relleno usa el MISMO color del trazo, nunca otro.
   ════════════════════════════════════════════════════════════════════════ */

// Cada entrada recibe (s = stroke color) y devuelve los hijos del <svg>.
// Convención: stroke-width 2, linecap square, linejoin miter (heredados del <g>).
const PATHS = {
  // ── Navegación ──────────────────────────────────────────
  home: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 11L12 4L20 11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 10V20H18V10"
  })),
  dashboard: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "8",
    height: "9"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13",
    y: "3",
    width: "8",
    height: "5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13",
    y: "12",
    width: "8",
    height: "9"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "16",
    width: "8",
    height: "5"
  })),
  calendar: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "5",
    width: "16",
    height: "16"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "9",
    x2: "20",
    y2: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "3",
    x2: "9",
    y2: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "3",
    x2: "15",
    y2: "7"
  })),
  report: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 3H16L20 7V21H6Z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "12",
    x2: "17",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "16",
    x2: "17",
    y2: "16"
  })),
  awake: s => /*#__PURE__*/React.createElement("path", {
    d: "M20 14A8 8 0 1 1 10 4A6.5 6.5 0 0 0 20 14Z"
  }),
  // luna · estoy despierto
  definitions: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 17.5L15 6.5L18.5 10L7.5 21H4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 7.5L17 10.5"
  })),
  // lápiz
  history: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7V12L16 14"
  })),
  // reloj
  shield: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3L20 6V12C20 17 12 21 12 21C12 21 4 17 4 12V6Z"
  })),
  // control operacional
  note: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 4H19V20H5Z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "9",
    x2: "16",
    y2: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "13",
    x2: "13",
    y2: "13"
  })),
  // novedades
  catalog: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "12",
    r: "3.2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "11",
    y1: "12",
    x2: "20",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "17",
    y1: "12",
    x2: "17",
    y2: "16"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "12",
    x2: "20",
    y2: "16"
  })),
  // llave
  pin: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 21C12 21 19 14.5 19 9A7 7 0 0 0 5 9C5 14.5 12 21 12 21Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "2.4",
    fill: s,
    stroke: "none"
  })),
  // ubicaciones
  devices: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "20",
    x2: "15",
    y2: "20"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "20"
  })),
  // monitor
  clients: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 20C3 16.5 5.5 15 9 15C12.5 15 15 16.5 15 20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 6.2A3 3 0 0 1 16 11.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 15.2C19 15.8 21 17.2 21 20"
  })),
  // grupo
  user: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "3.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 20C5 16 8 14.5 12 14.5C16 14.5 19 16 19 20"
  })),
  // persona
  download: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 4V15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11L12 16L17 11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 20H19"
  })),
  settings: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3V6M12 18V21M3 12H6M18 12H21M5.6 5.6L7.7 7.7M16.3 16.3L18.4 18.4M18.4 5.6L16.3 7.7M7.7 16.3L5.6 18.4"
  })),
  // ── Acciones ────────────────────────────────────────────
  add: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  })),
  edit: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 17.5L15 6.5L18.5 10L7.5 21H4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 7.5L17 10.5"
  })),
  trash: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 6H19"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 6V20H17V6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 6V4H14V6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "10",
    x2: "10",
    y2: "16"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "14",
    y1: "10",
    x2: "14",
    y2: "16"
  })),
  eye: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 12C2 12 6 5 12 5C18 5 22 12 22 12C22 12 18 19 12 19C6 19 2 12 2 12Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })),
  search: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15.5",
    y1: "15.5",
    x2: "20",
    y2: "20"
  })),
  filter: s => /*#__PURE__*/React.createElement("path", {
    d: "M3 5H21L14 13V20L10 18V13L3 5Z"
  }),
  refresh: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 7A8 8 0 1 0 21 13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 3V8H15"
  })),
  check: s => /*#__PURE__*/React.createElement("path", {
    d: "M5 12.5L10 17.5L19 7"
  }),
  close: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  })),
  copy: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "8",
    width: "12",
    height: "12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 8V4H4V16H8"
  })),
  logout: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 4H5V20H14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 12H21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 8L21 12L17 16"
  })),
  menu: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "7",
    x2: "20",
    y2: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "12",
    x2: "20",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "17",
    x2: "20",
    y2: "17"
  })),
  chevronDown: s => /*#__PURE__*/React.createElement("path", {
    d: "M6 9L12 15L18 9"
  }),
  chevronRight: s => /*#__PURE__*/React.createElement("path", {
    d: "M9 6L15 12L9 18"
  }),
  // ── Operativos y estado ─────────────────────────────────
  presence: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3.2",
    fill: s,
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8"
  })),
  round: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 7V17M9 7H15L13 9.5L15 12H9"
  })),
  // bandera de ronda
  nfc: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 8C9 11 9 13 6 16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 6C15 11 15 13 10 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 4C21 11 21 13 14 20"
  })),
  gps: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3A7 7 0 0 0 5 10C5 15 12 21 12 21C12 21 19 15 19 10A7 7 0 0 0 12 3Z"
  })),
  access: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 3H18V21H6Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "14",
    cy: "12",
    r: "1.2",
    fill: s,
    stroke: "none"
  })),
  // puerta
  offline: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12.5A9 9 0 0 1 19 12.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 15.5A5 5 0 0 1 16 15.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "19",
    r: "1",
    fill: s,
    stroke: "none"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "4",
    x2: "20",
    y2: "20"
  })),
  alert: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3L22 20H2L12 3Z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "10",
    x2: "12",
    y2: "14"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "17",
    r: "1",
    fill: s,
    stroke: "none"
  })),
  panic: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3L22 20H2L12 3Z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "10",
    x2: "12",
    y2: "14"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "17",
    r: "1",
    fill: s,
    stroke: "none"
  })),
  // = alerta, color danger
  camera: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 7H7L9 4H15L17 7H21V19H3Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "3.6"
  })),
  qr: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "4",
    width: "6",
    height: "6"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "4",
    width: "6",
    height: "6"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "14",
    width: "6",
    height: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "14",
    y1: "14",
    x2: "14",
    y2: "20"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "17",
    y1: "14",
    x2: "17",
    y2: "17"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "14",
    x2: "20",
    y2: "20"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "17",
    y1: "20",
    x2: "20",
    y2: "20"
  })),
  bell: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 9A6 6 0 0 1 18 9C18 15 20 17 20 17H4C4 17 6 15 6 9Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 20A2 2 0 0 0 14 20"
  })),
  credential: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "9",
    width: "16",
    height: "11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 9V6.5A4 4 0 0 1 16 6.5V9"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "14",
    r: "1.2",
    fill: s,
    stroke: "none"
  })),
  // candado
  info: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "11",
    x2: "12",
    y2: "16"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "1",
    fill: s,
    stroke: "none"
  })),
  checkCircle: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12.4L10.6 15L15.6 9.6"
  })),
  // ── Catálogo de controles (documentos / archivos) ───────
  key: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "3.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.4 10.4L20 20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 17L19 15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 14.5L16.5 12.5"
  })),
  // llaves
  bicycle: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "17",
    r: "3.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "17",
    r: "3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 17L11 7H8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 17H12L16 9H13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 9L18 17"
  })),
  // bicicletas
  coffee: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 8H17V13A5 5 0 0 1 7 13Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 9H19A2 2 0 0 1 19 13H17"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "20",
    x2: "16",
    y2: "20"
  })),
  // consumo
  walk: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "13",
    cy: "4.5",
    r: "1.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8L10 13L7 21M12 8L16 11M12 8L13 14L16 20"
  })),
  // torniquetes
  car: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 13L7 8H17L19 13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 13H21V18H4Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7.5",
    cy: "18",
    r: "1.4",
    fill: s,
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16.5",
    cy: "18",
    r: "1.4",
    fill: s,
    stroke: "none"
  })),
  // vehículo
  room: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 21V4H15V21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 8H19V21"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "21",
    x2: "21",
    y2: "21"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "1",
    fill: s,
    stroke: "none"
  })),
  // sala (lactancia)
  file: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 3H14L18 7V21H6Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 3V7H18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "12",
    x2: "15",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "16",
    x2: "15",
    y2: "16"
  })),
  // documento / archivo

  // ── Adopción de íconos de los productos (reemplazo de MUI) ──
  themeToggle: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 4A8 8 0 0 1 12 20Z",
    fill: s,
    stroke: "none"
  })),
  // disco mitad lleno (no luna)
  eyeOff: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 12C2 12 6 5 12 5C14 5 15.8 5.6 17.3 6.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.6 9.5C21.9 10 22 12 22 12C22 12 18 19 12 19C10 19 8.2 18.4 6.7 17.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 9.5A3 3 0 0 0 14.5 14.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "3",
    x2: "20",
    y2: "21"
  })),
  bellOff: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 9A6 6 0 0 1 13 3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 13C18 15 19 17 20 17H7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 20A2 2 0 0 0 14 20"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "3",
    x2: "20",
    y2: "21"
  })),
  cleaning: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 13L11 21H6L8 13Z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "13",
    x2: "14",
    y2: "13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 13L13 5L17 3"
  })),
  // escoba — mantenimiento
  mail: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 6L12 13L21 6"
  })),
  torch: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 3H15V8L13 21H11L9 8Z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "8",
    x2: "15",
    y2: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 4L20 4M18 7L20 6"
  })),
  torchOff: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 3H15V8L13 21H11L9 8Z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "8",
    x2: "15",
    y2: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "3",
    x2: "20",
    y2: "21"
  })),
  checklist: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 6L4.5 7.5L7 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 13L4.5 14.5L7 12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 19.5L4.5 21L7 18.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "13",
    x2: "21",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "19.5",
    x2: "21",
    y2: "19.5"
  })),
  arrowLeft: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "12",
    x2: "5",
    y2: "12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 6L5 12L11 18"
  })),
  login: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10 4H20V20H10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12H15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 8L15 12L11 16"
  })),
  send: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21 3L3 10.5L10 13L13 20Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 13L21 3"
  })),
  play: s => /*#__PURE__*/React.createElement("path", {
    d: "M7 4L20 12L7 20Z"
  }),
  barChart: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "20",
    x2: "20",
    y2: "20"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "11",
    width: "3",
    height: "9"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "11",
    y: "6",
    width: "3",
    height: "14"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "16",
    y: "14",
    width: "3",
    height: "6"
  })),
  swap: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 8H20M16 4L20 8L16 12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 16H4M8 12L4 16L8 20"
  })),
  hourglass: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 3H18M6 21H18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 3C6 8 12 10 12 12C12 14 6 16 6 21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 3C18 8 12 10 12 12C12 14 18 16 18 21"
  })),
  tag: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 11L11 3H20V12L12 20L3 11Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "8",
    r: "1.4",
    fill: s,
    stroke: "none"
  })),
  blur: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "1",
    fill: s,
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "16",
    r: "1",
    fill: s,
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "12",
    r: "1",
    fill: s,
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "12",
    r: "1",
    fill: s,
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "0.8",
    fill: s,
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "15",
    r: "0.8",
    fill: s,
    stroke: "none"
  })),
  addCircle: s => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "16"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }))
};

/**
 * Icon · el set único de Lyssa.
 * @param {string} name      clave del set (ver lista)
 * @param {number} size      px (default 24; mínimo de uso 16)
 * @param {"fg"|"accent"|"danger"|"success"|"muted"|"current"|string} tone  color del trazo
 */
function Icon({
  name,
  size = 24,
  tone = "fg",
  title,
  style,
  ...rest
}) {
  const render = PATHS[name];
  const toneMap = {
    fg: "var(--fg)",
    accent: "var(--accent)",
    danger: "var(--danger)",
    success: "var(--success)",
    muted: "var(--muted)",
    info: "var(--info)",
    warning: "var(--warning)",
    current: "currentColor"
  };
  const color = toneMap[tone] || tone;
  if (!render) {
    if (typeof console !== "undefined") console.warn(`Lyssa Icon: ícono desconocido "${name}"`);
    return null;
  }
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    role: "img",
    "aria-label": title,
    "aria-hidden": title ? undefined : true,
    style: {
      display: "inline-block",
      flex: "none",
      verticalAlign: "middle",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("g", {
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "square",
    strokeLinejoin: "miter"
  }, render(color)));
}

/** Nombres disponibles, para iteración en specimens. */
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ════════════════════════════════════════════════════════════════════════
   Button · Roboto 500, radius 3px, sin gradiente, sin sombra en reposo.
   Variantes: primary (acento) · secondary (outline 1.5px) · danger · text.
   ════════════════════════════════════════════════════════════════════════ */

const SIZES = {
  sm: {
    minHeight: 32,
    padding: "0 12px",
    fontSize: 13,
    gap: 7,
    icon: 16
  },
  md: {
    minHeight: 40,
    padding: "0 18px",
    fontSize: 15,
    gap: 8,
    icon: 18
  },
  lg: {
    minHeight: 48,
    padding: "0 24px",
    fontSize: 16,
    gap: 9,
    icon: 20
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  // nombre de Icon a la izquierda
  iconRight,
  // nombre de Icon a la derecha
  disabled = false,
  fullWidth = false,
  type = "button",
  style,
  ...rest
}) {
  const sz = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const base = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: sz.gap,
    minHeight: sz.minHeight,
    padding: sz.padding,
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    fontSize: sz.fontSize,
    lineHeight: 1,
    borderRadius: "var(--radius-button)",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard), border-color var(--dur-fast)",
    border: "1.5px solid transparent",
    whiteSpace: "nowrap"
  };
  let variantStyle;
  if (disabled) {
    variantStyle = {
      background: "color-mix(in srgb, var(--fg) 8%, var(--bg))",
      color: "var(--faint)",
      border: "1.5px solid transparent"
    };
  } else if (variant === "primary") {
    variantStyle = {
      background: "var(--accent)",
      color: "var(--accent-ink)",
      boxShadow: hover ? "var(--shadow-button)" : "none"
    };
  } else if (variant === "secondary") {
    variantStyle = {
      background: hover ? "color-mix(in srgb, var(--fg) 5%, transparent)" : "transparent",
      color: "var(--fg)",
      border: "1.5px solid var(--fg)"
    };
  } else if (variant === "danger") {
    variantStyle = {
      background: "var(--danger)",
      color: "#FFFFFF",
      boxShadow: hover ? "var(--shadow-button)" : "none"
    };
  } else if (variant === "text") {
    variantStyle = {
      background: hover ? "color-mix(in srgb, var(--accent) 8%, transparent)" : "transparent",
      color: "var(--accent-text)"
    };
  }
  const iconTone = variant === "primary" ? "current" : variant === "danger" ? "current" : variant === "text" ? "accent" : "fg";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variantStyle,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: sz.icon,
    tone: iconTone
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: sz.icon,
    tone: iconTone
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Fab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ════════════════════════════════════════════════════════════════════════
   Fab · botón de acción flotante. Círculo de acento, fijo abajo a la derecha.
   Acción principal de una vista (p. ej. "Agregar" en una lista).
   ════════════════════════════════════════════════════════════════════════ */

function Fab({
  icon = "add",
  label,
  tone = "accent",
  onClick,
  fixed = true,
  style,
  ...rest
}) {
  const bg = tone === "danger" ? "var(--danger)" : "var(--accent)";
  const ink = tone === "danger" ? "#fff" : "var(--accent-ink)";
  const pos = fixed ? {
    position: "fixed",
    bottom: 24,
    right: 24,
    zIndex: 900
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    "aria-label": label || icon,
    style: {
      ...pos,
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      height: 56,
      width: label ? "auto" : 56,
      padding: label ? "0 22px 0 18px" : 0,
      justifyContent: "center",
      borderRadius: label ? "var(--radius-pill)" : "999px",
      background: bg,
      color: ink,
      border: 0,
      cursor: "pointer",
      boxShadow: "var(--shadow-modal)",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    tone: ink
  }), label);
}
Object.assign(__ds_scope, { Fab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Fab.jsx", error: String((e && e.message) || e) }); }

// components/data/FilterBar.jsx
try { (() => {
/* ════════════════════════════════════════════════════════════════════════
   FilterBar · panel de filtros de una página de lista. Superficie con
   borde-superior de 3px acento, título H4 con ícono de lupa y acción
   "Limpiar filtros". Los campos van en una rejilla responsiva; envuelve
   cada control (Input/Select) en <FilterField label="…">. Margen inf. 16px.
   ════════════════════════════════════════════════════════════════════════ */

function FilterBar({
  title = "Filtros de búsqueda",
  titleIcon = "search",
  onClear,
  columns,
  // nº fijo de columnas; por defecto auto-fit minmax(280px)
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "3px solid var(--accent)",
      border: "1px solid var(--line)",
      borderTopWidth: 3,
      borderRadius: "var(--radius-card)",
      background: "var(--surface)",
      padding: "16px 20px",
      marginBottom: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--fs-h4)",
      letterSpacing: "var(--ls-caps)",
      color: "var(--fg)"
    }
  }, titleIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: titleIcon,
    size: 18,
    tone: "fg"
  }), /*#__PURE__*/React.createElement("span", null, title)), onClear && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    icon: "cleaning",
    onClick: onClear
  }, "Limpiar filtros")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: columns ? `repeat(${columns}, 1fr)` : "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 16
    }
  }, children));
}

/** Envoltura de un campo de filtro: etiqueta (con ícono opcional) + control. */
function FilterField({
  label,
  icon,
  required,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 6,
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: 500,
      color: "var(--fg)"
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    tone: "muted"
  }), /*#__PURE__*/React.createElement("span", null, label), required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--danger)"
    }
  }, "*")), children);
}
Object.assign(__ds_scope, { FilterBar, FilterField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/FilterBar.jsx", error: String((e && e.message) || e) }); }

// components/data/PageHeader.jsx
try { (() => {
/* ════════════════════════════════════════════════════════════════════════
   PageHeader · encabezado de página de lista (Admin/ControlApp).
   Kicker mono de acento · título H2 Montserrat con ícono y badge de total ·
   descripción Roboto 14 muted · acciones a la derecha (última actualización
   + Actualizar). Margen inferior 24px. Es la primera fila de toda página.
   ════════════════════════════════════════════════════════════════════════ */

function PageHeader({
  eyebrow,
  title,
  description,
  titleIcon,
  // nombre de Icon a la izquierda del título
  count,
  // total para el badge (número o string)
  countLabel,
  // etiqueta mono del badge, p.ej. "CLIENTES"
  lastUpdate,
  // texto de "última actualización"
  onRefresh,
  // muestra el botón Actualizar
  actions,
  // nodos extra a la derecha (antes de Actualizar)
  style
}) {
  const hasActions = lastUpdate != null || onRefresh || actions;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-kicker)",
      fontWeight: 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--accent-text)",
      marginBottom: 8
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--fs-h2)",
      lineHeight: "var(--lh-heading)",
      color: "var(--fg)"
    }
  }, titleIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: titleIcon,
    size: 26,
    tone: "fg"
  }), /*#__PURE__*/React.createElement("span", null, title), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "0 12px",
      height: 30,
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--line)",
      borderLeft: "3px solid var(--accent)",
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 18,
      lineHeight: 1,
      color: "var(--fg)"
    }
  }, typeof count === "number" ? count.toLocaleString() : count), countLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, countLabel))), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: "var(--fs-body-sm)",
      lineHeight: "var(--lh-compact)",
      color: "var(--muted)"
    }
  }, description)), hasActions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      flexWrap: "wrap"
    }
  }, lastUpdate != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: "var(--fs-body-sm)",
      color: "var(--muted)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "history",
    size: 16,
    tone: "muted"
  }), " \xDAltima actualizaci\xF3n: ", lastUpdate), actions, onRefresh && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    icon: "refresh",
    onClick: onRefresh
  }, "Actualizar"))));
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/data/Pagination.jsx
try { (() => {
/* ════════════════════════════════════════════════════════════════════════
   TableControls · barra sobre la tabla: selector de "elementos por página"
   + conteo "Mostrando X de Y". Pagination · navegación centrada bajo la
   tabla, botones de 44px mínimo (tap target), activo en acento.
   ════════════════════════════════════════════════════════════════════════ */

const controlText = {
  fontFamily: "var(--font-body)",
  fontSize: "var(--fs-body-sm)",
  color: "var(--muted)"
};
function TableControls({
  limit = 10,
  options = [5, 10, 20, 25, 50],
  onLimitChange,
  shown,
  total,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      minHeight: 48,
      marginBottom: 16,
      flexWrap: "wrap",
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      ...controlText
    }
  }, "Elementos por p\xE1gina:", /*#__PURE__*/React.createElement("select", {
    value: limit,
    onChange: e => onLimitChange && onLimitChange(Number(e.target.value)),
    style: {
      minHeight: 44,
      padding: "0 10px",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--fg)",
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-input)",
      cursor: "pointer"
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o)))), shown != null && total != null && /*#__PURE__*/React.createElement("span", {
    style: controlText
  }, "Mostrando ", shown, " de ", total, " resultados"));
}
function pageWindow(page, totalPages, span = 5) {
  let start = Math.max(1, page - Math.floor(span / 2));
  let end = Math.min(totalPages, start + span - 1);
  start = Math.max(1, end - span + 1);
  const out = [];
  for (let i = start; i <= end; i++) out.push(i);
  return out;
}
function PagerButton({
  children,
  active,
  disabled,
  onClick,
  ariaLabel
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": ariaLabel,
    "aria-current": active ? "page" : undefined,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      minWidth: 44,
      minHeight: 44,
      padding: "0 8px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: active ? 600 : 500,
      color: active ? "var(--accent-ink)" : disabled ? "var(--faint)" : "var(--fg)",
      background: active ? "var(--accent)" : hover && !disabled ? "color-mix(in srgb, var(--fg) 5%, transparent)" : "transparent",
      border: "1px solid",
      borderColor: active ? "var(--accent)" : "var(--line)",
      borderRadius: "var(--radius-input)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--dur-fast) var(--ease-standard)"
    }
  }, children);
}
function Pagination({
  page = 1,
  totalPages = 1,
  onPageChange,
  hideIfSinglePage = true,
  style
}) {
  if (hideIfSinglePage && totalPages <= 1) return null;
  const safe = Math.max(1, Math.min(page, totalPages || 1));
  const go = p => onPageChange && p >= 1 && p <= totalPages && p !== safe && onPageChange(p);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 12,
      minHeight: 48,
      marginTop: 16,
      flexWrap: "wrap",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--muted)",
      marginRight: 4
    }
  }, "P\xE1gina ", safe, " de ", totalPages), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(PagerButton, {
    ariaLabel: "Anterior",
    disabled: safe <= 1,
    onClick: () => go(safe - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronRight",
    size: 16,
    tone: "current",
    style: {
      transform: "rotate(180deg)"
    }
  })), pageWindow(safe, totalPages).map(p => /*#__PURE__*/React.createElement(PagerButton, {
    key: p,
    active: p === safe,
    onClick: () => go(p),
    ariaLabel: `Página ${p}`
  }, p)), /*#__PURE__*/React.createElement(PagerButton, {
    ariaLabel: "Siguiente",
    disabled: safe >= totalPages,
    onClick: () => go(safe + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronRight",
    size: 16,
    tone: "current"
  }))));
}
Object.assign(__ds_scope, { TableControls, Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
/* ════════════════════════════════════════════════════════════════════════
   Alert · aviso contextual. Fondo color-mix 9%, borde 30%, barra-izq 3px.
   Severidades: success · warning · danger · info. Sin sombra.
   ════════════════════════════════════════════════════════════════════════ */

const SEV = {
  success: {
    color: "var(--success)",
    icon: "checkCircle"
  },
  warning: {
    color: "var(--warning)",
    icon: "alert"
  },
  danger: {
    color: "var(--danger)",
    icon: "alert"
  },
  info: {
    color: "var(--info)",
    icon: "info"
  }
};
function Alert({
  severity = "info",
  title,
  children,
  icon = true,
  onClose,
  style
}) {
  const s = SEV[severity] || SEV.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: "14px 16px",
      borderRadius: "var(--radius-card)",
      background: `color-mix(in srgb, ${s.color} 9%, var(--surface))`,
      border: `1px solid color-mix(in srgb, ${s.color} 30%, var(--surface))`,
      borderLeft: `3px solid ${s.color}`,
      color: "var(--fg)",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 22,
    tone: severity === "warning" ? "warning" : severity,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 15,
      marginBottom: children ? 3 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: 1.5,
      color: "var(--muted)"
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      background: "transparent",
      border: 0,
      cursor: "pointer",
      padding: 2,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 18,
    tone: "muted"
  })));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/* ════════════════════════════════════════════════════════════════════════
   Modal · TODA acción de crear/editar abre una ventana sobre la página.
   NUNCA formulario inline. Overlay con scrim, contenedor 640px, radius 4px.
   Anatomía: header (kicker + título) · body · footer (Cancelar + primaria).
   ════════════════════════════════════════════════════════════════════════ */

function Modal({
  open = true,
  onClose,
  kicker,
  title,
  children,
  footer,
  width = "min(640px, 96vw)"
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--scrim)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      background: "var(--surface)",
      color: "var(--fg)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-modal)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12,
      padding: "20px 24px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", null, kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-kicker)",
      fontWeight: 500,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--accent-text)",
      marginBottom: 6
    }
  }, kicker), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.15
    }
  }, title)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      background: "transparent",
      border: 0,
      cursor: "pointer",
      padding: 4,
      display: "inline-flex",
      marginTop: -2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 20,
    tone: "muted"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 24px",
      overflowY: "auto"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8,
      padding: "16px 24px 20px",
      borderTop: "1px solid var(--line)",
      marginTop: 4
    }
  }, footer)));
}

/** Título de sección dentro del body de un modal/formulario. */
function FormSectionTitle({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      fontWeight: 500,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--accent-text)",
      borderBottom: "1px solid var(--line)",
      paddingBottom: 6,
      marginBottom: 14,
      marginTop: 8,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Modal, FormSectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/PushIndicator.jsx
try { (() => {
/* ════════════════════════════════════════════════════════════════════════
   PushIndicator · estado de la suscripción a notificaciones push (header).
   Estados reales de ReportApp: subscribed · denied · unregistered ·
   unsupported · idle. Sobre el header tinta: neutro = fg/blanco, activo =
   éxito, bloqueado = peligro. El estado denegado/sin-soporte muestra slash.
   ════════════════════════════════════════════════════════════════════════ */

const PUSH = {
  subscribed: {
    tone: "success",
    off: false,
    label: "Notificaciones activas"
  },
  denied: {
    tone: "danger",
    off: true,
    label: "Notificaciones bloqueadas"
  },
  unregistered: {
    tone: "fg",
    off: true,
    label: "Dispositivo no registrado"
  },
  unsupported: {
    tone: "fg",
    off: true,
    label: "Notificaciones no disponibles"
  },
  idle: {
    tone: "fg",
    off: false,
    label: "Activando notificaciones…"
  }
};
function PushIndicator({
  status = "idle",
  onHeader = false,
  size = 22,
  style
}) {
  const s = PUSH[status] || PUSH.idle;
  const tone = onHeader && s.tone === "fg" ? "#F2F4F7" : s.tone;
  return /*#__PURE__*/React.createElement("span", {
    title: s.label,
    "aria-label": s.label,
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bell",
    size: size,
    tone: tone
  }), s.off && /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "4",
    x2: "20",
    y2: "20",
    stroke: tone === "#F2F4F7" ? "#F2F4F7" : `var(--${s.tone === "fg" ? "fg" : s.tone})`,
    strokeWidth: "2",
    strokeLinecap: "square"
  })), status === "subscribed" && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -1,
      right: -1,
      width: 7,
      height: 7,
      borderRadius: 999,
      background: "var(--success)"
    }
  }));
}
Object.assign(__ds_scope, { PushIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/PushIndicator.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusOverlay.jsx
try { (() => {
/* ════════════════════════════════════════════════════════════════════════
   StatusOverlay · ventana full-screen de estado (éxito / error). Entra con
   Slide up; el ícono rebota una vez (lyssaBounce). Fondo = color de estado
   sólido (sin gradiente), texto e ícono por contraste. Botón inverso.
   Patrón de "Reporte enviado" de ReportApp.
   ════════════════════════════════════════════════════════════════════════ */

const STATUS = {
  success: {
    bg: "var(--success)",
    icon: "checkCircle"
  },
  danger: {
    bg: "var(--danger)",
    icon: "alert"
  },
  accent: {
    bg: "var(--accent)",
    icon: "check"
  }
};
// Tinta legible sobre cada estado.
const INK = {
  success: "#fff",
  danger: "#fff",
  accent: "var(--accent-ink)"
};
function StatusOverlay({
  open = true,
  status = "success",
  title = "Reporte enviado",
  message = "Su reporte ha sido enviado correctamente.",
  description = "Gracias por su colaboración. La información quedó registrada.",
  buttonText = "Continuar",
  onClose,
  icon
}) {
  if (!open) return null;
  const s = STATUS[status] || STATUS.success;
  const ink = INK[status] || "#fff";
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1100,
      background: s.bg,
      color: ink,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: 32,
      animation: "lyssaSlideUp var(--dur-overlay) var(--ease-decelerate)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      position: "absolute",
      top: 16,
      right: 16,
      width: 40,
      height: 40,
      borderRadius: "var(--radius-button)",
      border: 0,
      cursor: "pointer",
      background: "color-mix(in srgb, " + ink + " 14%, transparent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 22,
    tone: ink
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 22,
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "lyssaBounce 1s var(--ease-standard)"
    }
  }, icon || /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 112,
    tone: ink
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: 1.05
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 19,
      lineHeight: 1.4
    }
  }, message), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: 1.5,
      opacity: 0.9
    }
  }, description), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      marginTop: 8,
      padding: "14px 28px",
      borderRadius: "var(--radius-button)",
      border: 0,
      cursor: "pointer",
      background: ink,
      color: s.bg,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16
    }
  }, buttonText)));
}
Object.assign(__ds_scope, { StatusOverlay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusOverlay.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/* ════════════════════════════════════════════════════════════════════════
   Toggles · Checkbox (cuadrado recto), Switch (track 999px), agrupados.
   Marcado = var(--accent). Sin redondeo en la casilla.
   ════════════════════════════════════════════════════════════════════════ */

function Checkbox({
  checked,
  onChange,
  label,
  disabled,
  id,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 18,
      height: 18,
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 0,
      border: checked ? "1.5px solid var(--accent)" : "1.5px solid var(--faint)",
      background: checked ? "var(--accent)" : "transparent",
      transition: "all var(--dur-fast)"
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    tone: "var(--accent-ink)",
    style: {
      strokeWidth: 3
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--fg)"
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "checkbox",
    checked: checked,
    onChange: e => onChange && onChange(e.target.checked),
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }));
}
function Switch({
  checked,
  onChange,
  label,
  disabled,
  id,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      position: "relative",
      width: 38,
      height: 22,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      background: checked ? "color-mix(in srgb, var(--accent) 50%, var(--surface))" : "color-mix(in srgb, var(--fg) 30%, transparent)",
      transition: "background var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 19 : 3,
      width: 16,
      height: 16,
      borderRadius: "999px",
      background: checked ? "var(--accent)" : "var(--surface)",
      boxShadow: "0 1px 2px rgba(0,0,0,0.25)",
      transition: "left var(--dur-base) var(--ease-standard)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--fg)"
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "checkbox",
    checked: checked,
    onChange: e => onChange && onChange(e.target.checked),
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }));
}
Object.assign(__ds_scope, { Checkbox, Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ════════════════════════════════════════════════════════════════════════
   Campos de formulario · outlined, radius 3px, focus con anillo de acento.
   Field envuelve label + control + hint/error. Input / Textarea / Select.
   ════════════════════════════════════════════════════════════════════════ */

function fieldFocusStyle(focused, error) {
  const c = error ? "var(--danger)" : "var(--accent)";
  return {
    border: `1px solid ${focused ? c : error ? "var(--danger)" : "var(--line)"}`,
    borderWidth: focused ? 1.5 : 1,
    boxShadow: focused ? `0 0 0 3px color-mix(in srgb, ${c} 15%, transparent)` : "none"
  };
}
const controlBase = {
  width: "100%",
  fontFamily: "var(--font-body)",
  fontSize: 15,
  color: "var(--fg)",
  background: "var(--surface)",
  borderRadius: "var(--radius-input)",
  padding: "10px 12px",
  outline: "none",
  transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
  boxSizing: "border-box"
};
function Field({
  label,
  hint,
  error,
  htmlFor,
  required,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 13,
      color: "var(--fg)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--danger)"
    }
  }, " *")), children, (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: error ? "var(--danger)" : "var(--muted)"
    }
  }, error || hint));
}
function Input({
  error,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      ...controlBase,
      ...fieldFocusStyle(focused, error),
      ...style
    }
  }, rest));
}
function Textarea({
  error,
  rows = 4,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      ...controlBase,
      resize: "vertical",
      lineHeight: 1.5,
      ...fieldFocusStyle(focused, error),
      ...style
    }
  }, rest));
}
function Select({
  error,
  children,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      ...controlBase,
      appearance: "none",
      paddingRight: 38,
      cursor: "pointer",
      ...fieldFocusStyle(focused, error),
      ...style
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 11,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronDown",
    size: 18,
    tone: "accent"
  })));
}
Object.assign(__ds_scope, { Field, Input, Textarea, Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomSheet.jsx
try { (() => {
/* ════════════════════════════════════════════════════════════════════════
   BottomSheet · hoja inferior deslizable (patrón de Rondas). Entra con Slide
   up; scrim de marca; agarradera superior. Para flujos de escaneo/confirmación
   en terreno donde un modal centrado estorba al pulgar.
   ════════════════════════════════════════════════════════════════════════ */

function BottomSheet({
  open = true,
  onClose,
  title,
  children,
  footer,
  maxHeight = "82%"
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 1000,
      background: "var(--scrim)",
      display: "flex",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width: "100%",
      maxHeight,
      display: "flex",
      flexDirection: "column",
      background: "var(--surface)",
      color: "var(--fg)",
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      boxShadow: "var(--shadow-modal)",
      animation: "lyssaSlideUp var(--dur-overlay) var(--ease-decelerate)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 4,
      borderRadius: 999,
      background: "var(--line)"
    }
  })), title && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 20px 10px",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      overflowY: "auto"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: "12px 20px 18px",
      borderTop: "1px solid var(--line)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/* ════════════════════════════════════════════════════════════════════════
   Tabs · indicador de 3px en color de acento. Roboto 600. Sin redondeo.
   Controlado: value + onChange. items = [{ value, label }]
   ════════════════════════════════════════════════════════════════════════ */

function Tabs({
  items = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1px solid var(--line)",
      ...style
    }
  }, items.map(it => {
    const active = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(it.value),
      style: {
        position: "relative",
        padding: "11px 16px",
        minHeight: 44,
        background: "transparent",
        border: 0,
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 14,
        color: active ? "var(--fg)" : "var(--muted)",
        transition: "color var(--dur-fast)"
      }
    }, it.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: 3,
        background: active ? "var(--accent)" : "transparent"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/system/Haptics.jsx
try { (() => {
/* ════════════════════════════════════════════════════════════════════════
   Haptics · retroalimentación por vibración (Vibration API).
   Patrones canónicos de ReportApp (PWA del guardia). Cada llamada es un no-op
   donde el dispositivo/navegador no soporta navigator.vibrate (iOS Safari,
   escritorio). Acompaña · nunca reemplaza · la señal visual.
   ════════════════════════════════════════════════════════════════════════ */

function vibrate(pattern) {
  try {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(pattern);
    }
  } catch {
    /* Haptics no soportado / bloqueado · ignorar. */
  }
}

/** Patrones de marca (ms). Un número = pulso único; arreglo = vibrar/pausar… */
const HAPTIC_PATTERNS = {
  success: 30,
  // corto y sutil: algo se envió correctamente
  error: [90, 60, 90, 60, 120],
  // largo e intenso: ocurrió un error
  scan: [15, 30, 15],
  // sutil y distinto: NFC / QR / cédula leída
  tap: 10 // confirmación táctil mínima (opcional)
};

/**
 * API de haptics de Lyssa. Dispara los patrones canónicos.
 *   Haptics.success()  ·  Haptics.error()  ·  Haptics.scan()
 */
const Haptics = {
  /** Corto y sutil: algo se envió correctamente. */
  success() {
    vibrate(HAPTIC_PATTERNS.success);
  },
  /** Más largo e intenso: ocurrió un error. */
  error() {
    vibrate(HAPTIC_PATTERNS.error);
  },
  /** Sutil y distinto: se leyó una tarjeta NFC, un código QR o una cédula. */
  scan() {
    vibrate(HAPTIC_PATTERNS.scan);
  },
  /** Confirmación táctil mínima para un toque (opcional). */
  tap() {
    vibrate(HAPTIC_PATTERNS.tap);
  },
  /** Patrón arbitrario (número o arreglo de ms). Úsalo solo si los anteriores no aplican. */
  custom(pattern) {
    vibrate(pattern);
  },
  /** Cancela cualquier vibración en curso. */
  stop() {
    vibrate(0);
  },
  /** true si el dispositivo expone la Vibration API. */
  get supported() {
    return typeof navigator !== "undefined" && "vibrate" in navigator;
  }
};
Object.assign(__ds_scope, { HAPTIC_PATTERNS, Haptics });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/system/Haptics.jsx", error: String((e && e.message) || e) }); }

// components/feedback/HoldButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ════════════════════════════════════════════════════════════════════════
   HoldButton · botón de "mantén presionado". Patrón del botón de pánico:
   presión continua durante `duration` ms (5s por defecto) con anillo de
   progreso; al completarse dispara onComplete + vibración. Soltar antes
   cancela. placement: page (círculo 200px) · floating (FAB 64px) · header.
   ════════════════════════════════════════════════════════════════════════ */

const TONE = {
  danger: "var(--danger)",
  accent: "var(--accent)",
  success: "var(--success)"
};
const TONE_INK = {
  danger: "#fff",
  accent: "var(--accent-ink)",
  success: "#fff"
};
function HoldButton({
  duration = 5000,
  onComplete,
  tone = "danger",
  icon = "alert",
  label = "MANTENGA\nPRESIONADO",
  holdingLabel = "SUELTE PARA\nCANCELAR",
  placement = "page",
  haptics = true,
  style
}) {
  const [progress, setProgress] = React.useState(0);
  const [holding, setHolding] = React.useState(false);
  const startRef = React.useRef(null);
  const rafRef = React.useRef(null);
  const c = TONE[tone] || TONE.danger;
  const ink = TONE_INK[tone] || "#fff";
  const clear = React.useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    startRef.current = null;
  }, []);
  React.useEffect(() => clear, [clear]);
  const tick = React.useCallback(() => {
    const start = startRef.current;
    if (start == null) return;
    const pct = Math.min(100, (Date.now() - start) / duration * 100);
    setProgress(pct);
    if (pct >= 100) {
      clear();
      setHolding(false);
      if (haptics) __ds_scope.Haptics.success();
      onComplete && onComplete();
    } else {
      rafRef.current = requestAnimationFrame(tick);
    }
  }, [duration, clear, onComplete, haptics]);
  const start = e => {
    e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId);
    if (haptics) __ds_scope.Haptics.tap();
    setHolding(true);
    setProgress(0);
    startRef.current = Date.now();
    rafRef.current = requestAnimationFrame(tick);
  };
  const cancel = () => {
    if (!holding) return;
    clear();
    setHolding(false);
    setProgress(0);
  };
  const handlers = {
    onPointerDown: start,
    onPointerUp: cancel,
    onPointerCancel: cancel,
    onContextMenu: e => e.preventDefault()
  };
  if (placement === "header") {
    return /*#__PURE__*/React.createElement("button", _extends({}, handlers, {
      "aria-label": "Mantenga presionado",
      style: {
        position: "relative",
        width: 40,
        height: 40,
        borderRadius: "var(--radius-button)",
        background: "transparent",
        border: 0,
        cursor: "pointer",
        touchAction: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...style
      }
    }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: icon,
      size: 24,
      tone: tone
    }), holding && /*#__PURE__*/React.createElement(Ring, {
      size: 40,
      stroke: 3,
      pct: progress,
      color: c
    }));
  }
  const dim = placement === "floating" ? 64 : 200;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({}, handlers, {
    "aria-label": "Mantenga presionado",
    style: {
      width: dim,
      height: dim,
      borderRadius: "999px",
      background: c,
      color: ink,
      border: 0,
      cursor: "pointer",
      touchAction: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: placement === "floating" ? 0 : 10,
      animation: !holding ? "panicPulse 2s ease-out infinite" : "none"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: placement === "floating" ? 28 : 56,
    tone: ink
  }), placement === "page" && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 14,
      letterSpacing: "0.5px",
      lineHeight: 1.2,
      textAlign: "center",
      whiteSpace: "pre-line"
    }
  }, holding ? holdingLabel : label)), holding && /*#__PURE__*/React.createElement(Ring, {
    size: dim,
    stroke: placement === "floating" ? 4 : 8,
    pct: progress,
    color: ink
  }));
}
function Ring({
  size,
  stroke,
  pct,
  color
}) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      position: "absolute",
      inset: 0,
      transform: "rotate(-90deg)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeOpacity: 0.25,
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "butt",
    strokeDasharray: circ,
    strokeDashoffset: circ * (1 - pct / 100)
  }));
}
Object.assign(__ds_scope, { HoldButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/HoldButton.jsx", error: String((e && e.message) || e) }); }

// documents/DocumentDefinitions.jsx
try { (() => {
/* ════════════════════════════════════════════════════════════════════════
   DocumentDefinitions · catálogo canónico de ARCHIVOS DE SALIDA: documentos
   impresos (DOCX / PDF) y presentaciones (PDF / PowerPoint) de marca Lyssa.
   Espejo de los entregables reales: propuesta de servicio, informe de turno,
   registro de auditoría, resumen al cliente y presentación de producto.

   Úsalo como fuente única para: tamaños de página, márgenes, orientación,
   tema, formatos de exportación e íconos. Geometría en px @96dpi (CSS) y mm.
   No inventes formatos ni tamaños nuevos.
   ════════════════════════════════════════════════════════════════════════ */

/** Tamaños de página canónicos (px @96dpi · mm). Carta es el default en Chile. */
const PAGE_SIZES = {
  letter: {
    label: "Carta",
    portrait: {
      w: 816,
      h: 1056
    },
    mm: {
      w: 216,
      h: 279
    }
  },
  a4: {
    label: "A4",
    portrait: {
      w: 794,
      h: 1123
    },
    mm: {
      w: 210,
      h: 297
    }
  },
  slide16x9: {
    label: "16:9",
    landscapeOnly: true,
    size: {
      w: 1920,
      h: 1080
    }
  }
};

/** Márgenes de impresión de marca (mm). El borde de acento de 6px va al borde físico. */
const PRINT_MARGINS = {
  document: {
    top: 22,
    right: 20,
    bottom: 22,
    left: 20
  },
  // documentos de texto
  cover: {
    top: 28,
    right: 24,
    bottom: 28,
    left: 24
  } // portadas / two-pager
};

/** Formato de exportación → extensión + ícono + nota. */
const EXPORT_FORMATS = {
  pdf: {
    label: "PDF",
    ext: ".pdf",
    icon: "file",
    note: "Entregable final, no editable. Fuentes embebidas."
  },
  docx: {
    label: "Word",
    ext: ".docx",
    icon: "file",
    note: "Editable. Sustituir fuentes por Montserrat/Roboto del sistema."
  },
  pptx: {
    label: "PowerPoint",
    ext: ".pptx",
    icon: "report",
    note: "Editable. 1920×1080, una página por slide."
  }
};

/**
 * Catálogo de entregables. `type`:
 *   doc   = documento impreso de texto (fluye en páginas)
 *   cover = pieza de página fija (two-pager, ficha)
 *   deck  = presentación de slides 16:9
 * `theme`: paper (papel claro) · navy (tinta) · define la portada.
 */
const DOCUMENT_DEFINITIONS = [{
  id: "proposal",
  label: "Propuesta de Servicio",
  icon: "file",
  type: "cover",
  page: "letter",
  orientation: "portrait",
  theme: "paper",
  margins: "cover",
  formats: ["pdf", "docx"],
  summary: "Documento comercial de 2 páginas (two-pager) sobre papel claro: portada con barra de acento + detalle de servicio. Cierra con contacto.",
  sections: ["Portada", "Quiénes somos", "Alcance del servicio", "Cumplimiento OS-10", "Contacto"],
  fonts: {
    display: "Montserrat",
    body: "Roboto",
    data: "Roboto Mono"
  }
}, {
  id: "shift-report",
  label: "Informe de Turno",
  icon: "report",
  type: "doc",
  page: "letter",
  orientation: "portrait",
  theme: "paper",
  margins: "document",
  formats: ["pdf", "docx"],
  summary: "Informe operacional generado por turno: rondas, accesos, novedades y eventos con marca de tiempo. Zebra en tablas.",
  sections: ["Encabezado de turno", "Resumen", "Bitácora de eventos", "Novedades", "Firma del dispositivo"],
  fonts: {
    display: "Montserrat",
    body: "Roboto",
    data: "Roboto Mono"
  }
}, {
  id: "audit-log",
  label: "Registro de Auditoría",
  icon: "history",
  type: "doc",
  page: "a4",
  orientation: "landscape",
  theme: "paper",
  margins: "document",
  formats: ["pdf"],
  summary: "Exportación tabular de eventos para auditoría (Carabineros / cliente). Una fila por documento de terreno; columnas mono.",
  sections: ["Filtros aplicados", "Tabla de eventos", "Totales", "Sello y fecha de emisión"],
  fonts: {
    display: "Montserrat",
    body: "Roboto",
    data: "Roboto Mono"
  }
}, {
  id: "client-onepager",
  label: "Resumen al Cliente",
  icon: "clients",
  type: "cover",
  page: "a4",
  orientation: "portrait",
  theme: "paper",
  margins: "cover",
  formats: ["pdf"],
  summary: "Ficha de una página para el cliente: indicadores del período (rondas, accesos, incidentes) sin exponer datos internos.",
  sections: ["Cabecera con logo", "Indicadores del período", "Línea de tiempo de incidentes", "Pie con contacto"],
  fonts: {
    display: "Montserrat",
    body: "Roboto",
    data: "Roboto Mono"
  }
}, {
  id: "product-deck",
  label: "Presentación de Producto",
  icon: "report",
  type: "deck",
  page: "slide16x9",
  orientation: "landscape",
  theme: "navy",
  margins: null,
  formats: ["pdf", "pptx"],
  summary: "Deck comercial 1920×1080. Alterna fondos tinta y papel; barra de acento de 6px al borde, rejilla sutil sobre tinta, kicker mono numerado.",
  sections: ["Portada", "Quiénes somos (stats)", "El problema", "La plataforma", "El guardia", "Alertas", "Cumplimiento", "Por qué Lyssa", "Cierre"],
  fonts: {
    display: "Montserrat",
    body: "Roboto",
    data: "Roboto Mono"
  }
}];

/** Búsquedas. */
function getDocumentDefinition(id) {
  return DOCUMENT_DEFINITIONS.find(d => d.id === id) || null;
}
function getPageSize(id) {
  return PAGE_SIZES[id] || null;
}
function getExportFormat(id) {
  return EXPORT_FORMATS[id] || null;
}

/** Alias del catálogo. */
const DocumentDefinitions = DOCUMENT_DEFINITIONS;

/** Helpers expuestos en el bundle (window.<NS> solo expone nombres con mayúscula inicial). */
const DocumentHelpers = {
  getDocumentDefinition,
  getPageSize,
  getExportFormat
};
Object.assign(__ds_scope, { PAGE_SIZES, PRINT_MARGINS, EXPORT_FORMATS, DOCUMENT_DEFINITIONS, getDocumentDefinition, getPageSize, getExportFormat, DocumentDefinitions, DocumentHelpers });
})(); } catch (e) { __ds_ns.__errors.push({ path: "documents/DocumentDefinitions.jsx", error: String((e && e.message) || e) }); }

// documents/DocFormat.jsx
try { (() => {
/* ════════════════════════════════════════════════════════════════════════
   DocFormat · ficha de un archivo de salida (documento / presentación). Toma
   el `type` (id de DOCUMENT_DEFINITIONS) y muestra una miniatura proporcional
   de la página (con tema y barra de acento), el tamaño/orientación y los
   chips de formato de exportación (PDF / Word / PowerPoint).
   ════════════════════════════════════════════════════════════════════════ */

function DocFormat({
  type,
  onClick,
  style
}) {
  const def = __ds_scope.getDocumentDefinition(type);
  if (!def) return null;
  const ps = __ds_scope.getPageSize(def.page);
  const geom = ps.size || ps.portrait;
  const land = def.orientation === "landscape";
  const w = land ? Math.max(geom.w, geom.h) : Math.min(geom.w, geom.h);
  const h = land ? Math.min(geom.w, geom.h) : Math.max(geom.w, geom.h);
  const thumbH = 116;
  const thumbW = Math.round(thumbH * (w / h));
  const navy = def.theme === "navy";
  const accentEdge = def.theme === "navy" ? "#FEBE10" : "#00539A";
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: "flex",
      gap: 18,
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-card)",
      padding: 18,
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      width: thumbW,
      height: thumbH,
      position: "relative",
      background: navy ? "#0A0E65" : "#FFFFFF",
      border: "1px solid var(--line)",
      borderRadius: 2,
      overflow: "hidden",
      boxShadow: "var(--shadow-button)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 4,
      background: accentEdge
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      padding: "12px 12px 12px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: def.type === "deck" ? "report" : "file",
    size: 16,
    tone: navy ? "#FEBE10" : "#00539A"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "62%",
      height: 6,
      borderRadius: 2,
      background: navy ? "rgba(242,244,247,0.85)" : "#0A0E65",
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "84%",
      height: 3,
      borderRadius: 2,
      background: navy ? "rgba(242,244,247,0.3)" : "var(--line)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "78%",
      height: 3,
      borderRadius: 2,
      background: navy ? "rgba(242,244,247,0.3)" : "var(--line)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "50%",
      height: 3,
      borderRadius: 2,
      background: navy ? "rgba(242,244,247,0.3)" : "var(--line)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: def.icon,
    size: 20,
    tone: "fg"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16,
      color: "var(--fg)"
    }
  }, def.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--muted)",
      letterSpacing: "0.02em"
    }
  }, ps.label, " \xB7 ", def.orientation === "landscape" ? "horizontal" : "vertical", ps.mm && ` · ${def.orientation === "landscape" ? `${ps.mm.h}×${ps.mm.w}` : `${ps.mm.w}×${ps.mm.h}`} mm`, ps.size && ` · ${ps.size.w}×${ps.size.h} px`), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12.5,
      lineHeight: 1.45,
      color: "var(--muted)",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, def.summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7,
      marginTop: "auto",
      flexWrap: "wrap"
    }
  }, def.formats.map(f => {
    const ef = __ds_scope.getExportFormat(f);
    return /*#__PURE__*/React.createElement("span", {
      key: f,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "4px 10px",
        borderRadius: "var(--radius-pill)",
        border: "1px solid var(--line)",
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: "var(--fg)"
      }
    }, ef.label, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--muted)"
      }
    }, ef.ext));
  }))));
}
Object.assign(__ds_scope, { DocFormat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "documents/DocFormat.jsx", error: String((e && e.message) || e) }); }

// events/EventDefinitions.jsx
try { (() => {
/* ════════════════════════════════════════════════════════════════════════
   EventDefinitions · catálogo canónico de EVENTOS, ARCHIVOS y DOCUMENTOS que
   ReportApp genera en terreno. Espejo del modelo real de la API (reports,
   awake, rounds, control-logs: keys/lactation/bicycles, novelties, access,
   emergency). Úsalo como fuente única para listas, detalles, badges de estado
   e íconos · no inventes tipos de evento ni estados nuevos.

   Cada definición declara: ícono del set, ruta, feature flag que la habilita,
   patrón de vibración al registrarse, estados (abierto→cerrado) con su tono,
   los campos del documento, y si adjunta imagen/archivo.
   ════════════════════════════════════════════════════════════════════════ */

/** Tono de estado de un documento (mapea a color-mix de Badge). */
const DOC_STATUS = {
  open: {
    label: "Abierto",
    tone: "info"
  },
  inUse: {
    label: "En uso",
    tone: "warning"
  },
  parked: {
    label: "Estacionada",
    tone: "warning"
  },
  returned: {
    label: "Devuelta",
    tone: "success"
  },
  exited: {
    label: "Con salida",
    tone: "success"
  },
  closed: {
    label: "Cerrado",
    tone: "success"
  },
  authorized: {
    label: "Autorizado",
    tone: "success"
  },
  denied: {
    label: "Denegado",
    tone: "danger"
  },
  overdue: {
    label: "Atrasado",
    tone: "danger"
  },
  sent: {
    label: "Enviado",
    tone: "success"
  }
};

/** Subtipos de Novedad (novelty_type del backend). */
const NOVELTY_TYPES = [{
  id: "seguridad",
  label: "Seguridad",
  tone: "info"
}, {
  id: "mantenimiento",
  label: "Mantenimiento",
  tone: "info"
}, {
  id: "incidente",
  label: "Incidente",
  tone: "warning"
}, {
  id: "emergencia",
  label: "Emergencia",
  tone: "danger"
}, {
  id: "turnstile",
  label: "Torniquete",
  tone: "info"
}, {
  id: "drugs",
  label: "Consumo",
  tone: "warning"
}, {
  id: "otro",
  label: "Otro",
  tone: "neutral"
}];

/**
 * Catálogo de eventos/documentos. Orden = orden de presentación.
 * `field.type`: text · mono (IDs/RUT) · time (HH:MM) · date (dd mmm aaaa) ·
 * geo (coordenadas) · profile (perfil de acceso) · enum · bool · minutes.
 */
const EVENT_DEFINITIONS = [{
  id: "report",
  label: "Reporte Inicial",
  icon: "report",
  route: "/initial-report",
  feature: null,
  haptic: "success",
  summary: "Check-in de inicio de turno con credencial, ubicación GPS y foto.",
  endpoint: "/v1/reports/new",
  statuses: ["sent"],
  defaultStatus: "sent",
  file: {
    photo: true,
    field: "picture_filename"
  },
  fields: [{
    key: "user_id",
    label: "Guardia",
    type: "profile"
  }, {
    key: "time",
    label: "Hora",
    type: "time"
  }, {
    key: "coords",
    label: "Ubicación",
    type: "geo"
  }, {
    key: "precision",
    label: "Precisión GPS",
    type: "text"
  }]
}, {
  id: "awake",
  label: "Estoy Despierto",
  icon: "awake",
  route: "/estoy-despierto",
  feature: "awake",
  haptic: "scan",
  summary: "Check-in nocturno cada 30 min: el guardia escanea su propia tarjeta NFC.",
  endpoint: "/v1/awake/new",
  statuses: ["sent", "overdue"],
  defaultStatus: "sent",
  file: {
    photo: false
  },
  fields: [{
    key: "card_id",
    label: "Tarjeta NFC",
    type: "mono"
  }, {
    key: "time",
    label: "Hora",
    type: "time"
  }, {
    key: "coords",
    label: "Ubicación",
    type: "geo"
  }]
}, {
  id: "round",
  label: "Reporte de Rondas",
  icon: "round",
  route: "/rounds",
  feature: null,
  haptic: "scan",
  summary: "Sesión de ronda: escaneo NFC de cada punto de control, con eventos y fotos opcionales por punto.",
  endpoint: "/v1/rounds/session/tag",
  statuses: ["open", "closed", "overdue"],
  defaultStatus: "open",
  file: {
    photo: true,
    field: "event image",
    note: "imagen por evento de punto (event=true)"
  },
  fields: [{
    key: "round",
    label: "Ronda",
    type: "text"
  }, {
    key: "tag_id",
    label: "Punto NFC",
    type: "mono"
  }, {
    key: "scanned",
    label: "Escaneados",
    type: "text"
  }, {
    key: "time",
    label: "Hora",
    type: "time"
  }, {
    key: "comment",
    label: "Comentario",
    type: "text",
    requiredWhen: "event"
  }]
}, {
  id: "access",
  label: "Control de Acceso",
  icon: "access",
  route: "/access-control",
  feature: "accesscontrol",
  haptic: "scan",
  summary: "Registro de ingreso/egreso por perfil de acceso o vehículo; autorizado o denegado.",
  endpoint: "/v1/access",
  statuses: ["authorized", "denied"],
  defaultStatus: "authorized",
  file: {
    photo: true,
    field: "credential / MRZ"
  },
  fields: [{
    key: "profile",
    label: "Persona",
    type: "profile"
  }, {
    key: "document",
    label: "Documento",
    type: "mono"
  }, {
    key: "vehicle",
    label: "Vehículo",
    type: "text"
  }, {
    key: "time",
    label: "Hora",
    type: "time"
  }]
}, {
  id: "key",
  label: "Llaves",
  icon: "key",
  route: "/control-logs",
  feature: "keys",
  haptic: "success",
  summary: "Entrega y devolución de llaves (individual o juego). Idempotente: 409 si la llave ya tiene registro abierto.",
  endpoint: "/v1/access/control-logs/keys/new",
  statuses: ["inUse", "returned"],
  defaultStatus: "inUse",
  file: {
    photo: false
  },
  fields: [{
    key: "key_number",
    label: "N° de llave",
    type: "mono"
  }, {
    key: "key_type",
    label: "Tipo",
    type: "enum",
    options: ["single", "bundle"]
  }, {
    key: "recipient_profile_id",
    label: "Entregada a",
    type: "profile"
  }, {
    key: "delivered_by",
    label: "Entregada por",
    type: "text",
    note: "guardia, resuelto en backend"
  }, {
    key: "description",
    label: "Comentario",
    type: "text"
  }, {
    key: "returned_at",
    label: "Devuelta",
    type: "time"
  }]
}, {
  id: "lactation",
  label: "Sala de Lactancia",
  icon: "room",
  route: "/control-logs",
  feature: "lactation",
  haptic: "success",
  summary: "Ingreso/salida de sala de lactancia por perfil; calcula minutos de uso.",
  endpoint: "/v1/access/control-logs/lactation/new",
  statuses: ["inUse", "exited"],
  defaultStatus: "inUse",
  file: {
    photo: false
  },
  fields: [{
    key: "room_name",
    label: "Sala",
    type: "text"
  }, {
    key: "profile_id",
    label: "Persona",
    type: "profile"
  }, {
    key: "time",
    label: "Ingreso",
    type: "time"
  }, {
    key: "exit_time",
    label: "Salida",
    type: "time"
  }, {
    key: "usage_minutes",
    label: "Minutos de uso",
    type: "minutes"
  }]
}, {
  id: "bicycle",
  label: "Bicicletas",
  icon: "bicycle",
  route: "/control-logs",
  feature: "bicycles",
  haptic: "success",
  summary: "Ingreso/egreso de bicicletas por color y dueño (perfil de acceso).",
  endpoint: "/v1/access/control-logs/bicycles/new",
  statuses: ["parked", "exited"],
  defaultStatus: "parked",
  file: {
    photo: false
  },
  fields: [{
    key: "color",
    label: "Color",
    type: "text"
  }, {
    key: "owner_profile_id",
    label: "Dueño",
    type: "profile"
  }, {
    key: "time",
    label: "Ingreso",
    type: "time"
  }, {
    key: "egress_time",
    label: "Egreso",
    type: "time"
  }]
}, {
  id: "novelty",
  label: "Novedades",
  icon: "note",
  route: "/novedades",
  feature: "novelties",
  haptic: "success",
  summary: "Nota operativa con tipo, descripción y foto opcional. Torniquete y Consumo son subtipos.",
  endpoint: "/v1/novelties/new",
  statuses: ["sent"],
  defaultStatus: "sent",
  file: {
    photo: true,
    field: "picture_filename"
  },
  fields: [{
    key: "novelty_type",
    label: "Tipo",
    type: "enum",
    options: NOVELTY_TYPES.map(n => n.id)
  }, {
    key: "description",
    label: "Descripción",
    type: "text"
  }, {
    key: "time",
    label: "Hora",
    type: "time"
  }]
}, {
  id: "emergency",
  label: "Emergencia (Pánico)",
  icon: "panic",
  route: "/emergencia",
  feature: null,
  haptic: "error",
  summary: "Alerta de pánico por dispositivo (sin login). Mantener 5s; adjunta foto frontal y se repite 1 min.",
  endpoint: "/v1/emergency",
  statuses: ["sent"],
  defaultStatus: "sent",
  file: {
    photo: true,
    field: "foto frontal (reintenta 3×)"
  },
  fields: [{
    key: "device_id",
    label: "Dispositivo",
    type: "mono"
  }, {
    key: "coords",
    label: "Ubicación",
    type: "geo"
  }, {
    key: "time",
    label: "Hora",
    type: "time"
  }]
}];

/** Búsqueda por id. */
function getEventDefinition(id) {
  return EVENT_DEFINITIONS.find(e => e.id === id) || null;
}
/** Resuelve un estado a { label, tone }. */
function getDocStatus(key) {
  return DOC_STATUS[key] || {
    label: key,
    tone: "neutral"
  };
}

/** Alias del catálogo (nombre del módulo). */
const EventDefinitions = EVENT_DEFINITIONS;

/** Helpers expuestos en el bundle (window.<NS> solo expone nombres con mayúscula inicial). */
const EventHelpers = {
  getEventDefinition,
  getDocStatus
};
Object.assign(__ds_scope, { DOC_STATUS, NOVELTY_TYPES, EVENT_DEFINITIONS, getEventDefinition, getDocStatus, EventDefinitions, EventHelpers });
})(); } catch (e) { __ds_ns.__errors.push({ path: "events/EventDefinitions.jsx", error: String((e && e.message) || e) }); }

// events/EventLog.jsx
try { (() => {
/* ════════════════════════════════════════════════════════════════════════
   EventLog · fila de un evento/documento de terreno. Toma el `type` (id de
   EVENT_DEFINITIONS) y resuelve ícono, título y tono de estado. Muestra meta
   (hora · detalle), badge de estado y chip de archivo si adjunta foto.
   Borde-izquierdo de 3px por estado (peligro/aviso/éxito).
   ════════════════════════════════════════════════════════════════════════ */

const STATUS_EDGE = {
  danger: "var(--danger)",
  warning: "var(--warning)",
  success: "var(--success)",
  info: "var(--info)",
  neutral: "var(--line)",
  accent: "var(--accent)"
};
function EventLog({
  type,
  title,
  meta,
  status,
  time,
  hasFile,
  onClick,
  style
}) {
  const def = __ds_scope.getEventDefinition(type) || {
    icon: "file",
    label: type
  };
  const st = status ? __ds_scope.getDocStatus(status) : null;
  const edge = st ? STATUS_EDGE[st.tone] : "var(--line)";
  const fileShown = hasFile ?? def.file?.photo;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13,
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderLeft: `3px solid ${edge}`,
      borderRadius: "var(--radius-card)",
      padding: "12px 14px",
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      width: 38,
      height: 38,
      borderRadius: "var(--radius-button)",
      background: "color-mix(in srgb, var(--fg) 5%, var(--surface))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: def.icon,
    size: 22,
    tone: st ? st.tone : "fg"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 14.5,
      color: "var(--fg)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, title || def.label), time && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--muted)"
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginTop: 4
    }
  }, meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--muted)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, meta), fileShown && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--muted)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "camera",
    size: 13,
    tone: "muted"
  }), "foto"))), st && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: st.tone,
    dot: false
  }, st.label));
}
Object.assign(__ds_scope, { EventLog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "events/EventLog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/_shared/admin-screens.jsx
try { (() => {
/* ════════════════════════════════════════════════════════════════════════
   Admin Screens · bloques de pantalla compartidos por ControlApp y Admin.
   DataTable responsive (tabla en escritorio · tarjetas apiladas en móvil),
   FilterBar, y composiciones de pantalla (Dashboard, lista con modal,
   ControlLogs por pestañas, Novedades). Usa las primitivas del bundle.
   ════════════════════════════════════════════════════════════════════════ */
const {
  Button: SBtn,
  Badge: SBadge,
  RoleLabel: SRole,
  Avatar: SAvatar,
  Icon: SIcon,
  Field: SField,
  Input: SInput,
  Select: SSelect,
  Modal: SModal,
  FormSectionTitle: SFST,
  Card: SCard,
  CardHeader: SCardHeader,
  Alert: SAlert,
  EventLog: SEventLog,
  DOC_STATUS: SDOC
} = window.LyssaDesignSystem_c38568;

/* Barra de filtros: blanca, borde superior ámbar, sin sombra. */
function FilterBar({
  children
}) {
  const t = useAdmin();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.paper,
      border: `1px solid ${t.line}`,
      borderTop: `3px solid ${t.primary}`,
      borderRadius: 4,
      padding: "14px 16px",
      display: "flex",
      gap: 12,
      alignItems: "flex-end",
      flexWrap: "wrap",
      marginBottom: 18
    }
  }, children);
}

/* Tabla responsive: <table> en escritorio, tarjetas apiladas en móvil. */
function DataTable({
  columns,
  rows,
  renderCell,
  onRowClick
}) {
  const t = useAdmin();
  const isMobile = useIsMobile(720);
  if (isMobile) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, rows.map((row, ri) => /*#__PURE__*/React.createElement("div", {
      key: ri,
      onClick: onRowClick ? () => onRowClick(row) : undefined,
      style: {
        background: t.paper,
        border: `1px solid ${t.line}`,
        borderRadius: 4,
        padding: 14,
        cursor: onRowClick ? "pointer" : "default",
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, columns.map((c, ci) => /*#__PURE__*/React.createElement("div", {
      key: ci,
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        fontWeight: 600,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: t.muted,
        flex: "none"
      }
    }, c.label), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: "right",
        minWidth: 0
      }
    }, renderCell(c.key, row)))))));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: `1px solid ${t.line}`,
      borderRadius: 4,
      overflow: "hidden",
      background: t.paper,
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      minWidth: 600
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: c.align || "left",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      background: t.head,
      color: t.bg === "#F7F6F3" ? "#F7F6F3" : t.bg,
      padding: "11px 16px",
      whiteSpace: "nowrap"
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    onClick: onRowClick ? () => onRowClick(row) : undefined,
    style: {
      borderTop: `1px solid ${t.line}`,
      background: ri % 2 ? t.line2 : t.paper,
      cursor: onRowClick ? "pointer" : "default"
    }
  }, columns.map((c, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      padding: "11px 16px",
      textAlign: c.align || "left",
      verticalAlign: "middle"
    }
  }, renderCell(c.key, row))))))));
}
const STATUS_TONE = {
  Activo: "success",
  Suspendido: "warning",
  Inactivo: "neutral",
  Vigente: "success",
  Vencida: "danger"
};
Object.assign(window, {
  AdminFilterBar: FilterBar,
  AdminDataTable: DataTable,
  ADMIN_STATUS_TONE: STATUS_TONE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/_shared/admin-screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/_shared/admin-shell.jsx
try { (() => {
/* ════════════════════════════════════════════════════════════════════════
   Admin Shell · chasis responsive compartido por ControlApp y Admin.
   Replica el Layout real (MUI): AppBar + drawer 250px navy, ítem activo con
   borde-izq de 3px de acento. Acento POR CONTRASTE (azul #00539A claro /
   dorado #FEBE10 oscuro), navy #0A0E65, papel #F2F4F7. Valores alineados a
   ReportApp/src/theme/themes.ts (la fuente de verdad de los temas v2.0).

   EL MENÚ LATERAL ES SIEMPRE COLAPSABLE:
     · Escritorio (≥900px): visible por defecto; el botón ☰ lo colapsa y el
       contenido ocupa todo el ancho.
     · Móvil (<900px): oculto por defecto; ☰ lo abre como overlay con scrim.
   ════════════════════════════════════════════════════════════════════════ */
const {
  Icon: AIcon,
  Avatar: AAvatar,
  PushIndicator: APush
} = window.LyssaDesignSystem_c38568;
function caTokens(dark) {
  return dark ? {
    dark: true,
    logoFull: "../../assets/lyssa-white.svg",
    logoMark: "../../assets/lyssa-sail-white.svg",
    bg: "#11154C",
    paper: "#080B38",
    appbar: "#0A0E47",
    onAppbar: "#F2F4F7",
    fg: "#F2F4F7",
    muted: "#AEB4E8",
    faint: "#7E84C8",
    line: "#262C66",
    line2: "#1A1F55",
    head: "#0A0E47",
    sel: "rgba(254,190,16,0.16)",
    hover: "rgba(242,244,247,0.05)",
    primary: "#FEBE10",
    primaryInk: "#1A1505",
    blue: "#4D97E6",
    success: "#47BF7D",
    danger: "#E5675B",
    warning: "#FEBE10"
  } : {
    dark: false,
    logoFull: "../../assets/lyssa-logo.svg",
    logoMark: "../../assets/lyssa-sail-white.svg",
    bg: "#F2F4F7",
    paper: "#FFFFFF",
    appbar: "#0A0E65",
    onAppbar: "#F2F4F7",
    fg: "#0A0E65",
    muted: "#4A5270",
    faint: "#8A8DA8",
    line: "#DCD9D0",
    line2: "#ECEAE4",
    head: "#0A0E65",
    sel: "rgba(0,83,154,0.14)",
    hover: "rgba(10,14,101,0.04)",
    primary: "#00539A",
    primaryInk: "#FFFFFF",
    blue: "#00539A",
    success: "#1F8A4C",
    danger: "#C23B2E",
    warning: "#FEBE10"
  };
}
const awash = (c, p, base) => `color-mix(in srgb, ${c} ${p}%, ${base})`;
const AdminCtx = React.createContext(null);
const useAdmin = () => React.useContext(AdminCtx);
function useIsMobile(bp = 900) {
  const [m, setM] = React.useState(() => typeof window !== "undefined" && window.innerWidth < bp);
  React.useEffect(() => {
    const on = () => setM(window.innerWidth < bp);
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, [bp]);
  return m;
}
function Sidebar({
  product,
  nav,
  current,
  onNavigate,
  open,
  isMobile,
  onClose
}) {
  const t = useAdmin();
  const width = 250;
  const panel = /*#__PURE__*/React.createElement("aside", {
    style: {
      width,
      flex: "none",
      background: t.paper,
      color: t.fg,
      height: "100%",
      borderRight: `1px solid ${t.line}`,
      overflowY: "auto",
      display: "flex",
      flexDirection: "column"
    }
  }, isMobile && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 18px",
      borderBottom: `1px solid ${t.line}`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: t.logoFull,
    alt: "Lyssa",
    style: {
      height: 30
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar men\xFA",
    style: {
      background: "transparent",
      border: 0,
      cursor: "pointer",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    name: "close",
    size: 22,
    tone: t.fg
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "8px 0"
    }
  }, nav.map(sec => /*#__PURE__*/React.createElement("div", {
    key: sec.title,
    style: {
      marginBottom: 2
    }
  }, sec.title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      fontWeight: 600,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: t.muted,
      padding: "12px 20px 6px"
    }
  }, sec.title), sec.items.map(it => {
    const active = it.id === current;
    return /*#__PURE__*/React.createElement("a", {
      key: it.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate(it.id);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "9px 20px",
        textDecoration: "none",
        background: active ? t.sel : "transparent",
        borderLeft: `3px solid ${active ? t.primary : "transparent"}`,
        paddingLeft: active ? 17 : 20,
        color: active ? t.primary : t.fg
      }
    }, /*#__PURE__*/React.createElement(AIcon, {
      name: it.icon,
      size: 20,
      tone: active ? t.primary : t.muted
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 14,
        fontWeight: active ? 600 : 400
      }
    }, it.label));
  })))));
  if (isMobile) {
    if (!open) return null;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(10,18,30,0.5)",
        zIndex: 40
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 41,
        boxShadow: "8px 0 30px rgba(0,0,0,0.3)",
        animation: "lyssaSlideRight 220ms var(--ease-decelerate)"
      }
    }, panel));
  }
  // Escritorio: colapsable · al cerrar no se renderiza, así el contenido ocupa todo el ancho.
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      flex: "none",
      height: "100%"
    }
  }, panel);
}
function Topbar({
  product,
  onToggle,
  dark,
  onToggleTheme,
  user
}) {
  const t = useAdmin();
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 60,
      flex: "none",
      background: t.appbar,
      color: t.onAppbar,
      borderBottom: `1px solid ${t.line}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 16px",
      gap: 12,
      boxShadow: "0 1px 3px rgba(0,0,0,0.18)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    "aria-label": "Men\xFA",
    style: {
      background: "transparent",
      border: 0,
      cursor: "pointer",
      display: "inline-flex",
      padding: 6,
      borderRadius: 3
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    name: "menu",
    size: 24,
    tone: t.onAppbar
  })), /*#__PURE__*/React.createElement("img", {
    src: t.logoMark,
    alt: "",
    "aria-hidden": "true",
    style: {
      height: 28
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 17,
      color: t.onAppbar,
      whiteSpace: "nowrap"
    }
  }, "Lyssa ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#FEBE10"
    }
  }, "| ", product))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(APush, {
    status: "subscribed",
    size: 22,
    onHeader: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "ca-hide-sm",
    style: {
      fontSize: 13.5,
      color: t.onAppbar,
      whiteSpace: "nowrap"
    }
  }, "Bienvenida, ", user), /*#__PURE__*/React.createElement("button", {
    onClick: onToggleTheme,
    "aria-label": "Cambiar tema",
    style: {
      background: "transparent",
      border: 0,
      cursor: "pointer",
      display: "inline-flex",
      padding: 6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    stroke: t.onAppbar,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3 A9 9 0 0 1 12 21 Z",
    fill: t.onAppbar
  }))), /*#__PURE__*/React.createElement("button", {
    className: "ca-hide-sm",
    "aria-label": "Cerrar sesi\xF3n",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      background: "transparent",
      border: 0,
      cursor: "pointer",
      color: t.onAppbar,
      fontFamily: "var(--font-body)",
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    name: "logout",
    size: 20,
    tone: t.onAppbar
  }), "Cerrar sesi\xF3n")));
}

/* Encabezado de página claro: kicker + título + acciones, sin gradiente. */
function PageHeader({
  kicker,
  title,
  subtitle,
  actions,
  stats
}) {
  const t = useAdmin();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 18,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      fontWeight: 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: t.primary,
      marginBottom: 7
    }
  }, kicker), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.1,
      color: t.fg
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontSize: 14,
      color: t.muted
    }
  }, subtitle)), actions), stats && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(150px, 1fr))`,
      gap: 12,
      marginTop: 18
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: t.paper,
      border: `1px solid ${t.line}`,
      borderTop: `3px solid ${t.primary}`,
      borderRadius: 4,
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 30,
      color: t.fg,
      lineHeight: 1
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: "0.01em",
      color: t.muted,
      marginTop: 7
    }
  }, s.label)))));
}
function AppShell({
  product,
  nav,
  current,
  onNavigate,
  user = "Ana Soto",
  dark,
  onToggleTheme,
  children
}) {
  const t = caTokens(dark);
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(!isMobile);
  React.useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);
  return /*#__PURE__*/React.createElement(AdminCtx.Provider, {
    value: t
  }, /*#__PURE__*/React.createElement("div", {
    "data-ca-theme": dark ? "dark" : "light",
    "data-lyssa-theme": dark ? "dark" : undefined,
    style: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-body)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    product: product,
    onToggle: () => setOpen(o => !o),
    dark: dark,
    onToggleTheme: onToggleTheme,
    user: user
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      minHeight: 0,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    product: product,
    nav: nav,
    current: current,
    onNavigate: id => {
      onNavigate(id);
      if (isMobile) setOpen(false);
    },
    open: open,
    isMobile: isMobile,
    onClose: () => setOpen(false)
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      overflowY: "auto",
      background: t.bg,
      padding: isMobile ? 16 : 26
    }
  }, children))));
}
Object.assign(window, {
  caTokens,
  awash,
  AdminCtx,
  useAdmin,
  useIsMobile,
  AdminSidebar: Sidebar,
  AdminTopbar: Topbar,
  AdminPageHeader: PageHeader,
  AdminAppShell: AppShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/_shared/admin-shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/app.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ════════════════════════════════════════════════════════════════════════
   Admin · consola de administración (web + móvil). Nav completa replicada del
   Layout real (7 secciones). Responsive vía el shell compartido (menú lateral
   colapsable). Expone window.AdminRoot.
   ════════════════════════════════════════════════════════════════════════ */
(function () {
  const DS = window.LyssaDesignSystem_c38568;
  const {
    Button,
    Badge,
    RoleLabel,
    Avatar,
    Icon,
    Field,
    Input,
    Select,
    Modal,
    FormSectionTitle,
    Card,
    CardHeader,
    Alert,
    EventLog
  } = DS;
  const NAV = [{
    title: "",
    items: [{
      id: "welcome",
      label: "Inicio",
      icon: "home"
    }]
  }, {
    title: "Reportes y expectativas",
    items: [{
      id: "plans",
      label: "Pautas mensuales",
      icon: "calendar"
    }, {
      id: "dashboard",
      label: "Panel de expectativas",
      icon: "dashboard"
    }, {
      id: "attendance",
      label: "Reportes de asistencia",
      icon: "report"
    }, {
      id: "awake",
      label: "Estoy Despierto",
      icon: "awake"
    }]
  }, {
    title: "Rondas",
    items: [{
      id: "rounddefs",
      label: "Definiciones de rondas",
      icon: "round"
    }, {
      id: "rounds",
      label: "Historial de rondas",
      icon: "history"
    }]
  }, {
    title: "Novedades",
    items: [{
      id: "novedades",
      label: "Novedades",
      icon: "note"
    }]
  }, {
    title: "Control de acceso",
    items: [{
      id: "profiles",
      label: "Perfiles de acceso",
      icon: "credential"
    }, {
      id: "accessreports",
      label: "Reportes de acceso",
      icon: "access"
    }]
  }, {
    title: "Controles",
    items: [{
      id: "controllogs",
      label: "Registros de controles",
      icon: "catalog"
    }, {
      id: "catalog",
      label: "Catálogo de controles",
      icon: "key"
    }]
  }, {
    title: "Gestión",
    items: [{
      id: "locations",
      label: "Ubicaciones",
      icon: "pin"
    }, {
      id: "devices",
      label: "Dispositivos",
      icon: "devices"
    }, {
      id: "clients",
      label: "Clientes",
      icon: "clients"
    }, {
      id: "users",
      label: "Usuarios",
      icon: "user"
    }, {
      id: "downloads",
      label: "Reportes descargables",
      icon: "download"
    }]
  }];

  /* ── Inicio / Dashboard ────────────────────────────────── */
  function Welcome() {
    const t = window.useAdmin();
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.AdminPageHeader, {
      kicker: "Panel general \xB7 21:48",
      title: "Bienvenida, Ana",
      subtitle: "Resumen de la operaci\xF3n en tiempo real.",
      stats: [{
        value: "142",
        label: "Guardias activos"
      }, {
        value: "37",
        label: "Rondas hoy"
      }, {
        value: "9",
        label: "Clientes"
      }, {
        value: "3",
        label: "Alertas abiertas"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Card, {
      style: {
        background: t.paper,
        borderColor: t.line,
        color: t.fg
      }
    }, /*#__PURE__*/React.createElement(CardHeader, {
      kicker: "Cumplimiento de pauta",
      title: "Hoy",
      action: /*#__PURE__*/React.createElement(Badge, {
        tone: "success",
        dot: false
      }, "92%")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 10,
        borderRadius: 999,
        background: t.line2,
        overflow: "hidden",
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "92%",
        height: "100%",
        background: t.primary
      }
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13.5,
        color: t.muted
      }
    }, "328 de 356 expectativas cumplidas en el per\xEDodo.")), /*#__PURE__*/React.createElement(Card, {
      accent: "danger",
      style: {
        background: t.paper,
        borderColor: t.line,
        color: t.fg
      }
    }, /*#__PURE__*/React.createElement(CardHeader, {
      kicker: "Alertas abiertas",
      title: "Requieren atenci\xF3n"
    }), [{
      x: "Botón de pánico · CelularJaime",
      c: "danger"
    }, {
      x: "Llave 118 sin devolver · +12h",
      c: "warning"
    }, {
      x: "Inactividad nocturna · Bodega",
      c: "warning"
    }].map((a, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "9px 0",
        borderBottom: i < 2 ? `1px solid ${t.line}` : "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "alert",
      size: 18,
      tone: a.c
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: t.fg
      }
    }, a.x))))));
  }

  /* ── Usuarios (tabla responsive + modal crear/editar) ──── */
  const USERS = [{
    name: "Ana Soto",
    rut: "12.345.678-9",
    role: "Supervisor",
    status: "Activo",
    site: "Torre Norte"
  }, {
    name: "Jaime Middleton",
    rut: "15.482.991-2",
    role: "Guardia",
    status: "Activo",
    site: "Acceso Sur"
  }, {
    name: "Carlos Reyes",
    rut: "9.221.640-K",
    role: "Guardia",
    status: "Suspendido",
    site: "Bodega Central"
  }, {
    name: "Marta Núñez",
    rut: "17.903.112-4",
    role: "Administrador",
    status: "Activo",
    site: "Central"
  }, {
    name: "Diego Pérez",
    rut: "20.118.774-1",
    role: "Usuario",
    status: "Inactivo",
    site: "—"
  }];
  function Users() {
    const t = window.useAdmin();
    const [open, setOpen] = React.useState(false);
    const [detail, setDetail] = React.useState(null);
    const tone = window.ADMIN_STATUS_TONE;
    const cols = [{
      key: "name",
      label: "Usuario"
    }, {
      key: "rut",
      label: "RUT"
    }, {
      key: "role",
      label: "Rol"
    }, {
      key: "site",
      label: "Punto"
    }, {
      key: "status",
      label: "Estado",
      align: "right"
    }];
    const cell = (k, r) => {
      if (k === "name") return /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: r.name,
        size: "sm"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          fontSize: 14,
          color: t.fg
        }
      }, r.name));
      if (k === "rut") return /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-mono)",
          fontSize: 13,
          color: t.muted
        }
      }, r.rut);
      if (k === "role") return /*#__PURE__*/React.createElement(RoleLabel, {
        role: r.role
      });
      if (k === "site") return /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13.5,
          color: t.muted
        }
      }, r.site);
      return /*#__PURE__*/React.createElement(Badge, {
        tone: tone[r.status],
        dot: false
      }, r.status);
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.AdminPageHeader, {
      kicker: "Gesti\xF3n",
      title: "Usuarios",
      subtitle: "Supervisores, guardias y administradores.",
      actions: /*#__PURE__*/React.createElement(Button, {
        icon: "add",
        onClick: () => setOpen(true)
      }, "Nuevo usuario"),
      stats: [{
        value: "32",
        label: "Total"
      }, {
        value: "28",
        label: "Activos"
      }]
    }), /*#__PURE__*/React.createElement(window.AdminFilterBar, null, /*#__PURE__*/React.createElement(Field, {
      label: "Buscar",
      style: {
        flex: 2,
        minWidth: 180
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Nombre o RUT\u2026"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Rol",
      style: {
        flex: 1,
        minWidth: 140
      }
    }, /*#__PURE__*/React.createElement(Select, {
      defaultValue: ""
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Todos"), /*#__PURE__*/React.createElement("option", null, "Supervisor"), /*#__PURE__*/React.createElement("option", null, "Guardia"), /*#__PURE__*/React.createElement("option", null, "Administrador"))), /*#__PURE__*/React.createElement(Field, {
      label: "Estado",
      style: {
        flex: 1,
        minWidth: 130
      }
    }, /*#__PURE__*/React.createElement(Select, {
      defaultValue: ""
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Todos"), /*#__PURE__*/React.createElement("option", null, "Activo"), /*#__PURE__*/React.createElement("option", null, "Suspendido"), /*#__PURE__*/React.createElement("option", null, "Inactivo")))), /*#__PURE__*/React.createElement(window.AdminDataTable, {
      columns: cols,
      rows: USERS,
      renderCell: cell,
      onRowClick: setDetail
    }), open && /*#__PURE__*/React.createElement(Modal, {
      kicker: "Nuevo usuario",
      title: "Registrar usuario",
      onClose: () => setOpen(false),
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        onClick: () => setOpen(false)
      }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
        onClick: () => setOpen(false)
      }, "Guardar"))
    }, /*#__PURE__*/React.createElement(FormSectionTitle, null, "Datos personales"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 14,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Nombre",
      required: true
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Nombre y apellido"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "RUT",
      required: true
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "12.345.678-K"
    }))), /*#__PURE__*/React.createElement(FormSectionTitle, null, "Asignaci\xF3n"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Rol"
    }, /*#__PURE__*/React.createElement(Select, {
      defaultValue: "Guardia"
    }, /*#__PURE__*/React.createElement("option", null, "Guardia"), /*#__PURE__*/React.createElement("option", null, "Supervisor"), /*#__PURE__*/React.createElement("option", null, "Administrador"))), /*#__PURE__*/React.createElement(Field, {
      label: "Punto de control"
    }, /*#__PURE__*/React.createElement(Select, {
      defaultValue: "Torre Norte"
    }, /*#__PURE__*/React.createElement("option", null, "Torre Norte"), /*#__PURE__*/React.createElement("option", null, "Acceso Sur"))))), detail && /*#__PURE__*/React.createElement(Modal, {
      kicker: detail.role,
      title: detail.name,
      onClose: () => setDetail(null),
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        onClick: () => setDetail(null)
      }, "Cerrar"), /*#__PURE__*/React.createElement(Button, {
        icon: "edit"
      }, "Editar"))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: detail.name,
      size: "lg"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--muted)"
      }
    }, detail.rut), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: tone[detail.status],
      dot: false
    }, detail.status)))), /*#__PURE__*/React.createElement(FormSectionTitle, null, "Asignaci\xF3n"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 0",
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--muted)"
      }
    }, "Punto de control"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, detail.site)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 0",
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--muted)"
      }
    }, "Rol"), /*#__PURE__*/React.createElement(RoleLabel, {
      role: detail.role
    }))));
  }

  /* ── Clientes ──────────────────────────────────────────── */
  function Clients() {
    const t = window.useAdmin();
    const rows = [{
      name: "Condominio Las Encinas",
      sites: 3,
      guards: 12,
      st: "Activo"
    }, {
      name: "Edificio Costanera",
      sites: 1,
      guards: 6,
      st: "Activo"
    }, {
      name: "Bodegas del Sur",
      sites: 2,
      guards: 4,
      st: "Activo"
    }, {
      name: "Mall Plaza Norte",
      sites: 5,
      guards: 20,
      st: "Activo"
    }];
    const cols = [{
      key: "name",
      label: "Cliente"
    }, {
      key: "sites",
      label: "Ubicaciones",
      align: "right"
    }, {
      key: "guards",
      label: "Guardias",
      align: "right"
    }, {
      key: "st",
      label: "Estado",
      align: "right"
    }];
    const cell = (k, r) => {
      if (k === "name") return /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: r.name,
        size: "sm"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          fontSize: 14,
          color: t.fg
        }
      }, r.name));
      if (k === "st") return /*#__PURE__*/React.createElement(Badge, {
        tone: "success",
        dot: false
      }, r.st);
      return /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-mono)",
          fontSize: 14,
          color: t.fg
        }
      }, r[k]);
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.AdminPageHeader, {
      kicker: "Gesti\xF3n",
      title: "Clientes",
      actions: /*#__PURE__*/React.createElement(Button, {
        icon: "add"
      }, "Nuevo cliente"),
      subtitle: "Cuentas y sus ubicaciones."
    }), /*#__PURE__*/React.createElement(window.AdminDataTable, {
      columns: cols,
      rows: rows,
      renderCell: cell
    }));
  }

  /* ── Ubicaciones ───────────────────────────────────────── */
  function Locations() {
    const t = window.useAdmin();
    const rows = [{
      name: "Torre Norte",
      client: "Las Encinas",
      points: 5,
      st: "Operativa"
    }, {
      name: "Acceso Sur",
      client: "Las Encinas",
      points: 3,
      st: "Operativa"
    }, {
      name: "Bodega Central",
      client: "Bodegas del Sur",
      points: 4,
      st: "Operativa"
    }];
    const cols = [{
      key: "name",
      label: "Ubicación"
    }, {
      key: "client",
      label: "Cliente"
    }, {
      key: "points",
      label: "Puntos NFC",
      align: "right"
    }, {
      key: "st",
      label: "Estado",
      align: "right"
    }];
    const cell = (k, r) => {
      if (k === "name") return /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 9
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "pin",
        size: 18,
        tone: "accent"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          fontSize: 14,
          color: t.fg
        }
      }, r.name));
      if (k === "st") return /*#__PURE__*/React.createElement(Badge, {
        tone: "success",
        dot: false
      }, r.st);
      if (k === "points") return /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-mono)",
          fontSize: 14,
          color: t.fg
        }
      }, r.points);
      return /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13.5,
          color: t.muted
        }
      }, r.client);
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.AdminPageHeader, {
      kicker: "Gesti\xF3n",
      title: "Ubicaciones",
      actions: /*#__PURE__*/React.createElement(Button, {
        icon: "add"
      }, "Nueva ubicaci\xF3n"),
      subtitle: "Sitios y sus puntos de control."
    }), /*#__PURE__*/React.createElement(window.AdminDataTable, {
      columns: cols,
      rows: rows,
      renderCell: cell
    }));
  }

  /* ── Dispositivos (tarjetas) ───────────────────────────── */
  function Devices() {
    const t = window.useAdmin();
    const rows = [{
      name: "CelularJaime",
      model: "Android 13",
      batt: 82,
      st: "En línea",
      ok: true
    }, {
      name: "CelularCarlos",
      model: "Android 12",
      batt: 34,
      st: "En línea",
      ok: true
    }, {
      name: "TabletBodega",
      model: "Android 11",
      batt: 0,
      st: "Sin conexión",
      ok: false
    }];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.AdminPageHeader, {
      kicker: "Gesti\xF3n",
      title: "Dispositivos",
      actions: /*#__PURE__*/React.createElement(Button, {
        icon: "add"
      }, "Registrar"),
      subtitle: "Telemetr\xEDa de los equipos en terreno."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 12
      }
    }, rows.map((d, i) => /*#__PURE__*/React.createElement(Card, {
      key: i,
      style: {
        background: t.paper,
        borderColor: t.line,
        color: t.fg
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "devices",
      size: 22,
      tone: d.ok ? "fg" : "danger"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 15
      }
    }, d.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: t.muted
      }
    }, d.model)), /*#__PURE__*/React.createElement(Badge, {
      tone: d.ok ? "success" : "danger",
      dot: false
    }, d.st)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 12.5,
        color: t.muted
      }
    }, /*#__PURE__*/React.createElement("span", null, "Bater\xEDa"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        color: d.batt < 40 ? t.danger : t.fg
      }
    }, d.batt, "%"))))));
  }

  /* ── Catálogo de controles ─────────────────────────────── */
  function Catalog() {
    const t = window.useAdmin();
    const items = [{
      icon: "key",
      label: "Llaves",
      desc: "Entrega y devolución (individual o juego)."
    }, {
      icon: "room",
      label: "Sala de lactancia",
      desc: "Ingreso/salida por perfil, minutos de uso."
    }, {
      icon: "bicycle",
      label: "Bicicletas",
      desc: "Ingreso/egreso por color y dueño."
    }];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.AdminPageHeader, {
      kicker: "Controles",
      title: "Cat\xE1logo de controles",
      actions: /*#__PURE__*/React.createElement(Button, {
        icon: "add"
      }, "Nuevo control"),
      subtitle: "Tipos de control habilitados por feature flag."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 12
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement(Card, {
      key: i,
      style: {
        background: t.paper,
        borderColor: t.line,
        color: t.fg
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 4,
        background: window.awash(t.primary, 14, t.paper),
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 22,
      tone: "accent"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 17
      }
    }, it.label)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13.5,
        lineHeight: 1.5,
        color: t.muted
      }
    }, it.desc)))));
  }

  /* ── Reportes descargables ─────────────────────────────── */
  function Downloads() {
    const t = window.useAdmin();
    const docs = ["proposal", "shift-report", "audit-log", "client-onepager"];
    const DF = DS.DocFormat;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.AdminPageHeader, {
      kicker: "Gesti\xF3n",
      title: "Reportes descargables",
      subtitle: "Documentos de salida en PDF y Word."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: 12
      }
    }, docs.map(d => /*#__PURE__*/React.createElement(DF, {
      key: d,
      type: d
    }))));
  }

  /* ── Pantallas con bitácora de eventos reutilizada ─────── */
  function eventList(title, kicker, rows, actionFn) {
    return function () {
      const action = actionFn ? actionFn() : null;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.AdminPageHeader, {
        kicker: kicker,
        title: title,
        actions: action
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 10
        }
      }, rows.map((r, i) => /*#__PURE__*/React.createElement(EventLog, _extends({
        key: i
      }, r)))));
    };
  }
  const Novedades = eventList("Novedades", "Novedades", [{
    type: "novelty",
    title: "Incidente",
    meta: "Acceso sur · persona sin credencial",
    status: "sent",
    time: "20:55"
  }, {
    type: "novelty",
    title: "Mantenimiento",
    meta: "Luminaria perímetro norte",
    status: "sent",
    time: "21:30"
  }], () => /*#__PURE__*/React.createElement(Button, {
    icon: "download",
    variant: "secondary"
  }, "Exportar"));
  const Rounds = eventList("Historial de rondas", "Rondas", [{
    type: "round",
    title: "Torre Norte · Ronda 03",
    meta: "J. Middleton · 2/5",
    status: "open",
    time: "21:48"
  }, {
    type: "round",
    title: "Acceso Sur · Ronda 01",
    meta: "C. Reyes · 5/5",
    status: "closed",
    time: "20:05"
  }]);
  const AccessReports = eventList("Reportes de acceso", "Control de acceso", [{
    type: "access",
    title: "Patricia Lagos",
    meta: "Peatonal · RUT 15.482.991-2",
    status: "authorized",
    time: "21:42"
  }, {
    type: "access",
    title: "Visita no autorizada",
    meta: "RUT 8.114.220-5",
    status: "denied",
    time: "20:55"
  }], () => /*#__PURE__*/React.createElement(Button, {
    icon: "download",
    variant: "secondary"
  }, "Exportar"));
  const Awake = eventList("Estoy Despierto", "Reportes y expectativas", [{
    type: "awake",
    title: "Jaime Middleton",
    meta: "Torre Norte · NFC",
    status: "sent",
    time: "21:48"
  }, {
    type: "awake",
    title: "Diego Pérez",
    meta: "Bodega · sin marcar",
    status: "overdue",
    time: "22:18"
  }]);
  const ControlLogs = eventList("Registros de controles", "Controles", [{
    type: "key",
    title: "Llave 204 · juego",
    meta: "Entregada a P. Lagos",
    status: "inUse",
    time: "21:42"
  }, {
    type: "lactation",
    title: "Sala 2",
    meta: "M. Núñez · 18 min",
    status: "exited",
    time: "20:30"
  }, {
    type: "bicycle",
    title: "Bicicleta roja",
    meta: "C. Reyes",
    status: "parked",
    time: "19:50"
  }]);
  function Stub({
    title,
    kicker
  }) {
    const t = window.useAdmin();
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.AdminPageHeader, {
      kicker: kicker,
      title: title
    }), /*#__PURE__*/React.createElement(Card, {
      style: {
        background: t.paper,
        borderColor: t.line,
        color: t.fg
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        color: t.muted
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 22,
      tone: "muted"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14
      }
    }, "Pantalla \xAB", title, "\xBB \xB7 incluida en la navegaci\xF3n del producto; detalle fuera del alcance de este UI kit."))));
  }
  const SCREENS = {
    welcome: Welcome,
    dashboard: Welcome,
    users: Users,
    clients: Clients,
    locations: Locations,
    devices: Devices,
    catalog: Catalog,
    downloads: Downloads,
    novedades: Novedades,
    rounds: Rounds,
    accessreports: AccessReports,
    awake: Awake,
    controllogs: ControlLogs,
    plans: () => /*#__PURE__*/React.createElement(Stub, {
      title: "Pautas mensuales",
      kicker: "Reportes y expectativas"
    }),
    attendance: () => /*#__PURE__*/React.createElement(Stub, {
      title: "Reportes de asistencia",
      kicker: "Reportes y expectativas"
    }),
    rounddefs: () => /*#__PURE__*/React.createElement(Stub, {
      title: "Definiciones de rondas",
      kicker: "Rondas"
    }),
    profiles: () => /*#__PURE__*/React.createElement(Stub, {
      title: "Perfiles de acceso",
      kicker: "Control de acceso"
    })
  };
  function AdminRoot() {
    const [dark, setDark] = React.useState(false);
    const [cur, setCur] = React.useState("welcome");
    const S = SCREENS[cur] || Welcome;
    return /*#__PURE__*/React.createElement(window.AdminAppShell, {
      product: "Admin",
      nav: NAV,
      current: cur,
      onNavigate: setCur,
      user: "Ana Soto",
      dark: dark,
      onToggleTheme: () => setDark(d => !d)
    }, /*#__PURE__*/React.createElement(S, null));
  }
  window.AdminRoot = AdminRoot;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/controlapp/app.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ════════════════════════════════════════════════════════════════════════
   ControlApp · app de escritorio/móvil del supervisor (sala de control).
   Responsive vía el shell compartido (menú lateral colapsable). Pantallas:
   Panel, Historial de rondas, Reportes de acceso, Registros de controles,
   Novedades, Estoy Despierto. Expone window.ControlAppRoot.
   ════════════════════════════════════════════════════════════════════════ */
(function () {
  const DS = window.LyssaDesignSystem_c38568;
  const {
    Button,
    Badge,
    Avatar,
    Icon,
    Field,
    Input,
    Select,
    Modal,
    FormSectionTitle,
    Card,
    CardHeader,
    Alert,
    EventLog
  } = DS;
  const NAV = [{
    title: "Operación",
    items: [{
      id: "panel",
      label: "Panel",
      icon: "dashboard"
    }, {
      id: "rondas",
      label: "Historial de rondas",
      icon: "round"
    }, {
      id: "accesos",
      label: "Reportes de acceso",
      icon: "access"
    }, {
      id: "novedades",
      label: "Novedades",
      icon: "note"
    }]
  }, {
    title: "Controles",
    items: [{
      id: "controles",
      label: "Registros de controles",
      icon: "catalog"
    }, {
      id: "perfiles",
      label: "Perfiles de acceso",
      icon: "credential"
    }]
  }, {
    title: "Turno noche",
    items: [{
      id: "despierto",
      label: "Estoy Despierto",
      icon: "awake"
    }]
  }];

  /* ── Panel ─────────────────────────────────────────────── */
  function Panel() {
    const t = window.useAdmin();
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.AdminPageHeader, {
      kicker: "Sala de control \xB7 21:48",
      title: "Panel operacional",
      subtitle: "Resumen del turno de noche.",
      stats: [{
        value: "8",
        label: "En terreno"
      }, {
        value: "2",
        label: "Rondas activas"
      }, {
        value: "1",
        label: "Incidente"
      }, {
        value: "12",
        label: "Accesos hoy"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Card, {
      style: {
        background: t.paper,
        borderColor: t.line,
        color: t.fg
      }
    }, /*#__PURE__*/React.createElement(CardHeader, {
      kicker: "Rondas en curso",
      title: "Estado de rondas",
      action: /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "text",
        iconRight: "chevronRight"
      }, "Ver todas")
    }), [{
      s: "Torre Norte · Ronda 03",
      g: "Jaime Middleton",
      a: true,
      x: "2/5 puntos"
    }, {
      s: "Acceso Sur · Ronda 01",
      g: "Carlos Reyes",
      a: false,
      x: "Completada"
    }].map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 0",
        borderBottom: i === 0 ? `1px solid ${t.line}` : "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: r.a ? "round" : "checkCircle",
      size: 18,
      tone: r.a ? "accent" : "success"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 14.5,
        color: t.fg
      }
    }, r.s), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: t.muted
      }
    }, r.g)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        color: r.a ? t.primary : t.muted
      }
    }, r.x)))), /*#__PURE__*/React.createElement(Card, {
      accent: "danger",
      style: {
        background: t.paper,
        borderColor: t.line,
        color: t.fg
      }
    }, /*#__PURE__*/React.createElement(CardHeader, {
      kicker: "\xDAltima novedad",
      title: "Acceso denegado"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 14px",
        fontSize: 14,
        lineHeight: 1.5,
        color: t.muted
      }
    }, "Persona sin credencial en acceso sur \xB7 20:55."), /*#__PURE__*/React.createElement(Button, {
      variant: "danger",
      size: "sm",
      fullWidth: true,
      icon: "eye"
    }, "Revisar incidente"))));
  }

  /* ── Reportes de acceso (filtros + tabla responsive + modal) ── */
  const ACCESS = [{
    name: "Patricia Lagos",
    rut: "15.482.991-2",
    type: "Peatonal",
    time: "21:42",
    ok: true
  }, {
    name: "Proveedor · Aguas Andinas",
    rut: "8.114.220-5",
    type: "Vehículo",
    time: "21:18",
    ok: true
  }, {
    name: "Visita no autorizada",
    rut: "—",
    type: "Peatonal",
    time: "20:55",
    ok: false
  }, {
    name: "Marta Núñez",
    rut: "17.903.112-4",
    type: "Peatonal",
    time: "20:30",
    ok: true
  }];
  function Accesos() {
    const t = window.useAdmin();
    const [detail, setDetail] = React.useState(null);
    const cols = [{
      key: "name",
      label: "Persona"
    }, {
      key: "rut",
      label: "RUT"
    }, {
      key: "type",
      label: "Tipo"
    }, {
      key: "time",
      label: "Hora",
      align: "right"
    }, {
      key: "st",
      label: "Estado",
      align: "right"
    }];
    const cell = (k, r) => {
      if (k === "name") return /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          fontSize: 14,
          color: t.fg
        }
      }, r.name);
      if (k === "rut") return /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-mono)",
          fontSize: 13,
          color: t.muted
        }
      }, r.rut);
      if (k === "type") return /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13.5,
          color: t.muted
        }
      }, r.type);
      if (k === "time") return /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: t.muted
        }
      }, r.time);
      return /*#__PURE__*/React.createElement(Badge, {
        tone: r.ok ? "success" : "danger",
        dot: false
      }, r.ok ? "Autorizado" : "Denegado");
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.AdminPageHeader, {
      kicker: "Operaci\xF3n",
      title: "Reportes de acceso",
      subtitle: "Ingresos y egresos de personas y veh\xEDculos.",
      actions: /*#__PURE__*/React.createElement(Button, {
        icon: "download",
        variant: "secondary"
      }, "Exportar")
    }), /*#__PURE__*/React.createElement(window.AdminFilterBar, null, /*#__PURE__*/React.createElement(Field, {
      label: "Buscar",
      style: {
        flex: 2,
        minWidth: 180
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Nombre o RUT\u2026"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Tipo",
      style: {
        flex: 1,
        minWidth: 130
      }
    }, /*#__PURE__*/React.createElement(Select, {
      defaultValue: ""
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Todos"), /*#__PURE__*/React.createElement("option", null, "Peatonal"), /*#__PURE__*/React.createElement("option", null, "Veh\xEDculo"))), /*#__PURE__*/React.createElement(Field, {
      label: "Estado",
      style: {
        flex: 1,
        minWidth: 130
      }
    }, /*#__PURE__*/React.createElement(Select, {
      defaultValue: ""
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Todos"), /*#__PURE__*/React.createElement("option", null, "Autorizado"), /*#__PURE__*/React.createElement("option", null, "Denegado")))), /*#__PURE__*/React.createElement(window.AdminDataTable, {
      columns: cols,
      rows: ACCESS,
      renderCell: cell,
      onRowClick: setDetail
    }), detail && /*#__PURE__*/React.createElement(Modal, {
      kicker: detail.ok ? "Autorizado" : "Denegado",
      title: detail.name,
      onClose: () => setDetail(null),
      footer: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        onClick: () => setDetail(null)
      }, "Cerrar")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 0",
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--muted)"
      }
    }, "RUT"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)"
      }
    }, detail.rut)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 0",
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--muted)"
      }
    }, "Tipo"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, detail.type)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 0",
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--muted)"
      }
    }, "Hora"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)"
      }
    }, detail.time))));
  }

  /* ── Registros de controles (pestañas) ─────────────────── */
  function Controles() {
    const t = window.useAdmin();
    const [tab, setTab] = React.useState("keys");
    const data = {
      keys: [{
        type: "key",
        title: "Llave 204 · juego",
        meta: "Entregada a P. Lagos",
        status: "inUse",
        time: "21:42"
      }, {
        type: "key",
        title: "Llave 118",
        meta: "Devuelta por C. Reyes",
        status: "returned",
        time: "20:10"
      }],
      lactation: [{
        type: "lactation",
        title: "Sala 2",
        meta: "M. Núñez",
        status: "inUse",
        time: "21:30"
      }, {
        type: "lactation",
        title: "Sala 1",
        meta: "A. Soto · 18 min",
        status: "exited",
        time: "20:30"
      }],
      bicycles: [{
        type: "bicycle",
        title: "Bicicleta roja",
        meta: "C. Reyes",
        status: "parked",
        time: "19:50"
      }, {
        type: "bicycle",
        title: "Bicicleta negra",
        meta: "D. Pérez",
        status: "exited",
        time: "20:40"
      }]
    };
    const tabs = [{
      id: "keys",
      label: "Llaves",
      icon: "key"
    }, {
      id: "lactation",
      label: "Lactancia",
      icon: "room"
    }, {
      id: "bicycles",
      label: "Bicicletas",
      icon: "bicycle"
    }];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.AdminPageHeader, {
      kicker: "Controles",
      title: "Registros de controles",
      subtitle: "Bit\xE1coras de llaves, lactancia y bicicletas."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        marginBottom: 18,
        flexWrap: "wrap"
      }
    }, tabs.map(tb => {
      const a = tb.id === tab;
      return /*#__PURE__*/React.createElement("button", {
        key: tb.id,
        onClick: () => setTab(tb.id),
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "9px 16px",
          background: a ? window.awash(t.primary, 14, t.paper) : t.paper,
          border: `1px solid ${a ? window.awash(t.primary, 45, t.paper) : t.line}`,
          borderRadius: 4,
          cursor: "pointer",
          color: t.fg,
          fontFamily: "var(--font-body)",
          fontWeight: a ? 600 : 400,
          fontSize: 14
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: tb.icon,
        size: 18,
        tone: a ? "accent" : "muted"
      }), tb.label);
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 10
      }
    }, data[tab].map((r, i) => /*#__PURE__*/React.createElement(EventLog, _extends({
      key: i
    }, r)))));
  }

  /* ── Novedades ─────────────────────────────────────────── */
  function Novedades() {
    const items = [{
      type: "novelty",
      title: "Incidente",
      meta: "Persona sin credencial en acceso sur",
      status: "sent",
      time: "20:55"
    }, {
      type: "novelty",
      title: "Mantenimiento",
      meta: "Luminaria perímetro norte apagada",
      status: "sent",
      time: "21:30"
    }, {
      type: "novelty",
      title: "Seguridad",
      meta: "Cambio de turno · relevo 06:00",
      status: "sent",
      time: "21:00"
    }];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.AdminPageHeader, {
      kicker: "Operaci\xF3n",
      title: "Novedades",
      subtitle: "Notas operativas del turno.",
      actions: /*#__PURE__*/React.createElement(Button, {
        icon: "add"
      }, "Registrar")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: 10
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement(EventLog, _extends({
      key: i
    }, it)))));
  }

  /* ── Historial de rondas ───────────────────────────────── */
  function Rondas() {
    const t = window.useAdmin();
    const rows = [{
      type: "round",
      title: "Torre Norte · Ronda 03",
      meta: "J. Middleton · 2/5",
      status: "open",
      time: "21:48"
    }, {
      type: "round",
      title: "Acceso Sur · Ronda 01",
      meta: "C. Reyes · 5/5",
      status: "closed",
      time: "20:05"
    }, {
      type: "round",
      title: "Perímetro · Ronda 02",
      meta: "Sin marcar",
      status: "overdue",
      time: "—"
    }];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.AdminPageHeader, {
      kicker: "Operaci\xF3n",
      title: "Historial de rondas",
      subtitle: "Sesiones de ronda y su estado."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: 10
      }
    }, rows.map((r, i) => /*#__PURE__*/React.createElement(EventLog, _extends({
      key: i
    }, r)))));
  }

  /* ── Perfiles de acceso ────────────────────────────────── */
  function Perfiles() {
    const t = window.useAdmin();
    const rows = [{
      name: "Patricia Lagos",
      rut: "15.482.991-2",
      role: "Residente",
      st: "Vigente"
    }, {
      name: "Aguas Andinas",
      rut: "76.000.011-0",
      role: "Proveedor",
      st: "Vigente"
    }, {
      name: "Diego Pérez",
      rut: "20.118.774-1",
      role: "Visita",
      st: "Vencida"
    }];
    const cols = [{
      key: "name",
      label: "Perfil"
    }, {
      key: "rut",
      label: "RUT/RUN"
    }, {
      key: "role",
      label: "Categoría"
    }, {
      key: "st",
      label: "Credencial",
      align: "right"
    }];
    const cell = (k, r) => {
      if (k === "name") return /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: r.name,
        size: "sm"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          fontSize: 14,
          color: t.fg
        }
      }, r.name));
      if (k === "rut") return /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-mono)",
          fontSize: 13,
          color: t.muted
        }
      }, r.rut);
      if (k === "role") return /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13.5,
          color: t.muted
        }
      }, r.role);
      return /*#__PURE__*/React.createElement(Badge, {
        tone: r.st === "Vigente" ? "success" : "danger",
        dot: false
      }, r.st);
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.AdminPageHeader, {
      kicker: "Controles",
      title: "Perfiles de acceso",
      actions: /*#__PURE__*/React.createElement(Button, {
        icon: "add"
      }, "Nuevo perfil"),
      subtitle: "Personas y entidades autorizadas."
    }), /*#__PURE__*/React.createElement(window.AdminDataTable, {
      columns: cols,
      rows: rows,
      renderCell: cell
    }));
  }

  /* ── Estoy Despierto ───────────────────────────────────── */
  function Despierto() {
    const t = window.useAdmin();
    const rows = [{
      type: "awake",
      title: "Jaime Middleton",
      meta: "Torre Norte · NFC",
      status: "sent",
      time: "21:48"
    }, {
      type: "awake",
      title: "Carlos Reyes",
      meta: "Acceso Sur · NFC",
      status: "sent",
      time: "21:45"
    }, {
      type: "awake",
      title: "Diego Pérez",
      meta: "Bodega · sin marcar",
      status: "overdue",
      time: "22:18"
    }];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.AdminPageHeader, {
      kicker: "Turno noche",
      title: "Estoy Despierto",
      subtitle: "Pruebas de vigilia nocturna en serie de tiempo."
    }), /*#__PURE__*/React.createElement(Alert, {
      severity: "warning",
      title: "1 confirmaci\xF3n atrasada",
      style: {
        marginBottom: 18
      }
    }, "Diego P\xE9rez no registra presencia desde las 21:48."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: 10
      }
    }, rows.map((r, i) => /*#__PURE__*/React.createElement(EventLog, _extends({
      key: i
    }, r)))));
  }
  const SCREENS = {
    panel: Panel,
    rondas: Rondas,
    accesos: Accesos,
    novedades: Novedades,
    controles: Controles,
    perfiles: Perfiles,
    despierto: Despierto
  };
  function ControlAppRoot() {
    const [dark, setDark] = React.useState(false);
    const [cur, setCur] = React.useState("panel");
    const S = SCREENS[cur] || Panel;
    return /*#__PURE__*/React.createElement(window.AdminAppShell, {
      product: "ControlApp",
      nav: NAV,
      current: cur,
      onNavigate: setCur,
      user: "Ana Soto",
      dark: dark,
      onToggleTheme: () => setDark(d => !d)
    }, /*#__PURE__*/React.createElement(S, null));
  }
  window.ControlAppRoot = ControlAppRoot;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/controlapp/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/reportapp/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ════════════════════════════════════════════════════════════════════════
   ReportApp · Pantallas operativas. Solo cambia el contenido de .ra-scroll;
   shell, tarjeta de sesión y tokens son los mismos en todas. Usa las
   primitivas del sistema (HoldButton, StatusOverlay, BottomSheet, EventLog,
   Fab, Haptics) y el catálogo EVENT_DEFINITIONS.
   ════════════════════════════════════════════════════════════════════════ */
const {
  Icon: RAIcon,
  HoldButton,
  StatusOverlay,
  BottomSheet,
  Fab,
  EventLog,
  Haptics,
  Badge,
  NOVELTY_TYPES
} = window.LyssaDesignSystem_c38568;
function Kicker({
  children
}) {
  const t = useRA();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      fontWeight: 500,
      letterSpacing: "1.4px",
      textTransform: "uppercase",
      color: t.accent,
      marginBottom: 8
    }
  }, children);
}
function ViewTitle({
  children,
  center,
  danger
}) {
  const t = useRA();
  return /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 16px",
      textAlign: center ? "center" : "left",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: center ? 1 : 0,
      textTransform: center ? "uppercase" : "none",
      color: danger ? t.danger : t.fg
    }
  }, children);
}
function RACard({
  children,
  style
}) {
  const t = useRA();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.surface,
      border: `1px solid ${t.line}`,
      borderRadius: 4,
      padding: 18,
      marginBottom: 18,
      ...style
    }
  }, children);
}
function PrimaryBtn({
  children,
  icon,
  onClick
}) {
  const t = useRA();
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      width: "100%",
      padding: 15,
      background: t.accent,
      color: t.accentInk,
      border: 0,
      borderRadius: 3,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15,
      cursor: "pointer"
    }
  }, icon && /*#__PURE__*/React.createElement(RAIcon, {
    name: icon,
    size: 20,
    tone: t.accentInk
  }), children);
}
const inp = t => ({
  width: "100%",
  boxSizing: "border-box",
  background: "transparent",
  border: `1px solid ${t.line}`,
  borderRadius: 6,
  padding: "14px",
  fontSize: 15,
  color: t.fg,
  fontFamily: "var(--font-body)",
  outline: "none"
});

/* ── Inicio ──────────────────────────────────────────────── */
function Inicio() {
  const t = useRA();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      minHeight: 560,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    h: 96
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "24px 0 18px",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 33,
      lineHeight: 1.08,
      color: t.fg
    }
  }, "Bienvenido a ReportApp"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 26px",
      fontSize: 17,
      lineHeight: 1.5,
      color: t.muted,
      maxWidth: 300
    }
  }, "Esta aplicaci\xF3n le permitir\xE1 trabajar de manera eficiente y moderna."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "18px 20px",
      background: wash(t.success, 9, t.surface),
      border: `1px solid ${wash(t.success, 45, t.surface)}`,
      borderRadius: 4,
      maxWidth: 330,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(RAIcon, {
    name: "checkCircle",
    size: 26,
    tone: t.success
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.45,
      color: t.fg
    }
  }, "Dispositivo registrado correctamente. Abra el men\xFA desde el bot\xF3n superior izquierdo.")));
}

/* ── Crear Reporte (envío → overlay de éxito) ────────────── */
function CrearReporte() {
  const t = useRA();
  const [sent, setSent] = React.useState(false);
  const enviar = () => {
    Haptics.success();
    setSent(true);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewTitle, {
    center: true
  }, "Crear Reporte"), /*#__PURE__*/React.createElement(SessionCard, null), /*#__PURE__*/React.createElement(RACard, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 4px",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      color: t.fg
    }
  }, "Captura de imagen"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 14px",
      fontSize: 13.5,
      lineHeight: 1.45,
      color: t.muted
    }
  }, "Tome una foto para incluirla en el reporte."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "stretch",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      aspectRatio: "4/3",
      border: `1px dashed ${t.line}`,
      borderRadius: 6,
      background: t.chipBg,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(RAIcon, {
    name: "camera",
    size: 34,
    tone: t.muted
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: t.muted
    }
  }, "Vista previa de la foto")), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Tomar foto",
    style: {
      flex: "0 0 auto",
      alignSelf: "flex-start",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 7,
      width: 96,
      height: 96,
      background: "transparent",
      border: `1.5px solid ${t.accent}`,
      color: t.accent,
      borderRadius: 6,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(RAIcon, {
    name: "camera",
    size: 30,
    tone: t.accent
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      lineHeight: 1.2
    }
  }, "Tomar", /*#__PURE__*/React.createElement("br", null), "Foto"))), /*#__PURE__*/React.createElement(PrimaryBtn, {
    icon: "report",
    onClick: enviar
  }, "Enviar Reporte")), /*#__PURE__*/React.createElement(StatusOverlay, {
    open: sent,
    status: "success",
    title: "Reporte enviado",
    message: "Su reporte ha sido enviado correctamente.",
    description: "Gracias por su colaboraci\xF3n. La informaci\xF3n qued\xF3 registrada.",
    onClose: () => setSent(false)
  }));
}

/* ── Control de Acceso (registro + bitácora de eventos) ──── */
function ControlAcceso() {
  const t = useRA();
  const rows = [{
    type: "access",
    title: "Patricia Lagos",
    meta: "Ingreso peatonal · RUT 15.482.991-2",
    status: "authorized",
    time: "21:42"
  }, {
    type: "access",
    title: "Proveedor · Aguas Andinas",
    meta: "Vehículo BJKT-21",
    status: "authorized",
    time: "21:18"
  }, {
    type: "access",
    title: "Visita no autorizada",
    meta: "RUT 8.114.220-5",
    status: "denied",
    time: "20:55"
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewTitle, {
    center: true
  }, "Control de Acceso"), /*#__PURE__*/React.createElement(SessionCard, null), /*#__PURE__*/React.createElement(RACard, {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Registrar ingreso"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "RUT (12.345.678-K)",
    style: inp(t)
  }), /*#__PURE__*/React.createElement(PrimaryBtn, {
    icon: "qr",
    onClick: () => Haptics.scan()
  }, "Escanear credencial"))), /*#__PURE__*/React.createElement(Kicker, null, "Movimientos de hoy"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement(EventLog, _extends({
    key: i
  }, r)))));
}

/* ── Registro de Controles (llaves / lactancia / bicicletas) ── */
function Controles() {
  const t = useRA();
  const [tab, setTab] = React.useState("keys");
  const data = {
    keys: [{
      type: "key",
      title: "Llave 204 · juego",
      meta: "Entregada a P. Lagos",
      status: "inUse",
      time: "21:42"
    }, {
      type: "key",
      title: "Llave 118",
      meta: "Devuelta por C. Reyes",
      status: "returned",
      time: "20:10"
    }],
    lactation: [{
      type: "lactation",
      title: "Sala 2",
      meta: "M. Núñez",
      status: "inUse",
      time: "21:30"
    }, {
      type: "lactation",
      title: "Sala 1",
      meta: "A. Soto · 18 min",
      status: "exited",
      time: "20:30"
    }],
    bicycles: [{
      type: "bicycle",
      title: "Bicicleta roja",
      meta: "C. Reyes",
      status: "parked",
      time: "19:50"
    }, {
      type: "bicycle",
      title: "Bicicleta negra",
      meta: "D. Pérez",
      status: "exited",
      time: "20:40"
    }]
  };
  const tabs = [{
    id: "keys",
    label: "Llaves",
    icon: "key"
  }, {
    id: "lactation",
    label: "Lactancia",
    icon: "room"
  }, {
    id: "bicycles",
    label: "Bicicletas",
    icon: "bicycle"
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewTitle, {
    center: true
  }, "Registro de Controles"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 18
    }
  }, tabs.map(tb => {
    const active = tb.id === tab;
    return /*#__PURE__*/React.createElement("button", {
      key: tb.id,
      onClick: () => setTab(tb.id),
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        padding: "11px 4px",
        background: active ? wash(t.accent, 14, t.surface) : t.surface,
        border: `1px solid ${active ? wash(t.accent, 45, t.surface) : t.line}`,
        borderRadius: 4,
        cursor: "pointer",
        color: t.fg
      }
    }, /*#__PURE__*/React.createElement(RAIcon, {
      name: tb.icon,
      size: 22,
      tone: active ? "accent" : "fg"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: "0.5px",
        textTransform: "uppercase"
      }
    }, tb.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, data[tab].map((r, i) => /*#__PURE__*/React.createElement(EventLog, _extends({
    key: i
  }, r)))));
}

/* ── Reporte de Rondas (escaneo → bottom sheet) ──────────── */
function Rondas() {
  const t = useRA();
  const [sheet, setSheet] = React.useState(false);
  const [done, setDone] = React.useState(2);
  const base = ["Acceso principal", "Estacionamiento −1", "Torre Norte · piso 4", "Bodega central", "Perímetro sur"];
  const confirm = () => {
    Haptics.scan();
    setDone(d => Math.min(base.length, d + 1));
    setSheet(false);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewTitle, {
    center: true
  }, "Reporte de Rondas"), /*#__PURE__*/React.createElement(SessionCard, null), /*#__PURE__*/React.createElement(RACard, {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Ronda 03 \xB7 en curso"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: t.fg
    }
  }, done, " / ", base.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, base.map((name, i) => {
    const state = i < done ? "done" : i === done ? "active" : "pending";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "11px 0",
        borderBottom: i < base.length - 1 ? `1px solid ${t.line}` : "none"
      }
    }, state === "active" ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        width: 14,
        height: 14,
        flex: "none",
        marginLeft: 4,
        borderRadius: 999,
        background: t.accent
      }
    }) : /*#__PURE__*/React.createElement(RAIcon, {
      name: state === "done" ? "checkCircle" : "round",
      size: 22,
      tone: state === "done" ? "success" : "muted"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 15,
        fontWeight: state === "active" ? 600 : 400,
        color: state === "pending" ? t.muted : t.fg
      }
    }, name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        color: state === "active" ? t.accent : t.muted
      }
    }, state === "done" ? "ok" : state === "active" ? "ahora" : "—"));
  }))), /*#__PURE__*/React.createElement(PrimaryBtn, {
    icon: "nfc",
    onClick: () => setSheet(true)
  }, "Marcar punto de control"), /*#__PURE__*/React.createElement(BottomSheet, {
    open: sheet,
    title: "Confirmar punto de control",
    onClose: () => setSheet(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      onClick: () => setSheet(false),
      style: {
        flex: 1,
        padding: 14,
        background: "transparent",
        border: `1.5px solid ${t.fg}`,
        color: t.fg,
        borderRadius: 3,
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 14,
        cursor: "pointer"
      }
    }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
      onClick: confirm,
      style: {
        flex: 2,
        padding: 14,
        background: t.accent,
        color: t.accentInk,
        border: 0,
        borderRadius: 3,
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 14,
        cursor: "pointer"
      }
    }, "Confirmar escaneo"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 999,
      background: wash(t.accent, 14, t.surface),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(RAIcon, {
    name: "nfc",
    size: 26,
    tone: "accent"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16,
      color: t.fg
    }
  }, base[Math.min(done, base.length - 1)]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: t.muted,
      marginTop: 2
    }
  }, "Tag NFC \xB7 21:48 \xB7 \u221233.4489, \u221270.6693")))));
}

/* ── Novedades (bitácora + tipos + FAB) ──────────────────── */
function Novedades() {
  const t = useRA();
  const items = [{
    type: "novelty",
    title: "Incidente",
    meta: "Persona sin credencial en acceso sur",
    status: "sent",
    time: "20:55"
  }, {
    type: "novelty",
    title: "Mantenimiento",
    meta: "Luminaria perímetro norte apagada",
    status: "sent",
    time: "21:30"
  }, {
    type: "novelty",
    title: "Seguridad",
    meta: "Cambio de turno · relevo 06:00",
    status: "sent",
    time: "21:00"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 600
    }
  }, /*#__PURE__*/React.createElement(ViewTitle, {
    center: true
  }, "Novedades"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7,
      flexWrap: "wrap",
      marginBottom: 16
    }
  }, NOVELTY_TYPES.slice(0, 5).map(n => /*#__PURE__*/React.createElement(Badge, {
    key: n.id,
    tone: n.tone,
    dot: false
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(EventLog, _extends({
    key: i
  }, it)))), /*#__PURE__*/React.createElement(Fab, {
    icon: "add",
    label: "Registrar novedad",
    fixed: false,
    onClick: () => Haptics.tap(),
    style: {
      marginTop: 18
    }
  }));
}

/* ── Estoy Despierto ─────────────────────────────────────── */
function EstoyDespierto() {
  const t = useRA();
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      minHeight: 600
    }
  }, /*#__PURE__*/React.createElement(RAIcon, {
    name: "awake",
    size: 64,
    tone: t.accent
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "22px 0 8px",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 26,
      color: t.fg
    }
  }, "Estoy Despierto"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 32px",
      fontSize: 15,
      lineHeight: 1.55,
      color: t.muted,
      maxWidth: 300
    }
  }, "Escanee su tarjeta NFC para confirmar su vigilia cada 30 minutos durante el turno de noche."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(PrimaryBtn, {
    icon: "nfc",
    onClick: () => {
      Haptics.scan();
      setDone(true);
    }
  }, "Escanear tarjeta \xB7 21:48")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: done ? t.success : t.muted
    }
  }, done ? "✓ Confirmado · próxima 22:18" : "Próxima confirmación: 22:18"));
}

/* ── Emergencia (HoldButton 5s → overlay) ────────────────── */
function Emergencia() {
  const t = useRA();
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      minHeight: 640
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 8px",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 28,
      letterSpacing: 0.5,
      textTransform: "uppercase",
      color: t.danger
    }
  }, "Emergencia"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 40px",
      fontSize: 15,
      lineHeight: 1.55,
      color: t.muted,
      maxWidth: 300
    }
  }, "Mantenga presionado el bot\xF3n durante 5 segundos para enviar una alerta de p\xE1nico a la central de monitoreo."), /*#__PURE__*/React.createElement(HoldButton, {
    placement: "page",
    onComplete: () => {
      Haptics.error();
      setSent(true);
    }
  }), /*#__PURE__*/React.createElement(StatusOverlay, {
    open: sent,
    status: "danger",
    title: "Alerta enviada",
    message: "Se notific\xF3 al canal de emergencias.",
    description: "El aviso se repetir\xE1 durante un minuto. Mantenga la calma y siga el protocolo.",
    buttonText: "Entendido",
    onClose: () => setSent(false)
  }));
}
const RA_SCREENS = {
  inicio: Inicio,
  crear: CrearReporte,
  acceso: ControlAcceso,
  controles: Controles,
  rondas: Rondas,
  novedades: Novedades,
  despierto: EstoyDespierto,
  emergencia: Emergencia
};
Object.assign(window, {
  RA_SCREENS,
  Kicker,
  ViewTitle,
  RACard,
  PrimaryBtn
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/reportapp/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/reportapp/shell.jsx
try { (() => {
/* ════════════════════════════════════════════════════════════════════════
   ReportApp · Shell (recreación fiel del marco móvil del guardia)
   Bezel 390×820, barra de estado, header (menú · logo · ReportApp · alertas ·
   notif · tema), menú lateral, tarjeta de sesión. Tokens locales de ReportApp
   (ver INSTRUCCIONES.md). Dark por defecto.
   ════════════════════════════════════════════════════════════════════════ */
const {
  Icon
} = window.LyssaDesignSystem_c38568;
function raTokens(dark) {
  return dark ? {
    themeAttr: "dark",
    pageBg: "#06083F",
    fg: "#F2F4F7",
    bg: "#070A4A",
    headerBg: "#0A0E65",
    surface: "#161A7A",
    line: "rgba(242,244,247,0.14)",
    muted: "rgba(242,244,247,0.62)",
    accent: "#FEBE10",
    accentInk: "#1A1505",
    success: "#47BF7D",
    danger: "#E5675B",
    info: "#4D97E6",
    chipBg: "rgba(242,244,247,0.05)"
  } : {
    themeAttr: "light",
    pageBg: "#E7E5DF",
    fg: "#0A0E65",
    bg: "#FFFFFF",
    headerBg: "#F2F4F7",
    surface: "#FFFFFF",
    line: "rgba(10,14,101,0.12)",
    muted: "rgba(10,14,101,0.60)",
    accent: "#00539A",
    accentInk: "#FFFFFF",
    success: "#1F8A4C",
    danger: "#C23B2E",
    info: "#00539A",
    chipBg: "rgba(10,14,101,0.04)"
  };
}
const wash = (c, p, base) => `color-mix(in srgb, ${c} ${p}%, ${base})`;
const RAContext = React.createContext(null);
const useRA = () => React.useContext(RAContext);
function Logo({
  h
}) {
  const t = useRA();
  const src = t.themeAttr === "dark" ? "../../assets/reportapp-white.svg" : "../../assets/reportapp-navy.svg";
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "ReportApp",
    style: {
      height: h,
      objectFit: "contain"
    }
  });
}
function StatusBar() {
  const t = useRA();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "9px 26px 3px",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 500,
      color: t.fg,
      background: t.headerBg
    }
  }, /*#__PURE__*/React.createElement("span", null, "21:48"), /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: 1
    }
  }, "LTE\xA0\xA0\u2598\u2596"));
}
function Header({
  onMenu,
  onToggleTheme
}) {
  const t = useRA();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
      padding: "8px 14px",
      background: t.headerBg,
      borderBottom: `1px solid ${t.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onMenu,
    "aria-label": "Men\xFA",
    style: {
      flex: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 5,
      width: 34,
      height: 44,
      padding: "0 4px",
      background: "transparent",
      border: 0,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: 24,
      height: 2.5,
      background: t.accent
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: 24,
      height: 2.5,
      background: t.accent
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: 24,
      height: 2.5,
      background: t.accent
    }
  })), /*#__PURE__*/React.createElement(Logo, {
    h: 30
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      letterSpacing: 0.2,
      color: t.fg,
      whiteSpace: "nowrap"
    }
  }, "Report", /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.accent
    }
  }, "App"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Alertas",
    style: iconBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert",
    size: 30,
    tone: t.danger
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onToggleTheme,
    "aria-label": "Cambiar tema",
    style: iconBtn
  }, /*#__PURE__*/React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    stroke: t.accent,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3 A9 9 0 0 1 12 21 Z",
    fill: t.accent
  })))));
}
const iconBtn = {
  flex: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 48,
  height: 48,
  background: "transparent",
  border: 0,
  cursor: "pointer"
};
const MENU = [{
  id: "inicio",
  label: "Inicio",
  icon: "home"
}, {
  id: "crear",
  label: "Crear Reporte",
  icon: "report"
}, {
  id: "acceso",
  label: "Control de Acceso",
  icon: "access"
}, {
  id: "controles",
  label: "Registro de Controles",
  icon: "catalog"
}, {
  id: "rondas",
  label: "Reporte de Rondas",
  icon: "round"
}, {
  id: "novedades",
  label: "Novedades",
  icon: "note"
}, {
  id: "despierto",
  label: "Estoy Despierto",
  icon: "awake"
}, {
  id: "emergencia",
  label: "Emergencia",
  icon: "panic"
}];
function SideMenu({
  open,
  current,
  onNavigate,
  onClose
}) {
  const t = useRA();
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(6,8,30,0.55)",
      zIndex: 5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      width: 300,
      background: t.headerBg,
      boxShadow: "8px 0 30px rgba(0,0,0,0.4)",
      display: "flex",
      flexDirection: "column",
      paddingTop: 18,
      zIndex: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 24px 26px"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    h: 46
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      color: t.fg
    }
  }, "Report", /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.accent
    }
  }, "App"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      paddingBottom: 20
    }
  }, MENU.map(m => {
    const active = m.id === current;
    const danger = m.id === "emergencia";
    const col = danger ? t.danger : active ? t.accent : t.fg;
    return /*#__PURE__*/React.createElement("a", {
      key: m.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate(m.id);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 18,
        padding: "14px 24px",
        textDecoration: "none",
        background: active ? "rgba(255,255,255,0.06)" : "transparent",
        borderLeft: `3px solid ${active ? t.accent : "transparent"}`
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "0 0 auto",
        width: 26,
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: m.icon,
      size: 24,
      tone: col
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 500,
        fontSize: 18,
        color: col
      }
    }, m.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      borderTop: `1px solid ${t.line}`,
      paddingTop: 6,
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      padding: "14px 24px",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 auto",
      width: 26,
      display: "flex",
      justifyContent: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 24,
    tone: t.fg
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -2,
      right: 0,
      width: 8,
      height: 8,
      borderRadius: 999,
      background: t.accent,
      border: `1.5px solid ${t.headerBg}`
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: 18,
      color: t.fg
    }
  }, "Notificaciones")))));
}
function SessionCard() {
  const t = useRA();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.surface,
      border: `1px solid ${t.line}`,
      borderRadius: 4,
      padding: 16,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      fontWeight: 500,
      letterSpacing: "1.4px",
      textTransform: "uppercase",
      color: t.accent,
      marginBottom: 4
    }
  }, "Sesi\xF3n activa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.15,
      color: t.fg
    }
  }, "Jaime Middleton"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: t.muted,
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: t.fg
    }
  }, "Dispositivo:"), " CelularJaime")), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Cerrar sesi\xF3n",
    style: {
      flex: "0 0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 5,
      padding: "10px 8px",
      background: "transparent",
      border: `1.5px solid ${t.fg}`,
      color: t.fg,
      borderRadius: 3,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "logout",
    size: 22,
    tone: t.fg
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      fontWeight: 500,
      letterSpacing: "1px",
      textTransform: "uppercase"
    }
  }, "Salir"))));
}

/* Marco físico del teléfono + composición del shell. */
function Phone({
  dark,
  onToggleTheme,
  menuOpen,
  setMenuOpen,
  current,
  onNavigate,
  children
}) {
  const t = raTokens(dark);
  return /*#__PURE__*/React.createElement(RAContext.Provider, {
    value: t
  }, /*#__PURE__*/React.createElement("div", {
    "data-app-theme": t.themeAttr,
    "data-lyssa-theme": dark ? "dark" : undefined,
    style: {
      minHeight: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 28,
      background: t.pageBg,
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 390,
      height: 820,
      borderRadius: 44,
      background: "#0a121f",
      padding: 11,
      boxShadow: "0 26px 60px rgba(8,16,28,0.55), 0 2px 0 rgba(255,255,255,0.05) inset"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      borderRadius: 34,
      overflow: "hidden",
      background: t.bg,
      color: t.fg
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(Header, {
    onMenu: () => setMenuOpen(true),
    onToggleTheme: onToggleTheme
  }), /*#__PURE__*/React.createElement("div", {
    className: "ra-scroll",
    style: {
      height: "calc(100% - 94px)",
      overflowY: "auto",
      padding: "20px 18px 40px"
    }
  }, children), /*#__PURE__*/React.createElement(SideMenu, {
    open: menuOpen,
    current: current,
    onClose: () => setMenuOpen(false),
    onNavigate: id => {
      onNavigate(id);
      setMenuOpen(false);
    }
  })))));
}
Object.assign(window, {
  raTokens,
  wash,
  RAContext,
  useRA,
  Logo,
  StatusBar,
  Header,
  SideMenu,
  SessionCard,
  Phone,
  MENU
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/reportapp/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.RoleLabel = __ds_scope.RoleLabel;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.Fab = __ds_scope.Fab;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.FilterBar = __ds_scope.FilterBar;

__ds_ns.FilterField = __ds_scope.FilterField;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.TableControls = __ds_scope.TableControls;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.HoldButton = __ds_scope.HoldButton;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.FormSectionTitle = __ds_scope.FormSectionTitle;

__ds_ns.PushIndicator = __ds_scope.PushIndicator;

__ds_ns.StatusOverlay = __ds_scope.StatusOverlay;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.HAPTIC_PATTERNS = __ds_scope.HAPTIC_PATTERNS;

__ds_ns.Haptics = __ds_scope.Haptics;

__ds_ns.DocFormat = __ds_scope.DocFormat;

__ds_ns.PAGE_SIZES = __ds_scope.PAGE_SIZES;

__ds_ns.PRINT_MARGINS = __ds_scope.PRINT_MARGINS;

__ds_ns.EXPORT_FORMATS = __ds_scope.EXPORT_FORMATS;

__ds_ns.DOCUMENT_DEFINITIONS = __ds_scope.DOCUMENT_DEFINITIONS;

__ds_ns.DocumentDefinitions = __ds_scope.DocumentDefinitions;

__ds_ns.DocumentHelpers = __ds_scope.DocumentHelpers;

__ds_ns.DOC_STATUS = __ds_scope.DOC_STATUS;

__ds_ns.NOVELTY_TYPES = __ds_scope.NOVELTY_TYPES;

__ds_ns.EVENT_DEFINITIONS = __ds_scope.EVENT_DEFINITIONS;

__ds_ns.EventDefinitions = __ds_scope.EventDefinitions;

__ds_ns.EventHelpers = __ds_scope.EventHelpers;

__ds_ns.EventLog = __ds_scope.EventLog;

})();
