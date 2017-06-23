<template>
<div class = "filter">
    <input type="text" name="fname">
    <button>Search</button>
</div>
</template>

<script>
export default {
  name: 'email-filter',
  data () {
    return {
    }
  },
  methods: {
    book(){
    },
    email(){
    }
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
 }
</style>
