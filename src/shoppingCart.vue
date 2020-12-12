<template>
    <div>
        <div class="cart-icon" v-on:click="cartVisible = !cartVisible"><img src="img/cart.png" alt="cart"></div>
        <div class="cart-menu-box" v-if="cartVisible">
            <div class="tail1 cart-tail1"></div>
            <div class="tail2 cart-tail2"></div>
            <cart-item v-for="item in cart" v-bind:item="item" v-on:remove="$emit('remove', item)" :key="item.id_product"></cart-item>
            <div class="cart-menu-price">
                <p>TOTAL</p>
                <p>${{cartSum}}</p>
            </div>
            <div class="cart-menu-checkout-button-box">
                <a class="cart-menu-checkout-button" href="checkout.html">checkout</a>
                <a class="cart-menu-checkout-button" href="shopingCart.html">go to cart</a>
            </div>
        </div>
    </div>
</template>

<script>
    import cartItem from "./cartItem.vue";
    export default {
        name: 'shoppingCart',
        props: ['cart', 'cartSum'],
        components: {
            cartItem: cartItem,
        },
        data: function() {
            return {
                cartVisible: false,
            };
        },
    };
</script>
<style>

</style>