<template>
    <div>
        <ul>
            <email-preview v-for="email in emails" 
            :email="email"
            @click.native="selectEmail(email)"
            :class="{ stam: stamkaha }" />
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
    data() {
        return {
            stamkaha: true
        }
    },
    methods: {
        selectEmail(email){
            email.isRead = true;
            // el.classList.add('selected');
            eventBus.$emit('anotherEmailSelcted', email);
            // debugger;
        }
    },
    computed :{
        // isSelected(){
        //     return ()? : ;
        // }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .stam{
        color:blue;
    }
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
    li{
        cursor: pointer;
    }
</style>