<template>
  <div class = "email-app">
    <div class = "main">
      <button @click="composeEmail">compose</button>
      <div class = "emails">
        <email-list
        class="email-list"
        :emails="getEmails()"
        :selectedEmail="selectedEmail"
        @selectAnotherMail="selectEmail">
        </email-list>
      </div>
      <div class = "email-inner">
        <email-details v-if="!isComposing"
        :email="selectedEmail"
        @delete="deleteEmail(selectedEmail)" >
        </email-details>
        <email-compose v-else>
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
  import { eventBus } from '../../services/bus.service.js';
  import EmailDetails from './EmailDetails';
  import EmailStatus from './EmailStatus';
  import EmailCompose from './EmailCompose';
  import EmailService from '../../services/email.service.js';

  export default {
    name: 'Email',
    components: {EmailList, EmailDetails, EmailStatus, EmailCompose},
    data () {
      return {
        emails: [ 
        {subject: "Kill bill", body: "lorem ipsu", isRead: false},
        {subject: "asdasd", body: "Bad movie2", isRead: false},
        {subject: "cczx asd", body: "Bad movie3", isRead: false},
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
        isComposing: false
      }
      
    },
      
    methods :{
       getEmails(){
        return this.emails;
      },
      selectEmail(email){
        this.selectedEmail = email;
        this.isComposing = false;
      },      
      deleteEmail(emailToDel){
        var emailsProp = EmailService.deleteEmail(this.selectedEmail, this.emails);
        this.selectedEmail = emailsProp.selectedEmail;
        this.emails = emailsProp.emails;
        eventBus.$emit('EmailsChanged');
        console.log(this.emails);
        // Vue.set(this.emails, 0 );
      },
      composeEmail(){
        this.isComposing = true;
      }
    },
      created(){
          console.log("created")
          this.selectedEmail= this.emails[0];
          this.emails[0].isRead = true;
      }
  }
</script>

// <!-- Add "scoped" attribute to limit CSS to this component only -->
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
  /*max-height: 100%;*/
  background-color: white;
}
</style>
