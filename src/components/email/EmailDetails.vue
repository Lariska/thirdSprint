<template>
  <div class = "inner-email">
    <div v-if="email">
      <p>{{email.body}}</p>
      <button @click="deleteEmail()">Delete</button>
    </div>
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
      }
    },
    created(){
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