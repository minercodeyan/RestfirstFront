<template>
  <nav class="teal darken-1">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link v-if="username" to="/profile/main" v-text="username"></router-link></li>
        <li><router-link v-if="username===null" to="/login">Войти</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  data(){
    return {username: null}
  },
  name: "HeaderItem",
  mounted() {

  }
}
</script>

<style scoped>

</style>