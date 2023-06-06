<template>
  <div class="student">
    <div>
      <img src="@/assets/minilogo.png" height="40" width="40" alt="img"><span><b>{{student.name}} {{student.surname}}</b></span>
    </div>
    <div>(активен)</div>
  </div>
</template>

<script>
export default {
  name: "StudentItem",
  props:{
    student: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>

</style>