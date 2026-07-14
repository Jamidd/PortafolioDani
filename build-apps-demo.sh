#!/usr/bin/env bash
# Compila las apps reales de Lyssa en modo demo (API simulada, datos ficticios)
# y deja los builds en apps/reportapp y apps/admin, listos para servir junto
# al portafolio. Requiere los repos en Descargas/ con sus node_modules.
set -euo pipefail
cd "$(dirname "$0")"

echo "→ ReportApp (modo demo)…"
(cd "Descargas/ReportApp" && VITE_DEMO=1 npx vite build \
  --base=/apps/reportapp/ \
  --outDir "$(pwd)/../../apps/reportapp" --emptyOutDir --logLevel warn)

echo "→ Admin (modo demo)…"
(cd "Descargas/Admin" && VITE_DEMO=1 npx vite build \
  --base=/apps/admin/ \
  --outDir "$(pwd)/../../apps/admin" --emptyOutDir --logLevel warn)

echo "apps/ listo:"
du -sh apps/reportapp apps/admin
