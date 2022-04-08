<template>
  <h2>Войти</h2>
  <div><router-link :to="{name: 'registration'}">регистрация</router-link></div>
  <form method="post" @submit.prevent>
    <input class="invalid" type="text" placeholder="login" />
    <span class="error">error</span>
    <input class="invalid" type="password" placeholder="password" />
    <div class="error">error</div>
    <button class="btn mt-2" @click="loginUser">Войти</button>
  </form>
</template>

<script>
import indexApi from "@/api/indexApi";
import router from "@/router";

export default {
  name: "LoginForm",
  data(){
    return{
      user:{
        username: 'lokko',
        password: '123456',
      }
    }
  },
  methods: {
    async loginUser(){
      await indexApi.auth.signIn(this.user)
      await router.push({ name: 'profile-name' })
    }
}
}
</script>

<style scoped>

</style>