// Create web server
// 1. Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var url = require('url');
var port = 8080;

// 2. Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var uri = url.parse(request.url)

  switch(uri.pathname) {
    case '/':
      fs.readFile('index.html', function(error, data) {
        response.end(data);
      });
      break;
    case '/comments':
      fs.readFile('comments.json', function(error, data) {
        response.end(data);
      });
      break;
    default:
      response.end('404 not found');
  }
});

// 3. Listen on port 8080
server.listen(port, function() {
  console.log('Server running at http://
