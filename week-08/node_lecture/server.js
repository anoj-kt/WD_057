import http from 'http';

const server = http.createServer((request, response) => {
  console.log(`Method: ${request.method}, URL: ${request.url}`);
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello world');
});

server.listen(3000, () => {
  console.log('server is running!!!');
});
