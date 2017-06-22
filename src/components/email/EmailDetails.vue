<template>
  <p v-if="isSelected" >{{selectedEmail.body}}</p>
  <p v-else>{{email.body}}</p>
</template>

<script>
  import { eventBus } from '../../services/bus.service.js';
  
  export default {
    name: 'email-details',
    props: ['email'],
    data () {
      return {
        selectedEmail: null
      }
    },
    computed:{
      isSelected(){
        eventBus.$on('anotherEmailSelcted', email => {
          this.selectedEmail = email;
        });
        return (this.selectedEmail)? true : false;
      }
    },
    created(){
      // selectedEmail = email;
    },
    methods: {
      anotherEmailSelcted(email){
        console.log(`the mail is ${email.body}`)
      },
    }
  }
</script>

<style>
  
</style>