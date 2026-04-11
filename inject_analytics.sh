#!/bin/bash

set -euo pipefail

GA_ID="G-0YWW3NHZXD"
INDEX_HTML="public/index.html"

if [ ! -f "$INDEX_HTML" ]; then
  echo "Missing $INDEX_HTML"
  exit 1
fi

python3 - <<'PY'
from pathlib import Path
import re

path = Path("public/index.html")
html = path.read_text()

html = re.sub(r'<script async defer data-website-id="[^"]+" src="https://umami\.geekplux\.com/script\.js"></script>', '', html)
html = re.sub(r'<script async src="https://www\.googletagmanager\.com/gtag/js\?id=[^"]+"></script><script>window\.dataLayer = window\.dataLayer \|\| \[\]; function gtag\(\)\{dataLayer\.push\(arguments\);\} gtag\(\'js\', new Date\(\)\); gtag\(\'config\', \'[^\']+\'\);</script>', '', html)

snippet = '<script async src="https://www.googletagmanager.com/gtag/js?id=G-0YWW3NHZXD"></script><script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag(\'js\', new Date()); gtag(\'config\', \'G-0YWW3NHZXD\');</script>'
html = html.replace('</head>', snippet + '</head>', 1)

path.write_text(html)
PY

echo "Injected GA4 into $INDEX_HTML"
