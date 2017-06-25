<template>
  <div class = "email-app">
    <div class = "main">
      <button @click="composeEmail">compose</button>
      <div class = "emails">
        <email-list
        class="email-list"
        :emails="emails"
        :selectedEmail="selectedEmail"
        @selectAnotherMail="selectEmail">
        </email-list>
      </div>
      <div class = "email-inner">
        <email-details v-if="!isComposing"
        :email="selectedEmail"
        @delete="deleteEmail(selectedEmail)" >
        </email-details>
        <email-compose 
        v-else
        @emailSent="sendEmail">
        </email-compose>
      </div>
    </div>
    <email-status
      :emails="emails"
    ></email-status>
  </div>
</template>

<script>
  import Vue from 'vue';
  import EmailList from './EmailList';
  import EmailDetails from './EmailDetails';
  import EmailStatus from './EmailStatus';
  import EmailCompose from './EmailCompose';
  import EmailService from '../../services/email.service.js';

  export default {
    name: 'Email',
    components: {EmailList, EmailDetails, EmailStatus, EmailCompose},
    data () {
      return {
        emails: [ //if server is down, remove the comment
        // {subject: "Kill bill", body: "lorem ipsu", isRead: false},
        // {subject: "asdasd", body: "Bad movie2", isRead: false},
        // {subject: "cczx asd", body: "Bad movie3", isRead: false},
        // {subject: "Kill bill", body: "Bad movie4", isRead: false},
        // {subject: "Kill bill", body: "Bad movie5", isRead: false},
        // {subject: "Kill bill", body: "Bad movie6", isRead: false},
        // {subject: "Kill bill", body: "Bad movie7", isRead: false},
        // {subject: "Kill bill", body: "Bad movie8", isRead: false},
        // {subject: "Kill bill", body: "Bad movie9", isRead: false},
        // {subject: "Kill bill", body: "Bad movie10", isRead: false},
        // {subject: "Kill bill", body: "Bad movie", isRead: false},
        // {subject: "Kill bill", body: "Bad movie", isRead: false},
        // {subject: "Kill bill", body: "Bad movie", isRead: false},
        // {subject: "Kill bill", body: "Bad movie", isRead: false},
        // {subject: "Kill bill", body: "Bad movie", isRead: false},
        // {subject: "Kill bill", body: "Bad movie", isRead: false},
        // {subject: "Kill bill", body: "Bad movie", isRead: false},
        // {subject: "Kill bill", body: "Bad movie", isRead: false},
        // {subject: "Kill bill", body: "Bad movie", isRead: false},
        // {subject: "Kill bill", body: "Bad movie", isRead: false},

        
        ],
        selectedEmail: null,
        isComposing: false
      }
      
    },
      
    methods :{
      selectEmail(email){
        this.selectedEmail = email;
        this.isComposing = false;
      },      
      deleteEmail(emailToDel){
        var tempMailId= null;
        var emailsProp = EmailService.deleteEmail(this.selectedEmail, this.emails);
        emailsProp.then(answer =>{
          this.emails = answer.emails;
          console.log(answer.selectedEmailIdx);
          if(answer.selectedEmailIdx !== null) this.selectedEmail = this.emails[answer.selectedEmailIdx];
          
        })
        
        // this.selectedEmail = tempMail;
        // this.selectedEmail = emailsProp.selectedEmail;
        // this.emails = emailsProp.emails;
        // console.log(this.emails);
      },
      composeEmail(){
        this.isComposing = true;
      },
      sendEmail(subject, body){
          this.emails.push({subject, body, isRead:false});
      }
    },
      created(){
        var newEmails = EmailService.getEmails();
        newEmails.then( prmEmails => {
          this.emails = prmEmails;
          this.selectedEmail= this.emails[0];
          this.emails[0].isRead = true;});
        console.log("created")
        
      }
  }
</script>

<style>
html{
  height: 100%;
}
body{
  max-height: 100%;
}
email-app{
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
  min-height: 270px;
  width: 100%;
}
.email-inner{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-shrink: 99;
  background-color: white;
}
</style>
