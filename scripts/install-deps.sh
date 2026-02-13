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
echo "다음 순서로 진행하세요:"
echo "1) ./scripts/install-deps.sh 실행"
echo "2) 계속 실패하면 IT팀에 registry.npmjs.org, registry.npmmirror.com 허용 요청"
echo "3) 사내 레지스트리 URL을 받으면 npm config set registry ... 적용"
echo "   npm config set registry https://YOUR_COMPANY_REGISTRY/"
echo "   npm install"
exit 1
