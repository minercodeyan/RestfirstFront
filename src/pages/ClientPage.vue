<template>
  <div class="row">
    <div class="col s3 ">
      <form-client @create="forceRerender" />
    </div>
    <div class="col s9 ">
      <client-list v-bind:clients="clients" />
    </div>
  </div>
</template>
<script>
import FormClient from "@/components/FormClient";
import ClientList from "@/components/ClientList";
import indexApi from "@/api/indexApi";
export default {
  name: "ClientPage",
  components: {
    FormClient,
    ClientList,
  },
  data(){
    return{
      clients: [],
    }
  },
  methods:{
    async forceRerender() {
      await indexApi.clientS.getAllClients().then(response=>this.clients=response.data)
    }
  },
  mounted() {
    this.forceRerender()
  }
}
</script>

<style scoped>

</style>