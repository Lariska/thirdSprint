<template>
<div class = "filter">
    <!-- <input type="text" name="fname">-->
    <div>
        <input 
        v-model="onInput">
        <button>Search</button>
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
 .emails input {
     max-width:90%;
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
