<template>
<div class="flex">
  <div class="main">
    <v-card elevation="31" shaped>
      <v-card-title> Gattupalli Stores </v-card-title>
      <div v-if="error === true">
      <v-alert type="error" height ="50px">{{errorMessage}}</v-alert>
      </div>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card-text>
          <v-text-field
            v-model="email"
            type="email"
            :rules="emailRules"
            color="purple darken-2"
            label="Email"
            required
          >
          </v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            :rules="passRules"
            color="blue darken-2"
            label="Password"
            required
          >
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn
            :disabled="!valid"
            color="green"
            class="mr-4"
            @click="validate"
          >
            LOGIN
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
      valid: true,
      error: '',
      errorMessage: '',
      emailRules: [
        (email) => !!email || 'E-mail is required',
        (email) => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) || 'E-mail must be valid',
      ],
      passRules: [
        (pass) => !!pass || 'Password is required',
        (pass) => pass.length > 10 || 'Password length must be greater than 10',
      ],
    };
  },
  computed: {
    ...mapGetters(['getUsersData']),
  },
  methods: {
    ...mapActions(['setLoginAction']),
    ...mapActions(['setIdAction']),
    validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        const emails = Object.keys(this.getUsersData);
        const emailPresent = emails.includes(this.email);
        if (emailPresent) {
          if (this.getUsersData[this.email] === this.password) {
            this.setLoginAction(true);
            this.setIdAction(this.email);
            this.$router.push('/home');
          } else {
            this.error = true;
            this.errorMessage = 'Password is incorrect';
          }
        } else {
          this.error = true;
          this.errorMessage = 'Email is not yet registered!';
        }
      }
    },
  },
};
</script>
<style scoped lang="scss">
.flex {
    display: flex;
    justify-content: space-around;
}
.main{
    height: 600px;
    width: 500px;
    margin-top: 120px;
}
div{
    h1{
        margin-top:50px;
        text-align: center;
        font-family:'Courier New', Courier, monospace;
        font-size: 46px;
    }
}
</style>
