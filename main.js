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

 fs.readFile('input.txt', function (err, data) {
    if (err){
       console.log(err.stack);
       return;
    }
    console.log(data.toString());
 });

console.log("Program Ended");

var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1()
{
    console.log('listener1 excuted.');
}

var listener2 = function listener2()
{
    console.log('listener2 excuted.');
}

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + ': Listner(s) listening to connection event');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log('Program ended');

 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');