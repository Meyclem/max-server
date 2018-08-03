// DEPENDENCIES IMPORT
const OSC = require('osc-js')
const express = require('express')
require('dotenv').config()
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
}

socket.on('time', (data) => { console.log(data) })

const HTTP_SERVER_PORT = 4000
const OSC_SERVER_PORT = 9000
const config = {
  udpClient: {
    port: 8080
  }
}

const app = express()

app.listen(HTTP_SERVER_PORT, () => { console.log('HTTP server ready') })

const osc = new OSC({ plugin: new OSC.BridgePlugin(config) })

function sendMessage(data) {
  const message = new OSC.Message('/param/test', data)
  osc.send(message)
}

osc.on('open', () => { console.log('OSC server ready') })

osc.on('error', err => { console.log('An error occurred', err) })

osc.on('/param/mymsg', message => {
  console.log(message)
  const msg = new OSC.Message('/param/test', message.args[0])
  osc.send(msg)
})

setInterval(() => {
  socket.emit('time', 'yoooooo')
}, 1000)

osc.on('close', () => { console.log('OSC server closed') })

osc.open()
