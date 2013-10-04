/**
* Server 
**/

load('vertx.js');

//var vertx = require('vertx');
var port = parseInt(vertx.env['OPENSHIFT_INTERNAL_PORT']);
var host = vertx.env['OPENSHIFT_INTERNAL_IP'];

vertx.createHttpServer().requestHandler(function(req) {
  req.response.end("Hello World!");
}).listen(port, host);