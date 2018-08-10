var http = require('http');
http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end('Hello World\n');
 }).listen(8081);
 
 var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");

var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected()
{
    console.log('connection succesful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_received', function()
{
    console.log('data received successfully.')
});

eventEmitter.emit('connection');
console.log('Program ended');

 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');