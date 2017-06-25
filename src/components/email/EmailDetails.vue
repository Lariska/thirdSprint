<template>
  <div class = "inner-email">
    <div class="email" v-if="email">
      <p>{{email.body}}</p>
        <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
          <el-button class="delete" type="danger" @click="deleteEmail()">Delete</el-button>
        </el-row>
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
    /*width:100%;*/
  }
  .el-icon-delete{
    margin: 10px;
  }
</style>