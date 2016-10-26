var net = require('net');
var connect require('connect');
var serveStatic = require('serve-static');
var port = 8080;

var server = net.createServer(function(socket){

  console.log('[INFO] Connection from: ' + socket.remoteAddress);
  socket.write('[INFO] Connection in progress');
  
}).listen(port);
