<template>
  <header-item :user="user"/>
  <div class="row" >
    <router-view/>
  </div>
  <alert-modal @onClose="$router.push('/')" :is-open="open" header-title="Ошибка доступа" text="Ваша роль не соответствует!" text-color="red"></alert-modal>
</template>

<script>

import HeaderItem from "@/components/HeaderItem";
import AlertModal from "@/components/UI/AlertModal";

export default {

  name: "AdminLayout",
  components: {AlertModal, HeaderItem},
  data(){
    return{
      user: null,
      open: false
    }
  },
  mounted() {
    const role = "ROLE_ADMIN"
    this.user=JSON.parse(localStorage.getItem('user'))
    if(!this.user.roles.includes(role)){
      this.open=true
    }
  }
}
</script>

<style scoped>

</style>