<template>
  <div class="profile_main teal lighten-4">
    <div style="margin-bottom: 10px"><b>Справки</b></div>
    <button class="btn" @click="spravka">Заказать справку</button>
    <modal-university :is-open="showModal" header-title="Заказать справку">
      <select-item @updateOption="updateFirstOption"
                   :option-list="typeOfPet"
                   label="Тип печати"
                   default-value="выберите..."></select-item>
      <select-item @updateOption="updateSecondOption"
                   :option-list="placeList"
                   label="Место предьявления"
                   default-value="выберите..."></select-item>
      <div class="comment">
        <label>Комментарий</label>
        <textarea type="text" v-model="comment" class="materialize-textarea"></textarea>
      </div>
      <button class="btn" v-on:click="sendEmail" :disabled="isDisabled">Заказать справку</button>
      <button class="btn" style="margin-left: 10px" v-on:click="close">Отмена</button>
      <div class="error" v-if="error">Вы не ввели все данные</div>
    </modal-university>
  </div>
</template>

<script>

import ModalUniversity from "@/components/UI/ModalUniversity";
import SelectItem from "@/components/SelectItem";
import indexApi from "@/api/indexApi";
export default {
  name: "ProfileStudy",
  components: {SelectItem, ModalUniversity},
  data(){
    return{
      showModal: false,
      typeOfPet: [
        {value: 'обычная',title: 'Обычная'},
        {value: 'гербовая',title: 'Гербовая'},
      ],
      placeList: [
        {value: 'В ФСЗН',title: 'В ФСЗН'},
        {value: 'На работу',title: 'На работу'},
        {value: 'В ОДИ',title: 'В ОДИ'}
      ],
      email:{
        subject: '',
        body: '',
        toEmail: ''
      },
      optValue: '',
      opt2Value: '',
      comment: '',
      isDisabled: false,
      error:false
    }
  }
,
  methods:{
    updateFirstOption(value){
      this.optValue=value
    },
    updateSecondOption(value){
      this.opt2Value=value
    },
    spravka(){
      this.showModal=true;
    },
    close(){
      this.showModal =false
    },
    async sendEmail(){
      this.email.subject=null
      this.email.body=this.optValue+'<br>'+this.opt2Value+'<br>'+this.comment
      this.email.toEmail='flg'
      if(this.optValue!==''&&this.opt2Value!=='') {
        await indexApi.profile.sendMail(this.email)
        this.showModal=false
        this.error=false
      }
      else {
        this.error=true
      }
    }
  }
}
</script>
<style scoped>
.comment{
  padding: 5px 30px;
  margin-bottom: 40px;
}
</style>
