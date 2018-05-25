<template>
  <div id="app">
    <v-app id="inspire">
    </v-app>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default {
  name: 'App'
}
</script>

<style>
</style>
