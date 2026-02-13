#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "[LogLift] npm dependency installation helper"

echo "1) trying direct npm registry access (proxy disabled)..."
if env -u HTTP_PROXY -u HTTPS_PROXY -u http_proxy -u https_proxy -u npm_config_http_proxy -u npm_config_https_proxy \
  npm install --registry=https://registry.npmjs.org/; then
  echo "✅ install succeeded without proxy"
  exit 0
fi

echo "2) direct access failed. retrying with current proxy env..."
if npm install --registry=https://registry.npmjs.org/; then
  echo "✅ install succeeded with proxy"
  exit 0
fi

echo "❌ npm install failed in both modes."
echo "- check if your network/policy allows: https://registry.npmjs.org"
echo "- if your company uses internal registry, run:"
echo "  npm config set registry https://<your-company-registry>/"
echo "  npm install"
exit 1
