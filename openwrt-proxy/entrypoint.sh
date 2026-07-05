#!/bin/sh

# Generate htpasswd if credentials are provided
if command -v jq > /dev/null 2>&1; then
    USERNAME=$(jq -r '.username // empty' /data/options.json)
    PASSWORD=$(jq -r '.password // empty' /data/options.json)
else
    USERNAME=$(grep -o '"username"[[:space:]]*:[[:space:]]*"[^"]*"' /data/options.json 2>/dev/null | sed 's/.*: "//;s/".*//')
    PASSWORD=$(grep -o '"password"[[:space:]]*:[[:space:]]*"[^"]*"' /data/options.json 2>/dev/null | sed 's/.*: "//;s/".*//')
fi

if [ -n "$USERNAME" ] && [ -n "$PASSWORD" ]; then
    if command -v htpasswd > /dev/null 2>&1; then
        htpasswd -bc /config/.htpasswd "$USERNAME" "$PASSWORD"
    else
        HASH=$(openssl passwd -apr1 "$PASSWORD")
        echo "${USERNAME}:${HASH}" > /config/.htpasswd
    fi
fi

tempio -conf /data/options.json -template /nginx.conf.gtpl -out /tmp/nginx.conf
nginx -t -c /tmp/nginx.conf

exec nginx -c /tmp/nginx.conf
