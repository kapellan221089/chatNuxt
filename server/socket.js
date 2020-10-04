const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

io.on('connection', socket =>{
    console.log('Connected')

    socket.emit('new',{
        text:'What'
    })
})

module.exports = {
    app,
    server
}