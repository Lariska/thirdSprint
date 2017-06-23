<template>
<div class = "main">
  <div class = "emails">
    <email-list 
    :emails="emails"
    :selectedEmail="selectedEmail"
    @selectAnotherMail="selectEmail">
    </email-list>
  </div>
  <div class = "email-inner">
    <email-details
     :email="selectedEmail"
     @delete="deleteEmail(selectedEmail)" />
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
      emails: [ 
      {subject: "Kill bill", body: "lorem ipsu", isRead: false},
      {subject: "Kill bill", body: "Bad movie2", isRead: false},
      {subject: "Kill bill", body: "Bad movie3", isRead: false},
      {subject: "Kill bill", body: "Bad movie4", isRead: false},
      {subject: "Kill bill", body: "Bad movie5", isRead: false},
      {subject: "Kill bill", body: "Bad movie6", isRead: false},
      {subject: "Kill bill", body: "Bad movie7", isRead: false},
      {subject: "Kill bill", body: "Bad movie8", isRead: false},
      {subject: "Kill bill", body: "Bad movie9", isRead: false},
      {subject: "Kill bill", body: "Bad movie10", isRead: false},
      {subject: "Kill bill", body: "Bad movie", isRead: false},
      {subject: "Kill bill", body: "Bad movie", isRead: false},
      {subject: "Kill bill", body: "Bad movie", isRead: false},
      {subject: "Kill bill", body: "Bad movie", isRead: false},
      {subject: "Kill bill", body: "Bad movie", isRead: false},
      {subject: "Kill bill", body: "Bad movie", isRead: false},
      {subject: "Kill bill", body: "Bad movie", isRead: false},
      {subject: "Kill bill", body: "Bad movie", isRead: false},
      {subject: "Kill bill", body: "Bad movie", isRead: false},
      {subject: "Kill bill", body: "Bad movie", isRead: false},

      
       ],
      selectedEmail: null,
    }
    
  },
  methods :{
    selectEmail(email){
      this.selectedEmail = email;
    },
    
    deleteEmail(emailToDel){
      var savedIdx;
      this.emails.forEach( ( email , idx ) => {
        if(email === emailToDel){
          savedIdx = idx;
        }
      });
      //this.selectedEmail = this.emails[savedIdx + 1];
      if( savedIdx === this.emails.length){   //check if the next id is valid
        if( savedIdx -1 < 0 ){
          this.selectedEmail = null;
        }
        else this.emails[savedIdx - 1];
      }
      else{
        this.selectedEmail = this.emails[savedIdx + 1];
      }
      this.emails.splice(savedIdx,1);
    }
  },
  created(){
      this.selectedEmail= this.emails[0];
      this.emails[0].isRead = true;
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
  width: 30%;
  max-height: 100%;
  background-color: gray;
}
.email-inner{
  display: flex;
  flex-wrap: wrap;
  /*max-width: 70%;*/
  /*max-height: 100%;*/
  background-color: white;
}
</style>
