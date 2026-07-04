# Home Assistant Ingress Proxies

## Installation

This repository contains lightweight Home Assistant apps that expose external web interfaces through Home Assistant ingress.

Available apps:

- **OpenWrt Proxy**
- **AdGuard Home Proxy**

1. Add this repository to the Home Assistant app store.
1. Install the proxy app you need.
1. Set `server` to the local URL of the target web interface, for example `http://192.168.1.1`.
1. Start the app and open it from the sidebar.

Do not add a trailing slash to `server`. Port `80` can be omitted because it is the default for `http`.

## Issues

Feel free to create a PR for fixes and enhancements.
