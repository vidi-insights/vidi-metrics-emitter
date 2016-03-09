const dgram = require('dgram')
const server = dgram.createSocket('udp4')
const vidi = require('vidi-metrics')

function emit(message) {
  server.send(message,vidi.opts.port, vidi.opts.host)
}

/*server.on('listening', function () {
  var address = server.address()
  console.log('I\'m alive at ' + address.address + ':' + address.port)
})
server.bind(4400);*/
