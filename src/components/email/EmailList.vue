<template>
    <div>
        <email-filter
        @filterChanged="renderRelevantTxt"
        @statusChanged="renderRelevantStatus"
        ></email-filter>
        <ul>
            <email-preview v-for="email in getEmails" 
            :email="email"
            @click.native="selectEmail(email)"
            :class="[selectedEmail === email ? 'selected' : '']" > 
            </email-preview>
        </ul>
    </div>
</template>

<script>
import { eventBus } from '../../services/bus.service.js';
import EmailPreview from './EmailPreview'
import EmailFilter from './EmailFilter';
export default {
    components: { EmailPreview, EmailFilter },
    name: 'email-list',
    props: ['emails', 'selectedEmail'],
    data() {
        return {
            emailsToRender: this.emails,
            gFilterVar: '',
            gStatusFilter:'all'
        }
    },
    methods: {
        selectEmail(email){
            email.isRead = true;
            // el.classList.add('selected');
            // eventBus.$emit('anotherEmailSelcted', email);
            this.$emit('selectAnotherMail',email);
            // debugger;
        },
        renderRelevantTxt(filterVal){
            this.gFilterVar = filterVal;
            //return this.filterEmail();
            
        },
        renderRelevantStatus(filterVal){
            this.gStatusFilter = filterVal;
            console.log('renderRelevatnStatus')
        },
        filterEmail(){
            return this.emailsToRender = this.emails.filter( email =>{
                return email.subject.toLowerCase().includes(this.gFilterVar.toLowerCase()) 
                &&( this.gStatusFilter === 'all' 
                ||  this.gStatusFilter === 'read' && email.isRead
                ||  this.gStatusFilter === 'unread' && !email.isRead );
            });
        }

    },
    computed :{
        getEmails(){
           return this.filterEmail();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .selected{
        color:blue;
    }
    div ul{
        display: flex;
        flex-direction: column;
        padding-right: 40px;
        /*justify-content: space-between;*/
        justify-content: center;
    }
    li{
        cursor: pointer;
    }
</style>