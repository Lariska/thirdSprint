<template>
    <div>
        <email-filter></email-filter>
        <ul>
            <email-preview v-for="email in emails" 
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
    // data() {
    //     return {
    //         stamkaha: true
    //     }
    // },
    methods: {
        selectEmail(email){
            email.isRead = true;
            // el.classList.add('selected');
            eventBus.$emit('anotherEmailSelcted', email);
            this.$emit('selectAnotherMail',email);
            // debugger;
        }
    },
    // computed :{
    //     isSelected(){
    //         return this.selectedEmail === email;
    //     }
    // }
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