<template>
  <nav class="teal darken-1">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <aside-drobdown></aside-drobdown>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link v-if="user" to="/profile/main" v-text="user.user.name"></router-link>
            <router-link v-else to="/login">Войти</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import AsideDrobdown from "@/components/UI/AsideDrobdown";
export default {
  name: "HeaderItem",
  components: {AsideDrobdown},
  props:{
      user : Object
    },

}
</script>

<style scoped>

</style>