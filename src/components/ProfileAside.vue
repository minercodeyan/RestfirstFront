<template>
  <div class="profile_aside teal lighten-4">
    <a href="#">
      <div class="profile_aside_item active_link">Профиль</div>
    </a>
    <a href="#">
      <div class="profile_aside_item">Зачетка</div>
    </a>
    <a href="#">
      <div class="profile_aside_item">Учеба</div>
    </a>
    <a href="#">
      <div class="profile_aside_item">Рейтинг</div>
    </a>
    <a href="#">
      <div class="profile_aside_item">Группа</div>
    </a>
    <div @click="logout">
      <div class="profile_aside_item">Выйти</div>
    </div>
  </div>
</template>

<script>
import indexApi from "@/api/indexApi";
import router from "@/router";

export default {
  name: "ProfileAside",
  methods:{
    async logout(){
      await indexApi.auth.logout()
      this.$emit('cre')
      await router.push({ name: 'login'})
    }
  }
}
</script>
