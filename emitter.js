var dgram = require('dgram')
var server = dgram.createSocket('udp4')
var string = "a"
module.exports = function emitter() {

  var opts = {
    plugin: 'vidi-metrics-emiter',
    host: 'localhost',
    port: 5001
  }

  function emit(message) {
    message.timestamp = Date.now()
    server.send(message, opts.port, opts.host)
  }
  return {
    name: opts.plugin
  }
}

/*server.on('listening', function () {
  var address = server.address()
  console.log('I\'m alive at ' + address.address + ':' + address.port)
})
server.bind(4400);*/
