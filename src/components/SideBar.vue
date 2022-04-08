<template>
  <div class="col s3 sidebar">
    <ul class="ul_sidebar">
      <li><router-link to="/timetable/2" class="side_item">Расписания</router-link></li>
      <li><router-link to="/branches" class="side_item">Подразделения</router-link></li>
      <li><router-link to="/students" class="side_item">Студенты</router-link></li>
      <li><router-link to="/rating" class="side_item">Рейтинг</router-link></li>
      <li><router-link to="/info" class="side_item">О университете</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBar"
}
</script>

<style scoped>

</style>