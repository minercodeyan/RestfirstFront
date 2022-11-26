<template>
  <div class="col s9">
    <div class="home_content teal lighten-4">
      <router-link :to="'/profile/main'">
        <button class="btn"><i class="material-icons">arrow_back</i></button>
      </router-link>
      <div class="row">
        <div class="col s8">
          <div class="chat teal lighten-5">
            <div class="chat_window" ref="chat">
              <message-item v-for="msg in msgList"
                            :key="msg.id"
                            :message="msg"
                            :is-owner="msg.user.id===user.id"
              ></message-item>
            </div>
            <div class="chat_input">
              <input v-model="text"
                     class="input"
                     type="text"
                     placeholder="Напишите что-нибудь..."
                     v-on:keyup.enter="saveMsg"
              />
            </div>
          </div>
          <button class="btn" onclick="test">Открыть тесты</button>
        </div>
        <div class="col s4 no_display">
          <group-members-list :title="'Учасники группы '+userGroup.number"
                              :members="userGroup.groupMembers"></group-members-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import indexApi from "@/api/indexApi";
import GroupMembersList from "@/components/group/GroupMembersList";
import {addHandler, sendMessage} from "@/utils/ws";
import router from "@/router";
import MessageItem from "@/components/MessageItem";



export default {
  name: "GroupPage",
  components: { MessageItem, GroupMembersList},
  data() {
    return {
      userGroup: Object,
      user: Object,
      msgList: [],
      text: '',
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
      this.msg.description = this.text
      this.msg.creator = this.user.id
      if (this.text) {
        sendMessage(this.msg)
        this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight+100
        this.text=''
      }
    }
  },
  async created(){
    this.user = JSON.parse(localStorage.getItem('user'))
    if (!this.user) {
      router.push({name: 'login'});
    } else {
      await indexApi.group.getUserGroup(this.user.groupUniNumber)
          .then(response => {
            this.userGroup = response.data
          })
      await indexApi.profile.getAllMessages(this.userGroup.id)
          .then(response => {
            this.msgList = response.data
          })
          .catch(error => console.log(error))
      this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight
    }
  },
  mounted() {
    addHandler(data => {
      this.msgList.push(data)
    })
  }
}
</script>

<style scoped>
.home_content {
  padding-bottom: 20px;
}

.chat {
  margin: 51px 10px 20px 30px;
  border-top: 3px #26a69a solid;
}

.chat_window {
  overflow-y: auto;
  height: 340px;
}

.chat_window::-webkit-scrollbar {
  width: 0;
}


.chat_input {
  margin: 8px 22px;
}


</style>