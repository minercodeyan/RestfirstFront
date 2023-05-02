<template>
  <h2>Войти</h2>
  <div>
    <router-link :to="{name: 'registration'}">регистрация</router-link>
  </div>
  <form class="reg_form" method="post" @submit.prevent>
    <input v-model="user.email" :class="(error) ? 'invalid':''" type="text" placeholder="login"/>
    <input v-model="user.password" :class="(error) ? 'invalid':''" type="password" placeholder="password"/>
    <div v-if="error" v-text="error" class="error"></div>
    <button class="btn mt-2" v-on:click="signInUser">Войти</button>
  </form>
</template>

<script>
import router from "@/router";
import indexApi from "@/api/indexApi";

export default {
  name: "LoginForm",
  emits: ["cre"],
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    async signInUser() {
      await indexApi.auth.signIn(this.user).then(r => {
        if(r){
          router.push({name: 'profile-main'});
          this.$emit('cre');
        }
      }).catch(this.error = "Неверный логин или пароль")
    }
  }
}
</script>

<style scoped>

</style>