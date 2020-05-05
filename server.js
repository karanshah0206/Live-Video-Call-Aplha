const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
var port = 3000;

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log('Listening on port: ' + port);
});

io.on('connection', (socket) => {
    socket.on('stream', (image) => {
        socket.broadcast.emit('stream', image);
    })
});