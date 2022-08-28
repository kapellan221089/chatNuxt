import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
const port = process.env.PORT 

export default function({ store }) {
  Vue.use(
    new VueSocketIO({
      debug: false,
      connection: 'https://mighty-taiga-11038.herokuapp.com:'+ port,
      vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
      }
    })
  )
}
