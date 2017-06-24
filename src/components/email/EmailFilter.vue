<template>
<div class = "filter">
    <!-- <input type="text" name="fname">-->
    <input 
    v-model="onInput">
    <button>Search</button>
</div>
</template>

<script>
export default {
  name: 'email-filter',
  data () {
    return {
        onInput:'',
    }
  },
  watch: {
    onInput: function( newVal, oldVal ){
        console.log('oldVal:' + oldVal + " newVal:" + newVal );
        this.$emit('filterChanged', newVal);
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
 .emails button{
     min-width:10%;
 }
 .filter{
     width: 100%;
     background-color: goldenrod;
 }
</style>
