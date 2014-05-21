var http = require('http'),
    request = require('request')

var server = http.createServer(function (req, response) {

    var ds = 'http://' + (process.env.DATASYSTEM_PORT_5984_TCP_ADDR || 'localhost')
    ds += ':' + (process.env.DATASYSTEM_PORT_5984_TCP_PORT || '9101')

    request.get(ds, function (err, res, body) {
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.end("Hello World. DS SAID\n" + err + ' ' + body);
    });

});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");