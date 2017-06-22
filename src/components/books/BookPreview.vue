<template>
    <!--<li class="book-preview">
        <h2>{{book.title}}</h2>
        <img src="http://via.placeholder.com/250x150">
        <h3>\${{book.price}}</h3>
        <button @click.stop="editBook">&#9998;</button>
        <button @click.stop="deleteBook">x</button>
        <button @click.stop="addToCart">Add to Cart</button>
    </li>-->

    <li class="book-preview">
        <h2>{{book.name}}</h2>
        <h3>{{book.author}}</h3>
        <h4>{{book.price}}</h4>
        <img v-bind:src="book.imgUrl">
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
                console.log('Request Edit');
                this.$emit('edit');
            },
            deleteBook(){
                console.log('Request Delete');
                this.$emit('delete');
            },
            addToCart() {
                this.$emit('add-to-cart');
            }
        }
    }
</script>