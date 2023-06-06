<template>
  <div class="profile_main teal lighten-4">
    <div style="margin-bottom: 10px"><b>Учеба</b></div>
    <div>
      <h5>Курс 1</h5>
      <div class="progress">
        <div class="determinate" style="width: 70%; background: blue;"></div>
      </div>
    </div>
    <div>
      <h5>Курс 2</h5>
      <div class="progress">
        <div class="determinate" style="width: 20%; background: red;"></div>
      </div>
    </div>
    <div>
      <h5>Курс 3</h5>
      <div class="progress">
        <div class="determinate" style="width: 40%; background: yellow;"></div>
      </div>
    </div>
    <div>
      <button class="btn" @click="spravka">Заказать консультацию</button>
      <modal-university :is-open="showModal" header-title="Заказать консультацию">
        <select-item @updateOption="updateFirstOption"
                     :option-list="typeOfPet"
                     label="Тип"
                     default-value="выберите..."></select-item>
        <select-item @updateOption="updateSecondOption"
                     :option-list="placeList"
                     label="Место предьявления"
                     default-value="выберите..."></select-item>
        <div class="comment">
          <label>Комментарий</label>
          <textarea type="text" v-model="comment" class="materialize-textarea"></textarea>
        </div>
        <button class="btn" v-on:click="sendEmail" :disabled="isDisabled">Заказать консультацию</button>
        <button class="btn" style="margin-left: 10px" v-on:click="close">Отмена</button>
        <div class="error" v-if="error">Вы не ввели все данные</div>
      </modal-university>
    </div>
    <div class="mt-2">
      <button class="btn" @click="teacher">Оплатить</button>
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
