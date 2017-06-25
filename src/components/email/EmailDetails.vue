<template>
  <div class = "inner-email">
    <div v-if="email">
      <p>{{email.body}}</p>
      <el-button type="danger" @click="deleteEmail()">Delete</el-button>
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
  .inner-email div{
    height:100%;
    display: flex;
    flex-direction: column;
    align-content: space-between;
  }

</style>