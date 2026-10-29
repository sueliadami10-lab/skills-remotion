#!/usr/bin/env bash
# Prepara um projeto Remotion pronto para renderizar no ambiente do Claude.
# Uso: bash preparar-ambiente.sh [pasta-do-projeto]
# - Cria o projeto (create-video, em branco, sem Tailwind) se ainda nao existir
# - Instala as dependencias
# - Aponta o Remotion para o Chrome ja instalado no ambiente (o download
#   automatico do Chrome pelo Remotion e bloqueado pela rede do ambiente)
set -euo pipefail

PROJ="${1:-/home/claude/video}"

CHROME=""
for c in /opt/pw-browsers/chromium_headless_shell-*/chrome-headless-shell-linux64/chrome-headless-shell \
         /opt/pw-browsers/chromium-*/chrome-linux64/chrome \
         "$(command -v chromium 2>/dev/null || true)" \
         "$(command -v google-chrome 2>/dev/null || true)"; do
  if [ -n "$c" ] && [ -x "$c" ]; then CHROME="$c"; break; fi
done

if [ ! -f "$PROJ/package.json" ]; then
  mkdir -p "$PROJ"
  cd "$PROJ"
  npx -y create-video@latest --yes --blank --no-tailwind .
else
  cd "$PROJ"
fi
npm i --silent

if [ -n "$CHROME" ]; then
  if ! grep -q "setBrowserExecutable" remotion.config.ts 2>/dev/null; then
    printf '\nConfig.setBrowserExecutable("%s");\n' "$CHROME" >> remotion.config.ts
  fi
  echo "Chrome configurado: $CHROME"
else
  echo "ATENCAO: nenhum Chrome local encontrado; o render tentara baixar o seu proprio."
fi

echo "Projeto pronto em: $PROJ"
echo "Renderizar: cd $PROJ && npx remotion render <id-da-composicao> out/video.mp4"
