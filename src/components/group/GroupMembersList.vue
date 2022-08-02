<template>
  <div class="title">
    {{title}}
  </div>

  <div class="members_list">
    <ul >
      <group-member-item v-for="groupMember in members" :member="groupMember" :key="groupMember.id"></group-member-item>
    </ul>
  </div>
</template>

<script>
import GroupMemberItem from "@/components/group/GroupMemberItem";
export default {
  name: "GroupMembersList",
  components: {GroupMemberItem},
  props:{
    title: String,
    members: Array
  }
}
</script>

<style scoped>
.members_list{
  overflow-y:scroll;
  width:270px;
  height: 600px ;

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