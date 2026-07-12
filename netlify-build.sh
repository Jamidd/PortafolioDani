#!/usr/bin/env bash
# Empaqueta el sitio en dist/ con solo los archivos publicables
# (excluye Descargas/, README, scripts, etc.)
set -euo pipefail
cd "$(dirname "$0")"

rm -rf dist
mkdir -p dist
cp index.html 404.html dist/
cp -r css js img docs proyectos dist/

echo "dist/ listo:"
du -sh dist
