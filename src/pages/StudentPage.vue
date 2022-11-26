<template>
  <div class="col s9 content">
    <div class="row">
      <student-filter @search="searchStudents"></student-filter>
    </div>
    <student-list v-if="loading===false" :students="filteredStudents"></student-list>
    <uni-spinner :is-loading="loading"></uni-spinner>
  </div>
</template>
<script>
import StudentFilter from "@/components/student/StudentFilter";
import StudentList from "@/components/student/StudentList";
import indexApi from "@/api/indexApi";
import UniSpinner from "@/components/UI/UniSpinner";

export default {
  name: "StudentPage",
  components: {
    UniSpinner,
    StudentFilter, StudentList
  },
  data() {
    return {
      students: [],
      filter: '',
      loading: true
    }
  },
  methods: {
    searchStudents(data) {
      this.filter = data.key
    }
  },
  computed: {
    filteredStudents() {
      return this.students.filter(student => student.name.includes(this.filter))
    }
  },
  async mounted() {
    await indexApi.students.getAllStudents()
        .then(response => {
          this.students = response.data
          this.loading = false
        })
        .catch(error => console.log(error))
  }
}

// await indexApi.clientS.getAllClients().then(response=>this.clients=response.data)
</script>

<style scoped>
.content {
  padding: 50px;
}

</style>