<template>
  <table>
    <thead>
    <tr>
      <th></th>
      <th>Понедельник</th>
      <th>Вторник</th>
      <th>Среда</th>
      <th>Четверг</th>
      <th>Пятница</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(set,name) in studentsTimeTable" :key="set.values()">
      <td>1{{name}}:30</td>
      <td v-for="(item, index) in set" :key="index">
        <div class="subject_card" :class="item.name==='нет занятий'?'':'active'">{{item.name}}<br>{{item.type}}</div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "StudentsTimeTable",
  props:{
    studentsTimeTable: {
      type: Object,
    }
  },
  watch:{
    
  }
}
</script>

<style scoped>

</style>