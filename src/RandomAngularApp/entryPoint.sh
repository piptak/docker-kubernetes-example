#!/bin/bash
set -xe
: "${webapi?Need an api url}"

sed -i "s~REST_API_URL_REPLACE~$webapi~g" /usr/share/nginx/html/RandomAngularApp/main*.js

exec "$@"
