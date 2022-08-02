<template>
  <li class="collection-item avatar">
    <img src="../../assets/logo.png" alt="" class="circle" height="24" width="30">
    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    <p>{{member.name}} {{member.surname}}</p>
  </li>
</template>

<script>
export default {
  name: "GroupMemberItem",
  props:{
    member:{
      type: Object,
      required: true
    },
  }
}
</script>

<style scoped>

</style>