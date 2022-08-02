<template>
  <div class="profile_aside teal lighten-4">
    <router-link :to="'/profile/main'">
      <div class="profile_aside_item active_link">Профиль</div>
    </router-link>
    <a href="#">
      <div class="profile_aside_item">Зачетка</div>
    </a>
    <router-link :to="'/profile/study'">
      <div class="profile_aside_item">Учеба</div>
    </router-link>
    <a href="#">
      <div class="profile_aside_item">Рейтинг</div>
    </a>
    <router-link :to="'/group'">
      <div class="profile_aside_item">Группа</div>
    </router-link>
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
