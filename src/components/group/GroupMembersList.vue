<template>
  <div class="title">
    {{title}}
  </div>
  <div class="members_list">
    <ul >
      <group-member-item v-for="groupMember in members" :member="groupMember" :key="groupMember.id"></group-member-item>
      <uni-spinner :is-loading="loading"></uni-spinner>
    </ul>
  </div>
</template>

<script>
import GroupMemberItem from "@/components/group/GroupMemberItem";
import UniSpinner from "@/components/UI/UniSpinner";


export default {
  name: "GroupMembersList",
  components: {UniSpinner, GroupMemberItem},
  props:{
    title: String,
    members: Array
  },
  data(){
    return{
      loading: true
    }
  },
  mounted() {
    if(this.members){
      this.loading=false
    }
  }
}
</script>

<style scoped>
.members_list{
  overflow-y:scroll;
  width:270px;
  height: 600px ;
}
.members_list::-webkit-scrollbar {
  width: 10px;
  background-color: #f9f9fd;
}

.members_list::-webkit-scrollbar-thumb {

  background-color: #26a69a;
}

.members_list::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
  background-color: #f9f9fd;
}
.avatar{
  border: #80cbc4 solid 1px;
  padding: 4px 6px;
  margin:1px;
}
.title{
  padding-bottom: 10px;
  font-weight: bold;
}
</style>