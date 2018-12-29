<template>
  <span>
    <v-toolbar app color="black darken-4" dark>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title>{{appTitle}}</v-toolbar-title>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: 'AppTopBar',
  data() {
    return {
      appTitle: 'My EOS Dapp'
    };
  }
};
</script>

<style scoped>
</style>
