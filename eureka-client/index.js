var socket = require('socket.io-client')("http://localhost:8080");

socket.on('connection', () => { console.log('connected') })
