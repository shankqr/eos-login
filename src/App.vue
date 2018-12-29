<template>
  <v-app>
    <app-top-bar></app-top-bar>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppTopBar from '@/components/AppTopBar';

export default {
  name: 'App',
  components: {
    AppTopBar
  }
};
</script>

<style>
</style>
