const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);

    if(message.substring(0,4) == "gela") {
      console.log('number of clients : ', wss.clients.size);
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message.substring(4));
        }
      });
    }
  });

  var welcome = {
    "kon" : "Welcome",
}

  ws.send(JSON.stringify(welcome));
  // setInterval(()=> {
  //   ws.send('tiap 3 detik');
  // }, 3000);
});