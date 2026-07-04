# Home Assistant App: AdGuard Home Proxy

This app acts as a proxy to an external AdGuard Home web interface.
Its purpose is to add an AdGuard Home entry to the Home Assistant sidebar and open the configured AdGuard Home server through ingress.

## Options

- `server` (required): the local URL where the AdGuard Home web interface is running, e.g. `http://192.168.1.2:3000`. Make sure there is no trailing slash.
