var express = require('express');
var io = require('socket.io');
var app = express()
  , server = require('http').createServer(app)
  , io = io.listen(server);


app.configure(function(){
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.static(__dirname));
});

// Arduino is connected to Raspberry through Arduino's USB cable
// serial port module retrieves data sent by Arduino 
var serialport = require('serialport');
var SerialPort = serialport.SerialPort;
var sp = new SerialPort('/dev/ttyACM0', {
  parser: serialport.parsers.readline("\n")
});

var angle;
sp.on('data', function(data) {
  //console.log(data);
  angle = data;
});

// and Socket IO sends the retreived data to client
io.sockets.on('connection', function(socket){
  setInterval(function(){
    socket.emit('angle', +angle.split(':')[2].trim()); // convert the angle into integer and emit it to client
  }, 200);

});


var port = process.env.PORT || 5000;
server.listen(port, function(){
  console.log("Listening on " + port);
});
