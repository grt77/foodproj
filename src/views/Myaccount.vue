<template>
  <div>
      <div>
        <Header />
        <div v-if="changes === true">
          <v-alert  type="success">Password Changed</v-alert>
        </div>
        <div class="flexbox">
       <v-card
    class="mx-auto"
    max-width="500"
  >
  <v-card-title>
    Email ID: {{getLoginId}}
  </v-card-title>
  <v-card-text>
    <v-text-field
            v-model="password"
            type="password"
            :rules="passRules"
            color="blue darken-2"
            label="Enter New Password"
            required
          >
    </v-text-field>
    <v-card-actions>
       <v-btn
            :disabled="!valid"
            color="green"
            class="mr-4"
            @click="changePassword"
          >
            Change Password
          </v-btn>
    </v-card-actions>
  </v-card-text>
       </v-card>
      </div>
  </div></div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import Header from '../components/Header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      password: '',
      valid: true,
      changes: false,
      passRules: [
        (pass) => !!pass || 'Password is required',
        (pass) => pass.length > 10 || 'Password length must be greater than 10',
      ],
    };
  },
  computed: {
    ...mapGetters(['getLoginId']),
    ...mapGetters(['getUsersData']),
  },
  methods: {
    ...mapActions(['setDetailsAction']),
    setPassword() {
      this.password = this.getUsersData[this.getLoginId];
    },
    changePassword() {
      this.getUsersData[this.getLoginId] = this.password;
      this.setDetailsAction(this.getUsersData);
      this.changes = true;
      this.valid = false;
    },
  },
};
</script>
