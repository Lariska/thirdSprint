<template>
   <section class="cart">
       <h1>Books</h1>
       <ul>
           <li v-for="item in items">
               {{item.name}} (Quantity: {{item.quantity}})
               <p>TAG: {{item.tag}}</p>
           </li>
       </ul>
       <p>Total: {{total}}</p>
   </section>
</template>

<script>
    import cartService from '../../services/cart.service.js'
    export default {
    name: 'cart',
    data() {
        return {
            items: cartService.getCartItems(),
        }
    },
    computed: {
        total() {
            this.items;
            return cartService.getCartTotal();
        }              
    }
}
</script>

<style>
   .cart {
       background-color: lightseagreen;
       padding: 10px;
       border-radius: 1em;
   }
</style>