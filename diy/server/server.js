/**
* Server 
**/

var vertx = require('vertx');
var container = require('vertx/container');
var console = require('vertx/console');

console.log("Loading env variables ...");

var port = parseInt(container.env['OPENSHIFT_DIY_PORT']);
var host = container.env['OPENSHIFT_DIY_IP'];

console.log("OPENSHIFT_DIY_PORT: " + port);
console.log("OPENSHIFT_DIY_IP: " + host);


console.log("Starting server ...");
vertx.createHttpServer().requestHandler(function(req) {
  req.response.end("Hello World!");
}).listen(port, host);