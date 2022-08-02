<template>
  <div class="col s9">
    <div class="home_content teal lighten-4">
      <router-link :to="'/profile/main'">
        <button class="btn">к профилю</button>
      </router-link>
      <div class="row">
        <div class="col s8"></div>
        <div class="col s4 no_display">
          <group-members-list :title="'Учасники группы '+groupNumber" :members="groupStudents"></group-members-list>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import indexApi from "@/api/indexApi";
import GroupMembersList from "@/components/group/GroupMembersList";

export default {
  name: "GroupPage",
  components: {GroupMembersList},
  data() {
    return {
      groupStudents: [],
      groupNumber: ''
    }
  },
  async mounted() {
    let us = JSON.parse(localStorage.getItem('user'))
    if(us) {
      await indexApi.group.getUserGroup(us.groupUniNumber)
          .then(response=>{
            this.groupStudents=response.data.studentSet
            console.log(response.data)
            this.groupNumber=response.data.groupNumber
          })
    }
  }
}
</script>

<style scoped>
.home_content{
  padding-bottom: 20px;
}

</style>