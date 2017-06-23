<template>
  <div>
    <div class = "main">
      <div class = "emails">
        <email-filter
        ></email-filter>
        <email-list
        class="email-list"
        :emails="emails"
        :selectedEmail="selectedEmail"
        @selectAnotherMail="selectEmail">
        </email-list>
      </div>
      <div class = "email-inner">
        <email-details
        :email="selectedEmail"
        @delete="deleteEmail(selectedEmail)" >
        </email-details>
      </div>
    </div>
    <email-status
      :emails="emails"
    ></email-status>
  </div>
</template>

<script>
  import EmailList from './EmailList';
  import EmailDetails from './EmailDetails';
  import EmailStatus from './EmailStatus';
  import EmailFilter from './EmailFilter';
  export default {
  name: 'Email',
  components: {EmailList, EmailDetails, EmailStatus, EmailFilter},
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
      if( savedIdx + 1 === this.emails.length){   //check if the next id is valid
        if( (savedIdx -1) < 0 ){
          this.selectedEmail = null;
          console.log("Nullified SelectedEmail")
        }
        else{
           this.selectedEmail=this.emails[savedIdx - 1];
           console.log("changed the SelectedEmail")
        }
      }
      else{
        this.selectedEmail = this.emails[savedIdx + 1];
        console.log("changed to next email with savedIDx of:" + savedIdx + " and length:" + this.emails.length)

      }
      this.emails.splice(savedIdx,1);
      console.log("selected Email:="+this.selectedEmail);
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
  height: 100%;
}
body{
  max-height: 100%;
}
div:first-of-type{
  height: 100%;
}
email-status{
  height: 100%;
}
.main{
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
}
.emails{
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  max-height: 100%;
  
}
.email-list{
  background-color: gray;
  width: 100%;
}
.email-inner{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-shrink: 99;
  /*max-height: 100%;*/
  background-color: white;
}
</style>
