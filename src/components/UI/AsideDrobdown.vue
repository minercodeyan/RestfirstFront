<template>
  <a class="dropdown-trigger burger"
     href='#'
     ref="dropdown"
     data-target='dropdown1'><i class="material-icons">menu</i></a>
  <ul id='dropdown1' class='dropdown-content'>
    <li><router-link to="/profile/main" >Профиль</router-link></li>
    <li class="divider" tabindex="-1"></li>
    <li><router-link to="/">Главная</router-link></li>
    <li><router-link to="/">Расписания</router-link></li>
    <li><router-link to="/">Студенты</router-link></li>
    <li><router-link to="/">Информация</router-link></li>

  </ul>
</template>

<script>
import M from "materialize-css";


export default {
  name: "AsideDrobdown",
  props:{
    contentAfterDeliver: [],
  },
mounted() {
  M.Dropdown.init(this.$refs.dropdown,{})
}}
</script>

<style scoped>
.dropdown-content{
  top: -10px;
  left: 2px;
  max-width: 300px;
}
</style>