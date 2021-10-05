const content = require('fs').readFileSync(__dirname + '/index.html', 'utf8');
const httpServer = require('http').createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(content)); res.end(content);
});
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});
// io.on('connection', socket => { console.log('connect'); });
io.on('connection', socket => {
    console.log('number of clients : ', io.sockets.server.engine.clientsCount);
    let counter = 0; setInterval(() => {
        socket.emit('hello', ++counter);
        // console.log('emitting ', counter);
    }, 1000);

    setInterval(() => {
        socket.emit('refresh_ticket_open', []);
    }, 15 * 1000)
});

io.on('disconnect', socket => {
    console.log('number of clients : ', io.sockets.server.engine.clientsCount);
});

httpServer.listen(8080, () => { console.log('go to http://localhost:8080'); });