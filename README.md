# Thomas Light

This is a client for [thomas-light-server](https://github.com/CaiqueMitsuoka/thomas-light-server).

This client intends to be a experiment with small home automations.
It connects with SocketIO to the server and is can be toggled through a page rendered by the server.

It algo contains LightLighter which is a small lib to command the Raspberry Pi to toggle an GPIO pin.

## Run

```shell
$ npm install
# Run the thomas-light-server
$ ID=123 SERVER_URL=http://localhost:8080 node index.js
```

It will by default call a mock of LightLighter to dev. To call the original implementation use `LIGHT_LIGHTER_ENV=production`.

Go to `localhost:8080` and 🚀
