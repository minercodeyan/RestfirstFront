<template>
  <div class="input-field col s12">
    <div>{{label}}</div>
    <select class="browser-default" @change="changeOption">
      <option value="" disabled selected>{{defaultValue}}</option>
      <option v-for="option in optionList" :value="option.value" :key="option.value">{{option.title}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectItem",
  props:{
    optionList:{
      type: Array,
      required: true
    },
    defaultValue: String,
    label: String,
  },
  methods:{
    changeOption(event){
      this.$emit("updateOption",event.target.value)
    }
  }
}
</script>

<style scoped>

</style>