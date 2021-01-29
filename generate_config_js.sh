#!/bin/bash -eu
if [ -z "${APIURL:-}" ]; then
    APIURL_JSON=undefined
else
    APIURL_JSON=$(printf '"%s"\n' "${APIURL}")
fi

if [ -z "${APIPATH:-}" ]; then
    APIPATH_JSON=undefined
else
    APIPATH_JSON=$(printf '"%s"\n' "${APIPATH}")
fi

if [ -z "${APIUSER:-}" ]; then
    APIUSER_JSON=undefined
else
    APIUSER_JSON=$(printf '"%s"\n' "${APIUSER}")
fi

if [ -z "${APIPW:-}" ]; then
    APIPW_JSON=undefined
else
    APIPW_JSON=$(printf '"%s"\n' "${APIPW}")
fi

cat <<EOF
window.REACT_APP_APIURL=${APIURL_JSON};
window.REACT_APP_APIPATH=${APIPATH_JSON};
window.REACT_APP_APIUSER=${APIUSER_JSON};
window.REACT_APP_APIPW=${APIPW_JSON};
EOF