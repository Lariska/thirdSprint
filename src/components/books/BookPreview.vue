<template>


    <li class="book-preview">
        <h2>{{book.name}}</h2>
        <h3>{{book.author}}</h3>
        <h4>{{book.price}}</h4>
        <img class="image" v-bind:src="book.imgUrl">
        <button @click.stop="editBook">&#9998;</button>
        <button @click.stop="deleteBook">x</button>
        <button @click.stop="addToCart">Add to Cart</button>
    </li>
</template>
<script>
    export default {
        name: 'book-preview',
        props: ['book'],
        methods: {
            editBook(){
                this.$emit('edit');
            },
            deleteBook(){
                this.$emit('delete');
            },
            addToCart() {
                this.$emit('add-to-cart');
            }
        }
    }
</script>
<style>
    .image{
        width: 150px;
        height: 200px;
    }
</style>