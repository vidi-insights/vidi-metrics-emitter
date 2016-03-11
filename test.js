var Emitter = require('./emitter.js')
var dgram = require('dgram')
var client = dgram.createSocket('udp4')
var emitter = Emitter()

client.on('message', function(msg, rinfo) {
  console.log(msg)
})
client.on('listening', function(){
  console.log(client.address())
})
client.bind(emitter.opts.port, emitter.opts.address)

emitter.emit({
  title: 'message',
  data: 'hello'
})
