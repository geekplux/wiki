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

# The Logseq export leaves the document title and the share titles empty (the app sets
# document.title only once its script runs), so a crawler that runs no script sees an untitled
# page. Fill the empty ones; a title Logseq does write is kept.
SITE_TITLE = "GeekPlux Wiki"
html = html.replace('<title></title>', f'<title>{SITE_TITLE}</title>', 1)
html = html.replace('<meta property="og:title"></meta>', f'<meta property="og:title" content="{SITE_TITLE}"></meta>', 1)
html = html.replace('<meta property="og:site_name"></meta>', f'<meta property="og:site_name" content="{SITE_TITLE}"></meta>', 1)
html = html.replace('<meta name="apple-mobile-web-app-title"></meta>', f'<meta name="apple-mobile-web-app-title" content="{SITE_TITLE}"></meta>', 1)
if '<title></title>' in html or not re.search(r'<title>[^<]+</title>', html):
    raise SystemExit("public/index.html: no document title")

path.write_text(html)
PY

echo "Injected GA4 and the site title into $INDEX_HTML"
