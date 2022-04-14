<template>
  <nav class="teal darken-1">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link v-if="user" to="/profile/main" v-text="user.username"></router-link>
            <router-link v-else to="/login">Войти</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>

export default {
  name: "HeaderItem",
  props:{
      user : Object
    }
}
</script>
