<template>
  <div class = "inner-email">
    <div v-if="email">
      <p>{{email.body}}</p>
      <button @click="deleteEmail()">Delete</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'email-details',
    props: ['email'],
    methods: {
      deleteEmail(){
        console.log("delete button pushed");
        this.$emit('delete');
      }
    },
  }
</script>

<style>
  .inner-email{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .inner-email button{
    margin-top:auto;
  }
</style>