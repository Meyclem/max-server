// DEPENDENCIES IMPORT
const OSC = require('osc-js')
const express = require('express')
require('es6-promise').polyfill();
require('isomorphic-fetch');
ioClient = require('socket.io-client')

// CLIENT URL DEFINITION
let socket
if (process.env.NODE_ENV === 'development') {
  // This url will be used with yarn dev
  socket = ioClient.connect("http://localhost:3000/");
} else {
  // This url will be used with yarn serve
  socket = ioClient.connect("https://nuxt-websocket.herokuapp.com/");
  // socket = ioClient.connect("http://localhost:3000/");
}

const HTTP_SERVER_PORT = 4000
const OSC_SERVER_PORT = 9000
const config = {
  udpClient: {
    port: 8080
  }
}

function sendMessage(data) {
  const message = new OSC.Message('/param/test', data)
  osc.send(message)
}

const app = express()
const osc = new OSC({ plugin: new OSC.BridgePlugin(config) })

app.listen(HTTP_SERVER_PORT, () => { console.log('HTTP server ready') })

osc.on('open', () => { console.log('OSC server ready') })

osc.on('error', err => { console.log('An error occurred', err) })

osc.on('mouse', message => {
  console.log(message)
  const msg = new OSC.Message('/param/fromsite', message.args[0])
  osc.send(msg)
})

osc.on('close', () => { console.log('OSC server closed') })

socket.on('mouse', (message) => {
  console.log(message)
  const msg = new OSC.Message('/param/fromsite', message)
  osc.send(msg)
})

socket.on('action', (tool) => {
  console.log(tool)
  const string = '/webapp-' + tool.join('-')
  const msg = new OSC.Message('/param/fromsite', string)
  osc.send(msg)
})

osc.open({ port: 8080 })

