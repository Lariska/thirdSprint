<template>
<section class = "compose">
    <div class = "subject">
        <h3>Subject:</h3><input v-model="subject">
    </div>
    <textarea v-model="body"></textarea>
    <button class = "send-button" @click = "sendEmail" >Send!</button>
</section>
</template>

<script>
export default {
  name: 'email-compose',
  data () {
    return {
        subject:null,
        body:null
    }
  },
  methods: {
      sendEmail(){
        //this.$emit('');
        this.body = null;
        this.subject = null;
      }
  }
}
</script>

<style>
.compose{
    display:flex;
    flex-direction: column;
    width:100%;
}
.subject{
    display:flex;
    height:20%;
}
.compose input{
    max-height:1em;
    width:100%;
    margin-top:18.72px;
}
textarea{
    height:100%;
}
.send-button{
    height:20%;
}
</style>
