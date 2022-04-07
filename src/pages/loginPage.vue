<template>
  <div class="col s9">
    <div class="container">
      <div class="auth-content-inner teal lighten-4">
        <h2>Войти</h2>
        <div><a href="/registration">регистрация</a></div>
        <form method="post">
          <input class="invalid" type="text" placeholder="login"/>
          <span class="error">error</span>
          <input class="invalid" type="password" placeholder="password"/>
          <button class="btn mt-2" type="submit">Войти</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginPage"
}
</script>

<style scoped>

</style>