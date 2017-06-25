<template>
<div class = "filter">
    <!-- <input type="text" name="fname">-->
    <div>
        <el-input
            placeholder="search"
            icon="search"
            v-model="onInput">
        </el-input>
        <!--<input 
        v-model="onInput">-->
    </div>
    <div>
        <input v-model="onStatusChange" type="radio" name="emailStatus" value="all" checked> All<br>
        <input v-model="onStatusChange" type="radio" name="emailStatus" value="read"> Read<br>
        <input v-model="onStatusChange" type="radio" name="emailStatus" value="unread"> Unread
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
