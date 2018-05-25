<template>
  <div id="app">
    <v-app id="inspire">
      <login-component></login-component>
    </v-app>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import LoginComponent from './components/LoginComponent'

Vue.use(Vuetify)

export default {
  name: 'App',
  components: {
    LoginComponent
  }
}
</script>

<style>
</style>
