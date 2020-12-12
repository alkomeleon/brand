<template>
    <div class="cart-menu">
        <div class="cart-menu-img">
            <img v-bind:src="'img/' + item.img" alt="shirt">
        </div>
        <div class="cart-menu-info">
            <p>{{item.product_name}}</p>
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><br>
            <span>{{item.count}} x ${{item.price}}</span>
        </div>
        <a v-on:click="$emit('remove')"  href="#"><i class="fas fa-times-circle"></i></a>
    </div>
</template>

<script>
    export default {
        name: 'cartItem',
        props: ['item', 'removeFromCart']
    };
</script>

<style>

</style>