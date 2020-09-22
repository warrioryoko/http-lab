const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.path === '/' && request.method === 'GET') {
      socket.end(createResponse({ body: 'DERP', status: '200 OK', }));
    }
    else if(request.path === '/echo' && request.method === 'POST')

  });
});

module.exports = app;
