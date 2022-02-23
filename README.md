# Demonstrates usage of aws-iot-device-sdk-js-v2 in a browser project using ESM

    npm ci
    npm start

Open the browser at <http://localhost:8080/>, and observe the error.

```
_stream_readable.js:48 Uncaught ReferenceError: global is not defined
    at node_modules/mqtt/node_modules/readable-stream/lib/_stream_readable.js (_stream_readable.js:48:21)
    at __require2 (chunk-XVGJCPEK.js?v=6328ceea:34:50)
    at node_modules/mqtt/node_modules/readable-stream/readable-browser.js (readable-browser.js:1:28)
    at __require2 (chunk-XVGJCPEK.js?v=6328ceea:34:50)
    at node_modules/mqtt/lib/store.js (store.js:8:18)
    at __require2 (chunk-XVGJCPEK.js?v=6328ceea:34:50)
    at node_modules/mqtt/lib/client.js (client.js:7:15)
    at __require2 (chunk-XVGJCPEK.js?v=6328ceea:34:50)
    at node_modules/mqtt/lib/connect/index.js (index.js:3:20)
    at __require2 (chunk-XVGJCPEK.js?v=6328ceea:34:50)
```
