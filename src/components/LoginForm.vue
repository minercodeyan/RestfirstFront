<template>
  <h2>Войти</h2>
  <div><router-link :to="{name: 'registration'}">регистрация</router-link></div>
  <form class="reg_form" method="post" @submit.prevent>
    <input v-model="user.username" :class="(v$.user.username.$error) ? 'invalid':''" type="text" placeholder="login" />
    <span v-if="v$.user.username.$error"  class="error">error</span>
    <input v-model="user.password" :class="(v$.user.password.$error) ? 'invalid':''" type="password" placeholder="password" />
    <div v-if="v$.user.password.$error" class="error">error</div>
    <div v-if="error" v-text="error" class="error"></div>
    <button class="btn mt-2" v-on:click="signInUser">Войти</button>
  </form>
</template>

<script>
import router from "@/router";
import indexApi from "@/api/indexApi";
import useVuelidate from "@vuelidate/core";
import {minLength, required} from "@vuelidate/validators";

export default {
  name: "LoginForm",
  emits: ["cre"],
  setup() {
    return {v$: useVuelidate()}
  },
  data(){
    return{
      user: {
        username: '',
        password: ''
      },
      error: ''
    }
  },
  validations: {
    user: {
      username: {required, minLength: minLength(3)},
      password: {required}
    },
  },
  methods: {
    async signInUser(){
      this.v$.$touch();
      if (this.v$.$errors.length > 0) {
        return
      }
      this.v$.$reset()
      try {
        await indexApi.auth.signIn(this.user)
        this.$emit('cre')
        await router.push({ name: 'profile-main'})
      }
      catch(error) {
        this.error="Неверный логин или пароль"
      }
    }
}
}
</script>

<style scoped>

</style>