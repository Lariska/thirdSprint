<template>
<div>
  <li :class="{read : email.isRead,}">{{email.subject}}</li>
</div>
</template>

<script>
export default {
  name: 'email-preview',
  props:['email'],
  data () {
    return {
    }
  },

}
</script>


<style scoped>
  .read{
        background-color: whitesmoke;
    }
  li{
    list-style-type: none;
  }
  .selcted{
    background-color: red;
  }
</style>