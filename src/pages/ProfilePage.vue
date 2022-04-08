<template>
  <div class="col s9">
    <div class="profile">
      <profile-aside/>
      <profile-main/>
    </div>
  </div>
</template>

<script>
import ProfileAside from "@/components/ProfileAside";
import ProfileMain from "@/pages/profileViews/ProfileMain";
import router from "@/router";
export default {
  name: "ProfilePage",
  components: {ProfileMain, ProfileAside},
  created() {
    if(!localStorage.getItem('user')){
      router.push({ name: 'login'});
    }
  }
}

</script>
