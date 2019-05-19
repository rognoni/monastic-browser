<template>
  <v-app>
    <v-navigation-drawer 
      v-model="drawer"
      fixed
      app>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Monastic
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-tile @click="home">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <v-toolbar-title class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      </v-toolbar-title>
      <v-text-field
        v-model="url"
        @keyup.enter="loadMarkdown"
        label="Markdown URL">
      </v-text-field>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      url: '',
      drawer: null
    }
  },
  watch: {
    '$route' (to, from) {
      this.url = to.params.pathMatch
    }
  },
  mounted() {
      this.url = this.$route.params.pathMatch
  },
  methods: {
    loadMarkdown() {
      this.$router.push({ path: `/url/${this.url}` })
    },
    home() {
      this.$router.push({ path: '/url/https://raw.githubusercontent.com/rognoni/monastic-browser/master/README.md' })
    }
  }
}
</script>
