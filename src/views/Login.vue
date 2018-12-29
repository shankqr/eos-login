<template>
  <v-container>
    <v-layout row class="text-xs-center">
      <v-flex xs3 style="background-image: url('http://cdn.wallpapersafari.com/7/86/gqiGH7.jpg')">
        <v-card height="500px"></v-card>
      </v-flex>
      <v-flex xs4 class="grey lighten-4">
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card flat>
            <v-card-title primary-title>
              <h4>Login</h4>
            </v-card-title>
            <v-form>
              <v-text-field
                v-model="accountName"
                prepend-icon="person"
                name="AccountName"
                label="Account Name"
              ></v-text-field>
              <v-text-field
                v-model="privateKey"
                prepend-icon="lock"
                name="PrivateKey"
                label="Private Key"
              ></v-text-field>
              <v-card-actions>
                <v-btn @click="handleLogin()" primary large block>Login</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EosService from '@/eosio/EosService';

export default {
  data() {
    return {
      accountName: '',
      privateKey: ''
    };
  },
  methods: {
    handleLogin: function() {
      EosService.login(this.accountName, this.privateKey)
        .then(() => {
          this.$router.push('home');
        })
        .catch(err => {
          alert(err.toString());
        });
    }
  }
};
</script>
