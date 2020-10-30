<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8>
      <v-card min-width='400'>
            <v-snackbar
              v-model="snackbar"
              top
            >
              {{ message }}
                <v-btn
                  color="pink"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  Закрыть
                </v-btn>
            </v-snackbar>
        <v-card-title>
          <h1>Chat</h1>
        </v-card-title>
        <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name" :counter="16" :rules="nameRules" label="Name" required></v-text-field>
          <v-text-field
            v-model="room"
            :rules="roomRules"
            label="Room"
            required
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="primary"
            class="mr-4"
            @click="submit"
          >
            Login
          </v-btn>
        </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import{mapMutations}from 'vuex'
  export default {
    head: {
      title: 'Nuxt чат к вашим услугам'
    },
    layout: "empty",
    sockets: {
      connect: function() {
        console.log("socket connected");
      }
    },
    data: () => ({
      snackbar: false,
      message: '',
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      room: '',
      roomRules: [
        v => !!v || 'Room is required',
      ]
    }),

    mounted(){
      const {message} = this.$route.query
      if(message==='noUser'){
        this.message = 'Введите данные'
      }else if(message==='leftChat'){
        this.message = 'Вы вышли из чата'
      }

      this.snackbar = !!this.message
    },

    methods: {
      ...mapMutations(["setUser"]),
      submit () {
        if(this.$refs.form.validate()){
          const user = {
            name: this.name,
            room: this.room
          }

          this.$socket.emit('userJoined', user, data =>{
            if(typeof data==='String'){
              console.error(data)
            }else{
              user.id = data.userID
              this.setUser(user);
              this.$router.push('/chat');
              console.log(user)
            }
          });
        };
      }
    },
  }
</script>
