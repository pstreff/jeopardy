const express = require('express');

const app = express();

const server = require('http').createServer(app);

const port = 3000;

const socket = require('socket.io');

const io = socket(server, {
    cors: {
        origin: '*',
    },
});



io.on('connection', (socket) => {
    console.log("User connected with a unique socketId ", socket.id);
    socket.on('disconnect', (reason) => {
        console.log('Disconnected! ', reason);
    });
})


server.listen(port, () => {
    console.log('Server started! Listening on 127.0.0.1:3000');
});
