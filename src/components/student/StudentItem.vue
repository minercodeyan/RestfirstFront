<template>
  <div class="student">
    <div>
      <img src="img/testbox.png" height="40px" width="40px" alt="img"><span><b>{{student.name}} {{student.surname}}</b></span>
    </div>
    <div>ИЭФ 3 курс</div>
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