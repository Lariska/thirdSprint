<template>
<div class = "filter">
    <div>
        <el-input
            placeholder="search"
            icon="search"
            v-model="onInput">
        </el-input>
    </div>
    <div>
        <el-radio v-model="onStatusChange" name="emailStatus" label="all" checked> All</el-radio>
        <el-radio v-model="onStatusChange" name="emailStatus" label="read"> Read</el-radio>
        <el-radio v-model="onStatusChange" name="emailStatus" label="unread"> Unread</el-radio>
    </div>    
</div>
</template>

<script>
export default {
  name: 'email-filter',
  data () {
    return {
        onInput:'',
        onStatusChange:''
    }
  },
  watch: {
    onInput: function( newVal ){
        this.$emit('filterChanged', newVal);
    },
    onStatusChange: function( newVal){
        console.log( " newVal:" + newVal );
        this.$emit('statusChanged', newVal);
    }
  },
  methods: {
    
  }
}
</script>

<style>
 el-input {
     width:100%;
 }
 .filter button{
     min-width:57px;
 }
 .filter{
     width: 100%;
     background-color: goldenrod;
 }
 .filter div{
     display: flex;
 }
</style>
