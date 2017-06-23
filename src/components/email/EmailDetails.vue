<template>
  <div class = "inner-email">
    <p>{{email.body}}</p>
    <!--<p v-else>{{email.body}}</p>-->
    <button @click="deleteEmail()">Delete</button>
  </div>
</template>

<script>
  import { eventBus } from '../../services/bus.service.js';
  
  export default {
    name: 'email-details',
    props: ['email'],
    methods: {
      // getEmail(){
      //   return ()? : ;
      // },
      deleteEmail(){
        console.log("delete button pushed");
        this.$emit('delete');
      }
    },
    data () {
      return {
        // selectedEmail: null
      }
    },
    // computed:{
    //   selected(){
    //     eventBus.$on('anotherEmailSelcted', email => {
    //       this.selectedEmail = email;
    //     });
    //     return this.selectedEmail;
    //   }
    // },
    created(){
      //  this.selectedEmail = this.email;
    },
   
  }
</script>

<style>
  .inner-email{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>