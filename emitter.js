var dgram = require('dgram')
module.exports = function emitter() {

  var opts = {
    plugin: 'vidi-metrics-emiter',
    host: 'localhost',
    port: 5001
  }

  function emit(message) {
    var server = dgram.createSocket('udp4')
    message.timestamp = Date.now()
    message.source = opts.plugin
    server.send(JSON.stringify(message),0, JSON.stringify(message).length, opts.port, opts.host, function(err, data){
      server.close()
    })
  }
  return {
    name: opts.plugin,
    emit: emit,
    opts: opts
  }
}

/*server.on('listening', function () {
  var address = server.address()
  console.log('I\'m alive at ' + address.address + ':' + address.port)
})
server.bind(4400);*/
