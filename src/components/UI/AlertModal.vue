<template>
  <div id="modal1" class="my_modal" v-show="isOpen" v-on:click="close">
    <div @click.stop class="my_modal-content" :style="{color: textColor}">
      <span class="close" v-on:click="close">&times;</span>
      <h5>{{headerTitle}}</h5>
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertModal",
  props:{
    isOpen: {
      type: Boolean,
      default: false,
    },
    headerTitle: String,
    text: String,
    textColor: String
  },
  methods:{
    close(){
      this.$emit("onClose")
    }
  },
}
</script>

<style scoped>
.modal{
  display: block; /* Hidden by default */
}
.my_modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}



/* Modal Content/Box */
.my_modal-content {
  background-color: #fefefe;
  margin: 250px auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  min-width: 300px;
  width: fit-content;
  max-width: 60%;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>