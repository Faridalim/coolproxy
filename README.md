# myproxy

This is a proxy for development

It support HTTP and Websocket endpoints

After installation, create a file named :

```
.env.proxydev
```

in the root project folder with below content :

```
HTTP_TARGET="https://deis.bpsdm.id"
WS_TARGET="wss://server-tujuan-websocket.com"
WS_PATH="/ws"
AUTH_COOKIE="deis.ses=s%3Asl6fx0r85BXIw5YgxufcuD1aboUF6-vG.UyQ61EOIWY6tY2YzJun5E5WtMY1QVLnpSAn4Js9aRro"
PROXY_PORT=3002
```
