const chatModel = require("../model/chat");
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
var express = require('express');

var app = express();

// io.on('connection', function(socket) {
//   console.log('User connected..');

//   socket.on('typing', () => {
//     console.log('User is typing...');
     
//     io.emit('typing');
//   });

//   socket.on('chat message', (msg) => {
//     console.log('message: ' + msg);

//     io.emit('chat message', msg);
//   });

// });



