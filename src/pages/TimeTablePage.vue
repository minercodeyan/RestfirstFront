<template>
  <div class="col s9">
    <div class="home_content">
      <students-time-table-filter @lol="getTable"/>
      <students-time-table v-if="studentsTimeTable" v-bind:studentsTimeTable="studentsTimeTable" :key="studentsTimeTable"/>
      <div :class="studentsTimeTable!==''?'':'error_alert'"
                       v-text="studentsTimeTable!==''?'':'Группы нет'">
      </div>
    </div>
  </div>
</template>

<script>
import StudentsTimeTable from "@/components/StudentsTimeTable";
import indexApi from "@/api/indexApi";
import router from "@/router";
import StudentsTimeTableFilter from "@/components/StudentsTimeTableFilter";
export default {
  name: "TimeTablePage",
  components: {StudentsTimeTableFilter, StudentsTimeTable},
  emits: ["update"],
  data(){
    return{
      studentsTimeTable: '',
    }
  },
  created() {
    if(!localStorage.getItem('user')){
      router.push({ name: 'login'});
    }
    else{
      localStorage.getItem('user')
      this.getTable()
    }
  },
  methods:{
    async  getTable(filter){
     try {
        await indexApi.timetable.getGroupTimeTable(filter)
            .then(response => this.studentsTimeTable = response.data)
     }
      catch (error) {
        this.studentsTimeTable=''
      }
      await router.push({ name: 'timetable', params: { user: filter } })
    }
  },
}
</script>
