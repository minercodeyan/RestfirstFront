<template>
  <div class="col s9">
    <div class="container">
      <div class="auth-content-inner teal lighten-4">
        <h2>Регистрация</h2>
        <form class="reg_form" method="post">
          <input class="invalid" type="text" placeholder="login">
          <span class="error">error</span>
          <input class="invalid" type="password" placeholder="password">
          <span class="error">error</span>
          <input class="invalid" type="email" placeholder="em@dmf">
          <button class="btn mt-2" type="submit">Войти</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import indexApi from "@/api/indexApi";
export default {
  name: "RegPage",
  data(){
    return{
      user:{
        username: '',
        email: '',
        password: '',
      }}
  },
  methods: {
    async reg(){
      try {
        await indexApi.auth.signUp(this.user).then(response=>console.log(response.data))
      }
      catch(error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>

</style>