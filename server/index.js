const OSC = require('osc-js')
const express = require('express')
require('es6-promise').polyfill();
require('isomorphic-fetch');
ioClient = require('socket.io-client')
var socket = ioClient.connect("https://nuxt-websocket.herokuapp.com/");

const HTTP_SERVER_PORT = 3000
const OSC_SERVER_PORT = 9000
const config = {
  udpClient: {
    port: 8080
  },
  wsServer: {
    host: 'localhost',    // @param {string} Hostname of WebSocket server
    port: 9000            // @param {number} Port of WebSocket server
  }
}

// Express server for static file hosting
const app = express()

app.use('/', express.static('dist'))

app.listen(HTTP_SERVER_PORT, () => {
  console.log('HTTP server ready')
})

// OSC websocket server
const osc = new OSC({ plugin: new OSC.BridgePlugin(config) })

socket.on('time', (data) => {
  console.log(data)
})

setInterval(() => {
  data = new Date().toTimeString()
  console.log(data)
  socket.emit('dist', data)
}, 1000);

let interval

function fetchData() {
  fetch('https://videomap-app.herokuapp.com/buttons')
    .then(response => response.json())
    .then((data) => {
      sendMessage(JSON.stringify(data[0]))
    })
    .catch(function (error) {
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}

function sendMessage(data) {
  const message = new OSC.Message('/param/test', data)
  osc.send(message)
  // console.log("server msg", message)
}

osc.on('open', () => {
  console.log('OSC server ready')
  interval = setInterval(fetchData, 1000)
})

osc.on('error', err => {
  console.log('An error occurred', err)
})

osc.on('/param/mymsg', message => {
  console.log(message)
  const msg = new OSC.Message('/param/test', message.args[0])
  osc.send(msg)
})

osc.on('close', () => {
  console.log('OSC server closed')

  if (interval) {
    clearTimeout(interval)
  }
})

osc.open()
