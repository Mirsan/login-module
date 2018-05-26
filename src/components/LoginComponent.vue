<template>
  <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Logowanie</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="user" prepend-icon="person" label="Login" type="text"></v-text-field>
                  <v-text-field v-model="password" prepend-icon="lock" label="Hasło" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login()">Zaloguj</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
import store from './../vuex/store'

export default {
  data () {
    return {
      user: null,
      password: null
    }
  },
  store,
  methods: {
    login () {
      this.$store.dispatch('login', {user: this.user, password: this.password})
        .then(result => {
          this.$router.push('/home')
        })
    }
  }
}
</script>

<style>
</style>
