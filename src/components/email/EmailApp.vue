<template>
<div class = "main">
  <div class = "emails">
    <email-list 
    :emails="emails"
    :selectedEmail="selectedEmail">
    </email-list>
  </div>
  <div class = "email-inner">
    <email-details />
  </div>
</div>

</template>

<script>
  import EmailList from './EmailList';
  import EmailDetails from './EmailDetails';
  export default {
  name: 'Email',
   components: {EmailList, EmailDetails},
  data () {
    return {
      emails: [ {subject: "Kill bill", body: "Bad movie", isRead: false} ],
      selectedEmail: {subject: "Kill bill", body: "Bad movie", isRead: false}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html{
  max-height: 100%;
}
body{
  max-height: 100%;
}
.main{
  display: flex;
  flex-wrap: nowrap;
  max-height: 100%;
}
.emails{
  display: flex;
  flex-wrap: wrap;
  max-width: 30%;
  max-height: 100%;
  background-color: gray;
}
.email-inner{
  display: flex;
  flex-wrap: wrap;
  max-width: 70%;
  max-height: 100%;
  background-color: black;
}
</style>
