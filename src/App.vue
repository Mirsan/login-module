<template>
  <div id="app">
    <v-app id="inspire">
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

Vue.use(Vuetify)
Vue.use(VueRouter)

export default {
  name: 'App',
  VueRouter
}
</script>

<style>
</style>
