#!/bin/bash
# Startet den Next.js Dev-Server mit der lokal installierten Node-Runtime.
# node ist auf dieser Maschine nicht global installiert (~/.local/node), daher
# muss der PATH gesetzt werden, damit auch Next.js-Child-Prozesse node finden.
export PATH="$HOME/.local/node/bin:$PATH"
cd "$(dirname "$0")/.." || exit 1
exec node node_modules/next/dist/bin/next dev -p 3000
