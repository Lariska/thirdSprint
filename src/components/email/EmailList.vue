<template>
    <div>
        <ul>
            <div><email-preview v-for="email in emails" 
            :email="email"
            @click.native="selectEmail(email)" /></div>
        </ul>
    </div>
</template>

<script>
import { eventBus } from '../../services/bus.service.js';
import EmailPreview from './EmailPreview'
export default {
    components: { EmailPreview },
    name: 'email-list',
    props: ['emails', 'selectedEmail'],
    // data() {
    //     return {
    //         emails: emails;
    //     }
    // }
    computed :{
      isEmailSelected(email){
        return email.isSelected;
      }
    },
    methods: {
        selectEmail(email){
            email.isSelected = true;
            // el.classList.add('selected');
            eventBus.$emit('anotherEmailSelcted', email);
            // debugger;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .selected{
        background-color: whitesmoke;
    }
    div ul{
        display: flex;
        flex-direction: column;
        padding-right: 40px;
        /*justify-content: space-between;*/
        justify-content: center;
    }
</style>