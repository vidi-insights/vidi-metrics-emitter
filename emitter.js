const dgram = require('dgram')
const server = dgram.createSocket('udp4')

var opts = {
  host: 'localhost',
  port: 5001
}

function emit(message) {
  server.send(message, opts.port, opts.host)
}

/*server.on('listening', function () {
  var address = server.address()
  console.log('I\'m alive at ' + address.address + ':' + address.port)
})
server.bind(4400);*/
