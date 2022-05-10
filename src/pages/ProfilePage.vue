<template>
  <div class="col s9">
    <div class="profile">
      <profile-aside @cre="$emit('update')"/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ProfileAside from "@/components/ProfileAside";

import router from "@/router";
export default {
  name: "ProfilePage",
  components: { ProfileAside},
  created() {
    if(!localStorage.getItem('user')){
      router.push({ name: 'login'});
    }
  }
}

</script>
