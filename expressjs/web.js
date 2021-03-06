var http = require('http');
var fs = require('fs');

fs.readFile('hello.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) { 
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(1337, '127.0.0.1');
});

console.log('Server running at http://127.0.0.1:1337');