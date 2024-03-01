var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
var chatRoute = require('./routes/chatRoute');
var usersRouter = require('./routes/users');


mongoose.connect("mongodb://127.0.0.1:27017/", {
  serverSelectionTimeoutMS: 5000 
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });


var app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');


// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/chat', chatRoute);
app.use('/users', usersRouter);

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




// Start the server
server.listen(8000, function() {
  console.log('App is listening on port 8000');
});