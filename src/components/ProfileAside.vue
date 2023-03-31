<template>
  <div class="profile_aside teal lighten-4">
    <router-link v-for="link in links"
                 :key="link.url"
                 :to="link.url"
                 active-class="active_link"
                 >
      <div class="profile_aside_item" >{{link.title}}</div>
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
  data(){
    return{
      links:[
        {title: 'Профиль',url: '/profile/main'},
        {title: 'Учеба',url: '/profile/study'},
        {title: 'Рейтинг',url: '/profile/rating'},
        {title: 'Группа',url: '/group'}
      ]
    }
  },

  methods:{
    async logout(){
      await indexApi.auth.logout()
      this.$emit('cre')
      await router.push({ name: 'login'})
    }
  }
}
</script>

<style scoped>

</style>