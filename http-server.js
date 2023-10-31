const http = require('http');

http.createServer( (request, response) => {

  console.log("el url es: ", request.url)
  // request es TODA la informacion de la solicitud del cliente
  // response es TODA la informacion de la respuesta que le vamos a dar al cliente

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World!');
  response.end();

})
.listen(8080); // continuamente mi servidor va a escuchar llamadas de un cliente en el puerto 8080