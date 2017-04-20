var http = require('http');

var fs = require('fs');

var server = http.createServer(function (request, response) {

// A constante __dirname retorna o diretório raiz da aplicação.

    fs.readFile(__dirname + '/artigos.html', function (err, html) {

        response.writeHeader(200, {'Content-Type': 'text/html'});

        if (request.url == "/") {
            response.write("<h1>artigos</h1>");
        } else if (request.url == "/artigos") {
            response.write("<h1>artigos :)</h1>");
        } else {
            response.write("/erro.html");
        }
        response.write(html);

        response.end();

    });

});

server.listen(3000, function () {

    console.log('Executando App roteamento URL!');

});