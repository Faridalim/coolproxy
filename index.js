const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('custom-env').env('proxydev');

const app = express();

// Ganti parameter berikut ini
const http_target = process.env.HTTP_TARGET || 'https://google.co.id',
      ws_target = process.env.WS_TARGET || 'wss://server-tujuan-websocket.com',
      ws_path = process.env.WS_PATH || '/ws',
      auth_cookie = process.env.AUTH_COOKIE || 'deis.ses=s%3Asl6fx0r85BXIw5YgxufcuD1aboUF6-vG.UyQ61EOIWY6tY2YzJun5E5WtMY1QVLnpSAn4Js9aRro',
      proxy_port = process.env.PROXY_PORT || 3100
        
// ===== Jangan Ubah setelah garis ini =====

// Middleware untuk menambahkan cookie
app.use((req, res, next) => {
    req.headers['Cookie'] = auth_cookie;
    next();
});
  
// Endpoint WebSocket
app.use(
    ws_path,
    createProxyMiddleware({
      target: ws_target,
      ws: true,
      changeOrigin: true,
    })
);
  
// Endpoint HTTP
app.use(
    '/',
    createProxyMiddleware({
      target: http_target,
      changeOrigin: true,
    })
);
  
app.listen(proxy_port, () => {
    console.log(`ProxyDEV Running on Port : ${proxy_port}`);
});