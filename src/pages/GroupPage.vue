<template>
  <div class="col s9">
    <div class="home_content teal lighten-4">
      <router-link :to="'/profile/main'">
        <button class="btn"><i class="material-icons">arrow_back</i></button>
      </router-link>
      <div class="row">
        <div class="col s8">
          <button v-on:click="saveMsg">dfmgg</button>
          <div v-for="mas in msgList" :key="mas.id">
            lol
          </div>
        </div>
        <div class="col s4 no_display">
          <group-members-list :title="'Учасники группы '+userGroup.number" :members="userGroup.groupMembers"></group-members-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import indexApi from "@/api/indexApi";
import GroupMembersList from "@/components/group/GroupMembersList";
import {addHandler, sendMessage} from "@/utils/ws";

export default {
  name: "GroupPage",
  components: {GroupMembersList},
  data() {
    return {
      userGroup: Object,
      user: Object,
      msgList: [],
      msg: {
        id: null,
        description: '',
        creator: null,
        localDate: null,
      }
    }
  },
  methods: {
    saveMsg() {
      this.msg.id = null
      this.msg.description= "lolo"
      this.msg.creator= this.user.id
     sendMessage(this.msg)
     this.msgList.push(addHandler())
      console.log(this.msgList)
    }
  },
  created() {
    console.log("created")
  },
  async mounted() {
    this.user = JSON.parse(localStorage.getItem('user'))
    if (this.user) {
      await indexApi.group.getUserGroup(this.user.groupUniNumber)
          .then(response => {
            this.userGroup= response.data
          })
    }

  }
}
</script>

<style scoped>
.home_content {
  padding-bottom: 20px;
}

</style>