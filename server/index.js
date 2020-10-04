const app = require('express')();
const {Nuxt, Builder}  = require('nuxt');
const config = require('../config/nuxt.config.js');
const morgan = require('morgan');

const nuxt = new Nuxt(config);
const builder = new Builder(nuxt);

app.use(morgan('dev'));


builder.build()
  .then(() => {
  // Рендерить каждый маршрут с Nuxt.js
    app.use(nuxt.render)
    // Запустить сервер
    app.listen(8000, ()=>{
       console.log('Server run in 8000 port');
    });
  });