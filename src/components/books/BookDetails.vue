<template>
    <section class="popup book-details">
        <button @click="closeMe">x</button>
        <h1>Details of: {{book.name}}</h1>
        <img v-bind:src="book.imgUrl">
        <h3>\${{book.price}}</h3>
        <h4>{{book.author}}</h4>
        <p>{{book.desc}}</p>
        <button @click="requestNextBook">Next > </button>
    </section>
</template>

<script>
export default {
    name:'book-details', 
        props: ['book'],
        methods: {
            closeMe() {
                console.log('close me!');
                this.$emit('close');
            },
            requestNextBook() {
                console.log('Requesting Next');
                this.$emit('next');
            }
        }   
}
</script>