const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

io.on('connections', socket=>{
    console.log('Connected')
})

module.exports = {
    app,
    server
}