<template>
  <div class="students_board">
    <pagination >
    </pagination>
    <template v-if="students.length">
      <student-item v-for="student in students" :student="student" :key="student.id" ></student-item>
    </template>
    <template v-else>
     <b> ТАКОГО СТУДЕНТА НЕТ =(</b>
    </template>
  </div>
</template>
<script>
import StudentItem from "@/components/student/StudentItem";
export default {
  name: 'ClientList',
  components: {StudentItem},
  props:{
    students: {
      type: Array,
    }
  },
  methods:{
    onClickHandler(){}
  }

}
</script>