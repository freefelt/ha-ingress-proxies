# Home Assistant App: OpenWrt Proxy

This app acts as a proxy to an external OpenWrt web interface.
Its purpose is to add an OpenWrt entry to the Home Assistant sidebar and open the configured OpenWrt server through ingress.

## Options

- `server` (required): the local URL where the OpenWrt web interface is running, e.g. `http://192.168.1.1`. Make sure there is no trailing slash.
