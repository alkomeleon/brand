<template>
    <div class="featured-content">
        <div class="products" v-for="item in goods" v-if="item.product_name.toLowerCase().includes(searchText.toLowerCase())"  :key="item.id_product">
            <img class="prod-img" v-bind:src="'img/' + item.img" alt="item">
            <p class="description">{{item.product_name}}</p>
            <p class="price">${{item.price}}</p>
            <div class="img-hover">
                <button v-on:click="$emit('add', item)"><img src="img/cart.svg" alt="cart">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'catalog',
        props: ['goods', 'searchText'],
    };
</script>

<style>

</style>