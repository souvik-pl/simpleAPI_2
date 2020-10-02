var express = require("express");
var http = require("http");

var app = express();

var server = http.createServer(app);

app.get('/', function(req,res){
	res.send("<h2>Hi there, the server that is responding to you is developed using 'express' and 'http' modules. Please type 'localhost:3000/two' on your URL search bar to see the next page.</h2>");
});

app.get('/two', function(req,res){
	res.send("<h2>Have a nice day</h2>")
});


server.listen(3000, function(){
	console.log("Server listening on port: 3000");
});