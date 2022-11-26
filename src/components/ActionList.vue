<template>
  <div class="list">
    <router-link v-for="action in actions" :key="action.url" to="/" ><div class="item">{{action.title}}</div></router-link>
  </div>
</template>

<script>
export default {
  name: "ActionList",
  data() {
    return {
       actions: [
        {title: 'Главная', url: '/'},
        {title: 'Расписания', url: '/timetable/1'},
        {title: 'Подразделения', url: '/lol'},
        {title: 'Студенты', url: '/students'},
        {title: 'Рейтинг', url: '/rating'},
        {title: 'О университете', url: '/info'}
      ]
    }
  }
}
</script>

<style scoped>
.list{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}

.item{
  margin: 20px;
  padding: 20px;
  border-radius: 6px;
  width: 300px;
  color: white;
  background: #00796b;
}
</style>