<template>
<li :class="{selected : email.isSelected}">{{email.subject}}</li>
</template>

<script>
export default {
  name: 'email-preview',
  props:['email'],
  data () {
    return {
    }
  }
}
</script>


<style scoped>
  li{
    list-style-type: none;
  }
  .selcted{
    background-color: red;
  }
</style>