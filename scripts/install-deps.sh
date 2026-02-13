#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "[LogLift] npm dependency installation helper"

declare -a REGISTRIES=(
  "https://registry.npmjs.org/"
  "https://registry.npmmirror.com/"
)

install_try() {
  local registry="$1"
  local mode="$2"

  echo "- trying registry: $registry ($mode)"

  if [[ "$mode" == "direct" ]]; then
    env -u HTTP_PROXY -u HTTPS_PROXY -u http_proxy -u https_proxy -u npm_config_http_proxy -u npm_config_https_proxy \
      npm install --registry="$registry"
  else
    npm install --registry="$registry"
  fi
}

for registry in "${REGISTRIES[@]}"; do
  if install_try "$registry" "direct"; then
    echo "✅ install succeeded (direct)"
    exit 0
  fi

done

for registry in "${REGISTRIES[@]}"; do
  if install_try "$registry" "proxy"; then
    echo "✅ install succeeded (proxy)"
    exit 0
  fi
done

echo "❌ npm install failed with all known registries."
echo "가능한 다음 조치를 해주세요:"
echo "1) 프록시 없이 외부망 접속 가능한 네트워크에서 재시도"
echo "2) IT팀에 아래 도메인 allowlist 요청"
echo "   - registry.npmjs.org"
echo "   - registry.npmmirror.com"
echo "3) 당장 주소를 모르면, 사내 npm 레지스트리 URL을 IT팀에 문의"
echo "4) URL을 받으면: npm config set registry https://<company-registry>/"
exit 1
