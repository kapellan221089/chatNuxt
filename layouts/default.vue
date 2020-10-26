<template>
  <v-app app>
    <v-navigation-drawer v-model="drawer" app absolute temporary>
      <v-list subheader>
        <v-subheader>Список людей в комнате</v-subheader>
        <v-list-item v-for="u in users" :key="u.id" @click.prevent>
          <v-list-item-content>
            <v-list-item-title>{{u.name}}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-content>
            <v-icon :color="u.id === 2 ? 'primary' : 'grey'">mdi-chat</v-icon>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn icon @click="exit" class="ma-2" color="orange darken-2" dark>
        <v-icon dark>
          mdi-arrow-left
        </v-icon>
      </v-btn>
      <v-toolbar-title>Collapsing Bar</v-toolbar-title>
    </v-app-bar>
    <v-main app>
      <v-container fluid>
        <nuxt/>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>


<script>
import { mapState, mapMutations } from "vuex";
  export default {
    data: () => ({
    drawer: true,
    collapseOnScroll: true,
    users: [{ id: 1, name: "User 1" }, { id: 2, name: "User 2" }]
  }),
  computed: mapState(["user"]),
  methods: {
    ...mapMutations(["clearData"]),
    exit() {
      this.$router.push("/?message=leftChat");
      this.clearData();
    }
  }
  }
</script>
