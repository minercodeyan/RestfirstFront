<template>
  <div class="profile_main teal lighten-4">
    <div class="col s6">
      <img src="@/assets/ava.jpg" alt="yoast seo" height="200" width="200" />
      <div class="profile_name" v-if="profile">{{profile.user.name}}</div>
      <div>974902 ИЭФ ЭЭБ</div>
    </div>
    <div class="col s6">
      <textarea name="details" cols="10" placeholder="Введите допоцию"></textarea>
      <textarea name="details" cols="10" placeholder="Введите дополнител"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileMain",
  data() {
    return {
      profile: {
        user:{
          name:''
        }
      }
    }
  },
  mounted() {
    this.profile= JSON.parse(localStorage.getItem('user'));
    console.log(this.profile)
  }
}
</script>
