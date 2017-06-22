<template>
    <div>
        <email-preview 
        :email="selectedEmail" />
    </div>
</template>

<script>
    import EmailPreview from './EmailPreview'
    export default {
        components:{EmailPreview},
        name: 'email-list',
        props:['emails','selectedEmail']
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>