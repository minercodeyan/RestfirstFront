<template>
  <div class="message_item" :class="isOwner?'':'my_msg'">
    <div><b>{{message.user.name}}</b></div>
    <div>{{message.text}}</div>
    <div class="message_date" >{{message.localDate}}</div>
  </div>
</template>

<script>
export default {
  name: "MessageItem",
  props:{
    isOwner:{
      type:Boolean
    },
    message:{
      type:Object,
      required: true
    }
  }
}
</script>

<style scoped>
.message_item{
  margin: 5px;
  padding: 5px;
  width: 45%;
  min-width: 80px;
  border: #4db6ac solid 1px;
  border-radius: 5px;
  font-size: 15px;
}

.my_msg{
  margin-left: auto;
}

.message_date{
  font-size: 10px;
  font-style: italic;
}
</style>