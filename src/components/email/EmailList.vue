<template>
    <div>
        <email-filter
        @filterChanged="renderRelevantTxt"
        @statusChanged="renderRelevantStatus"
        ></email-filter>

        <el-table
            @row-click="selectEmail"

            :data="getEmails"
            style="width: 100%">
            <el-table-column
                prop="subject"
                label="Subject"
                width="500" >
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
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
        getEmailIdx(row ,emailInQuestion){
            var idx = null;
            this.emails.forEach( (email,index) =>{
                if(email === emailInQuestion){
                    idx = index;
                }
            });
            return idx;
        },

        selectEmail(email){
            console.log(email);
            email.isRead = true;
            this.$emit('selectAnotherMail',email);
        },
        renderRelevantTxt(filterVal){
            this.gFilterVar = filterVal;
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

<style scoped>
    .selected{
        color:blue;
    }
    div ul{
        display: flex;
        flex-direction: column;
        padding-right: 40px;
        justify-content: center;
    }
    li{
        cursor: pointer;
    }
</style>