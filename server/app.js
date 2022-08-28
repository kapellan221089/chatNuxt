const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const users = require('./users')();

const m = (name,text,id)=>({name,text,id});

io.on('connection', socket => {
  socket.on('userJoined', (data, cb) =>{
    if(!data.name===null||!data.room){
      return cb('Not data')
    }
    socket.join(data.room)
    users.remove(socket.id)
    users.add({
      id: socket.id,
      name:data.name,
      room:data.room
    });

    cb({userID:socket.id});
    io.to(data.room).emit('updateUsers', users.getByRoom(data.room))
    socket.emit('newMessage', m('admin', `Добро пожаловать ${data.name}.`));

    socket.broadcast
      .to(data.room)
      .emit('newMessage', m('admin', `Пользователь ${data.name} зашел.`));
  });

  socket.on('userLeft', (id,cb)=>{
    const user = users.remove(id);
    if(user){
      io.to(user.room).emit('updateUsers', users.getByRoom(user.room))
      io.to(user.room).emit('newMessage', m('admin', `Пользователь ${user.name} вышел.`))
    };
    cb()
  });

  socket.on('disconnect', ()=>{
    const user = users.remove(socket.id)
    if(user){
      io.to(user.room).emit('updateUsers', users.getByRoom(user.room))
      io.to(user.room).emit('newMessage', m('admin', `Пользователь ${user.name} вышел.`))
    };
  });
  
  socket.on('createMessage', data => {
    
    if(!data.text){
      return cb('Текст не может быть пустым')
    };

    const user = users.get(data.id)
    if(user){
      io.to(user.room).emit('newMessage', m(user.name, data.text, data.id))
    };
    
  });
});

module.exports = {
  app,
  server
};
