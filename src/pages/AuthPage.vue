<template>
  <div class="col s9">
    <div class="auth-content-inner teal lighten-4">
      <login-form v-if="this.$router.currentRoute.value.fullPath==='/login'"/>
      <registration-form v-if="this.$router.currentRoute.value.fullPath==='/registration'"/>
    </div>
  </div>
</template>

<script>
import RegistrationForm from "@/components/RegistrationForm";
import LoginForm from "@/components/LoginForm";
import router from "@/router";
export default {
  name: "RegPage",
  components: {LoginForm, RegistrationForm},
  created() {
    if(localStorage.getItem('user')){
      console.log(localStorage.getItem('user'))
      router.push({ name: 'profile-main'});
    }
  }
}
</script>
