<template>
  <div class="col s9">
    <div class="home_content">
      <div class="filter">
        <h6><b>Расписание занятий для студентов ""</b></h6>
          <input type="text" placeholder="Поиск...">
      </div>
      <div class="card">
        <div class="card-content">
          <span class="card-title">Гр 973901</span>
          <p>I am ely.</p>
          <p>I am ely.</p>
        </div>
      </div>
      <students-time-table v-if="this.$router.currentRoute.value.fullPath!=='/timetable/1'"></students-time-table>
      <div class="error_alert" v-else>ТАКОЙ ГРУППЫ НЕТ</div>
    </div>
  </div>
</template>

<script>
import StudentsTimeTable from "@/components/StudentsTimeTable";
export default {
  name: "TimeTablePage",
  components: {StudentsTimeTable},
}
</script>
