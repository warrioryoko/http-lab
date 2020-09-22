const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.path === '/' && request.method === 'GET') {
      socket.end(createResponse({ body: 'DERP', status: '200 OK', contentType: 'text/plain' }));
    }
    else if(request.path === '/echo' && request.method === 'POST') {
      socket.end(createResponse({ body: JSON.parse(request.body).body }));
    }
    else if(request.path === '/red' && request.method === 'GET') {
      socket.end(createResponse({ body: '<h1>red</h1>', status: '200 OK', contentType: 'text/html' }));
    }
  });
});

module.exports = app;
