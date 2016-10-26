var net = require('net');
var app = require('express');

var client = new net.Socket();

client.connect(8080);

client.on('data',function(data)){

    console.log('[DATA] '+ data);
    client.destroy();

});

client.on('close',function(){

    console.log('Connection closed_');

});
