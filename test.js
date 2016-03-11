var emitter = require('./emitter.js')
var dgram = require('dgram')
var client = dgram.createSocket('udp4')

client.on('message', function(msg, rinfo) {
  console.log(msg)
})
client.on('listening', function(){
  console.log(client.address())
})
emitter()
console.log(emitter.toString())
console.log(emitter.string)
console.log(emitter.opts)
/*client.bind(emitter.opts.port, emitter.opts.address)

emitter.emit({
  title: 'message',
  data: 'hello'
})*/
